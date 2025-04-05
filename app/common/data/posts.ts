import type { Post } from '../types';

export const featuredPosts: Post[] = [
  {
    id: '1',
    title:
      'Wanderlust Unleashed: 10 Must-Visit Destinations for Solo Travelers',
    image: '/images/wanderlust.jpg',
    date: 'FEB 26, 2023',
    category: 'TRAVEL',
    excerpt:
      'Discover the top destinations perfect for solo adventures around the world.',
  },
  {
    id: '2',
    title: 'Mental Health Matters: Traveling and Coping with Anxiety',
    image: '/images/mental-health.jpg',
    date: 'FEB 27, 2023',
    category: 'LIFESTYLE',
    excerpt:
      'Learn how to manage anxiety while traveling and make your journey more enjoyable.',
  },
  {
    id: '3',
    title: 'The Wonders of Asia: Unforgettable Adventures Across the Continent',
    image: '/images/asia.jpg',
    date: 'FEB 6, 2023',
    category: 'DESTINATION',
    excerpt:
      'Explore the diverse cultures, landscapes, and experiences across the Asian continent.',
  },
  {
    id: '4',
    title: 'Solo Female Travel: Empowering Journeys and Safety Tips',
    image: '/images/solo-female.jpg',
    date: 'FEB 8, 2023',
    category: 'TRAVEL',
    excerpt:
      'Essential advice for women traveling alone, focusing on safety and empowerment.',
  },
];

export const trendingPosts: Post[] = [
  {
    id: '5',
    title: 'Island Hopping in Thailand: A Complete Guide',
    image: '/images/thailand.jpg',
    date: 'MAR 15, 2023',
    category: 'DESTINATION',
    excerpt:
      "Everything you need to know about exploring Thailand's beautiful islands.",
  },
  {
    id: '6',
    title: 'Digital Nomad Life: Working While Traveling the World',
    image: '/images/digital-nomad.jpg',
    date: 'MAR 10, 2023',
    category: 'LIFESTYLE',
    excerpt:
      'Tips and insights for balancing work and travel as a digital nomad.',
  },
];

// Combine featured and trending posts, plus add more
export const allPosts: Post[] = [
  ...featuredPosts,
  ...trendingPosts,
  {
    id: '7',
    title: 'Budget Travel: How to See the World Without Breaking the Bank',
    image: '/images/budget-travel.jpg',
    date: 'JAN 20, 2023',
    category: 'TRAVEL',
    excerpt:
      'Smart strategies for traveling on a budget while maximizing experiences.',
  },
  {
    id: '8',
    title: 'Hidden Gems of Europe: Off the Beaten Path Destinations',
    image: '/images/europe-hidden.jpg',
    date: 'JAN 15, 2023',
    category: 'DESTINATION',
    excerpt:
      'Discover lesser-known European destinations that offer authentic experiences.',
  },
  {
    id: '9',
    title: 'Travel Photography: Capturing Memories Like a Pro',
    image: '/images/photography.jpg',
    date: 'FEB 3, 2023',
    category: 'LIFESTYLE',
    excerpt:
      'Tips and techniques for taking stunning travel photos with any camera.',
  },
  {
    id: '10',
    title: 'Sustainable Travel: Exploring the World Responsibly',
    image: '/images/sustainable.jpg',
    date: 'MAR 5, 2023',
    category: 'TRAVEL',
    excerpt:
      'How to minimize your environmental impact while traveling globally.',
  },
  {
    id: '11',
    title: 'Cultural Immersion: Beyond Tourist Attractions',
    image: '/images/cultural.jpg',
    date: 'FEB 12, 2023',
    category: 'LIFESTYLE',
    excerpt: 'Ways to deeply connect with local cultures during your travels.',
  },
  {
    id: '12',
    title:
      "South America's Natural Wonders: A Journey Through Breathtaking Landscapes",
    image: '/images/south-america.jpg',
    date: 'JAN 28, 2023',
    category: 'DESTINATION',
    excerpt:
      'Exploring the diverse natural beauty of the South American continent.',
  },
];
