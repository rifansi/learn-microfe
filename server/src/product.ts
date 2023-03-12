export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Honda Jazz',
    description: 'The Honda Jazz is a stylish and practical hatchback.',
    longDescription:
      "The Honda Jazz has a spacious interior, advanced safety features, and excellent fuel efficiency. It's perfect for city driving and long trips.",
    price: 18999,
    image: 'http://localhost:8080/1.png',
  },
  {
    id: 2,
    name: 'Toyota Innova',
    description: 'The Toyota Innova is a versatile and reliable MPV.',
    longDescription:
      "The Toyota Innova has a spacious cabin, flexible seating arrangements, and a powerful engine. It's perfect for families and long trips.",
    price: 24999,
    image: 'http://localhost:8080/3.jpg',
  },
  {
    id: 3,
    name: 'Mazda CX-5',
    description: 'The Mazda CX-5 is a sporty and stylish SUV.',
    longDescription:
      "The Mazda CX-5 has a dynamic design, advanced safety features, and excellent driving dynamics. It's perfect for those who want a mix of style and performance.",
    price: 29999,
    image: 'http://localhost:8080/4.jpg',
  },
  {
    id: 4,
    name: 'Ford Mustang',
    description:
      'The Ford Mustang is an iconic muscle car with a classic design.',
    longDescription:
      "The Ford Mustang has a powerful engine, sleek design, and advanced technology features. It's perfect for those who want a classic American sports car.",
    price: 44999,
    image: 'http://localhost:8080/5.png',
  },
  {
    id: 5,
    name: 'Chevrolet Camaro',
    description:
      'The Chevrolet Camaro is a classic American muscle car with a modern twist.',
    longDescription:
      "The Chevrolet Camaro has a powerful engine, sleek design, and advanced technology features. It's perfect for those who want a combination of classic muscle and modern technology.",
    price: 39999,
    image: 'http://localhost:8080/6.jpg',
  },
  {
    id: 6,
    name: 'Nissan GT-R',
    description:
      'The Nissan GT-R is a high-performance sports car with a futuristic design.',
    longDescription:
      "The Nissan GT-R has a powerful engine, advanced technology features, and a unique design. It's perfect for those who want a combination of performance and style.",
    price: 79999,
    image: 'http://localhost:8080/7.png',
  },
  {
    id: 7,
    name: 'Audi A4',
    description:
      'The Audi A4 is a luxury sedan with advanced technology features.',
    longDescription:
      "The Audi A4 has a spacious cabin, advanced safety features, and a sleek design. It's perfect for those who want a luxury car with advanced technology features.",
    price: 45999,
    image: 'http://localhost:8080/8.jpg',
  },
  {
    id: 8,
    name: 'BMW 5 Series',
    description:
      'The BMW 5 Series is a luxury sedan with a powerful engine and advanced technology features.',
    longDescription:
      "The BMW 5 Series has a spacious cabin, advanced safety features, and a powerful engine. It's perfect for those who want a luxury car with advanced performance features.",
    price: 56999,
    image: 'http://localhost:8080/2.jpg',
  },
  {
    id: 9,
    name: 'Tesla Model S',
    description:
      'The Tesla Model S is an electric car with advanced technology features.',
    longDescription:
      "The Tesla Model S has a sleek design, advanced technology features, and excellent driving range. It's perfect for those who want an eco-friendly luxury car.",
    price: 79999,
    image: 'http://localhost:8080/3.jpg',
  },
  {
    id: 10,
    name: 'Porsche 911',
    description:
      'The Porsche 911 is a high-performance sports car with a classic design.',
    longDescription:
      "The Porsche 911 has a powerful engine, sleek design, and advanced technology features. It's perfect for those who want a classic sports car with modern features.",
    price: 99999,
    image: 'http://localhost:8080/5.png',
  },
];
