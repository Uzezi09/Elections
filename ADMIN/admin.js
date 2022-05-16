// EVENT FOR CREATE NEW GOV BTN MODAL
const newgovModal = document.getElementById("newgov-modal");
const govBtnUpd = document.getElementById("gov-btn");

govBtnUpd.addEventListener('click', function () {
  newgovModal.style.display = 'block';

  const govBtn = document.querySelector('.fives')
  const officeType =document.getElementById('officetype')
  const officeName = document.getElementById('officename2')
  const fileInput = document.getElementById('loGo')

  govBtn.addEventListener('click', async function (e) {
    e.preventDefault()
    console.log('hi')
    
    const token =localStorage.getItem('token')

    const formData = new FormData()
    formData.append("type", officeType.value)
    formData.append("name", officeName.value)
    formData.append("file", fileInput.files[0])

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
  
    const closeModal = document.getElementById('close34')
  
    closeModal.addEventListener('click', function () {
    
     newgovModal.style.display = 'none';
    })
  
})
 
  
// // EVENT FOR CREATE NEW PARTY
const newptyModal = document.getElementById("newpty-modal");
const ptyModalBtn = document.getElementById("ptyModal-btn");

ptyModalBtn.addEventListener('click', function () {
  newptyModal.style.display = 'block';

  const createBtn = document.querySelector(".createBtn")
  const partyname =document.getElementById('partyname')
  const hqaddress = document.getElementById('hqaddress11')
  const inpuTfile = document.getElementById('file');

  createBtn.addEventListener('click', async function (e) {
    e.preventDefault()
  
    const token =localStorage.getItem('token')
  
    const formData = new FormData()
    formData.append("name", partyname.value)
    formData.append("hqAddress", hqaddress.value)
    formData.append("file", inpuTfile.files[0])
  
    const getPartyResponse = await fetch("http://localhost:7000/party", {
      method: "POST", 
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  
    const partyResult = await getPartyResponse.json()
    console.log(partyResult)
  
  });

  const cancelBtn = document.querySelector('.cancelBtn')

  cancelBtn.addEventListener('click', function (e) {
    e.preventDefault()
    newptyModal.style.display = 'none';
  })
})