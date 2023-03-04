import Timer from './timer.js'
import Controls from './controls.js'
import Sound from './sounds.js'
import Events from './events.js'
import {
  playBtn,
  pauseBtn,
  setBtn,
  stopBtn,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const controls = Controls({
  playBtn,
  pauseBtn,
  setBtn,
  stopBtn
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sounds = Sound()

Events({ controls, timer, sounds })
