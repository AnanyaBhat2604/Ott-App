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

export interface TitleProps {
  title: string;
}

export interface ErrorResponse {
  message: string;
  status: number;
}

export interface Image {
  url: string;
  altText: string;
}

export interface Target {
  path: string;
}

export interface Content {
  id: string;
  type: string;
  image: Image;
  title: string;
  description: string;
  target: Target;
}

export interface Data {
  contents: Content[];
}

export interface RailsProps {
  data: Data;
  title: string;
}

export interface CarouselItemsProps {
  movieData: Content[];
}

export interface HeroDataProps {
  orientation: string;
  title: string;
  description: string;
  image: Image;
}

export interface Content {
  id: string;
  accordionTitle: string;
  accordionDescription: string;
}

export interface FAQDataProps {
  contents: Content[];
}

export interface FAQProps {
  data: FAQDataProps;
  title: string;
}

export interface MenuItem {
  id: string;
  title: string;
  url: string;
  visibility: string;
  children: MenuItem[];
}

export interface Menu {
  name: string;
  items: MenuItem[];
}

export interface MenuItemsProps {
  menuData: Menu[];
}

export interface Option {
  id: string;
  title: string;
  url: string;
  visibility: string;
  children: Option[];
}

export interface ListProps {
  options: Option;
}

// interfaces.ts
export interface Logo {
  src: string;
  alt: string;
}

export interface LinkItem {
  id: string;
  name: string;
  link: string;
}

export interface Copyright {
  text: string;
}

export interface FooterData {
  logo: Logo;
  links: LinkItem[];
  copyright: Copyright;
}
export interface FooterProps {
  data: FooterData;
}
