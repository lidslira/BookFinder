export interface VolumeInfoProps {
  title: string;
  categories?: string[];
  publisher?: string;
  authors: string[];
  description?: string;
  infoLink: string;
  publishedDate: string;
  imageLinks?: {
    thumbnail: string;
  };
}

export interface SaleInfoProps {}

export interface AccessInfoProps {}

export interface SearchInfoProps {}

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfoProps;
  saleInfo: SaleInfoProps;
  accessInfo: AccessInfoProps;
  searchInfo: SearchInfoProps;
}
