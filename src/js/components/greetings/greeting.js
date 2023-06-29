import '../../../styles/components/greeting.css'
import {gsap} from "gsap";
import {scrollAnimation} from "../../utils/scrollAnimation";
import {nav} from "../header/header";

export function greetings() {
  let tl = gsap.timeline()
  tl.from('.greeting span', {y: 120, opacity: 0, ease: 'back', duration: 1.7, stagger: 0.1})
    .fromTo('.o', {rotation: 0, duration: 1, ease: 'bounce'}, {rotation: 20, duration: .7})
    .to('.o', {rotation: 180, duration: .7, ease: 'bounce'})
    .to('.h', {y: 100, rotation: 180, duration: .7, ease: 'bounce'})
    .to('.e', {y: 113, ease: 'bounce', duration: 0.3})
    .to('.l', {y: 113, ease: 'bounce', duration: 0.5})
    .to('.ll', {y: 113, ease: 'bounce', duration: 0.4})
    .to('.o', {y: 0, duration: .7, ease: 'bounce'})
    .to('.greeting', {opacity: 0, duration: 1})
    .from('.wrapper', {opacity: 0, duration: 1, onComplete: () => {
        document.body.style.overflow = 'auto'
      }})
  return tl
}


