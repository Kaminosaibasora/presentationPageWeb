// =====================================================================

// ==================== P H O T O   G A L L E R Y ======================

// =====================================================================

let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let captionText = document.getElementById("caption");
let closeModal = document.getElementsByClassName("close")[0]

let galleryImg = document.querySelectorAll("#photogallery img");

galleryImg.forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = item.src;
        captionText.innerHTML = item.alt;
    });
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});