import Vue from 'vue'
import sgyp from './sgyp.vue'
import jmcq from './jmcq.vue'
import mgyp from './mgyp.vue'
import dszp from './dszp.vue'
import userHead from './user-head.vue'

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

var HEAD = new Vue({
  el: '#userHead',
  render: h => h(userHead)
})