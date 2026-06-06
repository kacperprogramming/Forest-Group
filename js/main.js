const hamburgerButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__links')
const navMobileLinks = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')
const contactForm = document.querySelector('.contact__form')
const contactButton = document.querySelector('.contact__form-button')
const contactInputs = document.querySelectorAll('.contact__form-box-input')
const contactTextArea = document.querySelector('.contact__form-box-textarea')
const modal = document.querySelector('.modal')
const closeModalButton = document.querySelector('.modal__close')

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

const handleFormValidity = e => {
	e.preventDefault()

	contactInputs.forEach(item => {
		const errorInfo = item.parentElement.querySelector('.error-info')
		if (item.value.trim() === '') {
			item.classList.add('invalid')
			errorInfo.textContent = 'Wprowadź poprawne dane'
			return
		} else {
			item.classList.remove('invalid')
			errorInfo.textContent = ''
		}
	})

	const errorInfo = contactTextArea.parentElement.querySelector('.error-info')

	if (contactTextArea.value.trim() === '') {
		contactTextArea.classList.add('invalid')
		errorInfo.textContent = 'Wprowadź poprawne dane'
		return
	} else {
		contactTextArea.classList.remove('invalid')
		errorInfo.textContent = ''
	}

	modal.style.display = 'flex'

	contactInputs.forEach(item => {
		item.value = ''
	})

	contactTextArea.value = ''
}

hamburgerButton.addEventListener('click', () => {
	handleHamburgerButton()
	handleNavMobile()
})

navMobileLinks.forEach(item => {
	item.addEventListener('click', handleMobileLinks)
})

contactForm.addEventListener('submit', e => {
	handleFormValidity(e)
})

closeModalButton.addEventListener('click', () => {
	modal.style.display = 'none'
})

handleFooterYear()
