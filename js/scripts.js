//fetching data from API
fetch("https://randomuser.me/api/?results=12&nat=us")
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
  for (let i = 0; i < userCardButton.length; i++) {
    userCardButton[i].addEventListener('click', (e) => {
        if (e.target === userCardButton[i] || userCardButton[i].contains(e.target)) {
            modalMarkup(users, i)
        }
    });
  };
}

//adding the card view
function modalMarkup(users, index) {
  const user = users[index];
  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("class", "modal-container");
  const modal =
    `<div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
        <img class="modal-img" src="${user.picture.large}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
        <p class="modal-text">${user.email}</p>
        <p class="modal-text cap">${user.location.city}</p>
        <hr>
        <p class="modal-text">${user.phone}</p>
        <p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
        <p class="modal-text">Birthday: ${user.dob.date.substr(0, 10)}</p>
      </div>
    </div>`;
  modalContainer.innerHTML = modal;
  document.body.prepend(modalContainer);
  const close = document.getElementById("modal-close-btn");
  modalContainer.addEventListener("click", (e) => {
    if (e.target === close || close.contains(e.target)) {
      document.body.removeChild(modalContainer);
    }
  })
}


