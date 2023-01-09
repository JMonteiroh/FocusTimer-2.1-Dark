export default function Controls({
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
  buttonDarkTheme,
  buttonLightTheme,
}) {
  function play() {
    buttonPlay.classList.add('hide-buttons')
    setTimeout(() => {buttonPlay.classList.remove('hide-buttons')}, 1000)
  }

  function stop() {
    buttonStop.classList.add('hide-buttons')
    setTimeout(() => {buttonStop.classList.remove('hide-buttons')}, 1000)
  }

  function more() {
    buttonMore.classList.add('hide-buttons')
    setTimeout(() => {buttonMore.classList.remove('hide-buttons')}, 200)
  }

  function less() {
    buttonLess.classList.add('hide-buttons')
    setTimeout(() => {buttonLess.classList.remove('hide-buttons')}, 200)
  }

  function forest() {
    buttonCoffee.classList.remove('hide')
    buttonRain.classList.remove('hide')
    buttonFireplace.classList.remove('hide')
    buttonForest.classList.add('hide')
  }

  function rain() {
    buttonCoffee.classList.remove('hide')
    buttonRain.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonForest.classList.remove('hide')
  }

  function coffee() {
    buttonCoffee.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonFireplace.classList.remove('hide')
    buttonForest.classList.remove('hide')
  }

  function fireplace() {
    buttonCoffee.classList.remove('hide')
    buttonRain.classList.remove('hide')
    buttonFireplace.classList.add('hide')
    buttonForest.classList.remove('hide')
  }

  function themeChange() {
    buttonDarkTheme.classList.toggle('hide-theme')
    buttonLightTheme.classList.toggle('hide-theme')
  }

  return {
    play,
    stop,
    more,
    less,
    forest,
    rain,
    coffee,
    fireplace,
    themeChange
  }


}
