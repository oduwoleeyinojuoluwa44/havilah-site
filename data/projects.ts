export type ProjectStatus = "completed" | "ongoing" | "pipeline";

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  year?: string;
  location: string;
  description: string;
  image: string;
  /** Extra photos; when present the card becomes a gallery, starting at `image`. */
  gallery?: string[];
  /** `false` keeps the development page's cover dark and shows `image` with
      the other photos instead, for a picture that does not crop to a banner. */
  cover?: false;
  /** Named amenities, listed on the development page. */
  features?: string[];
  /** The residences, one entry per unit type, as the architect describes them.
      A unit with an `image` also becomes a slide on the card, captioned with
      its own detail. */
  units?: { count: string; type: string; detail: string; image?: string }[];
  /** Expected handover, shown beside status and location. */
  delivery?: string;
  /** Construction progress photographs. These stay off the cards, which show
      the architecture, and appear only on the development page. */
  progress?: string[];
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
    id: "havilah-5",
    name: "Havilah Court 5",
    status: "ongoing",
    location: "Beach Resort Estate, Lekki",
    description:
      "Havilah Court 5 comprises four semi-detached homes, nineteen terraces and a block of sixteen flats, with a swimming pool, gym, social area and children's play area.",
    /* One line and one render per unit type; the card steps from the estate
       view through each of them. The terrace floor count is left out until
       the architect confirms whether it is two or three suspended floors. */
    units: [
      {
        count: "4 units",
        type: "Semi-detached homes",
        detail:
          "A four-bedroom duplex over two suspended floors, with a family lounge, a BQ and a laundry.",
        image: "/images/proj-havilah-5-semi.jpg",
      },
      {
        count: "19 units",
        type: "Terraces",
        detail: "A luxurious four-bedroom terrace with a family lounge and a BQ.",
        image: "/images/proj-havilah-5-terraces.jpg",
      },
      {
        count: "16 units",
        type: "Block of flats",
        detail: "A luxurious two-bedroom flat with an open-plan kitchen.",
        image: "/images/proj-havilah-5-flats.jpg",
      },
    ],
    /* The estate view leads; the construction photographs appear further
       down the development page as progress. */
    image: "/images/proj-havilah-5-estate.jpg",
    features: [
      "Co-working station",
      "Kids development centre",
      "Electric vehicle charging station",
      "Rooftop sit-out",
      "Swimming pool",
      "Fully equipped gym",
    ],
    progress: [
      "/images/proj-havilah-5-a.jpg",
      "/images/proj-havilah-5-b.jpg",
      "/images/proj-havilah-5-c.jpg",
    ],
    year: undefined,
  },
  {
    id: "havilah-5-annex",
    name: "Havilah Court 5 Annex",
    status: "ongoing",
    location: "Lekki, Lagos",
    description:
      "Twelve terraces extending the Havilah Court 5 community. White facades framed in dark stone, a private balcony to every home, and palms along the parking drive.",
    image: "/images/proj-havilah-5-annex.jpg",
  },
  {
    id: "havilah-6",
    name: "Havilah 6",
    status: "ongoing",
    location: "Beach Resort, Off Platinum Way, Lekki",
    description:
      "Twenty-four four-bedroom terraces behind a gated entrance, with a swimming pool, fully equipped gym, 24-hour power, high-speed network, ample parking and round-the-clock security. Outright ₦300M, or from a ₦150M initial deposit.",
    /* The render that led here is the Court 5 estate view, so the price
       flyer leads until Havilah 6 has a render of its own. Its lettering
       would sit behind the page title, so the page cover stays dark. */
    image: "/images/proj-havilah-6.jpg",
    cover: false,
  },
];
