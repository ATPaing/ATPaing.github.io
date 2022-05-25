const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


const particleArray = []



class Particle{
    constructor(x,y){
        this.x = x,
        this.y = y,
        this.denity = Math.random() * 3 + 2,
        this.radius = Math.random() * 5 + 7,
        this.color = Math.random() * 360
        this.speedX = Math.random() * 4 - 2
        this.speedY = Math.random() * 4 - 2
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,2 * Math.PI)
        ctx.fillStyle = `hsl(${this.color} 90% 70% )`
        ctx.fill()
    }
    update(){

        this.x += this.speedX / this.denity
        this.y += this.speedY / this.denity
        
        if(this.x < 0){
            this.x = 0
            this.speedX = -(this.speedX)
        }
        if(this.y < 0){
            this.y = 0
            this.speedY = -(this.speedY)
        }
        if(this.x > canvas.width){
            this.x = canvas.width
            this.speedX = -(this.speedX)
        }
        if(this.y > canvas.height){
            this.y = canvas.height
            this.speedY = -(this.speedY)
        }
        this.color += 2.5 
    }
}


function makeParticleMove(){
    particleArray.forEach(particle => {
        particle.draw()  
        particle.update()
    })

}


function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    makeParticleMove()
    requestAnimationFrame(animate)
}


window.addEventListener('load', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight


    let numberOfCircle = 0

    if(canvas.width < 500){
        numberOfCircle = 15
    }else if(canvas.width > 500){
        numberOfCircle = 30
    }


    for(let i = 0; i < numberOfCircle; i++){
        const randomX = Math.random() * window.innerWidth
        const randomY = Math.random() * window.innerHeight
        particleArray.push(new Particle(randomX,randomY))

    }
    makeParticleMove()
    animate()
})

window.addEventListener('resize',() => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

