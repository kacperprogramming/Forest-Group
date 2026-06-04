const hamburgerButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__links')
const navMobileLinks = document.querySelectorAll('.nav__link')

const handleHamburgerButton = () => {
	hamburgerButton.classList.toggle('is-active')
}

const handleNavMobile = () => {
	navMobile.classList.toggle('nav__links--active')
}

const handleMobileLinks = () => {
	navMobile.classList.remove('nav__links--active')
	hamburgerButton.classList.remove('is-active')
}

hamburgerButton.addEventListener('click', () => {
	handleHamburgerButton()
	handleNavMobile()
})

navMobileLinks.forEach(item => {
	item.addEventListener('click', handleMobileLinks)
})
