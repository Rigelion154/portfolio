import '../../../styles/components/header.css'
import {gsap} from "gsap";

export function nav() {
  let tl = gsap.timeline()
  tl.fromTo('.nav', {y: -110, opacity:0}, {y:0, opacity:1, duration: 1})
    .fromTo('.about__title-bg', {xPercent: -100, opacity:0, duration: .5}, {xPercent: 100, opacity:1, duration: .5}, "<")
    .to('.about__title', {opacity: 1, delay: .3}, "<")
    .fromTo('.first-tag .about__tag-bg', {xPercent: -100,opacity:0, duration: .5}, {xPercent: 100,opacity:1, duration: .4, delay:.2},"<" )
    .to('.first-tag .about__tag', {opacity: 1, delay: .2}, "<")
    .fromTo('.second-tag .about__tag-bg', {xPercent: -100, opacity:0, duration: .5}, {xPercent: 100, opacity:1, duration: .4, delay: .3},"<" )
    .to('.second-tag .about__tag', {opacity: 1, delay: .2}, "<")
    .to('.about__line', {opacity:1})
    .to('.bottom-arrow', {opacity:1})
    // .from('.about__image', {opacity: 0, duration: 1, delay: .2}, "<")
  return tl
}


