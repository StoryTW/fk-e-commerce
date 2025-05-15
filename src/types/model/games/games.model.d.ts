declare interface PopularGamesModel {
  games: GameModel[];
}

declare interface GamesListModel {
  games: GameModel[];
  next_page: boolean;
  has_more: boolean;
  total: number;
}

declare interface GameModel {
  id: number;
  title: string;
  description: string;
  preview: string;
  date_exit: string;
  language: string;
  price: number;
  category_id: number;
  genre_id: number;
  created_at: string;
  updated_at: string;
}

declare interface GameByIdModel {
  game: GameModel;
}
