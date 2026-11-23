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
let mySprite: Sprite = null
let enemybadred: Sprite = null
let side = 0
let level = 0
level = 0
game.onUpdateInterval(600, function () {
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
        mySprite = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        enemy(enemybadred, mySprite, 1, 1)
    }
})
