export interface Car {
  id: string
  name: string
  year: number
  engine: string
  horsepower: number
  price: number
  rating: number
  description: string
  image: string
  badge?: string
  category: string
}

export const cars: Car[] = [
  {
    id: "porsche-911",
    name: "Porsche 911 Turbo S",
    year: 2024,
    engine: "3.8L Twin-Turbo Flat-6",
    horsepower: 640,
    price: 230100,
    rating: 5,
    description: "The pinnacle of sports car engineering — 0–60 mph in 2.6 seconds.",
    image: "/car-porsche-911.webp",
    badge: "Bestseller",
    category: "Sports Cars",
  },
  {
    id: "taycan",
    name: "Porsche Taycan Turbo GT",
    year: 2024,
    engine: "Dual Electric Motors",
    horsepower: 1092,
    price: 195000,
    rating: 5,
    description: "The world's most powerful Porsche. All-electric, all-extraordinary.",
    image: "/car-taycan.webp",
    badge: "Electric",
    category: "Electric Vehicles",
  },
  {
    id: "ferrari-roma",
    name: "Ferrari Roma",
    year: 2024,
    engine: "3.9L Twin-Turbo V8",
    horsepower: 612,
    price: 267500,
    rating: 5,
    description: "La Nuova Dolce Vita — a sublime blend of beauty and performance.",
    image: "/car-ferrari-roma.webp",
    badge: "Limited",
    category: "Sports Cars",
  },
  {
    id: "lamborghini",
    name: "Lamborghini Huracán EVO",
    year: 2024,
    engine: "5.2L Naturally Aspirated V10",
    horsepower: 640,
    price: 287400,
    rating: 5,
    description: "Raw, visceral, and absolutely unforgettable on every road.",
    image: "/car-lamborghini.webp",
    badge: "Exotic",
    category: "Sports Cars",
  },
  {
    id: "bmw-m8",
    name: "BMW M8 Competition",
    year: 2024,
    engine: "4.4L Twin-Turbo V8",
    horsepower: 617,
    price: 143000,
    rating: 4,
    description: "Precision-engineered for those who demand elegance at speed.",
    image: "/car-bmw-m8.webp",
    category: "Luxury Cars",
  },
  {
    id: "mercedes-amg",
    name: "Mercedes AMG GT",
    year: 2024,
    engine: "4.0L Twin-Turbo V8",
    horsepower: 577,
    price: 163650,
    rating: 5,
    description: "A symphony of performance and luxury refined to perfection.",
    image: "/car-mercedes-amg.webp",
    category: "Luxury Cars",
  },
  {
    id: "audi-rs7",
    name: "Audi RS7 Sportback",
    year: 2024,
    engine: "4.0L Twin-Turbo V8",
    horsepower: 591,
    price: 121995,
    rating: 4,
    description: "The grand tourer that refuses to compromise on anything.",
    image: "/car-audi-rs7.webp",
    category: "Luxury Cars",
  },
  {
    id: "aston-martin",
    name: "Aston Martin DB12",
    year: 2024,
    engine: "4.0L Twin-Turbo V8",
    horsepower: 671,
    price: 245000,
    rating: 5,
    description: "The world's first super tourer — British excellence redefined.",
    image: "/car-aston-martin.webp",
    badge: "New",
    category: "Limited Editions",
  },
]

export const categories = [
  {
    id: "sports",
    name: "Sports Cars",
    description: "Heart-pounding performance machines built for the road",
    image: "/category-sports.webp",
  },
  {
    id: "suv",
    name: "Luxury SUVs",
    description: "Commanding presence with uncompromising comfort",
    image: "/category-suv.webp",
  },
  {
    id: "electric",
    name: "Electric Vehicles",
    description: "Cutting-edge innovation meeting sustainable luxury",
    image: "/category-electric.webp",
  },
  {
    id: "limited",
    name: "Limited Editions",
    description: "Rare masterpieces for the most discerning collectors",
    image: "/category-limited.webp",
  },
]

export const testimonials = [
  {
    id: 1,
    name: "James Hartwell",
    title: "CEO, Hartwell Capital",
    review:
      "Rusty's Motors made acquiring my dream Porsche an absolutely effortless experience. The concierge service was world-class and the vehicle was delivered immaculately prepared.",
    rating: 5,
    image: "/avatar-1.webp",
  },
  {
    id: 2,
    name: "Sophia Marchand",
    title: "Creative Director",
    review:
      "I've purchased three vehicles through Rusty's Motors now. Their attention to detail and genuine passion for automobiles is unlike anything I've experienced elsewhere.",
    rating: 5,
    image: "/avatar-2.webp",
  },
  {
    id: 3,
    name: "Marcus Chen",
    title: "Tech Entrepreneur",
    review:
      "From the first call to delivery day, everything was seamless. My Aston Martin arrived looking better than the showroom photographs. Truly exceptional service.",
    rating: 5,
    image: "/avatar-3.webp",
  },
]
