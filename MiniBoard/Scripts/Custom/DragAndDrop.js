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
      drop: function (e) { debugger; msg(counter++ + '. dropped on #one', e); }
   });

   $('#two').kendoDropTarget({
      drop: function (e) { msg(counter++ + '. dropped on #two'); }
   });
});


// .droptarget
// .draggable