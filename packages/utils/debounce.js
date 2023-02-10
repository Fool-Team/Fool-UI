export function throttling(fun, wait = 1500) {
  let timer;

  return function () {
    if (timer) return;

    fun.apply(this, arguments)
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null
    }, wait)
  }
}