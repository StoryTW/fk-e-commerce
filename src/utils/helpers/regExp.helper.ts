type IRegExpVariants = keyof typeof regExpObject;

const regExpObject = {
  //Ввод больше 2-х пробелов
  NO_MULTIPLE_SPACES: /\s{2,}/,

  //Ввод без пробелов
  NO_SPACES: /\s/,

  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  ONE_LETTER: /[A-Za-zА-Яа-яЁё]/,
};

export const regExpHelper = (variant: IRegExpVariants): RegExp => regExpObject[variant];
