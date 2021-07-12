
export const setFavs = (value) => {
  window.localStorage.setItem("favs", JSON.stringify(value));
};

export const getFavs = () => {
  return JSON.parse(window.localStorage.getItem("favs"));
};
