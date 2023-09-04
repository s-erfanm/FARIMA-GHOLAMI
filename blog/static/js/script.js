const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const errMsg = document.getElementById('err-msg')

btn.addEventListener('click', navToggle)


// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// tabs meny event listener 

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e){
  // deactive all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-b',
      "border-b-4",
      "md:border-b-0"
      )
  })

  // hide all panels
  panels.forEach((panel) =>  panel.classList.add('hidden'))

  // activate a new tab and panel based on the target

  e.target.classList.add('border-red', "border-b-4")
  const classString = e.target.getAttribute('data-target')
  document.getElementById('panels')
  .getElementsByClassName(classString)[0]
  .classList.remove('hidden')
}
