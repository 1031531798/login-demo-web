import Vue from 'vue'
import sgyp from './sgyp.vue'
import jmcq from './jmcq.vue'
import mgyp from './mgyp.vue'
import dszp from './dszp.vue'

var SGYP = new Vue({
  el: '#sgyp',
  render: h => h(sgyp)
})

var JMCQ = new Vue({
  el: '#jmcq',
  render: h => h(jmcq)
})

var MGYP = new Vue({
  el: '#mgyp',
  render: h => h(mgyp)
})

var DSZP = new Vue({
  el: '#dszp',
  render: h => h(dszp)
})