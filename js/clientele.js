
$(document).ready(function() {
  $("#owl-example").owlCarousel({
      itemsDesktop: [1499, 4],
      itemsDesktopSmall: [1199, 3],
      itemsTablet: [899, 2],
      itemsMobile: [599, 1],
      navigation: true,
      navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
      autoPlay: 5000, // Adjust the interval (in milliseconds) between auto swipes as needed
  });
});
$(document).ready(function() {
  $("#owl-example-2").owlCarousel({
    itemsDesktop: [1499, 4],
    itemsDesktopSmall: [1199, 3],
    itemsTablet: [899, 2],
    itemsMobile: [599, 1],
    navigation: true,
    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
    autoPlay: 6000, // Adjust the interval (in milliseconds) between auto swipes as needed
});
});