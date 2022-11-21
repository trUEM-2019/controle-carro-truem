input.onButtonPressed(Button.AB, function () {
    radio.sendString("pare")
})
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
})
