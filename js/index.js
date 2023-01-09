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
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,

})

const sound = Sound()

Events({controls, timer, sound})