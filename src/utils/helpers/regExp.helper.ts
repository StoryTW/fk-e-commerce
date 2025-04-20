type IRegExpVariants = keyof typeof regExpObject;

const regExpObject = {
  //Ввод больше 2-х пробелов
  NO_MULTIPLE_SPACES: /\s{2,}/,

  //Ввод без пробелов
  NO_SPACES: /\s/,
};

export const regExpHelper = (variant: IRegExpVariants): RegExp => regExpObject[variant];
