// Fetches the module.json and saves it to localStorage
export const fetchAndSaveModules = async () => {
  try {
    const res = await fetch("module.json");
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    const data = await res.json();
    localStorage.setItem("moduleData", JSON.stringify(data));
    console.log("module.json saved to localStorage");
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
