export const formatPrice = (value: number) =>
  value.toLocaleString('ru-RU', { minimumFractionDigits: 0 }) + ' руб';
