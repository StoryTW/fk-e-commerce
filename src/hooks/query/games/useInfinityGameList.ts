import { GamesService } from '@/services/games/games.service';
import { useInfiniteQuery } from '@tanstack/react-query';

interface IUseInfinityGameList {
  perPage: GamesListDto['per_page'];
}

export const KEY_GAME_LIST = 'KEY_GAME_LIST';

export const useInfinityGameList = (
  { perPage }: IUseInfinityGameList,
  options?: InfiniteQueryOptions<GamesListModel>,
) =>
  useInfiniteQuery({
    queryKey: [KEY_GAME_LIST],
    queryFn: ({ pageParam = 1 }) =>
      GamesService.gameList({
        page: String(pageParam),
        per_page: perPage ?? '12',
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
