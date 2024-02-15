export enum MainRoutesEnum {
  MAIN = 'main',
  APARTMENTS = 'apartments',
}

export const MainRoutePaths: Record<MainRoutesEnum, string> = {
  [MainRoutesEnum.MAIN]: '/',
  [MainRoutesEnum.APARTMENTS]: '/apartments',
};
