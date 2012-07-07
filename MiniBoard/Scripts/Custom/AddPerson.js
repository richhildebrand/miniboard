var caught = function () {
   alert("meh");
};

$('input').submit( function () {
   return false;
});

$(".addPerson").click(function () {
   $("#PersonWindow").show();
});

