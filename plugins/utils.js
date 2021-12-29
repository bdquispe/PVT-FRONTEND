'use strict'

export default (context, inject) => {
  const utils = {
    getCookieValue(cookies, cookieName) {
      if (cookies) {
        var b = cookies.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)')
        return b ? b.pop() : ''
      }
      return null
    },
  }
  inject('utils', utils)
}