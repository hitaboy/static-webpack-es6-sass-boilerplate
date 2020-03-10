import { ScrollScene, addIndicators  } from 'scrollscene'
import { gsap } from 'gsap'

class videoTwin {
  reset () {

    // create a timeline and add a tween
    const myTimeline = gsap.timeline({ paused: true })
    const domNode = document.querySelector('.subtitle1')
    const scrollTrigger = document.querySelector('.subtitle2')

    myTimeline.to(domNode, {
      x: 100,
      duration: 1,
      ease: 'power2.out',
    })

    const scrollScene = new ScrollScene({
      triggerElement: scrollTrigger,
      gsap: {
        timeline: myTimeline,
      },
      duration: '100%'
    })
    scrollScene.Scene.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })

  }
}

export default videoTwin
