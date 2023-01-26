import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    heading: 'saving money',
    icon: 'fas fa-wallet fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    heading: 'endless hiking',
    icon: 'fas fa-tree fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    heading: 'amazing comfort',
    icon: 'fas fa-socks fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'August 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'China',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: 'October 11th, 2020',
    title: 'Best of Java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: 'September 15th, 2020',
    title: 'Explore Hong Kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Hong Kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: 'December 5th, 2020',
    title: 'Kenya Highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Kenya',
    duration: 20,
    cost: 3300,
  },
]
