const applyOffice = document.getElementById("apply-office");
const applyName = document.getElementById("apply-name");
const fileInput = document.getElementById("file45");
const addBtn = document.getElementById("submit23");

addBtn.addEventListener('click', async function (e) {
  e.preventDefault()
  console.log('hi')

  const token =localStorage.getItem('token')

  const formdata = new FormData()
  formdata.append("type", applyOffice.value)
  formdata.append("name", applyName.value)
  formdata.append("file", fileInput.files[0])

  const getOfficeResponse = await fetch("http://localhost:7000/office", {
    method: "POST", 
    body: formdata,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const officeResult = await getOfficeResponse.json()
  console.log(officeResult)
})
