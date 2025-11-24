import { Camera, Heart, Users, Video, Star, Aperture, Briefcase, Baby } from 'lucide-react';

// Broadened services to include diverse photography types
export const SERVICES = [
  {
    id: 'wedding',
    title: 'Royal Weddings',
    description: 'Specializing in traditional and modern wedding ceremonies. From the Haldi to the Reception, we capture every ritual with grandeur.',
    icon: Heart,
    image: '/images/Royal Weddings.jpg',
  },
  {
    id: 'fashion',
    title: 'Fashion & Portfolio',
    description: 'High-end editorial shoots for models, actors, and influencers. Professional lighting and direction to build your perfect portfolio.',
    icon: Camera,
    image: "/images/fashion.jpg",
  },
  {
    id: 'maternity',
    title: 'Maternity & Baby',
    description: 'Celebrating new life with artistic maternity shoots and adorable newborn photography. Gentle, safe, and beautiful memories.',
    icon: Baby,
    image: '/images/Maternity & baby.jpg',
  },
  {
    id: 'corporate',
    title: 'Corporate & Events',
    description: 'Professional headshots, brand campaigns, and event coverage for businesses. Elevate your brand image with crisp visuals.',
    icon: Briefcase,
    image: '/images/Corporate & Events.jpg',
  }
];

// Diverse gallery showing different styles
export const GALLERY_ITEMS = [
  { id: '1', src: '/images/Bridal Portrait.jpg', category: 'Bridal Portrait', cols: 1 },
  { id: '2', src: '/images/Fashion Editorial.jpg', category: 'Fashion Editorial', cols: 2 },
  { id: '3', src: '/images/Traditional Rituals.jpg', category: 'Traditional Rituals', cols: 1 },
  { id: '4', src: '/images/Candid Moments.jpg', category: 'Candid Moments', cols: 1 },
  { id: '5', src: '/images/Maternity.jpg', category: 'Maternity', cols: 1 },
  { id: '6', src: '/images/Reception Glam.jpg', category: 'Reception Glam', cols: 1 },
  { id: '7', src: '/images/Portraiture.jpg', category: 'Portraiture', cols: 2 },
  { id: '8', src: '/images/Pre-Wedding.jpg', category: 'Pre-Wedding', cols: 1 },
];

// Videos with actual source URLs for autoplay
export const VIDEOS = [
  {
    id: 'v1',
    title: 'The Royal Union',
    thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c05?auto=format&fit=crop&q=80&w=800',
    src: '/videos/The Royal Union.mp4',
    duration: 'Cinematic Teaser'
  },
  {
    id: 'v2',
    title: 'Fashion Week Behind Scenes',
    thumbnail: 'https://images.unsplash.com/photo-1546252924-f442fa9d8393?auto=format&fit=crop&q=80&w=800',
    src: '/videos/Fashion Week Behind Scenes.mp4',
    duration: 'Model Portfolio'
  },
  {
    id: 'v3',
    title: 'Traditional Celebrations',
    thumbnail: 'https://images.unsplash.com/photo-1522851167701-d85c807b539c?auto=format&fit=crop&q=80&w=800',
    src: '/videos/Traditional Celebrations.mp4',
    duration: 'Wedding Highlights'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Priya & Rahul',
    role: 'Wedding Clients',
    content: 'The team was invisible yet everywhere! They captured our wedding so beautifully. The gold album they designed is our most prized possession.',
    avatar: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 't2',
    name: 'Sneha Kapoor',
    role: 'Fashion Model',
    content: 'I needed a portfolio that stood out for international agencies. Royal Lens understood the assignment perfectly. The lighting was magazine quality.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 't3',
    name: 'Innovate Tech',
    role: 'Corporate Client',
    content: 'We hired them for our annual summit. Professional, timely, and the final photos were perfect for our press releases.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
  }
];

export const NAV_LINKS_LEFT = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#portfolio' },
];

export const NAV_LINKS_RIGHT = [
  { name: 'Films', href: '#films' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];
