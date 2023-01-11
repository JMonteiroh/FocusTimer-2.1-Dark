import {
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
  minutesDisplay,
  buttonDarkTheme,
  buttonLightTheme,
  volumeForest
} from "./elements.js"

export default function({controls, timer, sound}) {

  buttonPlay.addEventListener('click', function() {
    if(Number(minutesDisplay.textContent) == 0){
      sound.pressButton()
    }else {
      controls.play()
      timer.countdown()
      sound.pressButton()
    }
  })
  
  buttonStop.addEventListener('click', function() {
    controls.stop()
    timer.reset()
    sound.pressButton()    
  })

  buttonMore.addEventListener('click', function() {
    controls.more()
    let newMinutes = timer.moreMinutes()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    sound.pressButton()
  })

  buttonLess.addEventListener('click', function() {
    controls.less()
    let newMinutes = timer.lessMinutes()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    sound.pressButton()
  })

  buttonForest.addEventListener('click', function() {
    if(buttonForest.classList.contains('hide')) {
      buttonForest.classList.remove('hide')
      sound.pressButton()
      sound.forestSound.pause()
    }else{
      controls.forest()
      sound.pressButton()
      sound.forest()
    }
  })

  buttonRain.addEventListener('click', function() {
    if(buttonRain.classList.contains('hide')) {
      buttonRain.classList.remove('hide')
      sound.pressButton()
      sound.rainSound.pause()
    }else{
      controls.rain()
      sound.pressButton()
      sound.rain()
    }
  })
  
  buttonCoffee.addEventListener('click', function() {
    if(buttonCoffee.classList.contains('hide')) {
      buttonCoffee.classList.remove('hide')
      sound.pressButton()
      sound.coffeeSound.pause()
    }else {
      controls.coffee()
      sound.pressButton()
      sound.coffee()
    }
  })

  buttonFireplace.addEventListener('click', function() {
  if(buttonFireplace.classList.contains('hide')) {
    buttonFireplace.classList.remove('hide')
    sound.pressButton()
    sound.fireplaceSound.pause()
  }else {
    controls.fireplace()
    sound.pressButton()
    sound.fireplace()
  }
  })

  buttonDarkTheme.addEventListener('click', function() {
    controls.themeChange()
    sound.pressButton()
  })

  buttonLightTheme.addEventListener('click', function() {
    controls.themeChange()
    sound.pressButton()
  })

  volumeForest.addEventListener('change', function() {
    sound.forestSound.volume = volumeForest.value
  })

}