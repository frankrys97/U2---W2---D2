const cards = document.querySelectorAll(".card");

window.onload = function () {
  const countTravels = function () {
    const numberOfTravelsContainer = document.getElementById("numberOfTravels");

    if (cards.length > 0) {
      numberOfTravelsContainer.innerHTML = `<div class="mt-4 d-flex justify-content-between align-items-center alert alert-success" role="alert">
      <p class="m-0"> Nel nostro sito rimangono disponibili ${cards.length} viaggi </p>   
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    } else {
      numberOfTravelsContainer.innerHTML = `<div class="mt-4 d-flex justify-content-between align-items-center alert alert-danger" role="alert">
      <p class="m-0"> Viaggi disponibili esauriti </p>   
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    }
  };

  countTravels();

  const hotBadge = function () {
    const cards = document.querySelectorAll("#welcomeSummer .card");

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const span = `<span class="badge bg-danger position-absolute end-0 mt-2 me-2">HOT</span>`;
      card.innerHTML += span;
    }
  };

  hotBadge();

  // const removeCards = function () {
  //   for (let i = 0; i < cards.length; i++) {
  //     const card = cards[i];
  //     card.remove()
  // }
  // }
  
  // removeCards()
};


