sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
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
let enemybadred: Sprite = null
let side = 0
let level = 0
level = 0
game.onUpdateInterval(600, function () {
    level = level + 1
    for (let index = 0; index < level + 4; index++) {
        let mySprite: Sprite = null
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
        enemy(enemybadred, mySprite, 1, 1)
    }
})
