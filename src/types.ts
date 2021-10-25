export type Products = {
  id: number;
  produkt: string;
  typ: string;
  objem: string;
  obsah: string;
  cena: number;
  krajina: string;
  popis: string;
}[];

export type Location = {
  hash: string;
  key?: string | undefined;
  pathname: string;
  search: string;
  state: any;
};
