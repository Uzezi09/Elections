let candidateArray = []

async function getAllCandidate() {
  const token = localStorage.getItem('token')
  
  const candidateData = await fetch('http://localhost:7000/candidate', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const response234 = await candidateData.json()

  console.log(response234)

  candidateArray = [
    ...response234.data
  ]

  for (let candi of candidateArray) {
    presido.appendChild(getCandidate(candi));
  }

}
getAllCandidate()

const presido = document.querySelector('.presido')

function getCandidate(candi) {
  const candidateProfile = document.createElement('div');
  candidateProfile.className = 'candidate-profile'
  const img = document.createElement('img')
  img.setAttribute('src', candi.logoUrl)
  img.className = 'image'
  candidateProfile.appendChild(img)
  const text = document.createElement('div')
  text.className = 'text';
  text.innerText = `${candi.candidate} \n ${candi.office} \n ${candi.party}`
  candidateProfile.appendChild(text)
  const candyId = document.createElement('div')
  candyId.className = 'candyId'
  candyId.innerText = `${candi.id}`
  candyId.style.display = "none"
  candidateProfile.appendChild(candyId)
  const candyButton = document.createElement('button')
  candyButton.className = 'candyButton'
  candyButton.innerText = "Vote"
  candidateProfile.appendChild(candyButton);

  return candidateProfile;
  
}

