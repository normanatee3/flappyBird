// bird reference
let bird = document.querySelector('.bird')
// score reference
let score = document.querySelector('.scoreValue')
// background reference
let background = document.querySelector('.background')
// pipe column reference
let pipe = document.querySelector('.lePipes')
let pipeTop = document.querySelector('.topPipe')
let pipeBottom = document.querySelector('.bottomPipe')
let pipeTop2 = document.querySelector('.topPipe2')
let pipeBottom2 = document.querySelector('.bottomPipe2')
let pipe2 = document.querySelector('.lePipes2')
// gap reference
let gap = document.querySelector('.gapPipe')
let gap2 = document.querySelector('.gapPipe2')
// init jump variable
let jumping = 0


let flapSound = new Audio ('/sounds/fly.mp3')
let scoreSound = new Audio ('/sounds/score.mp3')


// let message = document.querySelector('.message')




// randomize pipe1
pipe.addEventListener('animationiteration', () =>{
    let random = (Math.random()*400)+50
    gap.style.top = random + "px"
    pipeTop.style.top = random + "px"
    pipeBottom.style.top = random + "px"
    
    // score
    let number = score.innerHTML
    number++
    score.innerHTML = number
    scoreSound.play()
})
// randomize pipe2
pipe2.addEventListener('animationiteration', () =>{
    let random = (Math.random()*400)+50
    gap2.style.top = random + "px"
    pipeTop2.style.top = random + "px"
    pipeBottom2.style.top = random + "px"
    
    // score
    let number = score.innerHTML
    number++
    score.innerHTML = number
    scoreSound.play()
})
// gravity function
setInterval(function(){
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    let pipe1Left = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"))
    let pipe2Left = parseInt(window.getComputedStyle(pipe2).getPropertyValue("left"))
    let gap1Top = parseInt(window.getComputedStyle(gap).getPropertyValue("top"))
    let gap2Top = parseInt(window.getComputedStyle(gap2).getPropertyValue("top"))
    
    if(jumping == 0){
    bird.style.top = (birdTop + 3)+"px"
    }



    if((birdTop > 700) || (birdTop < -50) ||((pipe1Left<180)&&(pipe1Left>100)&&((birdTop<gap1Top-10)||(birdTop>gap1Top+185))) || ((pipe2Left<180)&&(pipe2Left>100)&&((birdTop<gap2Top-10)||(birdTop>gap2Top+185)))){
        let total = score.innerHTML
        alert(`Game Over. Your Total Score was ${total}. Press F5 to Restart`)
        bird.style.top = 200 +"px"

        score.innerHTML = '0'
    }

    

    

},10)


// jumping function 

document.addEventListener("keydown", (press) => {
    if(press.key == " "){
        flapSound.play()
        jumping = 1
        let jumpStep = 0
        let jumpInterval = setInterval(function(){
            let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
        if(jumpStep<12)
        bird.style.top = (birdTop - 5)+"px"
        
        if(jumpStep>15){
            clearInterval(jumpInterval)
            jumping = 0
            jumpStep = 0
        }
        jumpStep++
        },10)
    }
})





