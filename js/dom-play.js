//alert("hello from DOM Play")

const spans = document.querySelectorAll("#play span");
console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener("click",function(ev){
            highlightActor(mySpan.dataset.actor);
    });
}

function highlightActor(actor){
   // alert("I'm " + actor);
   for(const mySpan of spans){
    if(actor == mySpan.dataset.actor){
        mySpan.style.backgroundColor='orange';
    }else{
        mySpan.style.backgroundColor='white';
    }    
   }
}

function highlight(el){

    if(el.style.backgroundColor == 'orange'){
        el.style.backgroundColor='white';
    }else{
        el.style.backgroundColor='orange';
    
    }    
}