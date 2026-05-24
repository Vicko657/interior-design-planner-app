const rooms = [
  {
    id: 0,
    project: "Industrial Loft Redesign",
    type: "Loft",
    height: 4.0,
    length: 10.5,
    width: 7.2,
    unit: "m",
    inventory: [
      {
        itemName: "Annecy Rattan Bed Frame - Black",
        description:
          "The bed is crafted from natural rattan and features a classic black wooden frame with a subtle curved design for a smooth and elegant appearance. The black regency-style legs add a sophisticated finishing touch.",
        dimensions: "W: 142 x D: 203.5 x H: 125cm",
        price: 339,
        quantity: "1",
        link: "https://dusk.com/products/annecy-rattan-bed-frame-black?variant=49011181224233",
        ordered: "no",
      },
    ],
    checklist: [
      {
        taskName: "Flooring",
        task: "Remove floor tiles in the Kitchen",
        date: "2026/03/10",
        completed: "no",
      },
      {
        taskName: "Order Tiles",
        task: "Wall tiles from Wickes",
        date: "2026/03/03",
        completed: "yes",
      },
    ],
  },
  {
    id: 1,
    project: "Luxury Master Bedroom",
    type: "Bedroom",
    height: 6.5,
    length: 6.7,
    width: 4.0,
    unit: "m",
    inventory: [
      {
        itemName: "Copper Wall Sconce LED 1-Light",
        description:
          "Designed with a sleek minimalist profile, it combines a resin marble-effect body with subtle copper-toned details for a refined, contemporary look. ",
        dimensions: "40x6cm",
        price: 79.95,
        quantity: "2",
        link: "https://lassonliving.com/products/modern-minimalist-spanish-marble-copper-wall-sconce-led-1-light",
        ordered: "no",
      },
    ],
    checklist: [
      {
        taskName: "Contractors",
        task: "Call contractors before next meeting",
        date: "2026/05/10",
        completed: "yes",
      },
    ],
  },
  {
    id: 2,
    project: "Scandinavian Living Room",
    type: "Living Room",
    height: 5.4,
    length: 6.0,
    width: 7.5,
    unit: "m",
    inventory: [
      {
        itemName: "Coffee Table",
        description:
          "Finished in chalked solid mango wood the Imogen coffee table features an oval table top and chunky curved legs.",
        dimensions: "H45cm W110cm D55cm",
        price: 119.99,
        quantity: "1",
        link: "https://www.laura-james.co.uk/products/imogen-110cm-coffee-table-chalked-mangowood",
        ordered: "yes",
      },
    ],
    checklist: [
      {
        taskName: "Order Paints",
        task: "Check the through the paints in the inventory with the client",
        date: "2026/02/08",
        completed: "yes",
      },
    ],
  },
];
export default rooms;
