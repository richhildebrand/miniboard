var dropOnTarget = function (e) {
   $(e.target).append(e.draggable.element.clone());
}


$(document).ready(function () {
   var counter = 0;

   var msg = function (text, e) {
      debugger;
      $('#msg').prepend(text + '<br/>');
   }

   $('.draggable').kendoDraggable({
      hint: function (item) {
         return $(item).clone();
      }
   });

   $('.droptarget').kendoDropTarget({
      drop: dropOnTarget
   });
});


// .droptarget
// .draggable