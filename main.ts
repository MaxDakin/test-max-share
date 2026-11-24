// This code throughs the dart and makes a new ine
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    The_light.throwDart()
    Projectiles(The_light)
})
// This function defines the darts
function Projectiles (dart: Sprite) {
    The_light = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 . . . . . . . . . . . 
        . . . . 3 . . . . . 4 . . . . . 
        . . . . . 5 4 5 4 d 4 . . . . . 
        . . . . . d d 1 d 5 4 . . . . . 
        . . . . 4 5 5 1 5 1 d 4 . . . . 
        . . . . 4 5 1 5 5 5 5 4 . . . . 
        . . . . . 3 5 5 d 5 d 4 . . . . 
        . . . . 4 5 3 d d d 5 . . . . . 
        . . . . 4 d 4 d d 3 d . . . . . 
        . . . . 4 4 . 4 4 . 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile, 77, 60)
    The_light.setTrace()
    The_light.controlWithArrowKeys(true)
}
// This function designs the tower’s properties.
function towerSprite (Tower: Sprite) {
    X = 77
    Y = 60
    Tower.setPosition(X, Y)
}
// This code defines how to kill an enemy
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
// This function calls the shop after the level ends.
function Shop (Tower_dart: Sprite) {
    Piont_yeild = false
    continueShoping = true
    while (continueShoping == true) {
        Buy_speed = game.ask("Do you want to buy a speed upgrade (3 points)")
        // Conditional statement
        if (true == Buy_speed && 3 <= info.score()) {
            game.splash("Purchase confirmed")
            Tower_dart.vx += 10
            Tower_dart.vy += 10
            info.changeScoreBy(-3)
        } else if (info.score() < 3) {
            game.splash("Not enough coins")
        }
        Buy_health = game.ask("Do you want to buy health (10 points)")
        if (Buy_health == true && 10 <= info.score()) {
            game.splash("Purchase confirmed")
            info.changeLifeBy(1)
            info.changeScoreBy(-10)
        } else if (info.score() < 10) {
            game.splash("Not enough coins")
        }
        continueShoping = game.ask("Do you want to continue shopping ")
    }
    // Return value
    return Tower_dart
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
// This function eefines the enemy properties.
function enemy (red: Sprite, tower: Sprite, enemy_size: number, levle: number) {
    side = randint(1, 4)
    if (side == 1) {
        red.setPosition(randint(-5, 160), 0)
    } else if (side == 0) {
        red.setPosition(0, randint(-5, 160))
    } else if (side == 0) {
        red.setPosition(randint(0, 160), 125)
    } else {
        red.setPosition(165, randint(0, 160))
    }
    red.follow(tower, 50 + level)
    pause(400)
}
// This code defines the nessesary finctions and sets up the levels.
let side = 0
let Buy_health = false
let Buy_speed = false
let continueShoping = false
let Piont_yeild = false
let Y = 0
let X = 0
let enemybadred: Sprite = null
let The_light: Dart = null
let level = 0
level = 1
let Tower = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . 6 6 8 8 8 8 8 8 8 6 6 . . . 
    . . 6 8 8 . . . . . . . 8 8 6 . . 
    . . 6 8 . . . . . . . . . 8 6 . . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . . 6 8 . . . . . . . . . 8 6 . . 
    . . 6 8 8 . . . . . . . 8 8 6 . . 
    . . . 6 6 8 8 8 8 8 8 8 6 6 . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
towerSprite(Tower)
Projectiles(The_light)
while (true) {
    for (let index = 0; index < level; index++) {
        enemybadred = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 4 4 4 4 4 2 . . . . . 
            . . . . 2 4 5 f 5 4 2 . . . . . 
            . . . . 2 4 4 4 4 4 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 4 4 4 4 2 . . . 
            . . 2 4 4 4 4 2 4 5 f 4 2 . . . 
            . . 2 4 f 5 4 2 4 5 5 4 2 . . . 
            . . 2 4 4 4 4 2 4 4 4 4 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        enemy(enemybadred, Tower, 10, level)
    }
    pause(20000)
    level += 1
    Shop(The_light)
    pause(100)
}
