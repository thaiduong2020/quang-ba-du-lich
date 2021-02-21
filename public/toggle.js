$(document).ready(function() {

    //toggle
    $("#hien").hide();
    $("#box-data").hide();
    $("#an").click(function() {
        $("#title").toggle("slow");
        $("#content").toggle("slow")
        $("#hien").show();
        $("#an").hide();


    });
    $("#hien").click(function() {
        $("#title").toggle("slow");
        $("#content").toggle("slow");
        $("#an").show();
        $("#hien").hide();

    });

    //animation
    $("#slide-toggle-hidden").hide();
    
    $("#slide-toggle-show").click(function() {
        $("#slide-icon-hide").hide();
        $("#slide-icon-show").hide();
        $("#slide-toggle-hidden").show();
        $("#slide-toggle-show").hide();

        $(".box2").animate({
            width: "toggle"
        });


    });
    $("#slide-toggle-hidden").click(function() {
        $("#slide-toggle-hidden").hide();
        $("#slide-icon-show").show(1000);
        $("#slide-toggle-show").show();
        $(".box2").animate({
            width: "toggle"
        });
    });

    //required 
    $('#search').click(function(e) {
        e.preventDefault();
        var diadiem = $('#diadiem').val();
        var thoigian = $('#thoigian').val();
        var dicung = $('#dicung').val();
        if (diadiem == "" || thoigian == "" || dicung == "") {
            alert('bạn phải nhập đầy đủ');
        } else {
            alert("Đặt vé thành công !");
            location.reload()
        }
    })
});
// $(document).ready(function() {
//     $("#slide-icon-hide").hide();
//     $("#slide-icon-show").click(function() {
//         $("#slide-icon-hide").show();
//         $("#slide-icon-show").hide();
//         $(".box3").animate({
//             width: "toggle"
//         });
//     });
//     $("#slide-icon-hide").click(function() {
//         $("#slide-icon-hide").hide();
//         $("#slide-icon-show").show();
//         $(".box3").animate({
//             width: "toggle"
//         });
//     });
// })