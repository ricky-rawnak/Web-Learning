var next = document.getElementById('nbtn');
var back = document.getElementById('pbtn');

var count = 1;

var container = document.getElementById('imgcon');

next.addEventListener('click',moven)
back.addEventListener('click',moveb)

function moven()
{
    
    count += 1 ;
    count %= 4;//count = count % 4;
    if(count == 0 )
        count= 4;
    
    var link = "url('img/img"+count+".jpg')";
    container.style.backgroundImage = link;
    console.log(link + "   " + count)
    
}


function moveb()
{
    count -= 1 ;
    count %= 4;//count = count % 4;
    if(count == 0 )
        count= 4;
    var link = "url('img/img"+count+".jpg')";
    container.style.backgroundImage = link;
    console.log(link + "   " + count)
}
