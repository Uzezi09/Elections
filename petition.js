const officeId =document.getElementById('office-id')
const createdBy =document.getElementById('createdBy')
const bodyText =document.getElementById('body')
const file =document.getElementById('file102')
const petBtn =document.getElementById('petBtn')

petBtn.addEventListener('click', async function (e) {
  e.preventDefault()

  const token = localStorage.getItem('token')
  
  const formData = new FormData()
  formData.append("createdBy", createdBy.value)
  formData.append("office", officeId.value)
  formData.append("body", bodyText.value)
  formData.append("file", file.files[0])

  const petitionData = await fetch('http://localhost:7000/petition', {
    method: "POST",
    body: formData,
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const petitionResponse = await petitionData.json()
  console.log(petitionResponse)

  const requestPetition = petitionResponse.data
  localStorage.setItem('data', JSON.stringify(requestPetition))
})