export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Updates received during the building phase. Structured payment plan, flexibility and solution driven team when challenges arise.",
    author: "Havilah Homeowner",
    date: "June 2025",
  },
  {
    id: 2,
    quote:
      "Seeing that the house level was elevated and underground drainage put in place to mitigate issues around flood.",
    author: "Havilah Homeowner",
    date: "June 2025",
  },
  {
    id: 3,
    quote: "The personal touch in service delivery.",
    author: "Havilah Homeowner",
    date: "June 2025",
  },
];
