const topMenu = document.querySelector(".header__menu-menu");
const topMenuItems = document.querySelectorAll(".menu-item");
const aboutBlock = document.querySelector(".intro");
const workBlock = document.querySelector(".work");
const sectionBlocks = document.querySelectorAll(".section-block");

const showMailBtn = document.querySelector(".show-email-btn");
const hideEmailBtn = document.querySelector(".exit-modal__btn");
const emailModalContainer = document.querySelector(
  ".header-links__email-modal-container"
);
const emailModalWrapper = document.querySelector(".email-modal__wrapper");

const emailText = document.querySelector(".email__text");
const cpEmailBtn = document.querySelector(".email__btn-cp");

handleMenuBtns = (element) => {
  if (element.target.classList.contains("menu-item")) {
    topMenuItems.forEach((item) => {
      item.classList.remove("menu-item__hl");
    });
    element.target.classList.toggle("menu-item__hl");
  }

  router(element.target.id);
};

topMenu.addEventListener("click", handleMenuBtns);

const resetView = () => {
  sectionBlocks.forEach((block) => {
    block.classList.add("no-display");
  });
};

const router = (contentName) => {
  if (contentName == "intro") {
    resetView();
    aboutBlock.classList.remove("no-display");
    return;
  }

  if (contentName == "work") {
    resetView();
    workBlock.classList.remove("no-display");
    return;
  }
};

const showHideModal = () => {
  emailModalContainer.classList.toggle("no-display");
};

emailModalContainer.addEventListener("click", (e) => {
  if (e.target === emailModalContainer || e.target === emailModalWrapper) {
    showHideModal();
  }
});

showMailBtn.addEventListener("click", (e) => {
  showHideModal();
});

hideEmailBtn.addEventListener("click", (e) => {
  showHideModal();
});

const copyEmail = () => {
  emailText.innerHTML;
  navigator.clipboard
    .writeText(emailText.innerHTML)
    .then(() => console.log("Email copied!"))
    .catch((err) => console.log("Copy failed: " + err));
};

const cpBtnClicked = () => {
  cpEmailBtn.classList.add("btn-cp-clicked");
  setTimeout(() => {
    cpEmailBtn.classList.remove("btn-cp-clicked");
  }, 10000);
};

cpEmailBtn.addEventListener("click", (e) => {
  copyEmail();
  cpBtnClicked();
});
