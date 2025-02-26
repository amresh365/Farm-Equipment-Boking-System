const farmEuipments = [
  {
    id: 1,
    name: "Tractor",
    description:
      "A tractor is an engineering vehicle specifically designed to deliver a high tractive effort at slow speeds, for the purposes of hauling a trailer or machinery such as that used in agriculture or construction.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Tractor_with_slasher.jpg",
  },
  {
    id: 2,
    name: "Plough",
    description:
      "A plough or plow is a tool or farm implement used for initial cultivation to loosen or turn the soil in preparation for sowing seed or planting.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 3,
    name: "Harvester",
    description:
      "A harvester is a large machine used in agriculture that harvests crops. It is a versatile machine that can work with a variety of crops.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 4,
    name: "Seeder",
    description: "A seeder is a device that plants the seeds in the soil.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 5,
    name: "Sprayer",
    description:
      "A sprayer is a device used to spray liquid, especially insecticides, herbicides, and fungicides, on plants.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 6,
    name: "Cultivator",
    description:
      "A cultivator is a farm implement for stirring and pulverizing the soil before planting.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 7,
    name: "Rotavator",
    description:
      "A rotavator is a motorized cultivator that is used for preparing the soil for planting.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 8,
    name: "Harrow",
    description:
      "A harrow is an implement for breaking up and smoothing out the surface of the soil.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 9,
    name: "Thresher",
    description:
      "A thresher is a machine used for separating grain from the stalks and husks.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 10,
    name: "Winnowing Machine",
    description:
      "A winnowing machine is used for separating the grain from the chaff.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 11,
    name: "Baler",
    description:
      "A baler is a piece of farm machinery used to compress a cut and raked crop into compact bales that are easy to handle, transport, and store.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 12,
    name: "Mower",
    description:
      "A mower is a machine used to cut grass or other plants that grow on the ground.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 13,
    name: "Rake",
    description:
      "A rake is a tool with a long handle and a row of metal or wooden teeth at the bottom, used for gathering leaves, grass, or other light materials.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 14,
    name: "Fertilizer Spreader",
    description:
      "A fertilizer spreader is a device used to spread fertilizer, lime, or other soil amendments in the field.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 15,
    name: "Water Pump",
    description:
      "A water pump is a device used to move water from one place to another.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 16,
    name: "Trooley",
    description:
      "A trooley is a device used to transport goods or equipment from one place to another.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 17,
    name: "Weeder",
    description: "A weeder is a device used to remove weeds from the field.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 18,
    name: "Sprinkler",
    description: "A sprinkler is a device used to water plants in the field.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },

  {
    id: 19,
    name: "Backhoe Loader(jcb)",
    description:
      "A backhoe loader is a type of heavy equipment used in construction and agriculture. It is a versatile machine that can be used for a variety of tasks, including digging, lifting, and moving materials.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
  {
    id: 20,
    name: "crane",
    description:
      "A crane is a type of machine, generally equipped with a hoist rope, wire ropes or chains, and sheaves, that can be used both to lift and lower materials and to move them horizontally.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ploughing_in_the_Chilterns_-_geograph.org.uk_-_675083.jpg",
  },
];
