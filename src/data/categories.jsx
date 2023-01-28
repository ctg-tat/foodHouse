import { IconBurger, IconDrinks, IconPizza, IconSalad, IconSale, IconSnacks } from "../components/Icons/Icons";

export const CATEGORIES = [
  {
    id: 1,
    src: <IconSalad />,
    name: "Салаты",
    type: "salad"
  },
  {
    id: 2,
    src: <IconDrinks />,
    name: "Напитки",
    type: 'drinks'
  },
  {
    id: 3,
    src: <IconBurger />,
    name: "Бургеры",
    type: "burger"
  },
  {
    id: 4,
    src: <IconSnacks />,
    name: "Закуски",
    type: "snacks"
  },
  {
    id: 5,
    src: <IconPizza />,
    name: "Пицца",
    type: 'pizza'
  },
  {
    id: 6,
    src: <IconSale />,
    name: "Акции",
    type: "sale"
  },
];
