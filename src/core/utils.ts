export const debounce = (callback: Function, time: number) => {
  let func: NodeJS.Timeout;
  return function(this: any) {
    const context = this;
    const args = arguments;
    clearTimeout(func);
    func = setTimeout(() => {
      callback.apply(context, args);
    }, time);
  }
}