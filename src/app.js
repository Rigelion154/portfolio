import './style.css'
import {greetings} from "./js/components/greetings/greeting";
import {nav} from "./js/components/header/header";
import {gsap} from "gsap";
import {scrollAnimation} from "./js/utils/scrollAnimation";

function app() {
  let render = gsap.timeline()
  render.add(greetings())
  render.add(nav)
  // render.add(scrollAnimation())
}

app()



