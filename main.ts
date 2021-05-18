namespace SpriteKind {
    export const weapon = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const gh = SpriteKind.create()
    export const pro1 = SpriteKind.create()
    export const pro2 = SpriteKind.create()
}
function random_ghost6 () {
    ghost6 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost6.setVelocity(50, 50)
    tiles.placeOnTile(ghost6, tiles.getTileLocation(25, 27))
    if (ghost6.isHittingTile(CollisionDirection.Bottom)) {
        ghost6.vx += 50
    }
    if (ghost6.isHittingTile(CollisionDirection.Top)) {
        ghost6.vx += -50
    }
}
function random_ghost12 () {
    ghost12 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost12.setVelocity(50, 50)
    tiles.placeOnTile(ghost12, tiles.getTileLocation(8, 8))
    if (ghost12.isHittingTile(CollisionDirection.Bottom)) {
        ghost12.vx += 50
    }
    if (ghost12.isHittingTile(CollisionDirection.Top)) {
        ghost12.vx += -50
    }
}
function random_ghost13 () {
    ghost13 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost13.setVelocity(50, 50)
    tiles.placeOnTile(ghost13, tiles.getTileLocation(20, 8))
    if (ghost13.isHittingTile(CollisionDirection.Bottom)) {
        ghost13.vx += 50
    }
    if (ghost13.isHittingTile(CollisionDirection.Top)) {
        ghost13.vx += -50
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    arthur,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f f 2 f e f . . . 
        . f f f 2 f e e 2 2 f f f . . . 
        . f e 2 f f e e 2 f e e f . . . 
        f f e f f e e e f e e e f f . . 
        f f e e e e e e e e e e f d f . 
        . . f e e e e e e e e f f b f . 
        . . e f f f f f f f f 4 f b f . 
        . . 4 f 2 2 2 2 2 e d d f c f . 
        . . e f f f f f f e e 4 f f . . 
        . . . f f f . . . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . f f f f f 2 2 f f f f f . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f 2 f 2 e f . . . 
        . f f f 2 2 e e 2 2 f f f . . . 
        f f e f 2 f e e f 2 f e f f . . 
        f e e f f e e e e f e e e f . . 
        . f e e e e e e e e e e f . . . 
        . . f e e e e e e e e f . . . . 
        . e 4 f f f f f f f f 4 e . . . 
        . 4 d f 2 2 2 2 2 2 f d 4 . . . 
        . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e f 2 f f f 2 f 2 e f . . . 
        . f f f 2 2 e e f 2 f f f . . . 
        . f e e f 2 e e f f 2 e f . . . 
        . f e e e f e e e f f e f f . . 
        . f e e e e e e e e e e f f . . 
        . f f e e e e e e e e f . . . . 
        . f 4 f f f f f f f f e . . . . 
        . f d d e 2 2 2 2 2 f 4 . . . . 
        . f 4 e e f f f f f f e . . . . 
        . . . . . . . . f f f . . . . . 
        `],
    200,
    true
    )
    sguardo = 1
})
sprites.onOverlap(SpriteKind.weapon, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pro_1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . c c 8 . . . . 
        . . 2 2 . 2 2 c c c f 8 c 2 . . 
        . 2 . c c 8 8 f c a f f f c c . 
        2 2 c c c f f f c a a f f c c c 
        2 c c c f f f f c c a a c 8 c c 
        2 c c b f f f 8 a c c a a a c 2 
        c a a b b 8 a b c c c c c c c c 
        2 2 c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a 2 f f f 2 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c 2 b a f f f a b b c c 6 c 
        . 2 . 2 b b a f f 6 6 a b 6 c 2 
        2 2 . c c b b b 6 6 a c c c c . 
        . . . . 2 c a b b c c c . . . . 
        . . . . . c c c c c c . 2 . . . 
        `, arthur, -100, 50)
    pro_1.startEffect(effects.fire)
    pause(10000)
    pro_1.setBounceOnWall(true)
    pro_1 = sprites.create(img`
        . . . . . . . . . c c 8 . . . . 
        . . 2 2 . 2 2 c c c f 8 c 2 . . 
        . 2 . c c 8 8 f c a f f f c c . 
        2 2 c c c f f f c a a f f c c c 
        2 c c c f f f f c c a a c 8 c c 
        2 c c b f f f 8 a c c a a a c 2 
        c a a b b 8 a b c c c c c c c c 
        2 2 c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a 2 f f f 2 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c 2 b a f f f a b b c c 6 c 
        . 2 . 2 b b a f f 6 6 a b 6 c 2 
        2 2 . c c b b b 6 6 a c c c c . 
        . . . . 2 c a b b c c c . . . . 
        . . . . . c c c c c c . 2 . . . 
        `, SpriteKind.pro1)
})
function set_arthur () {
    info.setLife(3333)
    arthur = sprites.create(img`
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
    arthur.setPosition(36, 36)
    controller.moveSprite(arthur)
    scene.cameraFollowSprite(arthur)
    tiles.placeOnRandomTile(arthur, assets.tile`myTile1`)
    sword = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . 2 c 1 2 . . . . . . . 
        . . . . . 2 c 1 1 2 . . . . . . 
        . . . . 2 2 c 1 1 2 2 . . . . . 
        . . . . . . c 1 1 c 2 . . . . . 
        . . 2 2 . . c 1 1 c . . . . . . 
        . . . . . . c 1 1 c . . . . . . 
        . . . . . . c 1 1 c . . . . . . 
        . . . . . . c 1 1 c . . 2 . . . 
        . . . 2 . . c c c c . . . . . . 
        . . . . . c c b b c c . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.weapon)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sguardo == 2) {
        sword.right = arthur.left
        arthur.setImage(img`
            . . . . . . f f . . . . . . . . 
            . . . . f f 2 f f f f . . . . . 
            . . . f f 2 f e e e e f f . . . 
            . . f f 2 2 f e e e e e f f . . 
            . . f e e e e f f e e e e f . . 
            . f e 2 2 2 2 e e f f f f f . . 
            . f 2 e f f f f 2 2 2 e f f f . 
            . f f f e e e f f f f f f f f . 
            . f e e 4 4 f b e 4 4 e f e f . 
            . c f e d d f b 4 d 4 e e f . . 
            c c . e e d d d 4 e e e f . . . 
            1 c e d d e e 2 2 2 2 f . . . . 
            c c e d d 4 4 e 4 4 4 f . . . . 
            . c . e e e e f f f f f . . . . 
            . . . . . f f f f f f f f . . . 
            . . . . . . f f . . f f f . . . 
            `)
        sword.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c 9 c 1 1 1 c c c c . . . 
            . . c 1 1 1 c 1 1 1 1 1 1 c c c 
            . c 9 1 1 1 1 c 1 1 1 1 1 1 1 9 
            . . c d 1 1 c 1 1 1 9 d d c c c 
            . . . c 9 c d 1 1 c c c c . . . 
            . . . . c c c c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        sword.y = arthur.y
    } else if (sguardo == 4) {
        sword.left = arthur.right
        arthur.setImage(img`
            . . . . . . . . f f . . . . . . 
            . . . . . f f f f 2 f f . . . . 
            . . . f f e e e e f 2 f f . . . 
            . . f f e e e e e f 2 2 f f . . 
            . . f e e e e f f e e e e f . . 
            . . f f f f f e e 2 2 2 2 e f . 
            . f f f e 2 2 2 f f f f e 2 f . 
            . f f f f f f f f e e e f f f . 
            . f e f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 b f d d e f c . 
            . . . f e e e 4 d d d e e . c c 
            . . . . f 2 2 2 2 e e d d e c 1 
            . . . . f 4 4 4 e 4 4 d d e c c 
            . . . . f f f f f e e e e . c . 
            . . . f f f f f f f f . . . . . 
            . . . f f f . . f f . . . . . . 
            `)
        sword.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . c c c c 1 1 1 c 9 c . . . 
            c c c 1 1 1 1 1 1 c 1 1 1 c . . 
            9 1 1 1 1 1 1 1 c 1 1 1 1 9 c . 
            c c c d d 9 1 1 1 c 1 1 d c . . 
            . . . c c c c 1 1 d c 9 c . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        sword.y = arthur.y
    } else if (sguardo == 1) {
        sword.bottom = arthur.top
        arthur.setImage(img`
            . . . . d 1 f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . . . f f f f f f f f 4 e . . 
            . . . . f 2 2 2 2 2 2 f d 4 . . 
            . . . . f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        sword.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . c 1 c . . . . . . . 
            . . . . . c 1 1 9 c . . . . . . 
            . . . . c 1 1 1 1 9 c . . . . . 
            . . . . c c 1 1 1 c c . . . . . 
            . . . . c 1 c 1 c 9 c . . . . . 
            . . . . c 1 1 c d d c . . . . . 
            . . . . . c 1 1 9 c . . . . . . 
            . . . . . c 1 1 d c . . . . . . 
            . . . . . c 1 1 1 c . . . . . . 
            . . . . . c 1 1 d c . . . . . . 
            . . . . . . c d c . . . . . . . 
            . . . . . c c 9 c c . . . . . . 
            . . . . c c c c c c c . . . . . 
            `)
        sword.x = arthur.x
    } else if (sguardo == 3) {
        sword.top = arthur.bottom
        arthur.setImage(img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 2 2 f f . . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . f e e e e e e e e e e f f . 
            . . f e 2 2 2 2 2 2 2 2 e f f . 
            . . f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f f . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . f f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 2 f 4 e . . . 
            . . f 4 f 4 4 5 5 4 f 4 e . . . 
            . . . . f f f f f f d d e . . . 
            . . . . . f f f f e d d e . . . 
            . . . . . . . . . . e e . . . . 
            `)
        sword.setImage(img`
            . . . . . . . c c c c c . . . . 
            . . . . . . c c b b b c c . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . . c d c . . . . . 
            . . . . . . . . c 1 c . . . . . 
            . . . . . . . c 1 1 9 c . . . . 
            . . . . . . . c 1 1 d c . . . . 
            . . . . . . . c 1 1 1 c . . . . 
            . . . . . . c 1 1 1 1 9 c . . . 
            . . . . . . c 1 1 c 1 1 c . . . 
            . . . . . . c 1 c 1 c 1 c . . . 
            . . . . . . c c 1 1 1 c c . . . 
            . . . . . . . c 1 1 d c . . . . 
            . . . . . . . c 1 1 9 c . . . . 
            . . . . . . . . c 9 c . . . . . 
            . . . . . . . . . c . . . . . . 
            `)
        sword.x = arthur.x
    }
    if (true) {
        pause(200)
        sword.setImage(img`
            . . . . . . . . . . . . . . 1 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    arthur,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
    sguardo = 2
})
function boss_sistem () {
    princess = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b 2 e e a b f b b f . 
        . f b b e 1 2 4 4 a 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.boss)
    tiles.placeOnRandomTile(princess, sprites.dungeon.stairLadder)
    princess.setVelocity(0, 50)
    princess.vy += 34
    princess.ay = 0
    if (Math.percentChance(50)) {
        princess.vy = Math.randomRange(30, 60)
    } else {
        princess.vx = Math.randomRange(-60, -30)
    }
    princess.setBounceOnWall(true)
}
sprites.onOverlap(SpriteKind.weapon, SpriteKind.boss, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
function random_ghost15 () {
    ghost15 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost15.setVelocity(50, 50)
    tiles.placeOnTile(ghost15, tiles.getTileLocation(38, 10))
    if (ghost15.isHittingTile(CollisionDirection.Bottom)) {
        ghost15.vx += 50
    }
    if (ghost15.isHittingTile(CollisionDirection.Top)) {
        ghost15.vx += -50
    }
}
sprites.onOverlap(SpriteKind.pro1, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
function random_ghost10 () {
    ghost10 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost10.setVelocity(50, 50)
    tiles.placeOnTile(ghost10, tiles.getTileLocation(14, 26))
    if (ghost10.isHittingTile(CollisionDirection.Bottom)) {
        ghost10.vx += 50
    }
    if (ghost10.isHittingTile(CollisionDirection.Top)) {
        ghost10.vx += -50
    }
}
function random_ghost9 () {
    ghost9 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost9.setVelocity(50, 50)
    tiles.placeOnTile(ghost9, tiles.getTileLocation(34, 52))
    if (ghost9.isHittingTile(CollisionDirection.Bottom)) {
        ghost9.vx += 50
    }
    if (ghost9.isHittingTile(CollisionDirection.Top)) {
        ghost9.vx += -50
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    arthur,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `],
    200,
    true
    )
    sguardo = 4
})
function random_ghost11 () {
    ghost11 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost11.setVelocity(50, 50)
    tiles.placeOnTile(ghost11, tiles.getTileLocation(14, 19))
    if (ghost11.isHittingTile(CollisionDirection.Bottom)) {
        ghost11.vx += 50
    }
    if (ghost11.isHittingTile(CollisionDirection.Top)) {
        ghost11.vx += -50
    }
}
function random_ghost4 () {
    ghost4 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost4.setVelocity(50, 50)
    tiles.placeOnTile(ghost4, tiles.getTileLocation(15, 23))
    if (ghost4.isHittingTile(CollisionDirection.Bottom)) {
        ghost4.vx += 50
    }
    if (ghost4.isHittingTile(CollisionDirection.Top)) {
        ghost4.vx += -50
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
    scene.cameraShake(4, 500)
})
function random_ghost () {
    ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost.setVelocity(50, 50)
    tiles.placeOnTile(ghost, tiles.getTileLocation(25, 27))
    if (ghost.isHittingTile(CollisionDirection.Bottom)) {
        ghost.vx += 50
    }
    if (ghost.isHittingTile(CollisionDirection.Top)) {
        ghost.vx += -50
    }
}
function random_ghost5 () {
    ghost5 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost5.setVelocity(50, 50)
    tiles.placeOnTile(ghost5, tiles.getTileLocation(30, 46))
    if (ghost5.isHittingTile(CollisionDirection.Bottom)) {
        ghost5.vx += 50
    }
    if (ghost5.isHittingTile(CollisionDirection.Top)) {
        ghost5.vx += -50
    }
}
sprites.onDestroyed(SpriteKind.boss, function (sprite) {
    game.over(true, effects.starField)
})
function random_ghost2 () {
    ghost2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost2.setVelocity(50, 50)
    tiles.placeOnTile(ghost2, tiles.getTileLocation(34, 27))
    if (ghost2.isHittingTile(CollisionDirection.Bottom)) {
        ghost2.vx += 50
    }
    if (ghost2.isHittingTile(CollisionDirection.Top)) {
        ghost2.vx += -50
    }
}
function random_ghost14 () {
    ghost14 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost14.setVelocity(50, 50)
    tiles.placeOnTile(ghost14, tiles.getTileLocation(25, 13))
    if (ghost14.isHittingTile(CollisionDirection.Bottom)) {
        ghost14.vx += 50
    }
    if (ghost14.isHittingTile(CollisionDirection.Top)) {
        ghost14.vx += -50
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    arthur,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . f f e 4 1 f d d f 1 4 e f . . 
        f d f f e 4 d d d d 4 e f e . . 
        f b f e f 2 2 2 2 e d d 4 e . . 
        f b f 4 f 2 2 2 2 e d d e . . . 
        f c f . f 4 4 5 5 f e e . . . . 
        . f f . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f f . 
        . . e f e 4 d d d d 4 e f f d f 
        . . e 4 d d e 2 2 2 2 f e f b f 
        . . . e d d e 2 2 2 2 f 4 f b f 
        . . . . e e f 5 5 4 4 f . f c f 
        . . . . . f f f f f f f . f f . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
    sguardo = 3
})
info.onLifeZero(function () {
    game.over(false)
})
function random_ghost7 () {
    ghost7 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost7.setVelocity(50, 50)
    tiles.placeOnTile(ghost7, tiles.getTileLocation(24, 49))
    if (ghost7.isHittingTile(CollisionDirection.Bottom)) {
        ghost7.vx += 50
    }
    if (ghost7.isHittingTile(CollisionDirection.Top)) {
        ghost7.vx += -50
    }
}
sprites.onOverlap(SpriteKind.pro1, SpriteKind.boss, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.pro2, SpriteKind.Player, function (sprite, otherSprite) {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 4 4 2 2 2 2 2 . . . 
        . . 2 . 4 4 4 5 5 4 2 2 . . . 2 
        . . . 3 3 3 3 4 4 4 4 4 2 2 . 2 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . 2 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 2 
        2 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 2 4 2 2 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . 2 
        . . . 4 2 2 2 2 2 2 2 2 4 2 . . 
        . 2 . 2 4 4 2 2 2 2 4 4 . . 2 2 
        . . . . . . 4 4 4 4 . . . . 2 . 
        . . . . . . . . . . 2 . . . . . 
        `, princess, 50, 50)
    info.changeLifeBy(-1)
    pause(200)
    scene.cameraShake(4, 500)
    palla_di_fuoco = sprites.create(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 4 4 2 2 2 2 2 . . . 
        . . 2 . 4 4 4 5 5 4 2 2 . . . 2 
        . . . 3 3 3 3 4 4 4 4 4 2 2 . 2 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . 2 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 2 
        2 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 2 4 2 2 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . 2 
        . . . 4 2 2 2 2 2 2 2 2 4 2 . . 
        . 2 . 2 4 4 2 2 2 2 4 4 . . 2 2 
        . . . . . . 4 4 4 4 . . . . 2 . 
        . . . . . . . . . . 2 . . . . . 
        `, SpriteKind.pro2)
})
function random_ghost3 () {
    ghost3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost3.setVelocity(50, 50)
    tiles.placeOnTile(ghost3, tiles.getTileLocation(26, 35))
    if (ghost3.isHittingTile(CollisionDirection.Bottom)) {
        ghost3.vx += 50
    }
    if (ghost3.isHittingTile(CollisionDirection.Top)) {
        ghost3.vx += -50
    }
}
function allghosts () {
    random_ghost()
    random_ghost2()
    random_ghost3()
    random_ghost4()
    random_ghost5()
    random_ghost6()
    random_ghost7()
    random_ghost8()
    random_ghost9()
    random_ghost10()
    random_ghost11()
    random_ghost12()
    random_ghost13()
    random_ghost14()
    random_ghost15()
}
function random_ghost8 () {
    ghost8 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    ghost8.setVelocity(50, 50)
    tiles.placeOnTile(ghost8, tiles.getTileLocation(27, 55))
    if (ghost8.isHittingTile(CollisionDirection.Bottom)) {
        ghost8.vx += 50
    }
    if (ghost8.isHittingTile(CollisionDirection.Top)) {
        ghost8.vx += -50
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(13, 32), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (true) {
        princess.follow(arthur)
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    tiles.placeOnRandomTile(arthur, assets.tile`myTile22`)
    game.splash("you teletraported")
})
let palla_di_fuoco: Sprite = null
let projectile: Sprite = null
let princess: Sprite = null
let sword: Sprite = null
let pro_1: Sprite = null
let sguardo = 0
let ghost15: Sprite = null
let ghost14: Sprite = null
let ghost13: Sprite = null
let ghost12: Sprite = null
let ghost11: Sprite = null
let ghost10: Sprite = null
let ghost9: Sprite = null
let ghost8: Sprite = null
let ghost7: Sprite = null
let ghost6: Sprite = null
let ghost5: Sprite = null
let ghost4: Sprite = null
let ghost3: Sprite = null
let ghost2: Sprite = null
let arthur: Sprite = null
let ghost: Sprite = null
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111d1111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111d111111dd111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd11111dd111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd11111dd111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddd11111ddd11111111111111111111111111111111111
    1111111d1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111d11111111dddd111dddd11d11111111111111111111111111111111
    1111111d1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111d11111111d11111111dddd111dddd11bb111111d11111111111bb11111111111
    111111ddd1111d1111111111111111111111d11111111111111111111111111111111111111111111111111111111111bd111111dd111111d1ddddd11ddddd1bbd11111d11111111111bb11111111111
    111111ddd1111dd1111111111111111ddddddd1111111111111111111111111111111111111111111111dd111111111bbd11111dddd11111dddddddd1ddddd1bbd1111dd11111111111bb1111111111d
    1111111ddd11dd1111111111111111ddddddddd111111111111111111111111111111111111111111111dd11111111bbbd1ddd1ddddd111dddddddddddddddbbbdd111ddd111111111dbb1d11111111d
    ddddddd1d111ddd11111dddd111111dddddddddd11111111111111d11111111111111111111111111111ddd1111111bbbddddddddddd11ddddddddddddddddbbbbd11dddd1111d1111bbbdd1111111dd
    ddddddd1d1111ddd11dddddddd11ddddddddddddd1111111111111d1111111111111111111111111111dddd1111d11bbdddddddddbddd1ddddddddddddddddbbbbdd1dddd111ddd111bbbddd1dbd1ddd
    ddddddddddd11dd1ddddddddddddddd1dddddddddd111111111111d1111111111111111111111111111ddddd11dd11bdddddddddbbbdddddddddddddddddddbbbbdddddddd1dddd111bbbbdd1bbb1ddd
    ddddddddddddddddddddddddddddddd1ddddddddddd111d111111ddd111d111d1111111111111111111dddddddddddbddddddddbbbbdddddddddddddddddddbbbbdddddddd1ddddd1dbbbbddbbbbdddd
    ddddddddddddddddddddddddddddddd11dddddddddd11ddd1111dddddd1dd1dd111d11111111111111dddddddddddbbdddddbddbbbbbddddddddddddbbddddbbbbddddddddddddddddbbbbddbbbbdddd
    dddddddddddddddddddddddddddddddddd1ddddddddddddd1111ddddddd1dd11111bd11111d1111111dddddddddddbbdddddbdbbbbbbdddddbdddddbbbddddbbbbddddddddddbddddbbbbbddbbbbbddd
    dddddddddddddddddddddddddddddddddd1dddd1dddd1dddddd1ddddddd1d111111bd1d11ddd11111dddddddddddbbbdddddbdbbbbbbdddddbdddddbbbbddbbbbbddddddddddbbdddbbbbbddbbbbbdbd
    dddddddddddddddddddddddddddddddddd1dd111d1dd1ddddd11ddddddd11dd111dbbdbbddddd111ddddddddddddbbbdddddbbbbbbbbbddddbbddddbbbbddbbbbbdddddddddbbbbddbbbbbbbbbbbbbbb
    dddddddddddddddddddddddddddddddddd11111ddd11dddddd11ddddddd11db11dbbbbbbddddd11ddddddddddddbbbddddddbbbbbbbbbddddbbdddbbbbbbdbbbbbbddbbdddbbbbbddbbbbbbbbbbbbbbb
    dddddddddddddddddddddddddddddddddddddddddd111ddddd1dddddddddddb11bbbbbbbbddddddddddddddddddbbddddddbbbbbbbbbbbddbbbbddbbbbbbbbbbbbbbdbbdddbbbbbdbbbbbbbbbbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddbd1dbbbbbbbbddddddddddddddddbbbddddddbbbbbbbbbbbdbbbbbbdbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddbbdbbbbbbbbbddddddddddddddddbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddbbbbbbbbbbbbbddddddddddddddbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbdddbbbbbbbbbbbbbbddddddddddddbbddddddddbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddbddddddddddddbdddddbdddddddbdddddddbbddddddddddddddddddddddddbddddddddddddddddddddddddbddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddbddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddd1dddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd1ddd1ddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dd111dddd1ddddddd11111d1ddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dd111ddddd11111111ddd11ddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd1111111ddd1111ddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddd111111ddd1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddbcbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    11111ddd11111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    11d1111111111ddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddccddddddddddd1dddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddd
    11111111111111ddddddddddddd1111dddddddddddd11ddddddddddddddddddddddddddddddddddccdddddddddd111ddddddddd11111dddddddddddddddddddddddddddddddddddddddddddddddddddd
    111111111111111111111111111111ddddddddd1111111111ddddddddddddddd1111111ddddddddcccd1dddd11111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddd
    1111111111111111111111111111111111111111111111111dddddddd11111111111111111111dcfcbdd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddd
    11111111111111111111111111111111111111111111111111ddddddd11111111111111111111dcfcccc11111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddd
    111111111111111111111111111111111111111111111111111111ddd111111111111111111111ccccdd1111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddd
    1111111111111111111111111111111111111111111111111111111111111111111111dcd1111dcccccc1111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddd
    1111111111111111111111111111111111111111111111111111111111111111111111dcdcd1dcccccfc11111111dcd11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddd
    1111111111111111111111111111111111111111111111111111111111111111111111dccc111ccccccb11111111dcd11111111111ddddddddddddd11111ddddddddddddddd11ddddddddddddddddddd
    1111111111111111111111111111111111111111111111111111111111111111dcd111cfcd11dccccccb11dcd111dcd111111111111ddd111111111111111ddddddddddddd1111111ddddddddddddddd
    1111111111111111111111111111111111111111111111111111111111111111dcd11dccccdcccccccccb1dcd1111c1111111111111111111111111111111111111111111111111111dddddddddddddd
    11111111111111111111111111111111111111111111111111111111111111111c111ccccfcdcccccccbb11c1111dcd11111111111111111111111111111111111111111111111111111111111111111
    b111111111111111111111111111111111111111111111111111111111111111dcd11cccccc1cccccccbd11cd111ccc11111111111111111111111111111111111111111111111111111111111111111
    b111111111111111111111111111111111111111111111111111111111111111cfc11cccccccccccccbcc11cc111ccd11111111111111111111111111111111111111111111111111111111111111111
    bb11111111111111111111111111111111111111111111111111111111111111dcc11ccccccccccccbcc11ccd111ccc11111111111111111111111111111111111111111111111111111111111111111
    bb111111111111111111111111111111111111111111111111111111111111111cfcdccccccccccccbcc11cc111cfcd11111111111111111111111111111111111111111111111111111111111111111
    bbb11111111111111111111111111111111111111111111111111111111111111cccccccccccccccbbccccccccdccccd1111111111111111111111111111111111111111111111111111111111111111
    bbb11111111111dd11111111111111111111111111111111111111111111111cccccccccccccccccbccccccccccccccc1111111111111111111111111111111111111111111111111111111111111111
    bbbb1111111111dd11111111111111111111111111111111111111111111111cfcccccccccccccccbbcccccccccccccd1111111111111111111111111111111111111111111111111111111111111111
    bbbb1111111111111111111111111111111111111111111111111111111111ccccccccccccccccccbbcfcccccccccccc111111111111111111111111111111111111111111111111111111111111dd11
    bbbb1111111111111111111111111111111111111111111111111111111111ccccccccccccccccccbbcccccccccccccfcdc111111111111111111111111111111111111111111111111111111111dd11
    bbbb1111111111111111111111111111111111111111111111111111111111ccccccccccccccccccbbccccccccccccccccc111111111111111111111111111111111111111111111111111111111dd11
    bbbbd111111111111111111111111111111111dd1111111111111111111111ccccccccccccccccccbbccccccccccccccdcc1111111111111111111111111111111111111111111111111111111111111
    dbbbd111111111111111111111111111111111dd1111111111111111111111ccccccccccccccccccbbccccccccccccccccc1111111111111111111111111111111111111111111111111111111111111
    dddddd11111111111111111111111111111111dd111111111111111111111cccccccccccccccccccbbcccccccccccccccccc11111111111111111111111111111dd11111111111111111111111111111
    dddddd111111111111111111111111111111111111111111111111111111cfccccccccccccccccccbbcccccccccccccccccc11111111111111111111111111111dd11111111111111111111111111111
    dddddd111111111111111111111111111111111111111111111111111ccdccccccccccccccccccccbbcccccccccccccccccc11111111111111111111111111111dd11111111111111111111111111111
    ddddd1111111111111111111111111111111111111111111111111111dccccccccccccccccceccccbbcccccccccccccccccc111111111111111111111111111111111111111111111111111111111111
    1111111ddddd111111111111111111111111111111111111111111111ccfcccccccccccccccecccebcccccccccccccccccccdc1111111111111111111111111111111111111111111111111111111111
    11111ddddddd111111111111111111111111111111111111111111111cccccccccccccccccccccebbcccceecccccccccccccccd111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111dcccccccccccccccccccccebbcccceeeccccccccccccccc111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111ccccccccccccccecccccccebbccccceeccccccccccccccc111111111111111111111111111111111111111111111111111111111
    1111111111111111111111bbbb111111111111111111111111111111dcccccccccccccceeccccce4bccccccecccccccccccccccc11111111111111111111111111111111111111111111111111111111
    111111111111111111111dbbbb11111111111111111111111111111bbccccccccccccccceecccce4eccccccecccccccccccccccfc1111111111111111111111111111111111111111111111111111111
    111111111111111111111dbdbd11111111111111111111111111111ccccccccccccccccceecccc444cccccccccccccccccccccccc1111111111111111111111111111111111111111111111111111111
    111111111111111111111ddddd1111111111111111111111111111bcccccccccccccceeccccccc444ccccccc44eccccccccccccccc111111111111111111111111111111111111111111111111111111
    111111111111111111111dddd1111111111111111111111111111dccccccffcccccccceccccccc454ccccecceeccccccccccccccccd11111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111bcbbccccccccccccccccccccc4ee4ccceeccccccccccccccbbcccb11111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111dbcbbccbccccccccccccccecceeeeecccccccccccccccccbbcccbbb1111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111bccbbbbbbcccccbbcccccccccccccccccccccccccccccccccbbbbdd1111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111bbbbbbbbbbbccbbbbbcccccccccccccccccccccccccccccccccbbbbdd1111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111ddddddbbbbbbbbbbbbbcbcccccbbcbccccccccccccccccbbbbbbddddd11111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111d1111111111111111111ddddbbbbbbbbbbbbbbbcccbbbbbbccccccccccccccbbbbbbbdddd111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111d1111111111111111111111ddddbcbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbddddd1111111111111111111111111111111111111bb111111111111111111
    11111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd11111111111111111111111111111111111111111bbbb11111111111111111
    1111111111111111111d11111111111111111111111111111111111111dbddbbdbdddddddddbbbbdddddbbbbbbbbbbddd11111111111111111111111111111111111111111bbbbb11111111111111111
    111111111111111111111111111111111111111111111111111111111dddddddd111d11111ddddddddddddddddddddddd11111111111111111111111111111111111111111bbbbb11111111111111111
    111111111111111111111111111111111111111111111111111111111111dd1111111111111111ddd111111111111111111111111111111111111111111111111111111111dbbbd11111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddbd11111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddd11111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddd111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111cccccc11111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ccccccd1111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111cccccc11111111111111111111111111111111111111111111ccccccc1111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111ccccccd1111111111111111111111111111111111111111111ccccccc1111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111ccccccc1111111111111111111111111111111111111111111ccccccc1111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111ccccccc1111111111111111111111111111111111111111111ccccccc1111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111ccccccc1111111111111111111111111111111111111111111bcccccb1111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111ccccccc1111111111111111111111111111111111111111111bbbbbcb1111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111bcccccb1111111111111111111111111111111111111111111dbbbbbd1111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111bbbbbcb1111111111111111111111111111111111111111111dbbbbbd1111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111dbbbbbd1111111111111111111111111111111111111111111dbdddd11111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111dbbbbbd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111dbdddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111ddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbb1111111111111111111d11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111bbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
game.splash("READY TO START THE DUNGEON ")
pause(1000)
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level3`)
set_arthur()
allghosts()
boss_sistem()
info.setScore(0)
ghost.follow(arthur)
ghost2.follow(arthur)
ghost3.follow(arthur)
ghost4.follow(arthur)
ghost5.follow(arthur)
ghost6.follow(arthur)
ghost7.follow(arthur)
ghost8.follow(arthur)
ghost9.follow(arthur)
ghost10.follow(arthur)
ghost11.follow(arthur)
ghost12.follow(arthur)
ghost13.follow(arthur)
ghost14.follow(arthur)
ghost15.follow(arthur)
game.onUpdate(function () {
    if (ghost.overlapsWith(arthur)) {
    	
    }
})
game.onUpdateInterval(1000, function () {
    ghost.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost2.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost3.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost4.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost5.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost6.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost7.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost8.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost9.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost10.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost11.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost12.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost13.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost14.setVelocity(randint(-70, 70), randint(-50, 50))
    ghost15.setVelocity(randint(-70, 70), randint(-50, 50))
    princess.setVelocity(randint(-70, 70), randint(-50, 50))
})
