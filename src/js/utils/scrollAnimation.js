import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin)

export function scrollAnimation() {
    /* Header animations */
    let tl = gsap.timeline()
    tl.to('.about__image', {
        yPercent: -3,
        scrollTrigger: {
            trigger: '.about__image',
            start: 'top',
            end: 'center',
            scrub: 1,
        }
    })
        .to('.about__title-wrapper', {
            y: -300,
            scrollTrigger: {
                start: 'top',
                // end:'center',
                scrub: 1,
            }
        }, '>')
        .to('.header__container', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.header__container',
                start: 'top',
                end: '150%',
                scrub: true,
                // markers:true
            }
        })
    /*Skills animations*/
    // let tlSkills = gsap;
    let tl1 = gsap

    const dot = gsap.utils.toArray('.progress')
    console.log(dot)

    dot.forEach(el => {
        tl1.to(el, {
            // background: 'white',
            scrollTrigger: {
                trigger: el,
                toggleClass: 'active',
            },
        })
    })

    /*Project animations */
    const projectDescriptions = gsap.utils.toArray('.projects__item .projects__description')
    const projectImages = gsap.utils.toArray('.projects__item .projects__img-wrapper')
    const projectBg = gsap.utils.toArray('.projects__item .projects__bg')

    console.log(projectBg)


    projectBg.forEach(el => {
        tl1.fromTo(el, {opacity: 0}, {
            opacity: .4, duration: 1, delay: 1,
            scrollTrigger: {
                trigger: el,
                // start: '-20%',
                // end: 'top',
                // scrub: true,
            }
        })
    })

    projectDescriptions.forEach(el => {
        if (projectDescriptions.indexOf(el) % 2 === 0) {
            tl1.fromTo(el, {xPercent: -50, opacity: 0}, {
                xPercent: 0, opacity: 1, duration: 1, delay: .5,
                scrollTrigger: {
                    trigger: el,
                    // start: '-275%',
                    // end: '-60%',
                    // scrub: true,
                }
            })
        } else {
            tl1.fromTo(el, {xPercent: 50, opacity: 0}, {
                xPercent: 0, opacity: 1, duration: 1, delay: .5,
                scrollTrigger: {
                    trigger: el,
                    // start: '-150%',
                    // end: '-60%',
                    // scrub: true,
                }
            })
        }
    })

    projectImages.forEach((el) => {
        if (projectImages.indexOf(el) % 2 === 0) {
            tl1.fromTo(el, {xPercent: 100, opacity: 0, duration: 1}, {
                xPercent: 0, opacity: 1, duration: 1,
                scrollTrigger: {
                    trigger: el,
                }
            })
        } else {
            tl1.fromTo(el, {xPercent: -100, opacity: 0, duration: 1}, {
                xPercent: 0, opacity: 1, duration: 1,
                scrollTrigger: {
                    trigger: el,
                }
            })
        }
    })
    return tl
}


