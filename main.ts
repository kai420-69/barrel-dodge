controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 7 . . 7 7 . . 
    . . . . . . . 7 7 7 7 7 7 7 7 . 
    . . . . . . . 7 1 1 7 7 1 1 7 . 
    . . . . . . . 7 f f 1 1 f f 7 . 
    . . . . . . 7 7 f f 1 1 f f 7 . 
    . . . . . . 7 7 7 7 7 7 7 7 7 . 
    . . . . . 7 7 7 7 7 7 7 7 7 7 . 
    . . . . . 7 7 7 e e e e e 7 7 . 
    . . . . . 7 7 e e e e e e 7 . . 
    . . . . . 7 7 7 e e 7 7 7 7 . . 
    . . . . . 7 7 7 7 7 7 7 7 . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.vehicle.roadHorizontal], TileScale.Sixteen))
mySprite.x = 20
mySprite.y = 70
mySprite.ay = 500
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . e e e e e . 
        . e e e e e e e 
        . 1 1 1 1 1 1 1 
        . e e e e e e e 
        . e e e e e e e 
        . 1 1 1 1 1 1 1 
        . e e e e e e e 
        . . e e e e e . 
        `, mySprite, randint(-100, -80), 0)
    info.changeScoreBy(1)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 6))
})
