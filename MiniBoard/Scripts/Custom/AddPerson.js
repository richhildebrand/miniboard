var addNewPerson = function () {
   var name = $('input').val();


   $.ajax({
      type: 'POST',
      url: 'api/Person',
      data: { name: name },
      success: "success",
      dataType: "xml"
   });

};

$(".addPerson").click(function () {
   $("#PersonWindow").show();
});

