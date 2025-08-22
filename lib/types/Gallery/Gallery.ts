// types/gallery.ts
export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  day: string;
  year: string;
  date: string;
  location: string;
}

export interface GalleryEvent {
  path: string;
  title: string;
  desc: string;
  images: GalleryImage[];
}

export interface PageParams {
  slug: string;
}