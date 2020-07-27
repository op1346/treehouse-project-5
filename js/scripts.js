//fetching data from API
fetch("https://randomuser.me/api/?results=12")
  .then(response => response.json())
  .then(data => galleryMarkup(data.results))
  .catch(error => {
    console.log(error);
  })

//using data here to append the gallery markup to the DOM
function galleryMarkup(users) {
  const gallery = document.getElementById("gallery");
  const cards = [];

  users.map(user => {
    const userCard =
    `<div class="card">
      <div class="card-img-container">
          <img class="card-img" src="${user.picture.large}" alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
          <p class="card-text">${user.email}</p>
          <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
      </div>
    </div>`;
    cards.push(userCard);
  });

  cards.forEach(card => {
    gallery.innerHTML += card;
  });

  const userCardButton = document.querySelectorAll(".card");
  userCardButton.map(card => {
    card.addEventListener('click', (e) => {
      if (e.target === card || card.contains(e.target)) {
          modalMarkup(cards)
      }
  });
  });

}

//adding the card view
function modalMarkup(users, index) {
  const user = users[index];
  const modalContainer = document.createElement("div");
  const modal =
    `
    <div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
        <img class="modal-img" src="${user.picture.large}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
        <p class="modal-text">${user.email}</p>
        <p class="modal-text cap">${user.location.city}</p>
        <hr>
        <p class="modal-text">(555) 555-5555</p>
        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
        <p class="modal-text">Birthday: 10/21/2015</p>
      </div>
    </div>`;
  modalContainer.setAttribute("class", "modal-container");
}

