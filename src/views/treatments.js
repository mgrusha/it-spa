import $ from 'jquery';
import { treatmentsRawList } from '../common/treatment-service';
import { Cart } from "../cart/cart";

const cart = new Cart();

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<h2>Treatments</h2>');
    const ul = $('<ul class="list-group"></ul>');

    treatmentsRawList.getTreatments()
    .then(treatments => treatments.map(treatmentsListItem))
    .then(treatmentsListItems => treatmentsListItems.forEach(item => ul.append(item)));

    fragment.append(ul) ;
  return fragment;
};


const treatmentsListItem = (treatment) => {
  const li = $('<li class="list-group-item treatmentRow"></li>');
  let name = $("<span></span>").text(treatment.name).addClass("treatmentItem");
  let area = $("<span></span>").text(treatment.area).addClass("treatmentItem");
  let time = $("<span></span>").text(treatment.time+" min").addClass("treatmentItem");
  let price = $("<span></span>").text(treatment.price+" pln").addClass("treatmentItem");
  li.append(name).append(area).append(time).append(price);
  li.click(()=>{
    cart.set(treatment);
  })
  return li;
};