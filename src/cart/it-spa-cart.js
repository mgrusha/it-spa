import $ from "jquery";
import { Cart } from "./cart";

export const itSpaCart = () => {
  const cart = new Cart();
  const fragment = $(new DocumentFragment());

  const storedItems = cart.get();
  let response;
  if (storedItems === undefined) {
    response = "<p> Card is empty now</p>";
  } else {
    response = storedItems.map((item) => {
      return `<p>Name: ${item.name} <br/> Price: ${item.price}</p>`;
    });
  }
  fragment.append("<h2>Card</h2>").append(response);
  // cookieStore.addEventListener('change', (event) => {
  //     // jesli zaistniala zmiana w cookies,
  //     // ponownie pobieram zawartosc kosza
  //     const nowaZawartosc = cart.get();

  //     // ...i poprawiam wyswietlane przez kosz informacje
  //     // TODO: zaktualizuj to co wyswietla obecnie koszyk
  // });

  return fragment;
};
