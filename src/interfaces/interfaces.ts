export interface SubMenuOption {
  name: string;
  link?: string;
}

export interface MenuItem {
  name: string;
  link: string;
  options: SubMenuOption[];
}

export interface ValueResponse {
  titles: [];
  value: string;
}
