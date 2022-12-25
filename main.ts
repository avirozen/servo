input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(180)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
servos.P0.setAngle(90)
