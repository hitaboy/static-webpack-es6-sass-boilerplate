import Global from './global.js'
import videoTwin from './modules/videotwin.js'

var global
global = window || global
global.logging = true


window.addEventListener('load', function (event) {
  // global.main = new Global()
  global.main = new Global()
  global.main.videotwin = new videoTwin()
  global.main.resetModules()

})
