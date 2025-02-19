import './style.css'
import Typewriter from './typewriter.ts'

const typewriter = new Typewriter(document.querySelector(".whitespace") as HTMLDivElement,
  {
    loop:true 
  }
)

typewriter
  .typeString("Breaking news: Cats have officially taken over the internet... ")
  .pauseFor(500)
  .typeString("again.")
  .typeString("\n\nScientists confirm: dogs are quite jealous.")
  .deleteChars(14)
  .typeString("unbothered.")
  .typeString("\n\nLocal reports indicate a sharp rise in mysterious keyboard typos.")
  .pauseFor(1000)
  .deleteAll(10)
  .typeString("Stay tuned for more important updates.")
  .pauseFor(1000)
  .typeString("\n\nOr don’t. The cats are in charge now.")
  .pauseFor(1000)
  .typeString("\n\nMeow.")
  .pauseFor(1000)
  .deleteAll(10)
  .start()