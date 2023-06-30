import '../../../styles/components/greeting.css'
import {gsap} from "gsap";
import {scrollAnimation} from "../../utils/scrollAnimation";
import {nav} from "../header/header";

export function greetings() {
  let tl = gsap.timeline()
  tl.from('.greeting span', {yPercent: 120, opacity: 0, ease: 'back', duration: 1.7, stagger: 0.1})
    .fromTo('.o', {rotation: 0, duration: 1, ease: 'bounce'}, {rotation: 20, duration: .7})
    .to('.o', {rotation: 180, duration: .7, ease: 'bounce'})
    .to('.h', {yPercent: 200, rotation: 360, duration: .7, ease: 'bounce'})
    .to('.e', {yPercent: 200, ease: 'bounce', duration: 0.3})
    .to('.l', {yPercent: 200, ease: 'bounce', duration: 0.5})
    .to('.ll', {yPercent: 200, ease: 'bounce', duration: 0.4})
    .to('.o', {yPercent: 110, duration: .7, ease: 'bounce'})
    .to('.greeting', {opacity: 0, duration: 1})
    // .from('.wrapper', {opacity: 0, duration: 1, onComplete: () => {
    //     document.body.style.overflow = 'auto'
    //   }})
  return tl
}


