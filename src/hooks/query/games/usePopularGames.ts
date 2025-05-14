import { GamesService } from '@/services/games/games.service';
import { useQuery } from '@tanstack/react-query';

export const KEY_POPULAR_GAMES = 'KEY_POPULAR_GAMES';

export const usePopularGames = (options?: QueryOptions<PopularGamesModel, BasicErrorModel>) =>
  useQuery({
    queryKey: [KEY_POPULAR_GAMES],
    queryFn: () => GamesService.popularGames(),
    ...options,
  });
