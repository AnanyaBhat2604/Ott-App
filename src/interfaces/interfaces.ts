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
  // Could be a boolean based on its usage, but set as string to match your example
  children: MenuItem[]; // Recursive type reference for nested children
}

interface Menu {
  name: string;
  items: MenuItem[];
}

interface MenuDataProps {
  menuData: Menu[];
}
