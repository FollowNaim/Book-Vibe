export const getDbData = (key) => {
  const store = localStorage.getItem(key);
  console.log(store);
  if (!store) {
    return [];
  } else {
    return JSON.parse(store);
  }
};

export const setDbData = (id, str = "read-list") => {
  const stored = getDbData(str);
  if (stored.includes(parseInt(id))) return;
  stored.push(parseInt(id));
  localStorage.setItem(str, JSON.stringify(stored));
};
