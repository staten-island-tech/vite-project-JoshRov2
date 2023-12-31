const toyStoreInventory = [
    {
      name: "LEGO Classic Brick Set",
      price: 29.99,
      image: "classicbrick.jpg",
      ageGroup: 6,
      rating: 4.5,
      description: "A timeless set of colorful building bricks for creative play.",
      brand: "LEGO",
      category: "Construction"
    },
    {
      name: "Barbie Dreamhouse",
      price: 149.99,
      image: "barbie.jpg",
      ageGroup: 3,
      rating: 4.2,
      description: "A luxurious dollhouse for Barbie and friends with interactive features.",
      brand: "Barbie",
      category: "Dolls & Accessories"
    },
    {
      name: "Hot Wheels 10-Car Pack",
      price: 9.99,
      image: "hotwheels10.jpg",
      ageGroup: 3,
      rating: 4.0,
      description: "A collection of 10 iconic Hot Wheels cars for racing and play.",
      brand: "Hot Wheels",
      category: "Vehicles"
    },
    {
      name: "Nerf N-Strike Elite Disruptor Blaster",
      price: 12.99,
      image: "nerf.jpg",
      ageGroup: 8,
      rating: 4.7,
      description: "A quick-draw blaster for action-packed Nerf battles.",
      brand: "Nerf",
      category: "Outdoor Play"
    },
    {
      name: "Monopoly Board Game",
      price: 19.99,
      image: "monopoly.jpg",
      ageGroup: 8,
      rating: 4.6,
      description: "The classic board game of buying, selling, and trading properties.",
      brand: "Hasbro",
      category: "Board Games"
    },
    {
      name: "Baby Einstein Take Along Tunes Musical",
      price: 7.99,
      image: "einstein.jpg",
      ageGroup: 0,
      rating: 4.8,
      description: "An engaging musical toy for infants with colorful lights and melodies.",
      brand: "Baby Einstein",
      category: "Infant Toys"
    },
    {
      name: "Paw Patrol Adventure Bay Rescue Playset",
      price: 24.99,
      image: "paw.jpg",
      ageGroup: 3,
      rating: 4.3,
      description: "A fun playset featuring the Paw Patrol pups and their adventures.",
      brand: "Paw Patrol",
      category: "Action Figures"
    },
    {
      name: "Fisher-Price Laugh & Learn Smart Stages Chair",
      price: 34.99,
      image: "chair.jpg",
      ageGroup: 3,
      rating: 4.9,
      description: "An interactive chair that introduces learning concepts to toddlers.",
      brand: "Fisher-Price",
      category: "Educational Toys"
    },
    {
      name: "LEGO Disney Frozen II Elsa's Jewelry Box Creation",
      price: 39.99,
      image: "frozen.jpg",
      ageGroup: 6,
      rating: 4.4,
      description: "A LEGO set inspired by Disney's Frozen II for creative building.",
      brand: "LEGO",
      category: "Construction"
    },
    {
      name: "Crayola Inspiration Art Case 140-Piece Set",
      price: 19.99,
      image: "crayola.jpg",
      ageGroup: 4,
      rating: 4.1,
      description: "A comprehensive art set with various coloring tools and supplies.",
      brand: "Crayola",
      category: "Arts & Crafts"
    },
    {
      name: "Play-Doh Kitchen Creations Ice Cream Set",
      price: 14.99,
      image: "playdoh.jpg",
      ageGroup: 3,
      rating: 4.0,
      description: "A Play-Doh set for making pretend ice cream treats.",
      brand: "Play-Doh",
      category: "Arts & Crafts"
    },
    {
      name: "Transformers Bumblebee Action Figure With Accessories",
      price: 19.99,
      image: "transformers.jpg",
      ageGroup: 6,
      rating: 4.6,
      description: "A poseable action figure of the beloved Transformers character.",
      brand: "Hasbro",
      category: "Action Figures"
    },
    {
      name: "Melissa & Doug Wooden Puzzles Set",
      price: 16.99,
      image: "woodpuzzle.jpg",
      ageGroup: 2,
      rating: 4.7,
      description: "A set of wooden puzzles for early learning and fine motor skills.",
      brand: "Melissa & Doug",
      category: "Puzzles"
    },
    {
      name: "Little Tikes First Slide",
      price: 29.99,
      image: "slide.jpg",
      ageGroup: 6,
      rating: 4.5,
      description: "A beginner's slide for indoor or outdoor play.",
      brand: "Little Tikes",
      category: "Outdoor Play"
    },
    {
      name: "My Little Pony Friendship Castle Playset",
      price: 49.99,
      image: "pony.jpg",
      ageGroup: 3,
      rating: 4.3,
      description: "A magical castle playset for My Little Pony adventures.",
      brand: "My Little Pony",
      category: "Playsets"
    },
    {
      name: "VTech Touch and Teach Word Book",
      price: 19.99,
      image: "vtech.jpg",
      ageGroup: 3,
      rating: 4.8,
      description: "An interactive book that introduces words, letters, and more.",
      brand: "VTech",
      category: "Educational Toys"
    },
    {
      name: "Magna-Tiles Clear Colors 100-Piece Set",
      price: 119.99,
      image: "tiles.jpg",
      ageGroup: 3,
      rating: 4.9,
      description: "Magnetic building tiles for open-ended creative play.",
      brand: "Magna-Tiles",
      category: "Construction"
    },
    {
      name: "Disney Princess Dress Up Trunk",
      price: 29.99,
      image: "dressup.jpg",
      ageGroup: 3,
      rating: 4.4,
      description: "A dress-up trunk with costumes and accessories for young princesses.",
      brand: "Disney",
      category: "Dress-Up"
    },
    {
      name: "Fisher-Price Little People Caring for Animals Farm",
      price: 34.99,
      image: "farm.jpg",
      ageGroup: 1,
      rating: 4.6,
      description: "A farm playset with animals and interactive features.",
      brand: "Fisher-Price",
      category: "Playsets"
    },
    {
      name: "L.O.L. Surprise! O.M.G. Fashion Doll With Interchangeable Pieces",
      price: 24.99,
      image: "doll.jpg",
      ageGroup: 6,
      rating: 4.2,
      description: "A stylish fashion doll with surprises and accessories.",
      brand: "L.O.L. Surprise!",
      category: "Dolls & Accessories"
    },
    {
      name: "KidKraft Waterfall Mountain Train Set and Table",
      price: 129.99,
      image: "train.jpg",
      ageGroup: 3,
      rating: 4.7,
      description: "A wooden train set and table for imaginative play.",
      brand: "KidKraft",
      category: "Playsets"
    },
    {
      name: "Playmobil City Life Hospital Building Playset",
      price: 44.99,
      image: "hospital.jpg",
      ageGroup: 4,
      rating: 4.5,
      description: "A detailed hospital playset with figurines and accessories.",
      brand: "Playmobil",
      category: "Playsets"
    },
    {
      name: "Melissa & Doug Deluxe Wooden Railway Set",
      price: 89.99,
      image: "railway.jpg",
      ageGroup: 3,
      rating: 4.8,
      description: "A wooden railway set with tracks, trains, and accessories.",
      brand: "Melissa & Doug",
      category: "Vehicles"
    },
    {
      name: "Cabbage Patch Kids Doll With Clothing Accessories",
      price: 29.99,
      image: "cabbage.jpg",
      ageGroup: 3,
      rating: 4.4,
      description: "Adorable Cabbage Patch Kids doll with a unique birth certificate.",
      brand: "Cabbage Patch Kids",
      category: "Dolls & Accessories"
    },
    {
      name: "NERF Ultra One Motorized Blaster With Removable Parts",
      price: 39.99,
      image: "ultra.jpg",
      ageGroup: 8,
      rating: 4.7,
      description: "A powerful motorized blaster with high-capacity dart drum.",
      brand: "Nerf",
      category: "Outdoor Play"
    },
    {
      name: "Funko Pop! Star Wars Bobble-Head Figures",
      price: 12.99,
      image: "funko.jpg",
      ageGroup: 3,
      rating: 4.3,
      description: "Collectible Bobble-Head figures featuring Star Wars characters.",
      brand: "Funko",
      category: "Collectibles"
    },
    {
      name: "Scrabble Crossword Game Deluxe Edition by Hasbro",
      price: 30.99,    
      image: "scrabble.jpg",
      ageGroup: 8,
      rating: 4.9,
      description: "A strategic word game that tests your vocabulary.",
      brand: "Hasbro",
      category: "Board Games"
    },
  ];
  export {toyStoreInventory}