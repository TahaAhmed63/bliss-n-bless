import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Mukhallat Inspired Perfume",
    tagline: "A Journey Into Opulence and Tradition",
    description: "Step into a world of luxury, culture, and sensuality with our nano-encapsulated Mukhallat Inspired Perfume. A fragrance that takes you on an aromatic journey, blending the richness of traditional Arabic notes with modern elegance. This Oriental masterpiece is a symphony of oud, florals, spices, and sweet notes, creating a luxurious, deep, and balanced scent that connects you to an ancient heritage while offering an experience of pure indulgence.",
    price: 3000,
    
    imageSrc: "/lovable-uploads/New Project (44).png",
    fragranceNotes: {
      top: ["Oud (Agarwood)", "Rose", "Saffron", "Amber"],
      middle: ["Musk", "Sandalwood", "Patchouli"],
      base: ["Vanilla", "Jasmine", "Cedarwood"]
    },
    categories: ["Oriental", "Woody"],
    longevity: "12+ hours",
    sillage: "Heavy",
    occasions: ["Evening", "Special Occasion", "Winter"],
    experience: [
      "Cultural Richness",
      "Opulent Luxury",
      "Sensual Depth",
      "Exotic Mystery",
      "Personal Distinction",
      "Spiritual Connection",
      "Nostalgic Comfort",
      "Enduring Presence",
      "Ceremonial Significance",
      "Intimate Warmth"
    ],
    whyChoose: ["Mukhallat is more than just a fragrance; it's an emotional experience. As it evolves on your skin, it creates an aromatic journey that unfolds slowly, offering a meditative, luxurious sensation that connects you to ancient traditions. Whether worn daily or for special occasions, Mukhallat Inspired Perfume offers a timeless, lasting impression of sumptuous luxury and spiritual richness."],
    variants: [
      {
        id:25,
        name: "Mokhalat *2",
        price: 2500,
        imageSrc: "/lovable-uploads/New Project (44).png",
        description: "A more concentrated version with enhanced oud and incense notes for a deeper, more mysterious experience."
      },
      {
        id: 26,
        name: "Mokhalat *4",
        price: 1500,
        description: "Enriched with rare agarwood and saffron from Kashmir, packaged in a hand-crafted crystal bottle.",
        imageSrc: "/lovable-uploads/New Project (44).png",
      },
     
    ],
    isMensBestSelling: true,
    reviews: [
      {
        name: "Ayesha Khan",
        review: "Absolutely luxurious! The Mukhallat Inspired Perfume lasts all day and truly feels like a journey through tradition and opulence. Highly recommended for special occasions.",
      },
      {
        name: "Imran Siddiqui",
        review: "A deep, spiritual scent that stands out. The oud and incense notes are perfectly balanced. Will buy again!",
      },
      {
        name: "Sarmad Ali",
        review: "Long-lasting and unique. Reminds me of traditional gatherings in Lahore.",
      }
    ]
  },
  {
    id: 2,
    name: "APOM (A Part of Me) Inspired Perfume",
    tagline: "A Fragrance That Evokes Elegance and Intimacy",
    description: "Step into a world of timeless beauty and personal connection with APOM (A Part of Me), a nano-encapsulated fragrance that embodies warmth, sensuality, and sophisticated grace. A perfect balance of bright florals and deep, grounding woods, this scent envelops you in a comforting embrace while offering a luminous, radiant presence.",
    price: 2000 ,
    imageSrc: "/lovable-uploads/New Project (37).png",
    fragranceNotes: {
      top: ["Orange Blossom", "Bergamot", "Neroli"],
      middle: ["Ylang-Ylang", "Jasmine", "Lavender"],
      base: ["Cedarwood", "Patchouli", "Sandalwood"]
    },
    categories: ["Floral", "Woody"],
    longevity: "8-10 hours",
    sillage: "Moderate",
    occasions: ["Daytime", "Spring", "Summer"],
    experience: [
      "Mediterranean Serenity",
      "Sophisticated Elegance",
      "Intimate Warmth",
      "Luminous Optimism",
      "Natural Authenticity",
      "Quiet Confidence",
      "Cultural Appreciation",
      "Refreshing Clarity",
      "Romantic Nostalgia",
      " Timeless Beauty"
    ],
    whyChoose: ["APOM – An Emotional Journey That Evolves With You Feel the blend of lightness and depth, of freshness and warmth, as APOM evolves on your skin. This fragrance becomes a part of you, offering an emotional experience that is vibrant, grounded, and composed, enhancing your natural radiance."],
    reviews: [
      {
        name: "Sadia Malik",
        review: "APOM is my new signature scent! It’s elegant, fresh, and lasts for hours. I get compliments every time I wear it.",
      },
      {
        name: "Bilal Qureshi",
        review: "A beautiful blend of florals and woods. It feels both modern and classic. Perfect for daily wear.",
      }
    ]
  
  },
  {
    id: 3,
    name: "Chanel 5 Inspired Perfume",
    tagline: "The Essence of Timeless Elegance",
    description: "Embrace the iconic sophistication of Chanel No. 5, a fragrance that defines luxury, confidence, and grace. With its signature floral, powdery, and aldehydic scent, this perfume captures the essence of timeless femininity and enduring elegance.",
    price: 2000,
    imageSrc: "/lovable-uploads/New Project (43).png",
    fragranceNotes: {
      top: ["Neroli", "Lemon"],
      middle: ["Jasmine Absolute", "Rose Absolute", "Ylang Ylang"],
      base: ["Sandalwood", "Vetiver", "Vanilla Essential Oil"]
    },
    categories: ["Floral", "Powdery"],
    longevity: "6-8 hours",
    sillage: "Moderate",
    occasions: ["Formal", "Evening", "Special Occasion"],
    experience: [
      " Timeless Elegance",
      "Confident Femininity",
      "Artistic Appreciation",
      "Luxurious Presence",
      " Nostalgic Reverence",
      "Mysterious Allure",
      "Mature Sophistication",
      " Cultural Significance",
      "Composed Poise",
      " Elevated Everyday Moments"
    ],
    whyChoose: ["This perfume is a modern classic—bold yet restrained, timeless yet contemporary. Itsdistinctive aldehydic opening, followed by the delicate floral heart and warm, woody base,creates a multidimensional experience that evolves with confidence, leaving a lasting impression."],
    reviews: [
      {
        name: "Nadia Jamil",
        review: "Chanel 5 Inspired Perfume is pure elegance. The floral notes are divine and it makes me feel so confident.",
      }
    ]
  
  },
  {
    id: 4,
    name: "Miss Dior Inspired Perfume",
    tagline: "Where Timeless Elegance Meets Modern Confidence",
    description: "Step into the world of Miss Dior, a fragrance that encapsulates feminine grace, romantic optimism, and sophistication. Inspired by the iconic scent, this perfume blends floral, citrus, and woody notes to create a balanced composition that is both youthful and timeless.",
    price: 2500,
    imageSrc: "/lovable-uploads/New Project (40).png",
    fragranceNotes: {
      top: ["Bergamot", "Sweet Orange", "Lemon"],
      middle: ["Rose Absolute", "Jasmine Absolute", "Ylang Ylang"],
      base: ["Patchouli", "Sandalwood"]
    },
    categories: ["Floral", "Citrus"],
    longevity: "7-9 hours",
    sillage: "Moderate",
    occasions: ["Daytime", "Spring", "Summer"],
    experience: [
      "Feminine Confidence",
      "Romantic Optimism",
      "Classic Elegance",
      "Youthful Vitality",
      "Poised Composure",
      "Spring-Like Renewal",
      "Parisian Chic",
      "Ladylike Grace",
      "Heritage Appreciation",
      "Delicate Strength"
    ],
    whyChoose: ["Miss Dior Inspired Perfume is more than just a scent—it's an emotional journey. It bridges the gap between traditional femininity and modern independence, enhancing your sense of timeless appeal and ensuring you feel empowered, graceful, and effortlessly chic."],
    reviews: [
      {
        name: "Hira Shah",
        review: "Miss Dior Inspired Perfume is so fresh and feminine. It’s perfect for spring and makes me feel beautiful.",
      },
      {
        name: "Adeel Farooq",
        review: "Bought this for my wife and she adores it. The floral notes are just right and it lasts all day.",
      },
      {
        name: "Mahnoor Aziz",
        review: "Very elegant and light. I wear it to work every day.",
      },
      {
        name: "Shoaib Akhtar",
        review: "Gifted to my sister, she loved the scent and the packaging!",
      }
    ]
  },
  {
    id: 5,
    name: "Kurdijan Inspired Perfume",
    tagline: "A Fragrance of Warmth, Mystery, and Empowerment",
    description: "Step into a world where luxury, sophistication, and ethereal beauty blend harmoniously. Kurdijan is a fragrance that captures the essence of Middle Eastern heritage, offering a rich, complex experience that evokes feelings of warmth, strength, and deep connection to nature.",
    price: 1800 ,
    imageSrc: "/lovable-uploads/New Project (41).png",
    fragranceNotes: {
      top: ["Saffron", "Bergamot", "Bitter Almond"],
      middle: ["Rose Absolute", "Jasmine Absolute", "Ylang Ylang"],
      base: ["Cedarwood", "Amber", "Fir Balsam"]
    },
    categories: ["Oriental", "Woody"],
    longevity: "10-12 hours",
    sillage: "Heavy",
    occasions: ["Evening", "Winter", "Special Occasion"],
    experience: [
      "Warmth and Comfort",
      "Mystery and Intrigue",
      "Strength and Empowerment",
      "Connection to Nature",
      "Exoticism and Romance",
      "Nostalgia and Cultural Pride"
    ],
    whyChoose: ["Kurdijan is not just a fragrance; it’s an experience that connects you to culture, nature, and your inner strength. It evolves with every wear, offering warmth, richness, and deep emotional resonance."],
    reviews: [
      {
        name: "Zainab Raza",
        review: "Kurdijan Inspired Perfume is warm, mysterious, and empowering. I love the Middle Eastern touch!",
      },
      {
        name: "Usman Tariq",
        review: "A unique scent that stands out. The saffron and amber are my favorite notes. Highly recommended.",
      },
      {
        name: "Aqsa Noor",
        review: "Very rich and long-lasting. Reminds me of my travels to the Middle East.",
      }
    ]
  
  },
  {
    id: 6,
    name: "Noir Extreme Inspired Perfume",
    tagline: "Embrace the Boldness of Opulence and Intrigue",
    description: "Indulge in the luxurious complexity of Noir Extreme, a fragrance that blends spicy, woody, and sweet notes to create an unforgettable scent experience. Perfectly balanced between boldness and elegance, this fragrance is for those who dare to stand out and embrace their inner allure.",
    price:  1800,
    imageSrc: "/lovable-uploads/noir extreme.png",
    fragranceNotes: {
      top: ["Bergamot", "Cardamom", "Saffron"],
      middle: ["Rose Absolute", "Nutmeg", "Cinnamon", "Oud"],
      base: ["Amber Absolute", "Vanilla Absolute", "Musk"]
    },
    categories: ["Spicy", "Woody"],
    longevity: "10-12 hours",
    sillage: "Strong",
    occasions: ["Evening", "Winter", "Formal"],
    experience: [
      "Confidence and Allure",
      "Sensual Sophistication",
      "Mysterious Intrigue",
      "Luxurious Indulgence",
      "Evening Elegance",
      "Masculine Warmth",
      "Nostalgic Comfort",
      "Bold Individuality",
      "Contemplative Mood",
      "Seasonal Coziness"
    ],
    whyChoose: ["Noir Extreme brings together sweet and spicy, light and dark elements—creating a powerful emotional experience. It enhances your presence with luxury, depth, and a bold, unforgettable allure."],
    reviews: [
      {
        name: "Rabia Yousaf",
        review: "Noir Extreme Inspired Perfume is bold and luxurious. Perfect for evenings and special events.",
      }
    ]
  },
  {
    id: 7,
    name: "Hugo Boss for Men Inspired Perfume",
    tagline: "A Classic Scent of Confidence and Sophistication",
    description: "Step into a world of elegance, strength, and timeless appeal with the Hugo Boss Inspired Perfume for Men. This fragrance combines fresh, woody, and spicy notes to create a sophisticated yet energizing experience. Perfect for the modern man who exudes confidence and self-assurance.",
    price: 2500,
    imageSrc: "/lovable-uploads/New Project (39).png",
    fragranceNotes: {
      top: ["Green Apple", "Bergamot", "Grapefruit"],
      middle: ["Lavender", "Cinnamon", "Clove"],
      base: ["Vetiver", "Patchouli", "Amber"]
    },
    categories: ["Fresh", "Woody"],
    longevity: "8-10 hours",
    sillage: "Moderate",
    occasions: ["Daytime", "Office", "Casual"],
    experience: [
      "Timeless Confidence",
      "Refined Sophistication",
      "Energizing Freshness",
      "Masculine Warmth",
      "Aromatic Elegance",
      "Balanced Complexity",
      "Classic Appeal",
      "Effortless Charm",
      "Lasting Impression"
    ],
    whyChoose: ["This fragrance defines you with timeless elegance, sophisticated masculinity, and effortless charm, ensuring you leave a strong, memorable impression wherever you go."],
    reviews: [
      {
        name: "Ali Raza",
        review: "Hugo Boss for Men Inspired Perfume is fresh, masculine, and lasts all day. My go-to for work!",
      },
      {
        name: "Shahbaz Ahmed",
        review: "A classic scent that never disappoints. The woody notes are just perfect.",
      },
      {
        name: "Hassan Tariq",
        review: "Very energizing and sophisticated. I use it for all my meetings.",
      }
    ]

  },
  {
    id: 8,
    name: "Hugo Boss for Women Inspired Perfume",
    tagline: "A Fragrance of Elegance, Strength, and Timeless Beauty",
    description: "Embrace the elegance, confidence, and sophistication that define the modern woman with the Hugo Boss Inspired Perfume for Women. This nano-encapsulated fragrance combines floral, fruity, and woody notes to create a captivating and empowering scent.",
    price: 2500 ,
    imageSrc: "/lovable-uploads/image31.png",
    fragranceNotes: {
      top: ["Green Apple", "Grapefruit", "Bergamot"],
      middle: ["Rose", "Jasmine", "Lily of the Valley"],
      base: ["Cedarwood", "Patchouli", "Musk"]
    },
    categories: ["Floral", "Fruity"],
    longevity: "7-9 hours",
    sillage: "Moderate",
    occasions: ["Daytime", "Office", "Spring"],
    experience: [
      "Timeless Elegance",
      "Confidence and Grace",
      "Energizing Freshness",
      "Sensual Warmth",
      "Floral Femininity",
      "Versatile Luxury",
      "Effortless Charm",
      "A Lasting Impression"
    ],
    whyChoose: ["Hugo Boss for Women captures your essence—elegance, strength, and beauty—while offering a luxurious, empowering fragrance perfect for any occasion."],
    isWomensBestSelling: true,
    reviews: [
      {
        name: "Sana Mir",
        review: "Hugo Boss for Women Inspired Perfume is elegant and empowering. I feel confident every time I wear it.",
      }
    ]
  },

  {
    id: 9,
    name: "Noir Inspired Perfume",
    tagline: "A Fragrance of Mystery, Elegance, and Unforgettable Allure",
    description: "Step into the world of sophistication, mystery, and sensuality with the Noir Inspired Perfume. This fragrance combines spicy, woody, and amber notes to create a captivating, warm, and unforgettable scent. Perfect for those who wish to make a bold statement and leave a lasting impression.",
    price: 2000,
    imageSrc: "/lovable-uploads/New Project (42).png",
    fragranceNotes: {
      top: ["Bergamot", "Pink Pepper", "Cardamom"],
      middle: ["Rose", "Jasmine", "Cinnamon"],
      base: ["Amber", "Sandalwood", "Musk"]
    },
    categories: ["Spicy", "Woody"],
    longevity: "10-12 hours",
    sillage: "Strong",
    occasions: ["Evening", "Winter", "Formal"],
    experience: [
      "Mystical Allure",
      "Timeless Elegance",
      "Sensual Warmth",
      "Bold Intrigue",
      "Effortless Sophistication",
      "Unforgettable Presence",
      "Feminine Mystery",
      "Emotional Depth"
    ],
    whyChoose: ["Noir is a statement of elegance, mystery, and sensuality. It becomes part of you with every wear, enveloping you in an unforgettable trail of luxury and emotional depth."],
    reviews: [
      {
        name: "Farah Naz",
        review: "Noir Inspired Perfume is mysterious and elegant. I love the spicy and woody notes!",
      },
      {
        name: "Junaid Alam",
        review: "A bold scent that makes a statement. Perfect for winter evenings.",
      },
      {
        name: "Adeel Shafqat",
        review: "Very unique and memorable. My friends always ask about it.",
      }
    ]
  
  },
  {
    id: 10,
    name: "Jasmine Attar",
    tagline: "A floral breeze of serenity.",
    description: "Immerse yourself in the calming and sweet embrace of jasmine. This attar offers a traditional scent crafted with purity, ideal for daily wear and spiritual occasions.",
    price: 1000,
    imageSrc: "/lovable-uploads/ether.png",
    fragranceNotes: {
      top: ["Jasmine Buds"],
      middle: ["Pure Jasmine Oil"],
      base: ["Musk"]
    },
    categories: ["Floral"],
    longevity: "8-10 hours",
    sillage: "Moderate",
    occasions: ["Daily", "Spiritual", "Casual"],
    experience: [
      "Soothing Floral Harmony",
      "Tranquil Ambience",
      "Natural Purity",
      "Elegant Simplicity"
    ],
    whyChoose: [
      "Crafted from pure jasmine extracts, this attar is ideal for those who appreciate timeless floral elegance in a natural oil-based form."
    ],
    reviews: [
      {
        name: "Bushra Anwar",
        review: "Jasmine Attar is so calming and pure. The floral scent is perfect for daily wear.",
      }
    ]
  },
  {
    id: 11,
    name: "Car Air Freshener",
    tagline: "Refresh your ride.",
    description: "Transform your car into a fragrant haven. This freshener blends energizing and comforting notes for a long-lasting, refreshing driving experience.",
    price: 1500,
    imageSrc: "/lovable-uploads/carairfreshner.png",
    fragranceNotes: {
      top: ["Citrus Zest", "Green Apple"],
      middle: ["Ocean Breeze", "Lavender"],
      base: ["Cedarwood", "Amber"]
    },
    categories: ["Fresh", "Citrus"],
    longevity: "5-7 days",
    sillage: "Light",
    occasions: ["Driving", "Daily Use"],
    experience: [
      "Instant Freshness",
      "Clean Ambience",
      "Crisp Energy",
      "Long-Lasting Fragrance"
    ],
    whyChoose: [
      "Designed specifically for automotive environments, it eliminates odors and provides a pleasant, uplifting atmosphere."
    ],
    reviews: [
      {
        name: "Fahad Majeed",
        review: "Car Air Freshener keeps my car smelling fresh for days. The citrus notes are very uplifting!",
      },
      {
        name: "Nimra Aslam",
        review: "Easy to use and long-lasting. My family loves the clean scent in our car.",
      },
      {
        name: "Areeba Shahid",
        review: "Great for long drives. The scent is not overpowering and lasts a week.",
      }
    ]
  },
  {
    id: 12,
    name: "Ghilaaf-e-Kaaba Attar",
    tagline: "Sacred essence of tradition.",
    description: "A spiritual scent inspired by the sacred Ghilaaf-e-Kaaba. With deep, resinous notes and a touch of floral elegance, it's perfect for prayer and reflection.",
    price: 1000,
    imageSrc: "/lovable-uploads/gluf e kaaba.png",
    fragranceNotes: {
      top: ["Oudh", "Frankincense"],
      middle: ["Rose", "Myrrh"],
      base: ["Amber", "Musk"]
    },
    categories: ["Spiritual", "Resinous"],
    longevity: "12-14 hours",
    sillage: "Strong",
    occasions: ["Prayer", "Religious Events"],
    experience: [
      "Sacred Serenity",
      "Emotional Connection",
      "Timeless Rituals",
      "Spiritual Upliftment"
    ],
    whyChoose: [
      "An attar that echoes the spiritual aura of the Holy Kaaba — powerful, calming, and rooted in sacred tradition."
    ],
    reviews: [
      {
        name: "Shazia Parveen",
        review: "Ghilaaf-e-Kaaba Attar is truly spiritual. It’s perfect for prayer and reflection.",
      }
    ]
  },
  {
    id: 13,
    name: "Humidifier",
    tagline: "Breathe better, live better.",
    description: "A smart humidifier designed to improve air quality while optionally diffusing your favorite essential oils or fragrances. Ideal for homes and workspaces.",
    price: 2500,
    imageSrc: "/lovable-uploads/humidifier.png",
    fragranceNotes: {
      top: [],
      middle: [],
      base: []
    },
    categories: ["Electronic", "Wellness"],
    longevity: "Continuous (as per water level)",
    sillage: "Varies with use",
    occasions: ["Home", "Office", "Sleep"],
    experience: [
      "Clean Moisture Flow",
      "Relaxed Breathing",
      "Soothing Environment",
      "Fragrance Diffusion (Optional)"
    ],
    whyChoose: [
      "Improves humidity and can double as an aroma diffuser — great for dry climates and respiratory comfort."
    ],
    reviews: [
      {
        name: "Adeel Hussain",
        review: "The humidifier works great and the optional fragrance feature is a bonus. My room feels so much better!",
      },
      {
        name: "Mehwish Rauf",
        review: "Easy to use and very effective. I use it every night for better sleep.",
      },
      {
        name: "Sundas Iqbal",
        review: "Very quiet and efficient. The air feels fresher in my room.",
      }
    ]
  },
  {
    id: 14,
    name: "Channel 5 Pocket Perfume",
    tagline: "Luxury in your pocket.",
    description: "Inspired by the iconic Chanel No.5, this pocket perfume offers an elegant floral aldehyde blend, made convenient for daily use on-the-go.",
    price: 700,
    imageSrc: "/lovable-uploads/pocket perfume.png",
    fragranceNotes: {
      top: ["Aldehydes", "Neroli", "Ylang-Ylang"],
      middle: ["Jasmine", "Rose", "Lily of the Valley"],
      base: ["Vetiver", "Sandalwood", "Vanilla"]
    },
    categories: ["Floral", "Classic"],
    longevity: "6-8 hours",
    sillage: "Moderate",
    occasions: ["Formal", "Daily", "Travel"],
    experience: [
      "Chic Sophistication",
      "Classic Feminine Elegance",
      "Refined Luxury",
      "Effortless Glamour"
    ],
    whyChoose: [
      "An elegant, portable version of a timeless fragrance for women who appreciate the essence of luxury."
    ],
    reviews: [
      {
        name: "Samina Waqar",
        review: "Channel 5 Pocket Perfume is so convenient and smells just like the original. Perfect for my purse!",
      }
    ]
  },
  {
    id: 15,
    name: "Hugo Boss for Women Pocket Perfume",
    tagline: "Empower your essence.",
    description: "A refreshing, modern scent for the confident woman. Fruity, floral, and woody notes make it perfect for everyday strength and elegance.",
    price: 700,
    imageSrc: "/lovable-uploads/woman pocket perfume.png",
    fragranceNotes: {
      top: ["Green Apple", "Mandarin"],
      middle: ["White Flowers", "Freesia"],
      base: ["Cedarwood", "Amber", "Musk"]
    },
    categories: ["Fruity", "Floral", "Woody"],
    longevity: "5-7 hours",
    sillage: "Moderate",
    occasions: ["Office", "Casual", "Day Out"],
    experience: [
      "Confident Charm",
      "Fresh Sophistication",
      "Modern Femininity",
      "Subtle Empowerment"
    ],
    whyChoose: [
      "Tailored for the modern woman — compact, refreshing, and bold enough to leave a lasting impression."
    ],
    reviews: [
      {
        name: "Nimra Zafar",
        review: "Hugo Boss for Women Pocket Perfume is fresh and empowering. I love the fruity notes!",
      },
      {
        name: "Waleed Akram",
        review: "Perfect for on-the-go. The scent is long-lasting and very pleasant.",
      },
      {
        name: "Aqib Javed",
        review: "Compact and easy to carry. Smells great and lasts for hours.",
      }
    ]
  }

];

export const getUniqueCategories = () => {
  const allCategories: string[] = [];
  
  products.forEach(product => {
    product.categories.forEach(category => {
      if (!allCategories.includes(category)) {
        allCategories.push(category);
      }
    });
  });
  
  return allCategories;
};