import 'fetch'

import Ractive from 'ractive'
import template from './main.html!text'
import imageSlider from './imageSlider'

let ractive = new Ractive({
    el :'body',
    template : template,
    data:{
      title :'Kuba'
    }
})

console.log('hello')
