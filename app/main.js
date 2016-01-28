import 'fetch'

import Ractive from 'ractive'


let ractive = new Ractive({
    el:'body',
    template:'hello from ractive'
})

console.log('hello')