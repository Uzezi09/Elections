const modal = document.getElementById("modal");
const deleteBtn = document.querySelectorAll(".myBtn");
const close = document.querySelector('.close');
const success = document.querySelector('.success')
const succText = document.querySelector('succ-text')


// EVENT FOR DELETE BTN 
deleteBtn.forEach(box => {
  box.addEventListener('click', function (e) {
    console.log('box clicked');
    modal.style.display = 'block';

    e.preventDefault();
  });
});

// when you click anywhere outside the modal 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// cancel btn 
close.addEventListener('click', function () {
  modal.style.display = 'none';
})

// success btn 
success.addEventListener('click', function () {
  modal.style.display = 'none';
})

// EVENT FOR EDIT BTN
const editModal = document.getElementById("edit-modal");
const editBtn = document.querySelectorAll(".edit");

editBtn.forEach(edit => {
  edit.addEventListener('click', function (e) {
    console.log('edit clicked');
    editModal.style.display = 'block';

    e.preventDefault();
  });
});

// when you click anywhere outside the modal 
window.onclick = function(event) {
  if (event.target == editModal) {
    editModal.style.display = "none";
  }
}

// EVENT FOR CREATE NEW GOV BTN
const newgovModal = document.getElementById("newgov-modal");
const govModalBtn = document.getElementById("govModal-btn");
const newgovBtn = document.querySelector(".newgov-btn")

govModalBtn.addEventListener('click', function () {
    newgovModal.style.display = 'block';
});

// when you click anywhere outside the modal 
newgovBtn.addEventListener('click', function () {
  newgovModal.style.display = 'none';
}) 


// EVENT FOR CREATE NEW PARTY
const newptyModal = document.getElementById("newpty-modal");
const ptyModalBtn = document.getElementById("ptyModal-btn");
const newptyBtn = document.querySelector(".newpty-btn")

ptyModalBtn.addEventListener('click', function () {
  newptyModal.style.display = 'block';
});

// when you click anywhere outside the modal 
newptyBtn.addEventListener('click', function (e) {
  newptyModal.style.display = 'none';

  e.preventDefault()
}) 