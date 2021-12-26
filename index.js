var elem = document.querySelector('.grid');
var pckry = new Packery( elem, {
  // options
  itemSelector: '.grid-item',
  gutter: 10
});

// element argument can be a selector string
//   for an individual element
var pckry = new Packery( '.grid', {
  itemSelector:'.grid-item',
  gutter: 10
});

// As a jQuery plugin
var $grid = $('.grid').packery({
  itemSelector: '.grid-item'
});

// As a Vanilla JS plugin
var grid = document.querySelector('.grid');
var pckry = new Packery( grid, {
  itemSelector: '.grid-item'
});

var draggies = [];
var isDrag = false;
$grid.find('.grid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  draggies.push( draggie );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});

var $grid = $('.grid').packery({

  // item selector
  itemSelector: '.grid-item',
  
  // column width
  // aligns items to a horizontal grid
  columnWidth: 60,

  // row height
  // aligns items to a vertical grid
  rowHeight: 60,

  // space between items
  gutter: 10,

  // sets item positions in percent values
  percentPosition: true,

  // arranges items around these elements
  stamp: '.stamp',

  itemSelector: '.grid-item',
  rowHeight: '.grid-sizer',
  percentPosition: true,

  // arranges items horizontally
  horizontal: true,

  // false: right-to-left layout
  originLeft: true,

  // false: bottom-to-up layout
  originTop: true,

  // additional styles for container element
  containerStyle: null,

  // duration of transition
  transitionDuration: '0.2s',

  // transitions grid items incrementally after one another
  stagger: 30,

  // enable/disable window resize behavior
  resize: true,

  // false: initialize the layout manually
  initLayout: false

});


VanillaTilt.init(document.querySelectorAll(".grid-item"), {
  max: 12,
  reverse:true,
  speed: 400
});

