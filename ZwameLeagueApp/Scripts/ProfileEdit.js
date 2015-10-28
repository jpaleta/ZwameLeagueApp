
$(function () {
    console.log("ready!");

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#imgAvatar').attr('src', e.target.result);
                //$('#avatar').css('background-image', 'url('+e.target.result+')');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function () {
        readURL(this);
        $('#avatar').removeClass("hidden");
    });

    $("#radioYesNo-1").click(function () {
        if ($("#radioYesNo-1:checked").length == 1){
            $('#oldpass').removeClass("hidden");
            $('#newpass').removeClass("hidden");
        }
        else{
            $('#oldpass').addClass("hidden");
            $('#newpass').addClass("hidden");
        }
    });


    

});