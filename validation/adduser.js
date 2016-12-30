$(document).read(function () {
   $('#adduser').validate({
       rule:{
           fname: "required",
           lname: "required",
           age: "required"
       }
   });
});