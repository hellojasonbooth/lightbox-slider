// lightbox shit
const lightbox = document.querySelector('.lightbox')
const lightboxImg = lightbox.querySelector('img')
// const container = lightbox.querySelector('.img-container')

let currentImageNum = 0

const images = document.querySelectorAll('.grid img')

const imageIndex = []
imageIndex.push(images)

console.log(imageIndex)

function handleClick(event) {
	let src = event.currentTarget.src
	lightboxImg.src = src
	lightbox.style.display = 'flex'
}


images.forEach(img => img.addEventListener('click', handleClick))


let imgNumber = 0

const nextTag = document.querySelector(".next")
const previousTag = document.querySelector(".prev")
 
 
const next = function() {
	imgNumber = imgNumber + 1
 
	if(imgNumber > images.length -1 ) {
		imgNumber = 0
	}
	updateSection()
}

 
const updateSection = function(){
	lightboxImg.src = images[imgNumber].src
}
 
nextTag.addEventListener("click", next)

 
