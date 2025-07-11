// --- DOM SELECTORS ---
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

// --- MENU HANDLING ---
const handleMenuBtns = (e) => {
  if (e.target.classList.contains("menu-item")) {
    topMenuItems.forEach((item) => item.classList.remove("menu-item__hl"));
    e.target.classList.toggle("menu-item__hl");
    router(e.target.id);
  }
};
topMenu.addEventListener("click", handleMenuBtns);

// --- SECTION ROUTER ---
const router = (contentName) => {
  const current = Array.from(sectionBlocks).find(
    (block) => !block.classList.contains("no-display")
  );
  let nextBlock = null;
  if (contentName === "intro") nextBlock = aboutBlock;
  if (contentName === "work") nextBlock = workBlock;

  if (current && nextBlock && current !== nextBlock) {
    current.classList.add("fade-out");
    setTimeout(() => {
      current.classList.add("no-display");
      current.classList.remove("fade-out");
      nextBlock.classList.remove("no-display");
      nextBlock.classList.add("fade-in");
      setTimeout(() => nextBlock.classList.remove("fade-in"), 200);
    }, 200);
  } else if (nextBlock && current !== nextBlock) {
    nextBlock.classList.remove("no-display");
    nextBlock.classList.add("fade-in");
    setTimeout(() => nextBlock.classList.remove("fade-in"), 200);
  }
};

// --- EMAIL MODAL ---
const showHideModal = () => {
  if (emailModalContainer.classList.contains("no-display")) {
    emailModalContainer.classList.remove("no-display", "fade-out");
    emailModalContainer.classList.add("fade-in");
    setTimeout(() => emailModalContainer.classList.remove("fade-in"), 200);
  } else {
    emailModalContainer.classList.remove("fade-in");
    emailModalContainer.classList.add("fade-out");
    setTimeout(() => {
      emailModalContainer.classList.add("no-display");
      emailModalContainer.classList.remove("fade-out");
    }, 100);
  }
};

emailModalContainer.addEventListener("click", (e) => {
  if (e.target === emailModalContainer || e.target === emailModalWrapper)
    showHideModal();
});
showMailBtn.addEventListener("click", showHideModal);
hideEmailBtn.addEventListener("click", showHideModal);

// --- EMAIL COPY ---
const copyEmail = () => {
  navigator.clipboard
    .writeText(emailText.textContent.trim())
    .then(() => console.log("Email copied!"))
    .catch((err) => console.log("Copy failed: " + err));
};

const cpBtnClicked = () => {
  cpEmailBtn.classList.add("btn-cp-clicked");
  setTimeout(() => cpEmailBtn.classList.remove("btn-cp-clicked"), 5000);
};

cpEmailBtn.addEventListener("click", () => {
  copyEmail();
  cpBtnClicked();
  emailText.classList.add("copied");
  setTimeout(() => {
    emailText.classList.remove("copied");
  }, 5000);
});
