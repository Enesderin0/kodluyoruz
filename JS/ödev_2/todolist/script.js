let inputDOM = document.querySelector("#task");
let toastPossitiveDOM= document.querySelector("#liveToastPossitive");
let toastNegativeDOM = document.querySelector("#liveToastNegative")
let listDOM = document.querySelector("#list")
function newElement(){
    if (inputDOM.length<= 0){
        toastNegativeDOM=$('.error').toast('show');
    }else{
        const liDOM= document.createElement('li')
        liDOM.innerHTML =`${inputDOM.value}
         <i style="float: right; margin-right: 10px; margin-top: auto" class="fa-solid fa-circle-xmark"></i>`
        listDOM.appendChild(liDOM)
        $('.success').toast('show');
        inputDOM.value = ""
        liDOM.addEventListener('click',deleteli)
        function deleteli(){
            listDOM.removeChild(liDOM)
        }
    }
}


