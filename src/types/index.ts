export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: 'vie-etudiante' | 'sante-mentale' | 'loisirs';
  subcategory: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  featured: boolean;
}

export interface MenuItem {
  label: string;
  href: string;
  icon?: any;
  submenu?: MenuItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}