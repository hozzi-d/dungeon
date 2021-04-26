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
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    arthur,
    [img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...feeeeffeeef.
        .......cdc.fe2222eeffff.
        .......cddcf2effff222ef.
        ........cddcffeeefffffff
        .........cddce44fbe44eff
        ..........cdceddf14d4eef
        ..........cccdeddd4eeef.
        ...........edd4e44eeff..
        ............ee442222f...
        .............f2e2222f...
        .............f554444f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ..............fff.......
        .............f2fffff....
        ...........ff22eeeeeff..
        ..........ff222eeeeeeff.
        ..........feeeefffeeeef.
        .........fe2222eeefffff.
        .........f2efffff222efff
        ..cc.....fffeeefffffffff
        ..cdcc...fee44fbbe44efef
        ..ccddcc..feddfbb4d4eef.
        ....cdddceefddddd4eeef..
        .....ccdcddee2222222f...
        ......cccdd44e544444f...
        .........eeeeffffffff...
        .............ff...fff...
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ...............ff.......
        .............ff2ffff....
        ............ff2feeeeff..
        ...........ff22feeeeeff.
        ...........feeeeffeeeef.
        ..........fe2222eefffff.
        ..........f2effff222efff
        ..........fffeeeffffffff
        ..........fee44fbe44efef
        ...........feddfb4d4eef.
        ..........c.eeddd4eeef..
        ....ccccccceddee2222f...
        .....dddddcedd44e444f...
        ......ccccc.eeeefffff...
        ..........c...ffffffff..
        ...............ff..fff..
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        ............feeeeffeeef.
        ...........fe2222eeffff.
        ...........f2effff222ef.
        ...........fffeeefffffff
        ...........fee44fbe44eff
        ............feddf14d4eef
        .............fdddd4eeef.
        .............fe444eddf..
        .............ccc22eddf..
        .............cdc22fee...
        ............cddc4444f...
        ...........cddcfffff....
        ..........cddc..fff.....
        ..........cdc...........
        ..........cc............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    false
    )
})
function set_arthur () {
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
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.setBarBorder(1, 15)
    status_bar_list = statusbars.allOfKind(StatusBarKind.Health)
    statusbar.attachToSprite(arthur, 0, 0)
}
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
    false
    )
})
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
    false
    )
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
}
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
    false
    )
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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    ghost.destroy(effects.halo, 500)
    info.changeLifeBy(-1)
})
let ghost3: Sprite = null
let ghost2: Sprite = null
let ghost: Sprite = null
let status_bar_list: StatusBarSprite[] = []
let statusbar: StatusBarSprite = null
let arthur: Sprite = null
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
effects.blizzard.startScreenEffect()
game.splash("ready to start the dungeon")
pause(1000)
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level3`)
random_ghost2()
random_ghost()
random_ghost3()
set_arthur()
game.onUpdate(function () {
    if (ghost3.isHittingTile(CollisionDirection.Bottom)) {
        ghost3.vx += 50
    }
    if (ghost3.isHittingTile(CollisionDirection.Top)) {
        ghost3.vx += -50
    }
})
game.onUpdate(function () {
    if (ghost.isHittingTile(CollisionDirection.Bottom)) {
        ghost.vx += 50
    }
    if (ghost.isHittingTile(CollisionDirection.Top)) {
        ghost.vx += -50
    }
})
game.onUpdate(function () {
    if (ghost2.isHittingTile(CollisionDirection.Bottom)) {
        ghost2.vx += 50
    }
    if (ghost2.isHittingTile(CollisionDirection.Top)) {
        ghost2.vx += -50
    }
})
game.onUpdateInterval(1000, function () {
    ghost.setVelocity(randint(-70, 70), randint(-50, 50))
})
game.onUpdateInterval(1000, function () {
    ghost3.setVelocity(randint(-70, 70), randint(-50, 50))
})
game.onUpdateInterval(1000, function () {
    ghost2.setVelocity(randint(-70, 70), randint(-50, 50))
})
