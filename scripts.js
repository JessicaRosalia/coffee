const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");

for(let card of cards){
	card.addEventListener("click",function(){
		modal.classList.add("active");
	});
}

document.querySelector(".modal-close").addEventListener("click", function(){
	modal.classList.remove("active");
});