input.onButtonPressed(Button.A, function on_button_pressed_a() {
    wuKong.stopAllMotor()
})
function reverse_pause_turn_a() {
    
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
    basic.pause(300)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -25)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 25)
    basic.pause(400)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
    basic.pause(100)
    reverse1 = 0
}

function reverse_pause_turn_b() {
    
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
    basic.pause(300)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 25)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -25)
    basic.pause(400)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
    basic.pause(100)
    reverse2 = 0
}

input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
})
let i = 0
let reverse2 = 0
let reverse1 = 0
wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
basic.showIcon(IconNames.Heart)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function on_forever() {
    
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        i = randint(1, 2)
        if (i == 1) {
            reverse_pause_turn_a()
        } else if (i == 2) {
            reverse_pause_turn_b()
        }
        
    }
    
})
