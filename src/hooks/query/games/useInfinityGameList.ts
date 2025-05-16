import { GamesService } from '@/services/games/games.service';
import { useInfiniteQuery } from '@tanstack/react-query';

interface IUseInfinityGameList {
  perPage: GamesListDto['per_page'];
  genre_id?: GamesListDto['genre_id'];
}

export const KEY_GAME_LIST = 'KEY_GAME_LIST';

export const useInfinityGameList = (
  { perPage, genre_id }: IUseInfinityGameList,
  options?: InfiniteQueryOptions<GamesListModel>,
) =>
  useInfiniteQuery({
    queryKey: [KEY_GAME_LIST, genre_id],
    queryFn: ({ pageParam = 1 }) =>
      GamesService.gameList({
        page: String(pageParam),
        per_page: perPage ?? '12',
        genre_id: genre_id ?? '0',
      }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.has_more) {
        return allPages.length + 1;
      }

      return;
    },
    initialPageParam: 1,
    ...options,
  });
