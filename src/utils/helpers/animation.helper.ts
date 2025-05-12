type IAnimateVariants = keyof typeof animateObject;

const animateObject = {
  modal: {
    open: {
      opacity: 1,
      scale: 1,
    },
    close: {
      opacity: 0,
      scale: 0.92,
    },
  },

  combobox: {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      y: -10,
      opacity: 0,
    },
  },

  animateTooltip: {
    show: {
      opacity: 1,
      scale: 1,
    },
    hide: {
      opacity: 0,
      scale: 0.7,
    },
  },

  heightWithOpacity: {
    hide: {
      opacity: 0,
      height: 0,
    },
    show: {
      opacity: 1,
      height: 'auto',
    },
  },

  cardLeft: {
    hide: {
      opacity: 0,
      x: 0,
    },
    show: {
      opacity: 1,
      x: -234,
    },
  },

  cardRight: {
    hide: {
      opacity: 0,
      x: 0,
    },
    show: {
      opacity: 1,
      x: 234,
    },
  },
};

export const animateHelper = (variant: IAnimateVariants) => animateObject[variant];
