var addNewPerson = function () {
   var onSuccess = function () {
      $('#ChangeState').text(name + " was successfully added!");
      $('#ChangeState').css('color', 'green');
   }

   var onError = function () {
      $('#ChangeState').text("Sorry, an error occured while trying to add " + name + ". Please try again.");
      $('#ChangeState').css('color', 'red');
   }

   var name = $('input').val();
   var request = $.ajax({
      type: 'POST',
      url: 'api/Person',
      data: { name: name },
      success: onSuccess,
      error: onError,
      dataType: "xml"
   });
};

$(".addPerson").click(function () {
   $("#PersonWindow").show();
});

