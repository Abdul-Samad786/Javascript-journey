const user = {
    name: "Samad",
    show: () => {
        console.log(this.name); // ❌ wrong
    }
};
user.show(); // undefined