export interface Breadcrumb {
  home: string;
  projects: string;
  current: string;
}

export interface Description {
  main: string;
  consolidation: string;
  domesticFreight: string;
}

export interface Details {
  category: string;
  location: string;
  client: string;
  date: string;
}

export interface MoreProject {
  image: string;
  title: string;
  category: string;
}

export interface ProjectData {
  title: string;
  breadcrumb: Breadcrumb;
  description: Description;
  details: Details;
  services: string[];
  moreProjects: MoreProject[];
}
