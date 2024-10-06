let json_array=[];

window.onbeforeunload = function () {return false;}
let task = document.getElementById("task");
let Button = document.getElementById("sub");

Button.addEventListener('click', function (it) {
    it.preventDefault();
    let newtask=document.createElement('li');
    let parent=document.getElementById("list");
    newtask.textContent = task.value.trim();

    newtask.addEventListener('click',function()
    {
        newtask.classList.toggle('done');
    })
    parent.appendChild(newtask);
});

let s=document.getElementById("b1");

s.addEventListener('click',function(){
    if(document.body.style.background=='white'){
        document.body.style.background='black';
        s.innerHTML="Toggle white mode";
      }
      else{
        s.innerHTML="Toggle dark mode";
        document.body.style.background='white';
      }
})