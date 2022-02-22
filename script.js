function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion h2')
    const activeClass = 'ativo'
    if (accordionList.length) {
      accordionList[0].classList.add(activeClass)
      accordionList[0].nextElementSibling.classList.add(activeClass)
      function activeAccordion() {
        this.classList.toggle(activeClass)
        this.nextElementSibling.classList.toggle(activeClass)
      }
      accordionList.forEach(item => {
        item.addEventListener('click', activeAccordion)
      })
    }
  }
  initAccordion()
  
  function initAnimationScroll() {
    const sections = document.querySelectorAll('.js-scroll , .js-scroll2')
  
    if (sections.length) {
      const windowMetade = window.innerHeight * 0.7
  
      function animaScroll() {
        sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top
          const isSectionVisible = sectionTop - windowMetade < 0
          if (isSectionVisible) section.classList.add('ativo')
          // else section.classList.remove('ativo')
        })
      }
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll)
  }
  initAnimationScroll()
  