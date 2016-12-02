// 使用严格模式
'use strict'

var log = require('../libs/log')

// 导出一个函数 createB （同时也是一个对象）
exports = module.exports = createB

function createB () {
    log(' invoke method createB');
}

// method1 方法是声明在 createB 函数上，不会被 createB 实例继承
exports.method1 = function() {
    log( 'invoke method1' )
}