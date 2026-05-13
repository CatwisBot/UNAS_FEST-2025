import { Activities } from "@/constants/Activities/Activities";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ActivityDetailClient from "@/components/shared/Activities/ActivityDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Activities.map((activity) => ({
    slug: activity.path,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = Activities.find((act) => act.path === slug);

  if (!activity) {
    return { title: "Activity Not Found" };
  }

  const title = `${activity.title} — UNASFEST 2025`;
  const description =
    activity.description.length > 160
      ? activity.description.substring(0, 157) + "..."
      : activity.description;

  return {
    title: activity.title,
    description,
    alternates: {
      canonical: `https://unasfest.com/activities/${activity.path}`,
    },
    openGraph: {
      title,
      description,
      url: `https://unasfest.com/activities/${activity.path}`,
      type: "website",
      images: [
        {
          url: `/image/Activities/Cover/${activity.path.toLowerCase()}.webp`,
          width: 1200,
          height: 630,
          alt: activity.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ActivityDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = Activities.find((act) => act.path === slug);

  if (!activity) return notFound();

  return <ActivityDetailClient slug={slug} />;
}
