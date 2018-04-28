var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
    $("body").addClass('galleryView');
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


function setCurrent(elem,index){
    
    for(var i = index-1;i>=0;i--){
        if(elem[i].classList.contains('current')){
            elem[i].classList.remove('current');
        }
        if(elem[i].classList.contains('next')){
            elem[i].classList.remove('next');
        }
        elem[i].classList.add('prev');
    }
    elem[index].classList.remove('prev','next');
    elem[index].classList.add('current');
    for(var i = index+1;i <= elem.length-1;i++){
        if(elem[i].classList.contains('current')){
            elem[i].classList.remove('current');
        }
        if(elem[i].classList.contains('prev')){
            elem[i].classList.remove('prev');
        }
        elem[i].classList.add('next');
    }
	
}
function background(wrap, bg){
    $(wrap).removeAttr('class');
    $(wrap).attr('class', '');
    $(wrap)[0].className = bg;
    $(wrap).addClass()
}
/*
ant.addEventListener('click',function(){horizontalNav(ant,-1)},false);
sig.addEventListener('click',function(){horizontalNav(sig,1)} ,false);
*/





$(document).ready(function() {
    $(".slideSelector").click(function() {
        $("li.active").removeClass('active')
        if($(this).is("div")){
            /*var link = $(this).attr("href");
            setTimeout(function() {
                window.location.href = link;
            }, 500);*/
        }else{
            event.preventDefault();
        }
        var starBg =['home','about','gallery','announcement','contact']
        var index = $(".slideSelector").index( this );
        var elem = $("section.slide");
        background($("body"),starBg[index])
        setCurrent(elem,index);
    });
    $("li").click(function() {
        $(this).addClass('active')
    });
});