export interface TimelineItem {
  month: string;
  day: string;
  year: string;
  title: string;
}

export interface CompetitionEvent {
  path: string;
  timeline: TimelineItem[];
}