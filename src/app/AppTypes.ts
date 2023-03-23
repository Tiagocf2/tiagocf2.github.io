export enum ThemeMode {
  LIGHT,
  DARK,
}
export interface AppContextProps {
  mode: ThemeMode;
  lang: string;
}
