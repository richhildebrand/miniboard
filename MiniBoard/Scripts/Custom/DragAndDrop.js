function draggableOnDragStart(e) {
   $(".droptarget").text("(Drop here)");
}

function droptargetOnDragEnter(e) {
   $(".droptarget").text("Now you can drop it.");
}

function droptargetOnDragLeave(e) {
   $(".droptarget").text("(Drop here)");
}

function droptargetOnDrop(e) {
   $(".droptarget").text("You did great!");
}

function draggableOnDragEnd(e) {
   var draggable = $(".draggable");

   if (!draggable.data("kendoDraggable").dropped) {
      // drag ended outside of any droptarget
      $(".droptarget").text("Try again!");
   }
}

$(document).ready(function () {
   $(".draggable").kendoDraggable({
      hint: function (JQelement) {
         return JQelement.clone();
      },
      dragstart: draggableOnDragStart,
      dragend: draggableOnDragEnd
   });

   $(".droptarget").kendoDropTarget({
      dragenter: droptargetOnDragEnter,
      dragleave: droptargetOnDragLeave,
      drop: droptargetOnDrop
   });

   //var draggable = $(".draggable").data("kendoDraggable");
});