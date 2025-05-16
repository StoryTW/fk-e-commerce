import { api } from '@/config/axios.config';
import fetchConfig from '@/config/fetch.config';

export const GamesService = {
  async popularGames() {
    return await api.get<PopularGamesModel>('/popular_games');
  },

  async gameList(params: GamesListDto) {
    return await api.get<GamesListModel>('/games', {
      per_page: params.per_page ?? 12,
      page: params.page ?? 1,
      genre_id: params.genre_id ?? undefined,
    });
  },
};

export const GamesServerService = {
  async popularGames(revalidate?: number) {
    const response = await fetchConfig<PopularGamesModel>({
      url: '/popular_games',
      method: 'GET',
      revalidate: revalidate,
    });

    return response;
  },

  async gameList(params: GamesListDto, revalidate?: number) {
    const finalParams = new URLSearchParams({
      page: params.page ?? '1',
      per_page: params.per_page ?? '12',
      genre_id: params.genre_id ?? '',
    }).toString();

    const response = await fetchConfig<GamesListModel>({
      url: `/games?${finalParams}`,
      method: 'GET',
      revalidate: revalidate,
    });

    return response;
  },

  async gameById(params: GameByIdDto, revalidate?: number) {
    const response = await fetchConfig<GameByIdModel>({
      url: `/game/${params.id}`,
      method: 'GET',
      revalidate: revalidate,
    });

    return response;
  },

  async popularGameById(params: GameByIdDto, revalidate?: number) {
    const response = await fetchConfig<GameByIdModel>({
      url: `/game_popular/${params.id}`,
      method: 'GET',
      revalidate: revalidate,
    });

    return response;
  },

  async genres(revalidate?: number) {
    const response = await fetchConfig<GetGenresModel>({
      url: '/genres',
      method: 'GET',
      revalidate: revalidate,
    });

    return response;
  },
};
