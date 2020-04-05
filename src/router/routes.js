import { home, rooms, treatments, booking } from "../views";
import { itSpaCart } from "../cart/it-spa-cart";

export const routes = [
  { name: "Home", path: "/", data: {}, component: home },
  { name: "Rooms", path: "/rooms", data: {}, component: rooms },
  { name: "Treatments", path: "/treatments", data: {}, component: treatments },
  { name: "Booking", path: "/booking", data: {}, component: booking },
  { name: "Card", path: "/card", data: {}, component: itSpaCart },
];
