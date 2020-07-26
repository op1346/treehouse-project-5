fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then(data => console.log(data));

//user data constants
const image = user.picture;
const name = user.name;
const email = user.email;
const location = user.location;

function userDirectory() {

}


function galleryMarkup() {

}

function modalMarkup() {

}