// defining flags
var isCtrl = false;
var isShift = false;
// helpful function that outputs to the container
function log(str) {
  $("#container").html($("#container").html() + str + "");
}
// the magic :)
$(document).ready(function() {
  log("Ready. Press Ctrl+Shift+F9!");
  // action on key up
  $(document).keyup(function(e) {
    if (e.which == 17) {
      isCtrl = false;
    }
    if (e.which == 16) {
      isShift = false;
    }
  });
  // action on key down
  $(document).keydown(function(e) {
    if (e.which == 17) {
      isCtrl = true;
    }
    if (e.which == 16) {
      isShift = true;
    }
    if (e.which == 120 && isCtrl && isShift) {
      log("------- catching Ctrl+Shift+F9");
    }
  });
});
