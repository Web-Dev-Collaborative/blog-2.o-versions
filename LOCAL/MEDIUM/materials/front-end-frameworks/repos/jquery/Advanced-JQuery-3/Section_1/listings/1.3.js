$.fn.cycle.defaults.timeout = 10000;
$.fn.cycle.defaults.random = true;

$(() => {
  $("#books").cycle({
    timeout: 2000,
    speed: 200,
    pause: true,
  });
});
