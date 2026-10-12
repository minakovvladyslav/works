const preloaderItemElement = document.querySelector(`.preloader__item`)
document.documentElement.setAttribute(`data-hide-content`, ``)
if(preloaderItemElement)  {
  const callback = ((mutationsList, observer) => {
    for(let mutation of mutationsList) {
      if(mutation.attributeName === `class`) {
        preloaderItemElement.dispatchEvent(new CustomEvent(`preloaderCLose`, {bubbles: true}))
        mutationObserver.disconnect()
      }
    }
  })

  const mutationObserver = new MutationObserver(callback)
  const config = {
    attributes: true,
    childList: true,
    attributeFilter: [`class`],
  }


  mutationObserver.observe(preloaderItemElement, config)

}