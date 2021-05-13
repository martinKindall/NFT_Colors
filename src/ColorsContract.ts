
export interface ColorsContract {
  mint: (color: string) => Promise<any>;
  getColors: () => Promise<string[]>;
}
