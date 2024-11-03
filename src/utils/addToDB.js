export const getDbData = (key) => {
  const store = localStorage.getItem(key);
  console.log(store);
  if (!store) {
    return [];
  } else {
    return JSON.parse(store);
  }
};

export const setDbData = async (id, str = "read-list") => {
  const stored = getDbData(str);

  return new Promise((res, rej) => {
    setTimeout(() => {
      if (stored.includes(parseInt(id))) {
        rej();
      } else {
        stored.push(parseInt(id));
        localStorage.setItem(str, JSON.stringify(stored));
        res();
      }
    }, 1000);
  });
};
