const body = document.querySelector('body')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const wrapper = document.querySelector('.wrapper')
const introSection = document.querySelector('.intro')

const profileSection = document.querySelector('.profile')
const viewMoreBtn = document.querySelector('.down-arrow-section')
const contentsSection = document.querySelector('.contents')

const frontEndMentorProjects = document.querySelectorAll('.front-end-mentor')
const frotEndMentorImage = document.querySelectorAll('.front-end-mentor__image img')
const frotEndMentorImageLink = document.querySelectorAll('.front-end-mentor__image a')
const frontEndMentorViewLiveLink = document.querySelectorAll('.front-end-mentor__links__live a')
const frontEndMentorGithubLink = document.querySelectorAll('.front-end-mentor__links__github a')

const frontEndMentorliveLinksArr = ['http://front-end-mentor-projects-rho.vercel.app','http://easybank-landing-page-master-eight-theta.vercel.app','http://front-end-mentor-projects-phi.vercel.app','http://launch-countdown-timer-main-peach.vercel.app','http://manage-landing-page-master-rose.vercel.app','http://room-homepage-master-rosy-five.vercel.app','http://to-do-lists-ebon.vercel.app']

const frontEndMentorgithubLinksArr = ['https://github.com/ATPaing/front-end-mentor-projects-1/tree/main/bookmark-landing-page-master','https://github.com/ATPaing/front-end-mentor-projects-1/tree/main/easybank-landing-page-master','https://github.com/ATPaing/front-end-mentor-projects-1/tree/main/ecommerce-product-page-main','https://github.com/ATPaing/front-end-mentor-projects-2/tree/main/launch-countdown-timer-main','https://github.com/ATPaing/front-end-mentor-projects-2/tree/main/manage-landing-page-master','https://github.com/ATPaing/front-end-mentor-projects-2/tree/main/room-homepage-master','https://github.com/ATPaing/front-end-mentor-projects-3/tree/main/to-do-lists']

const myCreationProjectsVanilla = document.querySelectorAll('.my-creations')
const myCreationProjectsVanillaImage = document.querySelectorAll('.my-creations__image img')
const myCreationProjectsVanillaImageLink = document.querySelectorAll('.my-creations__image a')
const myCreationProjectsVanillaLiveLink = document.querySelectorAll('.my-creations__links__live a')
const myCreationProjectsVanillaGithubLink = document.querySelectorAll('.my-creations__links__github a')

const vanillaJsLiveLinksArr = ['http://black-jack-iota.vercel.app','http://js-calculator-six.vercel.app','http://ecommerce-project-eight-smoky.vercel.app','http://fun-with-canvas.vercel.app','http://video-player-red.vercel.app','http://photo-editor-one.vercel.app','http://screen-saver.vercel.app']

const vanillaJsgithubLinksArr = ['https://github.com/ATPaing/blackJack','https://github.com/ATPaing/js-calculator','https://github.com/ATPaing/ecommerce-project','https://github.com/ATPaing/fun-with-canvas','https://github.com/ATPaing/video-player','https://github.com/ATPaing/photo-editor','https://github.com/ATPaing/screen-saver']

let backgroundHue = 150
let started = false

window.addEventListener('load',() => {

    introSection.style.opacity = '1'

    frontEndMentorProjects.forEach( (project,i) => {
        frotEndMentorImage[i].src = `images/front-end-mentor(${i + 1}).png`
        frotEndMentorImageLink[i].href = frontEndMentorliveLinksArr[i]
        frontEndMentorViewLiveLink[i].href = frontEndMentorliveLinksArr[i]
        frontEndMentorGithubLink[i].href = frontEndMentorgithubLinksArr[i]
    })
    myCreationProjectsVanilla.forEach((project,i) => {
        myCreationProjectsVanillaImage[i].src = `images/my-creation(${i + 1}).png`
        myCreationProjectsVanillaImageLink[i].href = vanillaJsLiveLinksArr[i]
        myCreationProjectsVanillaLiveLink[i].href = vanillaJsLiveLinksArr[i]
        myCreationProjectsVanillaGithubLink[i].href = vanillaJsgithubLinksArr[i]
    })
})

function animateIntro(){
    body.style.overflowY = 'auto'
    main.style.overflowY = 'auto'
    wrapper.style.transform = 'translateY(-100%)'
    contentsSection.style.display = 'flex'
    footer.style.display = 'flex'
    wrapper.ontransitionend = (e) => {
        if(e.propertyName === 'transform'){
            contentsSection.style.zIndex = 'unset'
        }
    }
    started = true
}



viewMoreBtn.addEventListener('click' ,() => {
    animateIntro()   
})

window.addEventListener('wheel',(e) => {
    
    if(e.deltaY === 102){
        animateIntro()
    }
})



window.addEventListener('scroll',() => {

    if(started && window.scrollY === 0){

        body.style.overflowY = 'hidden'
        main.style.overflowY = 'hidden'

        wrapper.style.transform = 'translateY(0)'
        wrapper.ontransitionend = (e) => {
            if(e.propertyName === 'transform'){
                contentsSection.style.zIndex = '-1'
            }
        }       
        contentsSection.style.display = 'none'   
        footer.style.display = 'none'
        started = false
    }
    backgroundHue += 2
    body.style.background = `linear-gradient(to bottom, hsl(${backgroundHue}, 70%, 53%), hsl(${backgroundHue}, 29%, 24%))`
})