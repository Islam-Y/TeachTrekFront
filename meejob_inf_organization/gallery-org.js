//Функционал с возможностья масштабировать активное фото
let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let preview of previews){
    preview.onclick = function(evt){
        evt.preventDefault();
        activePhoto.src = preview.href;

        let activeItem = document.querySelector('.preview-list .active-item');
        activeItem.classList.remove('active-item')
        preview.classList.add('active-item');
    };
};

//Функционал с возможностью листать фотографии
const gallery = document.getElementById("gallery");
const slidesContainer = document.getElementById("slides-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const images = slidesContainer.querySelectorAll("img");
const groupSize = 3;

let currentSlideIndex = 0;

// функция для изменения видимости фотографий
function updateSlideVisibility() {
  images.forEach((image, index) => {
    if (index >= currentSlideIndex * groupSize && index < (currentSlideIndex + 1) * groupSize) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

// инициализация видимости фотографий
updateSlideVisibility();

prevButton.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlideVisibility();
    slidesContainer.style.transform = `translateX(${-currentSlideIndex * 33.33}%)`;
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlideIndex < Math.ceil(images.length / groupSize) - 1) {
    currentSlideIndex++;
    updateSlideVisibility();
    slidesContainer.style.transform = `translateX(${-currentSlideIndex * 33.33}%)`;
  }
});
