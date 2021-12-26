let ul = $('<ul></ul>');
let li = $('<li></li>');
let a = $('<a href="https://youtube.com"></a>').text('youtube');

li.append(a);
ul.append(li);
$('.one').append(ul);

$('.one ul').css('font-size','20px');
$('.one ul').css('list-style-type','none');
$('.one ul').css('background-color','yellow');
$('.one ul li a').css('text-decoration','none');
$('.one ul li a').css('color','red');
$('.one ul li a').css('font-weight','bold');