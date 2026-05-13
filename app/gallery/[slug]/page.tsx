import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Gallery } from "@/constants/Gallery/Gallery";
import { GalleryEvent, PageParams } from "@/lib/types/Gallery/Gallery";
import Caleidoscope from "@/components/shared/Gallery/Caleidoscope";
import GalleryDetailClient from "@/components/shared/Gallery/GalleryDetailClient";
import Faq from "@/components/shared/Home/Faq";
import Header from "@/components/shared/Gallery/Header";

interface GalleryDetailPageProps {
  params: Promise<PageParams>;
}

export default async function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const { slug } = await params;
  const event = Gallery.find((e: GalleryEvent) => e.path === slug);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <Header event={event}/>

      <div>
        <Caleidoscope />
      </div>

      <GalleryDetailClient event={event} />

      <Faq />
    </main>
  );
}

export async function generateStaticParams() {
  return Gallery.map((event: GalleryEvent) => ({
    slug: event.path,
  }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const event = Gallery.find((e: GalleryEvent) => e.path === slug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: `${event.title} Gallery`,
    description: event.desc,
    alternates: {
      canonical: `https://unasfest.com/gallery/${event.path}`,
    },
    openGraph: {
      title: `${event.title} Gallery | UNASFEST 2025`,
      description: event.desc,
      url: `https://unasfest.com/gallery/${event.path}`,
      type: "website",
    },
  };
}

