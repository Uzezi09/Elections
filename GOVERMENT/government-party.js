let governmentoffice = []

async function getAllOffice() {
  const token = localStorage.getItem('token')
  
  const govData = await fetch('http://localhost:7000/office', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const res = await govData.json()

  governmentoffice = [
    ...res.data
  ]

  for (let gOffice of governmentoffice) {
    govOffice.append(createOffice(gOffice));  
  }

}
getAllOffice()


const govOffice = document.getElementById('gov-office');
const govModalOffice = document.getElementById("govModal23");
const editgovmodal = document.getElementById("editgovmodal");

function createOffice(gOffice) {
  const govOfficeD = document.createElement('div');
  govOfficeD.className = 'gov-office'
  const img = document.createElement('img');
  img.setAttribute('src', gOffice.logoUrl);
  govOfficeD.append(img)
  const text = document.createElement('div')
  text.className = 'text';
  text.innerText = `Office Type: ${gOffice.type} \n Office Name: ${gOffice.name}`;
  govOfficeD.append(text);
  const govId = document.createElement('div')
  govId.className = 'partyid'
  govId.innerText = `Office ID: ${gOffice.id}`
  govId.style.display = "none"
  govOfficeD.appendChild(govId);

  const govEdit = document.createElement('div');
  govEdit.className = 'polPtyBtnA polPtyBtnH'
  const govButton = document.createElement('button')
  govButton.className = 'eidtBTN34'
  govButton.innerText = "edit"
  govEdit.appendChild(govButton);
  govOfficeD.appendChild(govEdit);

  const govDelete = document.createElement('div');
  govDelete.className = 'polPtyBtnA polPtyBtnH'
  const govptyButton = document.createElement('button')
  govptyButton.className = 'delete23 myBtn'
  govptyButton.innerText = "delete"
  govptyButton.setAttribute("type", "submit");
  govDelete.appendChild(govptyButton);
  
  govOfficeD.appendChild(govDelete);


  govDelete.addEventListener("click", async function (){
    govModalOffice.style.display = 'block';

    const govSuccess = document.getElementById('govSuccess')

    govSuccess.addEventListener('click', async function () {
      const token = localStorage.getItem('token')

      const urlencoded = new URLSearchParams();

      const DeleteResponse = await fetch(`http://localhost:7000/office/${gOffice.id}`, {
        method: "DELETE",
        body: urlencoded,
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      const getDel = await DeleteResponse.json()
      console.log(getDel)

      govModalOffice.style.display = 'none'; 

    })

    const govFailed = document.getElementById('govFailed45');

    govFailed.addEventListener('click', function (e) {
      e.preventDefault()
      govModalOffice.style.display = 'none';
    })
    
  })

  govEdit.addEventListener('click', function () {
    
    editgovmodal.style.display = 'block'; 

    const updateGov = document.querySelector('.updateGov')
    const editOfice = document.getElementById('editOfice')
    const editName = document.getElementById('editName')
    const editLogo = document.getElementById('editLogo')

    updateGov.addEventListener('click', async function () {
      const token = localStorage.getItem('token')
      
      const urlencoded = new URLSearchParams();
      urlencoded.append("type", editOfice.value)  
      urlencoded.append("name", editName.value)
      urlencoded.append("file", editLogo.files[0])

      const editGov = await fetch(`http://localhost:7000/office/${gOffice.id}`, {
        method: 'PUT',
        body: urlencoded,
        headers: {
          authorization: `Bearer ${token}`
        }
      })

      const editResGov = await editGov.json()
      console.log(editResGov.data)
    })
    
    const govClose = document.getElementById('govClose')

    govClose.addEventListener('click', function () {
      editgovmodal.style.display = 'none'; 
    })
  })

  return govOfficeD;
  
}