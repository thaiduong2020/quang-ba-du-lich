$(document).ready(function() {

    // menu scroll
    $(document).ready(function() {
        window.onscroll = function() {
            myFunction()
        };

        var header = document.getElementById("myMenu");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
        
        //scroll
        $(window).scroll(function() {
            if ($(document).scrollTop() > 400) {
                $('#myMenu').css({ 'box-shadow': '0 0 10px black' });
            } else {
                $('#myMenu').css({ 'box-shadow': 'none' });
            }
            if ($(document).scrollTop() > 200) {
                $('#slide-toggle-show').show(1000);
            }
            if ($(document).scrollTop() > 200) {
                $('#slide-icon-show').show(1000);
            }
            if ($(document).scrollTop() > 200) {
                $('#slide-toggle-show').show(1000);
            }
            if ($(document).scrollTop() > 200) {
                $('#thongbao').show(1000);
            }
            if ($(document).scrollTop() > 300) {
                $('.NT').show(800);
                $('.QN').show(1000);
                $('.MN').show(1000);
            }
        })


        // hover
        $(document).ready(function() {
            $("#img1").hover(function() {
                $(this).attr("src", "images/dong-bang-song-cl-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/dong-bang-song-cl-1.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img2").hover(function() {
                $(this).attr("src", "images/ruong-bac-thang-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/ruong-bac-thang-1.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img3").hover(function() {
                $(this).attr("src", "images/chua-thien-mu-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/chua-thien-mu-1.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img4").hover(function() {
                $(this).attr("src", "images/hoi-an-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/hoi-an-1.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img5").hover(function() {
                $(this).attr("src", "images/phu-quoc-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/phu-quoc-1.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img6").hover(function() {
                $(this).attr("src", "images/sa-pa-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/sa-pa-1.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img7").hover(function() {
                $(this).attr("src", "images/Bagan-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/Bagan.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img8").hover(function() {
                $(this).attr("src", "images/Bali-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/Bali.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img9").hover(function() {
                $(this).attr("src", "images/Bangkok-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/Bangkok.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img10").hover(function() {
                $(this).attr("src", "images/Kuala Lumpur-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/Kuala Lumpur.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img11").hover(function() {
                $(this).attr("src", "images/Langkawi-ma-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/Langkawi-ma.jpg").css("height", "231px");
            });
        });
        $(document).ready(function() {
            $("#img12").hover(function() {
                $(this).attr("src", "images/Penang-ma-2.jpg").css("height", "230px");
            }, function() {
                $(this).attr("src", "images/Penang-ma.jpg").css("height", "231px");
            });
        });

    })


    // animatetion jquery

    $('#slide-icon-hide').hide();
    //click #slide-icon-show show  box3
    $("#slide-icon-show").click(function() {
        $(".box3").animate({
            left: '40px',
            height: 'toggle',
            width: 'toggle',
            zIndex: "1",
            position: 'absolute'
        });
        $('#slide-icon-hide').show();
        $('#slide-icon-show').hide();
    });
    //click #slide-icon-hide hide  box3
    $("#slide-icon-hide").click(function() {
        $(".box3").animate({
            left: '40px',
            height: 'toggle',
            width: 'toggle'
        });
        $('#slide-icon-hide').hide();
        $('#slide-icon-show').show();


        //click #slide-toggle-show hide  box3
        $("#slide-toggle-show").click(function() {
            $("#slide-icon-hide").hide();
            $("#slide-icon-show").hide();


        });
    });
})