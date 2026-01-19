fetch("/module.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Fetch failed");
        }
        return res.json();
    })
    .then((data) => {
        localStorage.setItem("moduleData", JSON.stringify(data));
        console.log("module.json saved to localStorage");
    })
    .catch((err) => {
        console.error(err);
    });