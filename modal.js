
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

const images = document.querySelectorAll(".gallery2 img");


images.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; 
        modalImage.src = img.src; 
        modalImage.alt = img.alt; 
    });
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});





const images2 = document.querySelectorAll(".gallery3 img");
const images3 = document.querySelectorAll("img");

images2.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; 
        modalImage.src = img.src; 
        modalImage.alt = img.alt; 
    });
});



// images3.forEach((img) => {
//     img.addEventListener("click", () => {
//         modal.style.display = "flex"; 
//         modalImage.src = img.src; 
//         modalImage.alt = img.alt; 
//     });
// });


// closeModal.addEventListener("click", () => {
//     modal.style.display = "none";
// });


// modal.addEventListener("click", (event) => {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// });

