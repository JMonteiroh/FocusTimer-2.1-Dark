import Sound from "./sounds.js"
import Timer from "./timer.js"
import Controls from "./controls.js";
import Events from "./events.js";
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
  secondsDisplay,
  buttonDarkTheme,
  buttonLightTheme,
  volumeForest
} from "./elements.js";

const controls = Controls({
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
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,

})

const sound = Sound()

Events({controls, timer, sound})