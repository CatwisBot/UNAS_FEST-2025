"use client";

import { CompetitionEvent } from "@/lib/types/Activities/Timeline";
import Timeline from "@/components/shared/Activities/Timeline";

interface TimelineProps {
  events: CompetitionEvent["timeline"];
}

export default function HomeTimeline({ events }: TimelineProps) {
  return <Timeline events={events} variant="home" />;
}
