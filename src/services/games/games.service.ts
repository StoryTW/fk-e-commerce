import { api } from '@/config/axios.config';
import fetchConfig from '@/config/fetch.config';

export const GamesService = {
  async popularGames() {
    return await api.get<PopularGamesModel>('/popular_games');
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
};
