// src/utils/fetchAddresses.js
export const fetchAddresses = async (query) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    const data = await response.json();
    return data;
  };
  