input.onButtonPressed(Button.A, function () {
    if (Start == 1) {
        Pass = "" + Pass + "A"
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Start == 1) {
        Pass = "" + Pass + "B"
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
    }
})
let Pass = ""
let Start = 0
Start = 0
Pass = ""
let Solution = "ABBAB"
basic.clearScreen()
for (let index = 0; index <= Solution.length; index++) {
    basic.showString(Solution.charAt(index))
    basic.pause(200)
    basic.clearScreen()
    basic.pause(100)
}
Start += 1
basic.showLeds(`
    . # . . .
    . # # . .
    . # # # .
    . # # . .
    . # . . .
    `)
basic.pause(200)
basic.clearScreen()
basic.forever(function () {
    if (Pass == Solution) {
        basic.showIcon(IconNames.Yes)
        Start = 0
    } else if (Pass.length > 5) {
        basic.showIcon(IconNames.No)
        control.reset()
    } else {
        basic.pause(100)
    }
})
