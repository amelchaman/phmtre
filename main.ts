input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showNumber(pH)
    }
    basic.clearScreen()
})
let pH = 0
basic.showIcon(IconNames.Yes)
bluetooth.startUartService()
basic.forever(function () {
    // Permet d'arrondir la réponse au centième de pH.
    // Ce calcul dépend de la droite lors de la calibration de l'appareil.
    pH = Math.round((pins.analogReadPin(AnalogReadWritePin.P3) - 225) / 24 * 100) / 100
    serial.writeValue("pH", pH)
    basic.pause(500)
})
