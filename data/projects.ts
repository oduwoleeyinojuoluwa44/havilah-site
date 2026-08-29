export type ProjectStatus = "completed" | "ongoing" | "pipeline";

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  year?: string;
  location: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "koinonia",
    name: "Koinonia",
    status: "completed",
    year: "2017",
    location: "Agungi, Lagos",
    description:
      "Eight four-bedroom semi-detached homes, each with two living rooms, a guest toilet and en-suite bedrooms throughout.",
    image: "/images/proj-koinonia.jpg",
  },
  {
    id: "havilah-1",
    name: "Havilah Court 1",
    status: "completed",
    year: "2018",
    location: "Platinum Way, Ikate",
    description:
      "Seven units: four four-bedroom terraces with two living rooms and en-suite bedrooms, alongside three flats built for efficient modern living.",
    image: "/images/proj-havilah-1.jpg",
  },
  {
    id: "havilah-2",
    name: "Havilah Court 2",
    status: "completed",
    year: "2020",
    location: "The Nest Estate, Lekki",
    description:
      "Eight four-bedroom terraces. Two expansive living rooms, guest toilets and a private bathroom to every bedroom.",
    image: "/images/proj-havilah-2.jpg",
  },
  {
    id: "havilah-3",
    name: "Havilah Court 3",
    status: "completed",
    year: "2022",
    location: "Jakande First Gate, Lekki",
    description:
      "Seven four-bedroom terrace houses and apartments, each with two spacious living rooms and luxurious en-suite bedrooms.",
    image: "/images/proj-havilah-3.jpg",
  },
  {
    id: "havilah-4",
    name: "Havilah Court 4",
    status: "completed",
    year: "2023",
    location: "Jakande First Gate, Lekki",
    description:
      "Nine four-bedroom terraces and three apartments. Fitted modern kitchens, all bedrooms en-suite and a dedicated maid's room.",
    image: "/images/proj-havilah-4.jpg",
  },
  {
    id: "homewood",
    name: "Homewood Residences",
    status: "completed",
    location: "Lekki, Lagos",
    description:
      "A completed residential development shaped around clean contemporary lines, generous homes and practical everyday living.",
    image: "/images/completed-1.jpg",
  },
  {
    id: "havilah-5",
    name: "Havilah Court 5",
    status: "ongoing",
    location: "Beach Resort Estate, Lekki",
    description:
      "Four semi-detached homes, nineteen four-bedroom terraces and sixteen apartments, with a gym, swimming pool and children's play area.",
    image: "/images/proj-havilah-5.jpg",
    year: undefined,
  },
  {
    id: "havilah-5-annex",
    name: "Havilah Court 5 Annex",
    status: "ongoing",
    location: "Lekki, Lagos",
    description:
      "An extension of the Havilah Court 5 development, currently progressing alongside the main project.",
    image: "/images/project-05.jpg",
  },
  {
    id: "havilah-6",
    name: "Havilah Court 6",
    status: "pipeline",
    location: "Upcoming Development",
    description:
      "The next project in the Havilah Court series, currently in the development pipeline.",
    image: "/images/swap-01.jpg",
  },
];
