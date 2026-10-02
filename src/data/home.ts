// Content for the "/" home page only. Each section component receives
// its slice of this object as a prop, so copy edits happen in one place
// and never inside markup.

import { CATALOG_CATEGORIES } from '../lib/woocommerce/categories';

const categoryImage = (slug: string) =>
  CATALOG_CATEGORIES.find((c) => c.slug === slug)?.heroImage ?? '';

export const heroSlides = [
  {
    eyebrow: 'Welcome to Mahakali!',
    title: 'We craft modern furniture for your',
    titleAccent: 'dream home',
    copy: 'At Mahakali Udupi, every sofa, mattress, and furnishing is designed with comfort, elegance, and lasting quality—so your home feels as beautiful as it looks.',
    ctaPrimary: { label: 'Shop Now', href: '/products' },
    ctaSecondary: { label: 'Learn More', href: '/about' },
    image: {
      src: 'https://mahakalihomefurnitures.com/assets/img/hero/01.png',
      alt: 'Mahakali sofa'
    }
  },
  {
    eyebrow: 'Welcome to Mahakali!',
    title: 'Premium comfort with',
    titleAccent: 'timeless style',
    copy: 'Discover handcrafted sofas, cozy mattresses, and curated curtains at Mahakali Udupi—where modern designs meet trusted craftsmanship for over 28 years.',
    ctaPrimary: { label: 'Shop Now', href: '/products' },
    ctaSecondary: { label: 'Learn More', href: '/about' },
    image: {
      src: 'https://mahakalihomefurnitures.com/assets/img/hero/02.png',
      alt: 'Mahakali tepoy and seating'
    }
  },
  {
    eyebrow: 'Welcome to Mahakali!',
    title: 'Transform your home with',
    titleAccent: 'Mahakali Udupi',
    copy: 'From luxurious seating to elegant curtains and custom-made furniture, we bring comfort, durability, and beauty together to create living spaces you’ll love.',
    ctaPrimary: { label: 'Shop Now', href: '/products' },
    ctaSecondary: { label: 'Learn More', href: '/about' },
    image: {
      src: 'https://mahakalihomefurnitures.com/assets/img/hero/03.png',
      alt: 'Mahakali lounge chair'
    }
  }
];

export const topCategories = {
  eyebrow: 'Collections',
  title: 'Furniture for every room in the house.',
  viewAllHref: '/products',
  items: [
    { name: 'Upholstered', count: 'Collection', href: '/products/upholstered', image: categoryImage('upholstered') },
    { name: 'Wooden Sofa', count: 'Collection', href: '/products/wooden-sofa', image: categoryImage('wooden-sofa') },
    { name: 'Wooden Cot', count: 'Collection', href: '/products/wooden-cot', image: categoryImage('wooden-cot') },
    { name: 'Wooden Jhoola', count: 'Collection', href: '/products/wooden-jhoola', image: categoryImage('wooden-jhoola') },
    { name: 'Dining + Glass Top', count: 'Collection', href: '/products/wooden-dining-glass-4-3', image: categoryImage('wooden-dining-glass-4-3') },
    { name: 'Tepoy', count: 'Collection', href: '/products/tepoy', image: categoryImage('tepoy') }
  ]
};

export const promoStrip = [
  {
    tag: 'Premium Tepoy',
    title: 'Elegant Tepoy Collections',
    cta: { label: 'Shop Now', href: '/products/tepoy' },
    theme: 'blush',
    image: categoryImage('tepoy')
  },
  {
    tag: 'Hot Sale',
    title: 'Premium Sofa Sale Collections',
    cta: { label: 'Discover Now', href: '/products/upholstered' },
    theme: 'sand',
    image: categoryImage('upholstered')
  },
  {
    tag: 'Best Cot',
    title: 'Premium Cot Collections',
    cta: { label: 'Discover Now', href: '/products/wooden-cot' },
    theme: 'sky',
    image: categoryImage('wooden-cot')
  }
];

export const trendingBanner = {
  eyebrow: 'Trending Items',
  kicker: 'Mega Collections',
  title: 'The Huge Sale',
  copy: 'At our outlet stores — festive prices on best-selling sofas and dining sets, this week only.',
  cta: { label: 'Shop Now', href: '/products' },
  image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
};

export const trustBar = [
  { icon: 'truck', title: 'Free Delivery', copy: 'For Any Orders' },
  { icon: 'shield', title: 'Safe Payment', copy: '100% Secure Payment' },
  { icon: 'headset', title: '9:30AM -7:00PM Support', copy: 'Feel Free To Call Us' }
];

export const whyChooseUs = {
  eyebrow: 'Why Choose Us',
  title: 'Trusted For 28+ Years In Comfort, Style & Quality',
  copy:
    "Mahakali Sofas & Curtains is Udupi’s most trusted destination for premium sofas, mattresses, curtains, and custom furniture. We provide long-lasting quality, modern designs, and a smooth shopping experience trusted by thousands of customers.",
  image: {
    src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
    alt: 'Beige corner sofa set styled in a bright living room'
  },
  points: [
    { icon: 'medal', title: '28+ Years of Trust', copy: 'Serving Udupi since 1997 with top-quality sofas, mattresses, curtains & custom furniture trusted by thousands of happy customers.' },
    { icon: 'tag', title: 'Affordable Premium Quality', copy: 'We offer modern, elegant & durable designs at prices that fit every budget—without compromising on material quality or comfort.' },
    { icon: 'van', title: 'Home Delivery Available', copy: 'Hassle-free delivery & installation (on request), ensuring your furniture is safely set up exactly the way you want.' }
  ]
};

export const aboutSection = {
  eyebrow: 'About Us',
  title: 'Mahakali Sofas & Curtains \u2013',
  titleAccent: "Udupi’s most trusted name",
  titleTail: 'for comfort, elegance & timeless living.',
  copy:
    "For over 28 years, we have been enhancing homes with premium sofas, cozy mattresses, beautiful curtains, and customized furniture that perfectly blend comfort and style. Our products are crafted to last and our guidance ensures you choose what suits your lifestyle best.",
  bullets: [
    'Streamlined Shipping Experience',
    'Affordable Modern Design', 
    'Competitive Price & Easy To Shop',
    'We Made Awesome Products'
  ],
  cta: { label: 'Discover More', href: '/about' },
  badge: '28 Years Of Experience',
  images: [
    { src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80', alt: 'Warm-toned living room styled by Mahakali interiors' },
    { src: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80', alt: 'Wooden coffee table detail' },
    { src: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=500&q=80', alt: 'Cosy furnished corner with dining set' }
  ]
};

export const dealBanner = {
  eyebrow: 'Deal',
  title: 'Wooden L Corner Kerala Model',
  copy: 'Get the best deal on premium furniture with the highest discount available today. Upgrade your home with comfort and style.',
  price: '₹38,250.00',
  oldPrice: '₹42,500.00',
  features: ['Best-seller product', 'Premium quality materials', 'Fast delivery available'],
  cta: { label: 'View Product', href: '/products/wooden-l-corner-kerala' },
  productImage: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=600&q=80'
};

export const productLists = {
  onSale: {
    title: 'On Sale',
    items: [
      { name: '3 Seater Sofa Cum Bed', rating: 4, price: '₹48,500.00', oldPrice: '₹54,000.00', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=200&q=80' },
      { name: 'Wooden Sofa Pinky Walnut', rating: 5, price: '₹24,300.00', oldPrice: '₹27,000.00', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=200&q=80' },
      { name: 'Evelyn', rating: 4, price: '₹86,500.00', oldPrice: '₹97,000.00', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  bestSeller: {
    title: 'Best Seller',
    items: [
      { name: 'Alen Gold Sofa', rating: 5, price: '₹48,500.00', image: '/images/products/alen-gold-sofa.jpg' },
      { name: 'Polaris Sofa', rating: 5, price: '₹42,000.00', image: '/images/products/polaris.jpg' },
      { name: 'Mercedes Sofa', rating: 4, price: '₹38,500.00', image: '/images/products/impress.jpg' }
    ]
  },
  topRated: {
    title: 'Top Rated',
    items: [
      { name: 'Dior', rating: 5, price: '₹21,000', image: 'https://mahakali.aksharadigital.in/wp-content/uploads/2026/08/1779278973_6a0da47d508ef.webp', href: 'https://mahakali.aksharadigital.in/product/d101/' },
      { name: 'LOTUS CHAIR', rating: 5, price: '₹8,500', image: 'https://mahakali.aksharadigital.in/wp-content/uploads/2026/08/1778479127_6a017017ba11e.webp', href: 'https://mahakali.aksharadigital.in/product/lotus-chair/' },
      { name: 'RECLINER WITH MOBILE HOLDER', rating: 5, price: '₹34,500', image: 'https://mahakali.aksharadigital.in/wp-content/uploads/2026/08/1778479040_6a016fc05ee3b.webp', href: 'https://mahakali.aksharadigital.in/product/recliner-with-mobile-holder/' }
    ]
  }
};

export const gallery = {
  eyebrow: 'Our Gallery',
  title: 'Let\u2019s Check Our Photo',
  titleAccent: 'Gallery',
  images: [
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80', alt: 'Brown sectional sofa in a sunlit living room' },
    { src: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80', alt: 'Handcrafted wooden side table' },
    { src: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=600&q=80', alt: 'Teal curtains styled beside an accent chair' },
    { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80', alt: 'Cream sofa with round coffee table' },
    { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80', alt: 'Wooden rocking chair detail' },
    { src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80', alt: 'Beige sofa set on a red rug' }
  ]
};

export const testimonials = {
  eyebrow: 'Testimonials',
  title: 'What Our Client',
  titleAccent: "Say's",
  items: [
    { name: 'chandrakala sk', role: 'Google Review', rating: 5, sourceUrl: 'https://share.google/Io1A8YhW0cPXWmLmI', quote: "I'm super happy with the sofa I bought from Mahakali! I really appreciate the exceptional craftsmanship, and the quality is top-notch. The sofa looks amazing, and the cushions are so comfy! I'm totally loving the overall look and feel. Plus, the delivery was great! Overall, I'm absolutely loving it! Kudos to the team for a job well done! Keep up the fantastic work!" },
    { name: 'Sumayya', role: 'Google Review', rating: 5, sourceUrl: 'https://share.google/wVu86tsbCiNQMl3j1', quote: 'This store is one stop for all the furnishings you need for your house. They have amazing and very distinctive collection of curtains. Beautiful designs and different price range from affordable to costlier. The owner cooperates with the customer so well and guides you choosing correct item your looking for. Very amiable person and is highly experienced in his field and has much knowledge about the furnishings / decor. Anyone who is looking for CURTAINS, carpets, sofas, diwan, cupboards, mattress, flooring vinyl rolls, etc this is a must and right shopping spot. GO FOR IT WITHOUT GIVING A SECOND THOUGHT... THE BEST in the Kundapura.' },
    { name: 'Meo Meow', role: 'Google Review', rating: 5, sourceUrl: 'https://share.google/Io1A8YhW0cPXWmLmI', quote: 'Really had a great experience! Fantastic service offered by the staff. The products are extremely good and I also had a great experience with the owners.' },
    { name: 'nethravathi K', role: 'Google Review', rating: 5, sourceUrl: 'https://share.google/wVu86tsbCiNQMl3j1', quote: 'Collections are good and furniture quality is good.' }
  ]
};

export const blogSection = {
  eyebrow: 'Our Blogs',
  title: 'Our Latest News &',
  titleAccent: 'Blogs',
  posts: [
    {
      title: 'How The Right Furniture Transforms Your Home',
      date: 'Nov 11, 2025',
      excerpt: 'Furniture plays a major role in defining the comfort, look and functionality of any home. The right pieces...',
      href: '/blog/right-furniture-transforms-your-home',
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80'
    }
  ]
};

export const instagramStrip = {
  eyebrow: 'Instagram',
  handle: '@Mahakali',
  images: [
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=300&q=80'
  ]
};
