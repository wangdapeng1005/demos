// 使用严格模式
'use strict'

// 模块要使用相对路径
var log = require('../libs/log')
var b = require('./b')

log('module b => ' + b)
log('method1 in module b =>' + b.method1)

var insb = new b();
log('instance of b => ' + insb)

log('instance of b has method1 ? => ' + Boolean(insb.method1))
log('b has method1 ? => ' + Boolean(b.method1))