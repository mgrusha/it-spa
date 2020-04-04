import $ from 'jquery';

export const roomsListItem = (room) => {
    const li = $('<li class="list-group-item"></li>');
    li.text(room.name);
    return li;
};
