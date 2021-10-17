const flags = [
  {"name": "Alpha"}, {"name": "Bravo"}, {"name": "Charlie"}, 
  {"name": "Delta"}, {"name": "Echo"}, {"name": "Foxtrot"},
  {"name": "Golf"}, {"name": "Hotel"}, {"name": "India"},
  {"name": "Juliet"}, {"name": "Kilo"}, {"name": "Lima"}, 
  {"name": "Mike"}, {"name": "November"}, {"name": "Oscar"},
  {"name": "Papa"}, {"name": "Quebec"}, {"name": "Romeo"},
  {"name": "Sierra"}, {"name": "Tango"}, {"name": "Uniform"},
  {"name": "Victor"}, {"name": "Whiskey"}, {"name": "X-ray"},
  {"name": "Yankee"}, {"name": "Zulu"}
]

class Slideshow {
  constructor(slides) {
    this.currentSlide = 0
    this.slides = slides
  }
  forward() {
    this.currentSlide++
    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0
    }
  }
  back() {
    this.currentSlide--
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1
    }
  }
  shuffle() {
    shuffle(this.slides)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let slideshow = new Slideshow(flags)
  let forwardButton = document.querySelector('#forward')
  let backButton = document.querySelector('#back')
  let shuffleButton = document.querySelector('#shuffle')
  
  forwardButton.addEventListener('click', function() {
    slideshow.forward()
    updatePage(slideshow.currentSlide)
  })
  backButton.addEventListener('click', function() {
    slideshow.back()
    updatePage(slideshow.currentSlide)
  })
  shuffleButton.addEventListener('click', function() {
    slideshow.shuffle()
    updatePage(slideshow.currentSlide)
  })
})

function updatePage(currentSlide) {
  // console.log(currentSlide)
  let img = document.querySelector('img')
  img.src = `/assets/imgs/ICS_${flags[currentSlide].name}.svg.png`
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}
