const galleryPhotos = [
    { thumbnail: "images/puja-moments/durga-idol-2026.jpg", original: "images/puja-moments/durga-idol-2026.jpg", alt: "Maa Durga idol at Bhusuri Puja" },
    { thumbnail: "images/puja-moments/committee-ritual-feet.jpg", original: "images/puja-moments/committee-ritual-feet.jpg", alt: "Puja committee ritual" },
    { thumbnail: "images/puja-moments/durga-idol-evening.jpg", original: "images/puja-moments/durga-idol-evening.jpg", alt: "Maa Durga idol and lion" },
    { thumbnail: "images/puja-moments/committee-prayer.jpg", original: "images/puja-moments/committee-prayer.jpg", alt: "Puja committee prayer gathering" },
    { thumbnail: "images/puja-moments/committee-havan.jpg", original: "images/puja-moments/committee-havan.jpg", alt: "Puja committee havan gathering" }
];
const galleryGrid = document.querySelector("#allGalleryGrid");
const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = document.querySelector(".gallery-lightbox-image");
const closeBtn = document.querySelector(".gallery-lightbox-close");
const prevBtn = document.querySelector(".gallery-lightbox-prev");
const nextBtn = document.querySelector(".gallery-lightbox-next");
let currentImage = 0;
galleryPhotos.forEach((photo, index) => {
    const item = document.createElement("div"); item.className = "all-gallery-item"; item.dataset.index = index;
    item.innerHTML = `<img src="${photo.thumbnail}" data-original="${photo.original}" alt="${photo.alt}" loading="lazy"><div class="all-gallery-overlay"><span>View Photo</span></div>`;
    galleryGrid.appendChild(item);
});
function updateLightbox() { const photo = galleryPhotos[currentImage]; lightboxImage.src = photo.original; lightboxImage.alt = photo.alt; }
galleryGrid.addEventListener("click", event => { const item = event.target.closest(".all-gallery-item"); if (!item) return; currentImage = Number(item.dataset.index); updateLightbox(); lightbox.classList.add("active"); });
nextBtn.addEventListener("click", () => { currentImage = (currentImage + 1) % galleryPhotos.length; updateLightbox(); });
prevBtn.addEventListener("click", () => { currentImage = currentImage === 0 ? galleryPhotos.length - 1 : currentImage - 1; updateLightbox(); });
closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));
lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.classList.remove("active"); });
document.addEventListener("keydown", event => { if (!lightbox.classList.contains("active")) return; if (event.key === "Escape") lightbox.classList.remove("active"); if (event.key === "ArrowRight") { currentImage = (currentImage + 1) % galleryPhotos.length; updateLightbox(); } if (event.key === "ArrowLeft") { currentImage = currentImage === 0 ? galleryPhotos.length - 1 : currentImage - 1; updateLightbox(); } });
