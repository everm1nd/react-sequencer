function step(){
  console.log('step');
};

function toggle(element){
  element.toggleClass('current');
};

function setup(){
  toggle($('span').first());
};

function render(){
  step();
};

$(document).ready(function(){
  setup();
  setInterval(render, 500);
});
