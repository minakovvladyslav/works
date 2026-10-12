"use strict";
window.addEventListener("load", load);

function load() {
  /* Перевірка мобільного браузера */
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  /* Додавання класу touch для HTML, якщо браузер мобільний */
  function addTouchAttr() {
    // Додавання data-fls-touch для HTML, якщо браузер мобільний
    if (isMobile.any())
      document.documentElement.setAttribute("data-fls-touch", "");
  }
  initHeaderSubMenu();

  initLeanguges();

  initShopMenu();

  initHelp();

  initFooter();

  initMenu();

  initLink();

  initServicesList();

  inintHeaderList();

  initPage();
  initDocumnet();

  function initDocumnet() {
    if (document.querySelector(`.preloader`)) {
      document.querySelector(`.preloader__item`).classList.add(`hide`);
      document.addEventListener(`preloaderCLose`, () => {
        const spanElement = document.querySelector(`.preloader span`);
        if(document.querySelector(`.preloader__button`) && spanElement) {
          document.querySelector(`.preloader__button`).style.display = `block`
          const typed = new Typed(`.preloader span`, {
            strings: [`We are the Best!`,`We have evething!`, `Crossone`],
            typeSpeed: 30,
            backSpeed: 20,
            autoInsertCss: true,
            onComplete: () => {
              setTimeout(() => {
                document.documentElement.removeAttribute(`data-hide-content`);
                document.querySelector(`.preloader`).style.display = `none`
              },1500)
            }
          });
        } else {
          document.documentElement.removeAttribute(`data-hide-content`);
          document.querySelector(`.preloader`).style.display = `none`
          document.querySelector(`main`).style.transform = ``
        }
      });
    }
  }

  function initPage() {
    const headerElement = document.querySelector(`header`);
    const mainElement = document.querySelector(`main`);
    if (headerElement && mainElement) {
      mainElement.style.paddingTop = `${headerElement.offsetHeight}px`;
    }
    // document.querySelector(`main`).style.paddingTop(})
  }

  function inintHeaderList() {
    const wprapperElement = document.querySelector(
      `.header-products__wrappper`,
    );
    const matchMedia = window.matchMedia(`(width < 62rem)`);
    matchMedia.addEventListener("change", () => {
      wprapperElement.style.cssText = ``;
    });
  }

  function initServicesList() {
    const matchMedia = window.matchMedia(`(width < 50rem)`);
    matchMedia.addEventListener(`change`, setList);
    const mainListElement = document.querySelector(`.companies__list`);
    const neighborListElement = document.querySelector(
      `.companies__list--neighbor`,
    );
    setList();
    function setList() {
      if (matchMedia.matches && mainListElement && neighborListElement) {
        const mainListElements =
          mainListElement.querySelectorAll(`.companies__item`);
        neighborListElement.innerHTML = ``;
        mainListElements.forEach((item) => {
          const clone = item.cloneNode(true);
          neighborListElement.insertAdjacentElement("beforeend", clone);
        });
      }
    }
  }

  function initLink() {
    const mainListElement = document.querySelector(`.partners__list`);
    const neighborList = document.querySelector(`#second-list`);
    if (mainListElement) {
      const matchMedia = window.matchMedia(`(width < 53.125rem)`);
      matchMedia.addEventListener("change", setList);
      setList();
      function setList() {
        const linkElement = document.querySelector(`.partners__link`);
        if (matchMedia.matches && linkElement && neighborList) {
          const mainListElements =
            mainListElement.querySelectorAll(`.partners__item`);
          const mobileLinkElement = document.querySelector(
            `.partners__get-parnter`,
          );
          mobileLinkElement.innerHTML = ``;
          mobileLinkElement.insertAdjacentElement(
            `afterbegin`,
            linkElement.cloneNode(true),
          );
          if (!neighborList.hasAttribute(`items`)) {
            mainListElements.forEach((item) => {
              const itemClone = item.cloneNode(true);
              neighborList.insertAdjacentElement("beforeend", itemClone);
              neighborList.setAttribute(`items`, ``);
            });
          }
        }
      }
    }
  }

  function initMenu() {
    const buttonActiveLement = document.querySelector(
      `.do-what__button--active`,
    );
    if (buttonActiveLement) {
      const dataElement = buttonActiveLement.getAttribute(`data-page`);
      const slideElements = document.querySelectorAll(`.body-do-what__slide`);
      slideElements.forEach((slide) => {
        if (slide.closest(`[class*=--${dataElement}]`)) {
          slide.style.cssText = `display: block;`;
        }
      });
    }
  }

  window.addEventListener(`resize`, () => {
    initList();
    function initList() {
      const neighborListElement = document.querySelector(
        ".partners__neighbor-list",
      );
      const listElement = document.querySelector(`.partners__list`);

      const headerElement = document.querySelector(`header`);
      const mainElement = document.querySelector(`main`);

      const wprapperElement = document.querySelector(
        `.header-products__wrappper`,
      );
      const imgElement = document.querySelector(`.header-products__img`);

      if (neighborListElement && listElement && window.innerWidth < 850) {
        neighborListElement.style.cssText = `animation-name: none;`;
        listElement.style.cssText = `animation-name: none;`;
        const bodyElement = document.querySelector(`.partners__body`);
        bodyElement.innerWidth;
        bodyElement.style.width = `${bodyElement}px`;
        setTimeout(() => {
          listElement.style.cssText = `animation-name: spin; transform: translateX(0%);width:${listElement}px;`;
          neighborListElement.style.cssText = `animation-name: spin; transform: translateX(0%); width: ${neighborListElement};`;
        });
      }

      if (wprapperElement && imgElement) {
        const wprapperElementHeight = wprapperElement.offsetHeight;
        wprapperElement.removeAttribute(`open-menu`);
        imgElement.style.cssText = ``;
        wprapperElement.style.height = `${wprapperElementHeight}px`;
        wprapperElement.offsetHeight;
        wprapperElement.style.height = `0px`;
        wprapperElement.offsetHeight;
      }

      if (headerElement && mainElement) {
        setTimeout(() => {
          mainElement.style.cssText = `padding-top:${headerElement.offsetHeight}px;`;
        }, 200);
      }
    }
  });

  function initFooter() {
    const listElement = document.querySelectorAll(`.footer__list`);
    const mathcMedia = window.matchMedia(`(width < 28.125rem)`);
    if (listElement) {
      mathcMedia.addEventListener(`change`, setFooter);
    }

    setFooter();

    initForm();

    function initForm() {
      const formElement = document.querySelector(`.form-meeting`);
      if (formElement) {
        formElement.addEventListener(`submit`, approve);
        function approve(e) {
          const approveElement = document.querySelector(`.approve`);
          formElement.style.cssText = `display:none`;
          approveElement.style.cssText = `display:block`;
          setTimeout(() => {
            approveElement.style.cssText = `display:none`;
          }, 3000);
          e.preventDefault();
        }
      }
    }

    function setFooter() {
      if (listElement) {
        if (mathcMedia.matches) {
          listElement.forEach((item) => {
            item.style.height = `0px`;
          });
        } else {
          listElement.forEach((item) => {
            item.style.height = ``;
          });
        }
      }
    }
  }
  function initHelp() {
    const helpElement = document.querySelector(`.header__contact`);
    const mathcMedia = window.matchMedia(`(width < 41.0625rem)`);
    if (helpElement) {
      mathcMedia.addEventListener(`change`, setHelp);
      setHelp();
      function setHelp() {
        if (mathcMedia.matches) {
          setTimeout(() => {
            helpElement.style.left = `2%`;
          }, 10000);
        } else {
          helpElement.style.left = `-100%`;
        }
      }
    }
  }

  function initLeanguges() {
    const leanguagesButtonElement = document.querySelector(
      `.leanguages-buttons__wrapper`,
    );
    if (leanguagesButtonElement) {
      const leanguagesButtonElementWidth = leanguagesButtonElement.offsetWidth;
      const leangugesBlock = document.querySelector(`.leanguages-buttons`);
      const buttonElements = leanguagesButtonElement.querySelectorAll(
        `.leanguages-buttons__button`,
      );
      const buttonElementsHeight = buttonElements[0].offsetHeight;
      leanguagesButtonElement.style.height = `${buttonElementsHeight}px`;
    }
  }

  function initShopMenu() {
    const menuWrapperElement = document.querySelector(
      `.header-products__wrappper`,
    );
    if (menuWrapperElement && window.innerWidth < 657) {
      menuWrapperElement.style.height = `0px`;
    }
  }

  function initHeaderSubMenu() {
    const wprapperElement = document.querySelector(
      `.header-products__wrappper`,
    );
    if (wprapperElement) {
      const matchMedia = window.matchMedia(`(width < 38.4375em)`);
      matchMedia.addEventListener(`change`, setMenu);
      setMenu();
      function setMenu() {
        if (matchMedia.matches) {
          wprapperElement.style.height = `0px`;
        } else {
          wprapperElement.style.height = ``;
        }
      }
    }
  }

  initIcons();

  function initIcons() {
    const wrapperElement = document.querySelector(`.header__nav`);
    const iconsElement = document.querySelector(`.header__socials`);
    const logoElement = document.querySelector(`.header__block-logo`);
    if (iconsElement) {
      const mathcMedia = window.matchMedia(`(width < 26.875em)`);
      mathcMedia.addEventListener(`change`, moveIcons);
      function moveIcons() {
        if (mathcMedia.matches) {
          wrapperElement.insertAdjacentElement(`beforeEnd`, iconsElement);
        } else {
          logoElement.insertAdjacentElement(`afterend`, iconsElement);
        }
      }
      moveIcons();
    }
  }

  document.addEventListener("click", actions);

  function actions(e) {
    const targetType = e.type;
    const targetElement = e.target;
    if (targetType == "click") {
      if (targetElement.closest(`.leanguages-buttons__button`)) {
        const buttonElement = targetElement.closest(
          `.leanguages-buttons__button`,
        );
        const buttonActiveElement = document.querySelector(
          `.leanguages-buttons__button--active`,
        );
        if (buttonActiveElement && buttonElement !== buttonActiveElement) {
          buttonActiveElement.classList.remove(
            `leanguages-buttons__button--active`,
          );
        }
        if (
          !buttonElement.classList.contains(
            `leanguages-buttons__button--active`,
          )
        ) {
          buttonElement.classList.add(`leanguages-buttons__button--active`);
        }
      }
      if (targetElement.closest(`.leanguages-buttons__wrapper`)) {
        const headerLeanguageElement = targetElement.closest(
          `.leanguages-buttons__wrapper`,
        );
        const buttonElements = headerLeanguageElement.querySelectorAll(
          `.leanguages-buttons__button`,
        );
        buttonElements.forEach((item) => {
          item.style.opacity = `1`;
        });
        const buttonElementsHeight = buttonElements[0].offsetHeight;
        if (
          headerLeanguageElement &&
          !document.querySelector(`body`).hasAttribute(`data-open-burger`)
        ) {
          headerLeanguageElement.classList.toggle(`open`);
        }
        if (
          headerLeanguageElement.classList.contains(`open`) &&
          !document.querySelector(`body`).hasAttribute(`data-open-burger`)
        ) {
          headerLeanguageElement.style.backgroundColor = `#FFF`;
          headerLeanguageElement.style.height = ``;
          const headerLeanguageElementHeight =
            headerLeanguageElement.offsetHeight;
          headerLeanguageElement.style.height = `${buttonElements[0].offsetHeight}px`;
          headerLeanguageElement.offsetHeight;
          headerLeanguageElement.style.height = `${headerLeanguageElementHeight}px`;
        } else {
          headerLeanguageElement.classList.remove(`open`);
          headerLeanguageElement.style.backgroundColor = `transparent`;
          headerLeanguageElement.offsetHeight;
          headerLeanguageElement.style.height = `${buttonElementsHeight}px`;
        }
      }
      if (targetElement.closest(`.header-products__button`)) {
        const buttonElement = targetElement.closest(`.header-products__button`);
        const wprapperElement = document.querySelector(
          `.header-products__wrappper`,
        );
        const imgElement = document.querySelector(`.header-products__img`);
        wprapperElement.toggleAttribute(`open-menu`);
        wprapperElement.style.height = `auto`;
        const wprapperElementHeight = wprapperElement.offsetHeight;
        if (wprapperElement.hasAttribute(`open-menu`)) {
          imgElement.style.cssText = `rotate: -90deg;`;
          wprapperElement.style.height = `0px`;
          wprapperElement.offsetHeight;
          wprapperElement.style.height = `${wprapperElementHeight}px`;
          wprapperElement.style.opacity = `1`;
        } else {
          imgElement.style.cssText = ``;
          wprapperElement.style.height = `${wprapperElementHeight}px`;
          wprapperElement.offsetHeight;
          wprapperElement.style.height = `0px`;
          wprapperElement.offsetHeight;
        }
      } else if (
        targetElement.closest(`.header-products__button`) ||
        !targetElement.closest(`.header-products__button`)
      ) {
        const wprapperElement = document.querySelector(
          `.header-products__wrappper`,
        );
        wprapperElement.removeAttribute(`open-menu`);
        if (wprapperElement) {
          const imgElement = document.querySelector(`.header-products__img`);
          imgElement.style.cssText = ``;
          const wprapperElementHeight = wprapperElement.offsetHeight;
          wprapperElement.style.height = `${wprapperElementHeight}px`;
          wprapperElement.offsetHeight;
          wprapperElement.style.height = `0px`;
          wprapperElement.offsetHeight;
          wprapperElement.style.opacity = `0`;
          setTimeout(() => {
            wprapperElement.style.cssText = ``;
          }, 100);
        }
      }

      if (targetElement.closest(`.header__burger`)) {
        const headerLeanguageElement = document.querySelector(
          `.leanguages-buttons__wrapper`,
        );
        const buttonElements = headerLeanguageElement.querySelectorAll(
          `.leanguages-buttons__button`,
        );
        const burgerElement = targetElement.closest(`.header__burger`);
        const buttonElementsHeight = buttonElements[0].offsetHeight;
        const bodyElement = document.querySelector(`body`);
        const headerLeanguageElementHeight =
          headerLeanguageElement.offsetHeight;
        bodyElement.toggleAttribute(`data-open-burger`);
        if (
          bodyElement.hasAttribute(`data-open-burger`) &&
          headerLeanguageElement.classList.contains(`open`)
        ) {
          headerLeanguageElement.offsetHeight;
          headerLeanguageElement.style.height = `${buttonElementsHeight}px`;
          headerLeanguageElement.classList.remove(`open`);
        }
      }
      if (targetElement.closest(`.contact__close-button`)) {
        const helpElement = document.querySelector(`.header__contact`);
        if (helpElement) {
          helpElement.style.left = `-100%`;
        }
      }
      if (targetElement.closest(`.footer__title`)) {
        if (window.innerWidth > 449) {
          return;
        }
        const footerTitleElement = targetElement.closest(`.footer__title`);
        footerTitleElement.toggleAttribute(`open-footer`);
        const siblingElement = footerTitleElement.nextElementSibling;
        const activeTitleElement = document.querySelector(
          `.footer__title[open-footer]`,
        );
        if (activeTitleElement && activeTitleElement !== footerTitleElement) {
          activeTitleElement.removeAttribute(`open-footer`);
          activeTitleElement.nextElementSibling.style.height = `0px`;
        }

        if (footerTitleElement.hasAttribute(`open-footer`)) {
          siblingElement.style.height = ``;
          const siblingElementHeight = siblingElement.offsetHeight;
          siblingElement.style.height = `0px`;
          siblingElement.offsetHeight;
          siblingElement.style.height = `${siblingElementHeight}px`;
        } else {
          siblingElement.offsetHeight;
          siblingElement.style.height = `0px`;
        }
      }
      if (targetElement.closest(`.do-what__button`)) {
        const currentButtonElement = targetElement.closest(`.do-what__button`);
        const buttonActiveLement = document.querySelector(
          `.do-what__button--active`,
        );
        const dataElement = currentButtonElement.getAttribute(`data-page`);
        const slideElements = document.querySelectorAll(`.body-do-what__slide`);
        if (buttonActiveLement && buttonActiveLement != currentButtonElement) {
          buttonActiveLement.classList.remove(`do-what__button--active`);
          currentButtonElement.classList.add(`do-what__button--active`);
        }
        slideElements.forEach((slide) => {
          slide.closest(`[class*=--${dataElement}]`)
            ? (slide.style.display = `block`)
            : (slide.style.display = `none`);
        });
      }
      if (targetElement.closest(`.meeting__button`)) {
        const openButtonElement = targetElement.closest(`.meeting__button`);
        if (openButtonElement) {
          const formElement = document.querySelector(`.form-meeting`);
          formElement.style.height = `auto`;
          const heightFormElement = formElement.offsetHeight;
          formElement.style.height = `0px`;
          formElement.offsetHeight;
          formElement.style.height = `${heightFormElement}px`;
        }
      }
      if (targetElement.closest(`.form-meeting__button-close`)) {
        const closeButtonElement = targetElement.closest(
          `.form-meeting__button-close`,
        );
        if (closeButtonElement) {
          const formElement = document.querySelector(`.form-meeting`);
          const heightFormElement = formElement.offsetHeight;
          formElement.offsetHeight;
          formElement.style.height = `0px`;
        }
      }

      if(targetElement.closest(`.preloader__button`)) {
        document.querySelector(`.preloader`).style.display = `none`
        document.documentElement.removeAttribute(`data-hide-content`);
      }
    }
  }
  initSlider();
  function initSlider() {
    const swiperElement = document.querySelector(`.hero__swiper`);
    if (swiperElement) {
      const swiper = new Swiper(swiperElement, {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoHeight: true,
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    }
  }
}
