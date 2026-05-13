export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

export type StatItem = {
  value: string;
  label: string;
  description?: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
};
