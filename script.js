
// 🌸 1. Smooth Scroll for all anchor links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


// 🌿 2. Category Click Interaction
let categories = document.querySelectorAll(".category-col");

categories.forEach(category => {
    category.addEventListener("click", () => {
        let categoryName = category.querySelector("h3").innerText;
        alert("You selected: " + categoryName + " 🌟");
    });
});


// 🖼 3. Image Preview Popup
let images = document.querySelectorAll("img");

images.forEach(img => {
    img.addEventListener("click", function () {

        let overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.8)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "1000";

        let popupImg = document.createElement("img");
        popupImg.src = this.src;
        popupImg.style.maxWidth = "80%";
        popupImg.style.maxHeight = "80%";
        popupImg.style.borderRadius = "20px";

        overlay.appendChild(popupImg);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);
    });
});


