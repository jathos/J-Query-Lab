//AAU#1
const $currentLI = $('.currentLI');
$currentLI.hide(0);

//AAU#2



// $('button').on('click', function(){
//     console.log($inputValue);
// })

//I couldn't seem to console.log the value of the input box, but that was solved in Class

let $getUL = $('ul');
$('button').on('click', function(){
    let $input = $('input');
    let $inputValue = $input.val();
    console.log($inputValue);
    $getUL.append($inputValue);
});

//AAU#3
$('ul').on('click', function(){
    $(this).find('li:first').remove();
});

//FYI TO NATHAN: Apr 07 - I realized just now in class that my CSS only displays properly when the screen width is between 700px and 500px


//Algo
//I didn't have time to attempt this