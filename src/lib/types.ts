export type RoomType = "kitchen" | "bath";

export type StyleTag =
  | "modern"
  | "transitional"
  | "traditional"
  | "farmhouse"
  | "contemporary";

export type Project = {
  id: string;
  slug: string;
  title: string;
  room: RoomType;
  styles: StyleTag[];
  neighborhood: string;
  summary: string;
  beforeImage: string;
  afterImage: string;
  cardImage: string;
};

export type Review = {
  id: string;
  room: RoomType | "both";
  /** Sample placeholder — replace with real client quotes */
  author: string;
  quote: string;
  note: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NavItem = {
  href: string;
  label: string;
};
