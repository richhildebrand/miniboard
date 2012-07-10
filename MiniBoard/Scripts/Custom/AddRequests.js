var addNewItem = function (name, url, data) {
   var onSuccess = function () {
      $('#ChangeState').text(name + " was successfully added!");
      $('#ChangeState').css('color', 'green');
   }

   var onError = function () {
      $('#ChangeState').text("Sorry, an error occured while trying to add " + name + ". Please try again.");
      $('#ChangeState').css('color', 'red');
   }

   var request = $.ajax({
      type: 'POST',
      url: url,
      data: data,
      success: onSuccess,
      error: onError,
      dataType: "xml"
   });
};

var addNewPerson = function () {
   var name = $('input').val();
   var url = 'api/Person';
   var data = { Name: name };
   addNewItem(name, url, data);
}

$(".addPerson").click(function () {
   $("#PersonWindow").show();
});

