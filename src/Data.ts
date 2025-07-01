// src/data/sourceData.ts

// src/data/sourceData.ts    <img src="https://rengatrading.com/bull/images/contact-us-banner.jpg" alt="Contact Us" className="w-full h-[300px] object-cover" />

import type { source } from "./Models/Model";
const serverurl = "http://localhost"; // Adjust the URL as needed
export const sourceData: source = {
    logo: {
        bullLogo: serverurl+"/bull-machine-logo.png",
        CustomerLogo: serverurl+"/client_logo.png",
    },
    img: {
        contact: serverurl+"/contact-us-banner.jpg",
    },
  
  banner: [
    {
      id: 1,
      image: serverurl+"/banner/banner021.webp",
      title: "Welcome to Our Site",
      description: "This is the first banner.",
      buttonText: "Learn More",
      buttonLink: "/about",
      altText: "Banner Image 1",
      isActive: true
    },
    {
      id: 2,
      image: serverurl+"/banner/grandia-banner.webp",
      title: "Our Services",
      description: "Check out what we offer.",
      buttonText: "Services",
      buttonLink: "/services",
      altText: "Banner Image 2",
      isActive: true
    },
    {
      id: 2,
      image: serverurl+"/banner/super-smart-new-banner.webp",
      title: "Our Services",
      description: "Check out what we offer.",
      buttonText: "Services",
      buttonLink: "/services",
      altText: "Banner Image 2",
      isActive: true
    }
  ]
};
