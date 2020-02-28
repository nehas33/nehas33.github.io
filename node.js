if(document.readyState === 'loading'){
    document.addEventListener('DOMContentloaded',ready());
}
else{
    ready();
}
const flipCardContainer = document.querySelector(".flip-card-container");
    flipCardContainer.addEventListener("click",function(){
    flipCardContainer.classList.toggle("flip");
    });