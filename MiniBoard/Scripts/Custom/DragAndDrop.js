var dropOnTarget = function (e) {
   $(e.target).closest('.droptarget').append(e.draggable.element.clone());
}

$(document).ready(function () {
   $('.draggable').kendoDraggable({
      hint: function (element) {
         return $(element).clone();
      }
   });

   $('.droptarget').kendoDropTarget({
      drop: dropOnTarget
   });
});