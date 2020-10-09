$(document).ready(function(){

    window.addEventListener("scroll", function () {
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0);
    })


    $(".crd").hover(function(){
        $(".crd .shade").css("transition","1s")
        $(".crd .crd-body").css("transition","1s")
    });

    $("#myform").on('submit', function (event) {
        event.preventDefault();
        alert("stop");

            var name = $(this).parent().children(".nameC").text();
            var id = $(this).parent().children("._idC").text();
            var sizes = $(this).parent().children(".sizesC").text();
            var rating = $(this).parent().children(".ratingC").text();
            var buy = $(this).parent().children(".buyC").text();
            var price = $(this).parent().children(".priceC").text();
            var offer = $(this).parent().children(".offerC").text();
            var image = $(this).parent().children(".imageC").text();
            var three = $(this).parent().children(".threeC").text();
            var threeHalf = $(this).parent().children(".threeHalfC").text();
            var four = $(this).parent().children(".fourC").text();
            var fourHalf = $(this).parent().children(".fourHalfC").text();
            var five = $(this).parent().children(".fiveC").text();

            var item = {
                id, name, sizes, rating, buy, price, offer
                , image, three, threeHalf, four, fourHalf, five
            }


        $.ajax({
            global:false,
            type: 'POST',
            data: JSON.stringify(item),
            contentType: 'application/json',
            url: '/API/insertCard',
            success: function (data) {
                console.log('success');
            },
            error:function(err){
                console.log(err);
            },complete:function(){
                alert("completed");
            }
        });
    });


});