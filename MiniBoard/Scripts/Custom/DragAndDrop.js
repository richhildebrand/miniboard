function draggableOnDragStart(e) {
   kendoConsole.log("dragstart");

   $("#draggable").addClass("hollow");
   $("#droptarget").text("(Drop here)");
}

function draggableOnDrag(e) {
   kendoConsole.log("drag");
}

function draggableOnCancel(e) {
   kendoConsole.log("drag cancel");
}

function draggableOnDragEnd(e) {
   kendoConsole.log("dragend");

   var draggable = $("#draggable");

   if (!draggable.data("kendoDraggable").dropped) {
      // drag ended outside of any droptarget
      $("#droptarget").text("Try again!");
   }

   draggable.removeClass("hollow");
}

function droptargetOnDragEnter(e) {
   kendoConsole.log("dragenter");

   $("#droptarget").text("Now you can drop it.");
}

function droptargetOnDragLeave(e) {
   kendoConsole.log("dragleave");

   $("#droptarget").text("(Drop here)");
}

function droptargetOnDrop(e) {
   kendoConsole.log("drop");

   $("#droptarget").text("You did great!");
   $("#draggable").removeClass("hollow");
}

$(document).ready(function () {
   $("#draggable").kendoDraggable({
      hint: function () {
         return $("#draggable").clone();
      },
      dragstart: draggableOnDragStart,
      drag: draggableOnDrag,
      dragend: draggableOnDragEnd,
      dragcancel: draggableOnCancel
   });

   $("#droptarget").kendoDropTarget({
      dragenter: droptargetOnDragEnter,
      dragleave: droptargetOnDragLeave,
      drop: droptargetOnDrop
   });
});