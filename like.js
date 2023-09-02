var a=document.querySelector(".like-btn");
var like=1;
var x=document.querySelector(".likes")
a.addEventListener('click', function(){
    x.innerHTML=like++;
})
var nice=document.querySelector(".nice")
var comment=document.querySelector(".comment")
var button=document.querySelector(".post-comment-btn")
button.addEventListener('click' , function(){
    var maal=comment.value;
    comment.innerHTML="";
   // alert(maal+"");
    nice.innerHTML="<strong>Comment</strong>"+" "+maal;
})
