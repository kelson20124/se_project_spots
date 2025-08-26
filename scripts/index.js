const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrance",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: " A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountian house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-profile-modal");
const editCloseBtn = editModal.querySelector(".modal__close-btn");

const editProfileNameInpt = editModal.querySelector("#name");
const editProfileDescriptionInpt = editModal.querySelector("#description");
const editProfileForm = editModal.querySelector(".modal__form");

const newPostBtn = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostImageInpt = newPostModal.querySelector("#image-input");
const newPostCaptionInpt = newPostModal.querySelector(
  "#caption-description-input"
);
const newPostCardForm = newPostModal.querySelector(".modal__form");

const profileNameClass = document.querySelector(".profile__name");
const profileDescriptionClass = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInpt.value = profileNameClass.textContent;
  editProfileDescriptionInpt.value = profileDescriptionClass.textContent;
  editModal.classList.add("modal_opened");
});

editCloseBtn.addEventListener("click", function () {
  editModal.classList.remove("modal_opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_opened");
});

function handleProfileformSubmit(evt) {
  profileNameClass.textContent = editProfileNameInpt.value;
  profileDescriptionClass.textContent = editProfileDescriptionInpt.value;
  evt.preventDefault();
  editModal.classList.remove("modal_opened");
}

editProfileForm.addEventListener("submit", handleProfileformSubmit);

function handleCardformSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImageInpt.value);
  console.log(newPostCaptionInpt.value);
  newPostModal.classList.remove("modal_opened");
}

newPostCardForm.addEventListener("submit", handleCardformSubmit);

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
