const rooms = [
  {
    id: 0,
    project: "Industrial Loft Redesign",
    type: "Loft",
    height: 4.0,
    length: 10.5,
    width: 7.2,
    unit: "m",
    inventory: null,
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
    inventory: null,
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
    inventory: null,
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
