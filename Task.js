var nums = document.querySelectorAll(".num");

screen = document.getElementById("input");


nums.forEach((el)=>{
    el.addEventListener('click',function(){
        console.log(el.innerText);
        if(el.getAttribute('id')== "equal"){
            screen.value = eval(screen.value);
        }
        else if(el.getAttribute('id')== "clear"){
            screen.value = '';
        }
        else if(el.getAttribute('id')== "eraseLastCharacter"){
            screen.value = screen.value.slice(0,-1);
        }
        else{
            screen.value += el.innerText;
        }
        
    })
})