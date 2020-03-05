import decorator from './decorator'

export default {
  install(Vue) {
    const $vue = Vue
    $vue.prototype.$decorator = decorator
  }
}
