import {Product, Category} from './models';


export const CATEGORY_LIST: Category[] = [
  {
    id: 1,
    name: 'Gaming Laptops',
    image: "https://assets2.rockpapershotgun.com/asus-hp-gaming-laptops.jpg/BROK/resize/1920%3E/format/jpg/quality/80/asus-hp-gaming-laptops.jpg",
    description: "Take your fun on the go with laptops for PC gaming. We carry multiple brands so you can find the best gaming laptop for you.",
    products: []
  },
  {
    id: 2,
    name: 'Office laptops',
    image: "https://assets.entrepreneur.com/content/3x2/2000/20160318133803-email-gmail-internet-computer.jpeg",
    description: "For surfing websites and using microsoft office apps, viewing YouTube, use Office components etc.",
    products: []
  },
  {
    id: 3,
    name: 'Computers',
    image: "https://alsi.kz/upload/medialibrary/378/378303c1108a2067d5bec384131ab4d5.gif",
    description: "CyberPowerPC is a trusted gaming computer brand. Our gaming system is custom built which includes PC with legendary performance.",
    products: []
  },
  {
    id: 4,
    name: 'Pencils',
    image: "http://g01.a.alicdn.com/kf/HTB1sCdGNpXXXXbMXVXXq6xXFXXXo/228912271/HTB1sCdGNpXXXXbMXVXXq6xXFXXXo.jpg?size=158657&height=579&width=900&hash=b3cf4360141363761f82856a50c3c106",
    description: "High-quality pencils make a difference. In the classroom, the art studio and others.",
    products: []
  },
  {
    id: 5,
    name: 'Flash drives',
    image: "https://allgifts.kz/assets/images/products/3054/411a664c5b7fa10afe01c3280f0b782c96a6074b.jpg",
    description: "Buy a USB flash drive online at Best Buy for the best selection and pricing options.",
    products: []
  },
  {
    id: 6,
    name: 'Smartphones',
    image: "https://fdn.gsmarena.com/imgroot/news/20/09/top-10-us-smartphones-first-week-september/-1200w2/gsmarena_000.jpg",
    description: "Shop Best Buy for cell phones. Text, call and browse the web with mobile phones from popular brands.",
    products: []
  }
];

export const PRODUCT_LIST: Product[] = [
  {
    id: 1,
    name: "ASUS TUF TUF506IU-ES74 Gaming A15",
    price: 300,
    images: ["https://forcecom.kz/upload/iblock/cdb/cdb3175035e247d4ce8e2314eb8af6fd.jpg", "https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61Wvs4LvE8L._AC_SL1000_.jpg"],
    full_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    short_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 2,
    name: "ASUS F512JA-AS34 VivoBook 15",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"],
    full_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    short_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 3,
    name: "ASUS Chromebook",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/61Wvs4LvE8L._AC_SL1000_.jpg"],
    full_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    short_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 4,
    name: "ASUS ZenBook Duo UX481",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81PGX7kO4kL._AC_SL1500_.jpg"],
    full_description: "14” FHD NanoEdge Bezel Touch Display, Intel Core i7-10510U CPU, 8GB RAM, 512GB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Home, Celestial Blue, UX481FA-DB71T",
    short_description: "14” FHD NanoEdge Bezel Touch Display, Intel Core i7-10510U CPU, 8GB RAM, 512GB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Home, Celestial Blue, UX481FA-DB71T",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 5,
    name: "ROG Zephyrus G15",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81ef5sbZznL._AC_SL1500_.jpg"],
    full_description: "Ultra Slim Gaming Laptop, 15.6” 144Hz FHD Display, GeForce GTX 1660 Ti Max-Q, AMD Ryzen 7 4800HS, 16GB DDR4, 1TB PCIe NVMe SSD, Gig+ Wi-Fi 6, Windows 10 Home, GA502IU-ES76",
    short_description: "Ultra Slim Gaming Laptop, 15.6” 144Hz FHD Display, GeForce GTX 1660 Ti Max-Q, AMD Ryzen 7 4800HS, 16GB DDR4, 1TB PCIe NVMe SSD, Gig+ Wi-Fi 6, Windows 10 Home, GA502IU-ES76",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 6,
    name: "ASUS TUF TUF506IU-ES74 Gaming A15",
    price: 300,
    images: ["https://forcecom.kz/upload/iblock/cdb/cdb3175035e247d4ce8e2314eb8af6fd.jpg"],
    full_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    short_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 7,
    name: "ASUS F512JA-AS34 VivoBook 15",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"],
    full_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    short_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 8,
    name: "ASUS Chromebook",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/61Wvs4LvE8L._AC_SL1000_.jpg"],
    full_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    short_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 9,
    name: "ASUS TUF TUF506IU-ES74 Gaming A15",
    price: 300,
    images: ["https://forcecom.kz/upload/iblock/cdb/cdb3175035e247d4ce8e2314eb8af6fd.jpg"],
    full_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    short_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 10,
    name: "ASUS F512JA-AS34 VivoBook 15",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"],
    full_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    short_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 11,
    name: "ASUS Chromebook",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/61Wvs4LvE8L._AC_SL1000_.jpg"],
    full_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    short_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 12,
    name: "ASUS ZenBook Duo UX481",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81PGX7kO4kL._AC_SL1500_.jpg"],
    full_description: "14” FHD NanoEdge Bezel Touch Display, Intel Core i7-10510U CPU, 8GB RAM, 512GB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Home, Celestial Blue, UX481FA-DB71T",
    short_description: "14” FHD NanoEdge Bezel Touch Display, Intel Core i7-10510U CPU, 8GB RAM, 512GB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Home, Celestial Blue, UX481FA-DB71T",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 13,
    name: "ROG Zephyrus G15",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81ef5sbZznL._AC_SL1500_.jpg"],
    full_description: "Ultra Slim Gaming Laptop, 15.6” 144Hz FHD Display, GeForce GTX 1660 Ti Max-Q, AMD Ryzen 7 4800HS, 16GB DDR4, 1TB PCIe NVMe SSD, Gig+ Wi-Fi 6, Windows 10 Home, GA502IU-ES76",
    short_description: "Ultra Slim Gaming Laptop, 15.6” 144Hz FHD Display, GeForce GTX 1660 Ti Max-Q, AMD Ryzen 7 4800HS, 16GB DDR4, 1TB PCIe NVMe SSD, Gig+ Wi-Fi 6, Windows 10 Home, GA502IU-ES76",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 14,
    name: "ASUS TUF TUF506IU-ES74 Gaming A15",
    price: 300,
    images: ["https://forcecom.kz/upload/iblock/cdb/cdb3175035e247d4ce8e2314eb8af6fd.jpg"],
    full_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    short_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 15,
    name: "ASUS F512JA-AS34 VivoBook 15",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"],
    full_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    short_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 16,
    name: "ASUS Chromebook",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/61Wvs4LvE8L._AC_SL1000_.jpg"],
    full_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    short_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 17,
    name: "ASUS TUF TUF506IU-ES74 Gaming A15",
    price: 300,
    images: ["https://forcecom.kz/upload/iblock/cdb/cdb3175035e247d4ce8e2314eb8af6fd.jpg"],
    full_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    short_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 18,
    name: "ASUS F512JA-AS34 VivoBook 15",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"],
    full_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    short_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 19,
    name: "ASUS Chromebook",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/61Wvs4LvE8L._AC_SL1000_.jpg"],
    full_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    short_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 20,
    name: "ASUS ZenBook Duo UX481",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81PGX7kO4kL._AC_SL1500_.jpg"],
    full_description: "14” FHD NanoEdge Bezel Touch Display, Intel Core i7-10510U CPU, 8GB RAM, 512GB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Home, Celestial Blue, UX481FA-DB71T",
    short_description: "14” FHD NanoEdge Bezel Touch Display, Intel Core i7-10510U CPU, 8GB RAM, 512GB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Home, Celestial Blue, UX481FA-DB71T",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 21,
    name: "ROG Zephyrus G15",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81ef5sbZznL._AC_SL1500_.jpg"],
    full_description: "Ultra Slim Gaming Laptop, 15.6” 144Hz FHD Display, GeForce GTX 1660 Ti Max-Q, AMD Ryzen 7 4800HS, 16GB DDR4, 1TB PCIe NVMe SSD, Gig+ Wi-Fi 6, Windows 10 Home, GA502IU-ES76",
    short_description: "Ultra Slim Gaming Laptop, 15.6” 144Hz FHD Display, GeForce GTX 1660 Ti Max-Q, AMD Ryzen 7 4800HS, 16GB DDR4, 1TB PCIe NVMe SSD, Gig+ Wi-Fi 6, Windows 10 Home, GA502IU-ES76",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 22,
    name: "ASUS TUF TUF506IU-ES74 Gaming A15",
    price: 300,
    images: ["https://forcecom.kz/upload/iblock/cdb/cdb3175035e247d4ce8e2314eb8af6fd.jpg"],
    full_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    short_description: "Gaming Laptop, 15.6” 144Hz Full HD IPS-Type, AMD Ryzen 7 4800H, GeForce GTX 1660 Ti, 16GB DDR4, 512GB PCIe SSD, 90WHr Battery, RGB Backlit KB, Windows 10 Home",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 23,
    name: "ASUS F512JA-AS34 VivoBook 15",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg"],
    full_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    short_description: "Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray",
    rating: 9.2,
    category: null,
    comments: []
  },
  {
    id: 24,
    name: "ASUS Chromebook",
    price: 300,
    images: ["https://images-na.ssl-images-amazon.com/images/I/61Wvs4LvE8L._AC_SL1000_.jpg"],
    full_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    short_description: "4GB RAM 16GB eMMC Flash Memory Gray",
    rating: 9.2,
    category: null,
    comments: []
  }
];

