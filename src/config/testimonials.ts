export interface TestimonialItem {
  quote: string;
  name: string;
  role?: string;
  rating?: number;
}

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'Len and his crew did a fantastic job on our shoreline. We had lost land and had water and sand in the lower level of our guesthouse. The finished product looked even better than the drawings. The crew worked hard in all types of weather and did an excellent clean up job including putting a stone pathway back to its original state. The amazing thing about the finished product is the great way the stones change the wave pattern ensuring our property as well as our neighbor’s is preserved. We are very happy we used Peninsula Pavers.',
    name: 'Mary Roesner',
    role: 'Homeowner',
    rating: 5,
  },
  {
    quote:
      "We own the Pirate's Cove chain of miniature golf courses across the states. A few years back, Lenny and his crew did an outstanding paver job on large courtyard area outside and around our high ropes course in Traverse City. He and his crew were great to work with, pros that knew their business. From design to custom cutting to proper base material and compaction--Peninsula Pavers knows their game and is a first rate outfit.",
    name: "Pirate's Cove",
    role: 'Business Owner',
    rating: 5,
  },
  {
    quote: "Beautiful Quality Work!!! I can't recommend highly enough.",
    name: 'Jamie Baird',
    role: 'Homeowner',
    rating: 5,
  },
  {
    quote:
      "Working with Peninsula Pavers on my parent's behalf was fantastic especially since we live out of state. They captured and exceeded our imagination for our folks. Most importantly, we were part of the entire process and it didn't impact my time. We had a budget and promised ourselves we wouldn't go over. Their designer carefully explained every step and also pointed out aspects for the outdoor living area we hadn't considered for my parents. They refined our ideas and saved us a great deal money.",
    name: 'Matthew Notarangelo',
    role: 'Homeowner',
    rating: 5,
  },
  {
    quote:
      "Thank you for the happy tears Lenny, Krista and everyone at Peninsula Pavers. We didn't expect to fall in love with our home again. After you did such a beautiful job, we're staying. We were going to list it but now, you made it look like a resort.",
    name: 'C Brownson',
    role: 'Homeowner',
    rating: 5,
  },
];
