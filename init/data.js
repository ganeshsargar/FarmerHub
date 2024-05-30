const sampleListings = [
  {
    farmer_Name: "Ganesh Sargar",
    title: "Ploughing",
    description:
      "Plowing is the process of turning over the upper layer of soil to bring fresh nutrients to the surface and bury weeds.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/180646489/photo/subsistence-farmer-ploughing-with-a-pair-of-oxen.jpg?s=612x612&w=0&k=20&c=hm2rWyMOvnkZ175huHCBJCjWSs3vLYNSXcktV-Aee5Q=",
    },
    price: 1500,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Malibu",
    country: "United States",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Sowing",
    description:
      "Sowing involves planting seeds in the ground to grow crops. It can be done by hand or using machinery.",
  
    image: {
      filename: "listingimage",
      url: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSyYhGi2Pi0e__np5Ki7BF58Qlyb7BgyU7zdRSU4MwGUs_LWnDFuOzrsNe0txb7lTau",
    },
    
    price: 1200,
    no_of_emp: 2,
    no_of_hours: 6,
    location: "New York City",
    country: "United States",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Crop Irrigation",
    description:
      "Sowing involves planting seeds in the ground to grow crops. It can be done by hand or using machinery.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/638155104/photo/water-sprinklers.jpg?s=2048x2048&w=is&k=20&c=jGKxyq0TQqgFPCXK4jYs4bxUW92oMFsIE3mp0ENJ5II=",
    },
    price: 1000,
    no_of_emp: 4,
    no_of_hours: 6,
    location: "Aspen",
    country: "United States",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Weeding",
    description:
      "Weeding involves removing unwanted plants (weeds) that compete with crops for nutrients, water, and sunlight.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1384947055/photo/young-man-hands-wearing-garden-gloves-removing-and-hand-pulling-dandelions-weeds-plant.jpg?s=612x612&w=0&k=20&c=J7ZuTsFF7QIoTzPXJ-nUJPJ1IUSI0MS7It7Ylk94V-c=",
    },
    price: 2500,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Florence",
    country: "Italy",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Harvesting",
    description:
      "Harvesting is the process of gathering mature crops from the fields.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/491578922/photo/man-touching-golden-heads-of-wheat-while-walking-through-field.jpg?s=612x612&w=0&k=20&c=n0v5dpb2kABiFQGvDRxpTBVqv04MSJEL0hqDJ2t7EaA=",
    },
    price: 800,
    no_of_emp: 7,
    no_of_hours: 6,
    location: "Portland",
    country: "United States",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Threshing",
    description:
      "Threshing involves separating grains from the harvested plants, typically using a threshing machine.",

    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1553718558/photo/senior-man-and-woman-work-together-with-local-tools-to-get-rice-grain-and-use-traditional.jpg?s=612x612&w=0&k=20&c=quBy1ArLWqodL9qk6ue1shMgZmGolmL5s-RsUJ-haOE=",
    },
    price: 2000,
    no_of_emp: 10,
    no_of_hours: 6,
    location: "Cancun",
    country: "Mexico",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Fertilizing",
    description:
      "Fertilizing involves adding nutrients to the soil to promote healthy plant growth.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/959697442/photo/farmer-giving-granulated-fertilizer-to-young-tomato-plants.jpg?s=612x612&w=0&k=20&c=4sewLXboXwTJY9kAXcyjw0GAwN33XzEGVjln597d_aE=",
    },
    price: 900,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Mulching",
    description:
      "Mulching is the application of organic or inorganic material to the soil surface to conserve moisture and improve fertility.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1346470845/photo/composting-organic-waste-for-soil-enrichment.jpg?s=612x612&w=0&k=20&c=QbvwZKD283SuqK5ojUy1Cpn_7IUovVUgwp9xiv4VbSc=",
    },
    price: 3500,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Los Angeles",
    country: "United States",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Pruning",
    description:
      "Pruning involves cutting away dead or overgrown branches to promote healthy plant growth.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/545981930/photo/pruning-shears.jpg?s=612x612&w=0&k=20&c=c3NFhSrLByaSLBfwiO3uT6Il5Sef7rb3D6l6rSi_y4E=",
    },
    price: 3000,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Grafting",
    description:
      "Grafting is a technique where tissues from one plant are inserted into another to grow together.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1298628752/photo/apple-tree-grafting-close-up.jpg?s=612x612&w=0&k=20&c=qcqCfNnxaIEGkZiLqm9o7faXIFKB4xAvSHO6lWNwUEU=",
    },
    price: 4000,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Pollination",
    description:
      "Pollination is the transfer of pollen from the male parts of a flower to the female parts, enabling fertilization.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/889695434/photo/beekeeper-at-work-cleaning-and-inspecting-hive.jpg?s=612x612&w=0&k=20&c=i3PGejVa0SYuAHab39hbTFgjdXC8nUmgvk1E5paMKoM=",
    },
    price: 1800,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Transplanting",
    description:
      "Transplanting involves moving a plant from one location to another to improve growth or production.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1327396692/photo/spring-houseplant-care-waking-up-indoor-plants-for-spring-woman-is-transplanting-plant-into.jpg?s=612x612&w=0&k=20&c=yIxEl3hZxwuDhv9LGjnVAbHzQNSJ3mJSRfmeL1jsQKY=",
    },
    price: 10000,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Fiji",
    country: "Fiji",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Soil Testing",
    description:
      "Soil testing involves analyzing soil samples to determine nutrient content and other characteristics for optimal crop growth.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1145894992/photo/soil-test-female-agronomist-taking-notes-in-the-field.jpg?s=612x612&w=0&k=20&c=XllePBLhtfFbDZfC9KXKm7h06OImdlMzNWN9UoF37TI=",
    },
    price: 1200,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Aquaculture",
    description:
      "Aquaculture is the farming of aquatic organisms like fish and shellfish in controlled environments.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1338749711/photo/wild-salmon-underwater-migration.jpg?s=612x612&w=0&k=20&c=lJxhcbSlOlljs_frENVVIk6JDdlbYKUWXJD-WiYdmoI=",
    },
    price: 2200,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Boston",
    country: "United States",
  },
  {
    farmer_Name: "Ganesh Sargar",
    title: "Poultry Farming",
    description:
      "Poultry farming is the raising of domesticated birds such as chickens, ducks, and turkeys for meat or eggs.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/482901353/photo/poultry-farm-and-a-veterinary.jpg?s=612x612&w=0&k=20&c=l0Kl9YYWgLbrALobDA9_PPdX1pRAq44BVEhNLZq4FQQ=",
    },
    price: 1800,
    no_of_emp: 5,
    no_of_hours: 6,
    location: "Bali",
    country: "Indonesia",
  },
  
];

module.exports = { data: sampleListings };