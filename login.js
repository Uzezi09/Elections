const loginBtn = document.getElementById('loginBtn')
const email = document.getElementById('email')
const password = document.getElementById('password')


loginBtn.addEventListener('click', async function (e) {
  e.preventDefault()
 
  console.log('hi')
  const formData = new FormData()
  formData.append("email", email.value)
  formData.append("password", password.value)

  console.log(email.value)

  const getResponse = await fetch("https://theelections.herokuapp.com/user/login", {
    method: "POST",
    body: formData
  })

  const response = await getResponse.json()

  if (response.status === 200) {
    const token = response.data.token;
    localStorage.setItem("token", token);

    if (response.data.role === "politician") {
      location.href = "./main-home.html";
    } else if (response.data.role === "user" && response.data.isAdmin) {
      location.href = "./ADMIN/Admin.html";
    }
    if (response.data.role === "user" && !response.data.isAdmin) {
      location.href = "./main-home.html";
    }
  }
  
})