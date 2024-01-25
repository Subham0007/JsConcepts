// reduces api call by limiting the no. of times a function is called.
// throttling : set to control the rate at which a function is executed. It ensures that a function is not called more often than a specified time interval, preventing it from being invoked too frequently.
function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      func.apply(null, args);
      lastCall = now;
    }
  };
}

// Example usage:
const throttledFunction = throttle(function () {
  console.log(
    "Function is throttled and executed at most once every 500 milliseconds"
  );
}, 500);

// Call the throttled function
throttledFunction();
