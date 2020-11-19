// lightbox shit
const lightbox = document.querySelector('.lightbox')
const lightboxImg = lightbox.querySelector('img')
const images = document.querySelectorAll('.grid img')

for (var i = 0; i < images.length; i++) {
	images[i].setAttribute('data-index', `${i}`)
}

images.forEach(img => img.addEventListener('click', handleClick))

let imgNumber = 0

const nextTag = document.querySelector(".next")
const previousTag = document.querySelector(".prev")

const next = function() {
	imgNumber++
 
	if(imgNumber > images.length -1 ) {
		imgNumber = 0
	}
	updateSection()
}

const prev = function() {
	imgNumber--
 
	if(imgNumber < 0) {
		imgNumber = images.length -1
	}
	updateSection()
}

const updateSection = function(){
	lightboxImg.src = images[imgNumber].src
}
 
nextTag.addEventListener("click", next)
previousTag.addEventListener("click", prev)

function handleClick(event) {
	let src = event.currentTarget.src

	lightboxImg.src = src
	lightbox.style.display = 'flex'

	const index = event.currentTarget.getAttribute('data-index')

	imgNumber = index
}


 
