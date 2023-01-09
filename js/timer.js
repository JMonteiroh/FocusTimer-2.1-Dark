import sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  reset,
  // hold,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(0, 0)
    clearTimeout(timerTimeOut)
  }

  

  function countdown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        reset()
        updateDisplay()
        sounds().timeEnd()
        return
      }

      if(seconds <= 0) {
        seconds = 5
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  // function hold() {
  //   clearTimeout(timerTimeOut)
  // }

  function moreMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) + 5
 
    return newMinutes
  }

  function lessMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) - 5
    if(newMinutes < 0 ) {
      newMinutes = 0
    }
 
    return newMinutes
  }

  return {
    countdown,
    updateDisplay,
    updateMinutes,
    reset,
    // hold,
    moreMinutes,
    lessMinutes,
    timerTimeOut
  }
}