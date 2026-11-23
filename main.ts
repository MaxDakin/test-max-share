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
let mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(5000, function () {
    level = level + 1
    for (let index = 0; index < level + 4; index++) {
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
