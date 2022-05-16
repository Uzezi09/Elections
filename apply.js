const applyParty = document.getElementById("apply-party");
const nameCandy = document.getElementById("name-candy");
const applyName = document.getElementById("apply-name");
const fileOutput = document.getElementById("upload123");
const addBtn = document.getElementById("submit23");

addBtn.addEventListener('click', async function (e) {
  // e.preventDefault()  
  console.log('hi')

  const token =localStorage.getItem('token')

  const urlencoded = new URLSearchParams();
  urlencoded.append("candidate", nameCandy.value)
  urlencoded.append("party", applyParty.value)
  urlencoded.append("office", applyName.value)
  // urlencoded.append("file", fileOutput.files[0])

  // console.log(fileOutput.files[0])

  const getOfficeResponse = await fetch("http://localhost:7000/candidate", {
    method: "POST", 
    body: urlencoded,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const officeResult = await getOfficeResponse.json()

  console.log(officeResult)
})
