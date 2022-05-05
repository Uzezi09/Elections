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