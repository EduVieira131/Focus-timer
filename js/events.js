import {
  playBtn,
  pauseBtn,
  stopBtn,
  soundOnBtn,
  soundOffBtn,
  setBtn
} from './elements.js'

export default function ({ controls, timer, sounds }) {
  playBtn.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sounds.pressButton()
  })

  pauseBtn.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sounds.pressButton()
  })

  stopBtn.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sounds.pressButton()
  })

  soundOnBtn.addEventListener('click', function () {
    soundOnBtn.classList.add('hide')
    soundOffBtn.classList.remove('hide')
    sounds.bgAudio.pause()
  })

  soundOffBtn.addEventListener('click', function () {
    soundOnBtn.classList.remove('hide')
    soundOffBtn.classList.add('hide')
    sounds.bgAudio.play()
  })

  setBtn.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}
