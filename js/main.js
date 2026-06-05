const hamburgerButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__links')
const navMobileLinks = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')

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

const handleFooterYear = () => {
	const now = new Date()
	footerYear.textContent = now.getFullYear()
}

hamburgerButton.addEventListener('click', () => {
	handleHamburgerButton()
	handleNavMobile()
})

navMobileLinks.forEach(item => {
	item.addEventListener('click', handleMobileLinks)
})

handleFooterYear()

const users = [
	{ name: 'Jan', age: 20 },
	{ name: 'Anna', age: 25 },
	{ name: 'Piotr', age: 30 },
]

const newUsers = users.map(v => v.name)

console.log(newUsers);
