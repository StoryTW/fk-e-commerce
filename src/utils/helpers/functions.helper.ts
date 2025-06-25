export const formatPrice = (value: number) =>
  value.toLocaleString('ru-RU', { minimumFractionDigits: 0 }) + ' руб';

export const extractPercentage = (text: string): number | null => {
  const match = text.match(/(\d+\.?\d*)%/);

  return match ? parseFloat(match[1]) : null;
};
