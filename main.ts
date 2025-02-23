namespace SpriteKind {
    export const cursor = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 1 1 2 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 2 1 1 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
info.onScore(100, function () {
    add = sprites.create(img`
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
        f f f f f f f f f f f f f f f f 
        f f f f f f f 4 4 4 4 4 4 4 f f 
        f f 1 f 1 f f 4 f 4 f 4 4 4 f f 
        f 1 f 1 f 1 f 4 4 f 4 f 4 4 f f 
        f f f f f f f 4 4 4 4 4 4 4 f f 
        `, SpriteKind.Player)
})
info.onScore(2025, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.melt)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(1)
})
let add: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....2222...2222.....
    ...222222.222222....
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ..222222222222222...
    ...2222222222222....
    ....22222222222.....
    .....222222222......
    ......2222222.......
    .......22222........
    ........222.........
    .........2..........
    .........2..........
    ....................
    `, SpriteKind.Player)
effects.starField.startScreenEffect()
game.splash("this game is NOT sponsored")
game.splash("if p*rn vids are banned in ur country")
game.splash("use VPN")
game.splash("game by FriskBSC")
game.splash("on youtube")
scene.setBackgroundColor(15)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.splash("long ago")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.splash("there was a kid")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.splash("that wanted GTA 6")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.splash("and he downloaded a virus")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.splash("he thought it was GTA 6")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.splash("now u have to fix his IPAD")
scene.cameraShake(8, 5000)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.splash("oh no")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.splash("it's coming")
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
game.splash(":(")
scene.setBackgroundColor(6)
music.play(music.createSong(assets.song`megalovania`), music.PlaybackMode.LoopingInBackground)
let virus = sprites.create(img`
    8 1 8 8 1 8 1 8 8 8 8 2 1 2 1 2 
    8 1 8 1 8 1 1 8 8 8 8 2 1 1 2 1 
    8 1 1 8 1 8 1 1 8 8 8 2 1 2 1 2 
    d d d d d d d d d d d d d d d d 
    d d d d d d c d d d d d d d d d 
    d c c d d c d c d d d d d d d d 
    d c d c d c d c d d d d d d d d 
    d c c d d d c d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d c d d d d d d 
    d d c d d c d d c d c d c d c c 
    d c d d d c d d c d c c d d c d 
    d c d d d c d d c d c d c d c c 
    d d c d d c c d d c d d d c c d 
    d d d d d d d d d d d d c d c c 
    d d d d d d d d d d d d d d c d 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
virus.setPosition(randint(15, 145), randint(15, 105))
game.setGameOverMessage(false, "GAME OVER!")
scene.cameraFollowSprite(mySprite)
forever(function () {
    timer.after(500, function () {
        virus = sprites.create(img`
            8 1 8 8 1 8 1 8 8 8 8 2 1 2 1 2 
            8 1 8 1 8 1 1 8 8 8 8 2 1 1 2 1 
            8 1 1 8 1 8 1 1 8 8 8 2 1 2 1 2 
            d d d d d d d d d d d d d d d d 
            d d d d d d c d d d d d d d d d 
            d c c d d c d c d d d d d d d d 
            d c d c d c d c d d d d d d d d 
            d c c d d d c d d d d d d d d d 
            d d d d d d d d d d d d d d d d 
            d d d d d d d d d c d d d d d d 
            d d c d d c d d c d c d c d c c 
            d c d d d c d d c d c c d d c d 
            d c d d d c d d c d c d c d c c 
            d d c d d c c d d c d d d c c d 
            d d d d d d d d d d d d c d c c 
            d d d d d d d d d d d d d d c d 
            `, SpriteKind.Enemy)
        virus.setPosition(randint(15, 145), randint(15, 105))
    })
})
