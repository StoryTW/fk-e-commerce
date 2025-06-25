declare interface UserModel {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  name: string;
}

declare interface PromocodesListModel {
  promocodes: PromocodeModel[];
}

declare interface PromocodeModel {
  created_at: string;
  id: number;
  name: string;
  percent: string;
  updated_at: string;
  user_id: number;
}
