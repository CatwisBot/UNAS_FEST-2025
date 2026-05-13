import { MetadataRoute } from 'next';
import { Activities } from '@/constants/Activities/Activities';
import { Gallery } from '@/constants/Gallery/Gallery';

const BASE_URL = 'https://unasfest.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/partnership`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic activity pages
  const activityPages: MetadataRoute.Sitemap = Activities.map((activity) => ({
    url: `${BASE_URL}/activities/${activity.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic gallery pages
  const galleryPages: MetadataRoute.Sitemap = Gallery.map((event) => ({
    url: `${BASE_URL}/gallery/${event.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...activityPages, ...galleryPages];
}
