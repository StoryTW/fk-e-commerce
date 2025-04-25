export interface IRandomGame {
  name: string;
  opacity: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export const DATA_GAMES: IRandomGame[] = [
  {
    name: 'UFC',
    opacity: 0.1,
    position: {
      top: '240px',
      left: '170px',
    },
  },
  {
    name: 'Tekken',
    opacity: 0.4,
    position: {
      top: '280px',
      left: '50px',
    },
  },
  {
    name: '7 Days to Die',
    opacity: 0.5,
    position: {
      top: '320px',
      left: '140px',
    },
  },
  {
    name: 'Ace Combat',
    opacity: 0.6,
    position: {
      top: '360px',
      left: '50px',
    },
  },
  {
    name: 'Fight Forever',
    opacity: 0.65,
    position: {
      top: '400px',
      left: '120px',
    },
  },
  {
    name: 'After the Fall',
    opacity: 0.6,
    position: {
      top: '440px',
      left: '50px',
    },
  },
  {
    name: 'Agony',
    opacity: 0.2,
    position: {
      top: '440px',
      left: '220px',
    },
  },
  {
    name: 'Airport Simulator',
    opacity: 0.2,
    position: {
      top: '480px',
      left: '100px',
    },
  },
  {
    name: 'Alba',
    opacity: 0.4,
    position: {
      top: '520px',
      left: '50px',
    },
  },
  {
    name: 'Agents of Mayhem',
    opacity: 0.1,
    position: {
      top: '560px',
      left: '90px',
    },
  },
  {
    name: 'Atomfall',
    opacity: 0.4,
    position: {
      top: '600px',
      left: '66px',
    },
  },
  {
    name: 'Assassin’s Creed Shadows',
    opacity: 0.07,
    position: {
      top: '640px',
      left: '120px',
    },
  },
  {
    name: 'Dsorder',
    opacity: 0,
    position: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
    },
  },
  {
    name: '18 Floors',
    opacity: 0,
    position: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
    },
  },
  {
    name: 'ABZU',
    opacity: 0,
    position: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
    },
  },
  {
    name: 'Alan Wake',
    opacity: 0,
    position: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
    },
  },
];
