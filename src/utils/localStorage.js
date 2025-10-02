function localStorageSetItem(key, value) {
  // Check if key is a string
  if (typeof key !== "string") {
    console.error("Error: key must be a string");
    return;
  }
  try {
    // Convert value to JSON string
    const jsonValue = JSON.stringify(value);
    // Set item to localStorage
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Error setting item in storage", error);
  }
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

function localStorageClear() {
  localStorage.clear();
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClear,
};
