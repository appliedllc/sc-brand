export type Diet = {
  id: string;
  name: string;
  description: string;
  colorHex: string;
};

export const diets: Diet[] = [
  {
    id: "boxer",
    name: "Boxer",
    description: "Fuel for fight camp. Built around timing, recovery, and clean protein.",
    colorHex: "#DD5239",
  },
  {
    id: "anti-aging",
    name: "Anti-Aging",
    description: "Polyphenols, omega-3s, and slow-cooked depth for skin and longevity.",
    colorHex: "#EAD9B4",
  },
  {
    id: "gluten-dairy-free",
    name: "Gluten & Dairy Free",
    description: "Trusted kitchens, no cross-contact. Free-from doesn't mean dull.",
    colorHex: "#6BA77F",
  },
  {
    id: "ibs",
    name: "Gut Health",
    description: "Low FODMAP, gentle on the gut, written with a registered dietitian.",
    colorHex: "#A8C9A0",
  },
  {
    id: "balance",
    name: "Balance",
    description: "Wholesome, satisfying, recognisable. The everyday option, done well.",
    colorHex: "#7A4B30",
  },
];

export type Chef = {
  id: string;
  name: string;
  specialty: string;
  initials: string;
};

export const chefs: Chef[] = [
  { id: "ines", name: "Inés Marchetti", specialty: "Mediterranean", initials: "IM" },
  { id: "kenji", name: "Kenji Watanabe", specialty: "Japanese-French", initials: "KW" },
  { id: "amara", name: "Amara Okafor", specialty: "West African", initials: "AO" },
];

export type Dish = {
  id: string;
  name: string;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

export const todaysDish: Dish = {
  id: "mackerel-001",
  name: "Grilled mackerel, miso aubergine",
  kcal: 612,
  protein: 38,
  carbs: 41,
  fat: 28,
};

export const upcomingMeals: Dish[] = [
  { id: "lamb-shoulder", name: "Slow lamb shoulder, charred greens", kcal: 740, protein: 44, carbs: 36, fat: 42 },
  { id: "halibut", name: "Olive-oil poached halibut, fennel", kcal: 528, protein: 42, carbs: 18, fat: 30 },
  { id: "buckwheat", name: "Buckwheat, roasted squash, tahini", kcal: 480, protein: 18, carbs: 62, fat: 16 },
];
