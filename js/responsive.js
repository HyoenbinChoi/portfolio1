let isModified = false;
let h3Elements = [], h3Parents = [], h3NextSiblings = [];
let pElements = [], pParents = [], pNextSiblings = [];
let originalVideoStyles = {};

document.querySelector('.fullscreen').addEventListener('click', function () {

  const videoElements = document.querySelectorAll('.swiper-video');

  if (!isModified) {
    videoElements.forEach(function (videoElement) {
      originalVideoStyles.gridRow = videoElement.style.gridRow;
      originalVideoStyles.gridColumn = videoElement.style.gridColumn;
      originalVideoStyles.width = videoElement.style.width;
      originalVideoStyles.height = videoElement.style.height;
      originalVideoStyles.padding = videoElement.style.padding;

      videoElement.style.gridRow = '1 / 5';
      videoElement.style.gridColumn = '2 / 9';
      videoElement.style.width = '100%';
      videoElement.style.height = '100%';
      videoElement.style.padding = '10px';
    });

    h3Elements = Array.from(document.querySelectorAll('.swiper-title.stv'));
    h3Elements.forEach((h3Element, index) => {
      h3Parents[index] = h3Element.parentNode;
      h3NextSiblings[index] = h3Element.nextSibling;
      h3Element.remove();
    });

    pElements = Array.from(document.querySelectorAll('.swiper-text.sxv'));
    pElements.forEach((pElement, index) => {
      pParents[index] = pElement.parentNode;
      pNextSiblings[index] = pElement.nextSibling;
      pElement.remove();
    });

    isModified = true;

  } else {
    videoElements.forEach(function (videoElement) {
      videoElement.style.gridRow = originalVideoStyles.gridRow;
      videoElement.style.gridColumn = originalVideoStyles.gridColumn;
      videoElement.style.width = originalVideoStyles.width;
      videoElement.style.height = originalVideoStyles.height;
      videoElement.style.padding = originalVideoStyles.padding;
    });

    h3Elements.forEach((h3Element, index) => {
      if (h3Element && h3Parents[index]) {
        h3Parents[index].insertBefore(h3Element, h3NextSiblings[index]);
      }
    });

    h3Parents = [];
    h3NextSiblings = [];

    pElements.forEach((pElement, index) => {
      if (pElement && pParents[index]) {
        pParents[index].insertBefore(pElement, pNextSiblings[index]);
      }
    });

    pParents = [];
    pNextSiblings = [];

    isModified = false;
  }
});
