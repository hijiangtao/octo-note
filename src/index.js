/**
 * index.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-05-28 16:39:25
 * @version $Id$
 */

import g from './global'
import template from './index.html'
import './style.css'

g.test = 'test'
document.title = 'iNote'
document.body.innerHTML = template

setTimeout(() => {
  document.getElementById('note').innerHTML = 'Changed.'
}, 3000)