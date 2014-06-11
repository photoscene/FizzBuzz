var count = function(number) {

    for (var i=1; i<=number; i++) {
        if (i%3 === 0 && i%5 === 0){
            $('.count').append("<p>" + "FizzBuzz" + "</p>");
        } else if (i%5 === 0) {
            $('.count').append("<p>" + "Buzz" + "</p>");
        } else if (i%3 === 0) {
            $('.count').append("<p>" + "Fizz" + "</p>");
        } else {
            $('.count').append("<p>" + i + "</p>");
        }

    }
};

$('document').ready(function() {
    $('.add-number').keydown(function(event) {
        var number = +$(".add-number").val();
        if (event.keyCode === 13) {
            if (isNaN(number) || number<=0 || number % 1 !== 0) {
                alert('You should type a positive number without decimals!');
            } else {
                $('.count').show();
                $(".count").contents().remove();
                count(number);
            }
        }
        
    });
});