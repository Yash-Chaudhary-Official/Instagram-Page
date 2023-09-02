//alert("hii")

setTimeout(function () {
    document.querySelector(".welcomee").classList.add("welcome");
},1000)
var a=document.querySelectorAll(".like-btn")
var b=document.querySelectorAll(".likes")
//0-n-1
for(let i=0;i<a.length;i++){
    a[i].addEventListener("click",function(){
        var  count=b[i].textContent;
       // alert(count.length)
        count=count.substring(0,count.length-3)
        count=parseInt(count)
        
       b[i].textContent=(count+1)+" likes";

       // alert(count+1)
        
    });
}
var cinput=document.querySelectorAll(".input")
var dcomment=document.querySelectorAll(".lim")
var ebutton=document.querySelectorAll(".post-comment-btn ")
//alert(dcomment.length)
for(let i=0;i<ebutton.length;i++){
    ebutton[i].addEventListener("click",function(){
       var f=cinput[i].value;
       //alert(f)
       cinput[i].value="";
       f=" "+f;
       dcomment[i].innerHTML="<strong> Comment:</strong>"+f;   

        
    });
}