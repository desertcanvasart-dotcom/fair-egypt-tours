// Shared structured-content types used by travel guides, tips, and blog posts.

export type Section = {
  heading?: string;
  paras?: string[];
  list?: string[];
  ordered?: boolean;
  quote?: string;
};

export type Author = {
  name: string;
  avatar: string;
  role?: string;
};
