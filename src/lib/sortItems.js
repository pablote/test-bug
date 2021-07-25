export const sortItems = (items, sortByName) => {
  switch (sortByName) {
    case true:
      return items.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    case false:
      return items.sort((a, b) => {
        if (a.value < b.value) return -1;
        if (a.value > b.value) return 1;
        return 0;
      });
    default:
      return items;
  }
};
