let politicalParty = []

async function getAllParty() {
  const token = localStorage.getItem('token')

  const partyData = await fetch('https://theelections.herokuapp.com/party', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const response = await partyData.json()

  politicalParty = [
    ...response.data
  ]

  for (let party of politicalParty) {
    polPty.appendChild(createParty(party));
  }
  
}
getAllParty()


const polPty = document.getElementById('polPty');
const editModal = document.getElementById("edit-modal");
const modal = document.getElementById("modal");

function createParty(party) {
  const polPty = document.createElement('div');
  polPty.className = 'polPty'
  const img = document.createElement('img');
  img.setAttribute('src', party.logoUrl);
  polPty.appendChild(img)
  const text = document.createElement('div')
  text.className = 'text';
  text.innerText = `Name: ${party.name} \n Address: ${party.hqAddress}`;
  polPty.appendChild(text);
  const partyId = document.createElement('div')
  partyId.className = 'partyid'
  partyId.innerText = `Office ID: ${party.id}`
  partyId.style.display = "none"
  polPty.appendChild(partyId);
  
  const polPtyEdit = document.createElement('div');
  polPtyEdit.className = 'polPtyBtnA polPtyBtnH'
  const editButton = document.createElement('button')
  editButton.className = 'eidtBTN34'
  editButton.innerText = "edit"
  polPtyEdit.appendChild(editButton);
  polPty.appendChild(polPtyEdit);

  const polPtyDelete = document.createElement('div');
  polPtyDelete.className = 'polPtyBtnA polPtyBtnH'
  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete23 myBtn'
  deleteButton.innerText = "delete"
  deleteButton.setAttribute("type", "submit");
  polPtyDelete.appendChild(deleteButton);
  
  polPty.appendChild(polPtyDelete);


  polPtyDelete.addEventListener("click", async function (){
    modal.style.display = 'block';

    const deleted = document.querySelector('.success')

    deleted.addEventListener('click', async function() {
      const token = localStorage.getItem('token')

      const urlencoded = new URLSearchParams();

      const getResponse = await fetch(`https://theelections.herokuapp.com/party/${party.id}`, {
        method: "DELETE",
        body: urlencoded,
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      const resDel = await getResponse.json()
      console.log(resDel)

      modal.style.display = 'none'; 

    })

    const closedPty = document.getElementById('failed29');

      closedPty.addEventListener('click', function (e) {
        e.preventDefault()
        modal.style.display = 'none';
      })
    
  })
    
  editButton.addEventListener('click', function () {
    
    editModal.style.display = 'block'; 

    const submitEdit = document.getElementById('edtpty')
    const theEditName = document.getElementById('officename17')
    const theEditHq = document.getElementById('hqaddress205')

    submitEdit.addEventListener('click', async function  () {
      const token = localStorage.getItem('token')
      
      const urlencoded = new URLSearchParams();
      urlencoded.append("name", theEditName.value)  
      urlencoded.append("hqAddress", theEditHq.value)

      const editParty = await fetch(`https://theelections.herokuapp.com/party/${party.id}`, {
        method: 'PUT',
        body: urlencoded,
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      
      const editResponse = await editParty.json()
      console.log(editResponse.data)
    })
    const close = document.getElementById('close')

    close.addEventListener('click', function (e) {
        
      e.preventDefault()   
      editModal.style.display = 'none';
    }) 
    
  })

  return polPty; 
}