import { notFound } from "next/navigation";
import { Gallery } from "@/constants/Gallery/Gallery";
import { GalleryEvent, PageParams } from "@/lib/types/Gallery/Gallery";
import Caleidoscope from "@/components/shared/Gallery/Caleidoscope";
import GalleryDetailClient from "@/components/shared/Gallery/GalleryDetailClient";
import Faq from "@/components/shared/Home/Faq";
import Header from "@/components/shared/Gallery/Header";

interface GalleryDetailPageProps {
  params: PageParams;
}

export default function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const { slug } = params;
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

import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = params;
  const event = Gallery.find((e: GalleryEvent) => e.path === slug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: event.title,
    description: event.desc,
  };
}
