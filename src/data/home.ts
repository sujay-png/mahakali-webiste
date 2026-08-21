// Content for the "/" home page only. Each section component receives
// its slice of this object as a prop, so copy edits happen in one place
// and never inside markup.

export const heroSlides = [
  {
    eyebrow: 'Mahakali Home Furnitures',
    title: 'Furniture that transforms',
    titleAccent: 'the way you live',
    copy: 'At Mahakali Udupi, every sofa, mattress and furnishing is designed with comfort, elegance and lasting quality — so your home feels as beautiful as it looks.',
    ctaPrimary: { label: 'Explore Collection', href: '/products' },
    ctaSecondary: { label: 'Visit Our Showroom', href: '/contact' },
    image: {
      src: '/images/hero-01.png',
      alt: 'Mahakali Furnitures'
    }
  },
  {
    eyebrow: 'Crafted in Udupi since 1997',
    title: 'Premium comfort with',
    titleAccent: 'timeless style',
    copy: 'Handcrafted sofas, wooden cots and curated curtains — modern designs meeting trusted craftsmanship for over 28 years.',
    ctaPrimary: { label: 'Explore Collection', href: '/products' },
    ctaSecondary: { label: 'Visit Our Showroom', href: '/contact' },
    image: {
      src: '/images/hero-02.png',
      alt: 'Mahakali Furnitures'
    }
  },
  {
    eyebrow: 'Showrooms in Udupi & Kundapura',
    title: 'Spaces deserve furniture',
    titleAccent: 'with character',
    copy: 'From seating to dining and rest, we bring comfort, durability and beauty together for living spaces you will love coming home to.',
    ctaPrimary: { label: 'Explore Collection', href: '/products' },
    ctaSecondary: { label: 'Visit Our Showroom', href: '/contact' },
    image: {
      src: '/images/hero-03.png',
      alt: 'Mahakali Furnitures'
    }
  }
];

export const topCategories = {
  eyebrow: 'Collections',
  title: 'Furniture for every room in the house.',
  viewAllHref: '/products',
  items: [
    { name: 'Upholstered', count: 'Collection', href: '/products/upholstered', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80' },
    { name: 'Wooden Sofa', count: 'Collection', href: '/products/wooden-sofa', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Wooden Cot', count: 'Collection', href: '/products/wooden-cot', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Wooden Jhoola', count: 'Collection', href: '/products/wooden-jhoola', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Dining + Glass Top', count: 'Collection', href: '/products/wooden-dining-glass-4-3', image: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Tepoy', count: 'Collection', href: '/products/tepoy', image: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&w=1200&q=80' }
  ]
};

export const promoStrip = [
  {
    tag: 'Premium Tepoy',
    title: 'Elegant Tepoy Collections',
    cta: { label: 'Shop Now', href: '/products/tepoy' },
    theme: 'blush',
    image: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&w=500&q=80'
  },
  {
    tag: 'Hot Sale',
    title: 'Premium Sofa Sale Collections',
    cta: { label: 'Discover Now', href: '/products/upholstered' },
    theme: 'sand',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80'
  },
  {
    tag: 'Best Cot',
    title: 'Premium Cot Collections',
    cta: { label: 'Discover Now', href: '/products/wooden-cot' },
    theme: 'sky',
    image: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=500&q=80'
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
  { icon: 'truck', title: 'Free Delivery', copy: 'For any order' },
  { icon: 'refresh', title: 'No Refund', copy: 'There is no refund' },
  { icon: 'shield', title: 'Safe Payment', copy: '100% secure payment' },
  { icon: 'headset', title: '9:30 AM – 7:00 PM', copy: 'Feel free to call us' }
];

export const whyChooseUs = {
  eyebrow: 'Why Choose Us',
  title: 'Trusted for 28+ years in comfort, style & quality',
  copy:
    "Mahakali Sofas & Curtains is Udupi's most trusted destination for premium sofas, mattresses, curtains and custom furniture. We provide long-lasting quality, modern designs, and a smooth shopping experience trusted by thousands of customers.",
  image: {
    src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
    alt: 'Beige corner sofa set styled in a bright living room'
  },
  points: [
    { icon: 'medal', title: '28+ Years Of Trust', copy: 'Serving Udupi since 1997 with top-quality sofas, mattresses, curtains and custom furniture trusted by thousands of happy customers.' },
    { icon: 'tag', title: 'Affordable Premium Quality', copy: 'We offer modern, elegant and durable designs at prices that fit every budget — without compromising on material quality or comfort.' },
    { icon: 'van', title: 'Home Delivery Available', copy: 'Hassle-free delivery and installation on request, ensuring your furniture is safely set up exactly the way you want.' }
  ]
};

export const aboutSection = {
  eyebrow: 'About Us',
  title: 'Mahakali Sofas & Curtains',
  titleAccent: "Udupi's Most Trusted Name",
  titleTail: 'For Comfort, Elegance & Timeless Living.',
  copy:
    "For over 28 years, we have been enhancing homes with premium sofas, cosy mattresses, beautiful curtains and customised furniture that perfectly blend comfort and style. Located near Adarsh Hospital in Brahmagiri, we are your reliable destination for quality home furnishings. Our products are crafted to last and our guidance ensures you choose what suits your lifestyle best.",
  bullets: [
    'Streamlined shopping experience',
    'Affordable modern design', 
    'Competitive price & easy to shop',
    'We made awesome products'
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
  eyebrow: 'Best Deal',
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
    items: [] as { name: string; rating: number; price: string; oldPrice?: string; image: string }[],
    emptyMessage: 'No best seller products found'
  },
  topRated: {
    title: 'Top Rated',
    items: [
      { name: 'D101', rating: 5, price: '₹21,000.00', image: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=200&q=80' },
      { name: 'Two Seater C Bend Leg', rating: 5, price: '₹15,600.00', image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=200&q=80' },
      { name: '3 Seater Bed Cum Sofa', rating: 4, price: '₹42,000.00', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=200&q=80' }
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
    { name: 'Shilpa Bhat', role: 'Customer', rating: 5, quote: 'I recently purchased a sofa set from them and the quality is excellent. The finish, comfort and fabric are exactly as shown. Their team kept me updated till delivery. Truly a satisfying experience.' },
    { name: 'Vishwanath Nayak', role: 'Customer', rating: 5, quote: 'Very good service and genuine pricing. I ordered a customised TV unit and the workmanship was perfect. The installation team was polite and cooperative. I will surely recommend them to others.' },
    { name: 'Raghavendra Bhat', role: 'Customer', rating: 4, quote: 'I loved their collection and how they guided me with measurements for my living room. They delivered on time and the furniture looks premium. I am very happy with the purchase and will surely buy again.' }
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
