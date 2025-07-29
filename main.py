def on_button_pressed_a():
    wuKong.stop_all_motor()
input.on_button_pressed(Button.A, on_button_pressed_a)

def reverse_pause_turn_a():
    wuKong.set_motor_speed(wuKong.MotorList.M1, 50)
    wuKong.set_motor_speed(wuKong.MotorList.M2, 50)
    basic.pause(300)
    wuKong.set_motor_speed(wuKong.MotorList.M1, -25)
    wuKong.set_motor_speed(wuKong.MotorList.M2, 25)
    basic.pause(400)
    wuKong.set_motor_speed(wuKong.MotorList.M1, -50)
    wuKong.set_motor_speed(wuKong.MotorList.M2, -50)
    basic.pause(100)

def reverse_pause_turn_b():
    wuKong.set_motor_speed(wuKong.MotorList.M1, 50)
    wuKong.set_motor_speed(wuKong.MotorList.M2, 50)
    basic.pause(300)
    wuKong.set_motor_speed(wuKong.MotorList.M1, 25)
    wuKong.set_motor_speed(wuKong.MotorList.M2, -25)
    basic.pause(400)
    wuKong.set_motor_speed(wuKong.MotorList.M1, -50)
    wuKong.set_motor_speed(wuKong.MotorList.M2, -50)
    basic.pause(100)

def on_logo_pressed():
    wuKong.set_motor_speed(wuKong.MotorList.M1, -50)
    wuKong.set_motor_speed(wuKong.MotorList.M2, -50)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

i = 0
wuKong.set_motor_speed(wuKong.MotorList.M1, 0)
wuKong.set_motor_speed(wuKong.MotorList.M2, 0)
basic.show_icon(IconNames.HEART)
pins.set_pull(DigitalPin.P0, PinPullMode.PULL_UP)

def on_forever():
    global i
    if pins.digital_read_pin(DigitalPin.P0) == 0:
        i = randint(1, 2)
        if i == 1:
            reverse_pause_turn_a()
        elif i == 2:
            reverse_pause_turn_b()
basic.forever(on_forever)

