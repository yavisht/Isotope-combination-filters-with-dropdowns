
var $container = $('.service-container').isotope({
  itemSelector: '.item'
});

var $output = $('#output');

// filter with selects and checkboxes
var $selects = $('#form-ui select');
//var $checkboxes = $('#form-ui input');

$selects.change( function() {
  // map input values to an array
  var exclusives = [];
  var inclusives = [];
  // exclusive filters from selects
  $selects.each( function( i, elem ) {
    if ( elem.value ) {
      exclusives.push( elem.value );
    }
  });
  
  // first combine exclusives
  exclusives = exclusives.join('');

  var filterValue;
  if ( inclusives.length ) {
    // map inclusives with exclusives for
    filterValue = $.map( inclusives, function( value ) {
      return value + exclusives;
    });
    filterValue = filterValue.join(', ');
  } else {
    filterValue = exclusives;
  }

  $output.text( filterValue );
  $container.isotope({ filter: filterValue })
});