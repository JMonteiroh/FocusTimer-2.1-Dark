export default function() {
  const forestSound = new Audio("./sounds/Floresta.wav")
  const rainSound = new Audio('./sounds/Chuva.wav')
  const coffeeSound = new Audio('./sounds/Cafeteria.wav')
  const fireplaceSound = new Audio('./sounds/Lareira.wav')
  const buttonPressAudio = new Audio("./sounds/audios_button-press.wav")
  const kitchenTimer = new Audio("./sounds/audios_kichen-timer.mp3")

  
  forestSound.loop = true
  rainSound.loop = true
  coffeeSound.loop = true
  fireplaceSound.loop = true

  function forest() {
    forestSound.play()
    rainSound.pause()
    coffeeSound.pause()
    fireplaceSound.pause()
  }

  function forestPause() {
    forestSound.pause()
  }

  function rain() {
    rainSound.play()
    forestSound.pause()
    coffeeSound.pause()
    fireplaceSound.pause()
  }

  function coffee() {
    coffeeSound.play()
    forestSound.pause()
    rainSound.pause()
    fireplaceSound.pause()
  }

  function fireplace() {
    fireplaceSound.play()
    forestSound.pause()
    rainSound.pause()
    coffeeSound.pause()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }
  return {
    pressButton,
    timeEnd,
    forest,
    rain,
    coffee,
    fireplace,
    forestSound,
    rainSound,
    coffeeSound,
    fireplaceSound,
  }

}