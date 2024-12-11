export const saveToLocalStorage = (key, data) => {
  try {
    const senterialData = JSON.stringify(data);
    localStorage.setItem(key, senterialData);
    console.log("Save Data Sukses");
  } catch (error) {
    console.log("Save Error: ", error.message);
  }
};

export const getDataLocalStorage = (key) => {
  try {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return null;
    }
  } catch (error) {
    console.log("Failed: ", error.message);
    return undefined;
  }
};
