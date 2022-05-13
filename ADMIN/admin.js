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

// Api for create new gov
const officeType =document.getElementById('officetype')
const officeName = document.getElementById('officename2')
const file = document.getElementById('logo')
const govBtn = document.querySelector('.fives')

govBtn.addEventListener('click', async function (e) {
  e.preventDefault()


  const token =localStorage.getItem('token')

  const formData = new FormData()
    formData.append("type", officeType.value)
    formData.append("name", officeName.value)
    formData.append("file", file.files[0])
  
    console.log(officeType.value)
    console.log(officeName.value)
  
  const getResponse = await fetch("http://localhost:7000/office", {
    method: "POST",
    body: formData,
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const response = await getResponse.json()
  console.log(response)

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

// api for create party 
const partyname =document.getElementById('partyname')
const hqaddress = document.getElementById('hqaddress11')
// const partyPol = document.getElementById('party12')
const inpuTfile = document.getElementById('file');

newptyBtn.addEventListener('click', async function (e) {
  e.preventDefault()

  const token =localStorage.getItem('token')

  const formData = new FormData()
  formData.append("name", partyname.value)
  formData.append("hqAddress", hqaddress.value)
  formData.append("file", inpuTfile.files[0])

  console.log(partyname.value)
  console.log(hqaddress.value)

  const getPartyResponse = await fetch("http://localhost:7000/party", {
    method: "POST", 
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const partyResult = await getPartyResponse.json()
  console.log(partyResult)

})