export type BlogCategoryType =
  | 'accounting'
  | 'financial-management'
  | 'tax-zakat'
  | 'cfo-advisory'
  | 'planning-budgeting';

export interface RelatedServiceLink {
  title: string;
  url: string;
  description?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: BlogCategoryType;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingTime: string;
  content: string;
  relatedService: RelatedServiceLink;
  featuredImage?: string;
  keywords?: string[];
  canonicalUrl?: string;
  relatedArticles?: { slug: string; title: string }[];
}

export interface BlogCategory {
  id: BlogCategoryType;
  name: string;
  description: string;
}

export interface PlannedTopic {
  id: number;
  title: string;
  targetServiceUrl: string;
  targetServiceName: string;
  category: BlogCategoryType;
  keyObjective: string;
}
