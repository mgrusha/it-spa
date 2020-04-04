import $ from 'jquery';
import { roomsList } from './rooms-list';

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<h2>Rooms</h2>')
    .append(roomsList())
    .append('<p>Lorem ipsum dolor sit amet...</p>');

  return fragment;
};
