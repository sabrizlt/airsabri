// actions.js

export const addToFavorites = (ticket) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: ticket,
  };
};

export const removeFromFavorites = (ticketNumber) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: ticketNumber,
  };
};
