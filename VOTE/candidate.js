let candidateArray = []

async function getAllCandidate() {
  const token = localStorage.getItem('token')
  
  const candidateData = await fetch('https://theelections.herokuapp.com/candidate', {
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
const voteModal = document.getElementById('vote-modal')
const voteSuccess = document.getElementById('voteSuccess')
const voteDelete = document.getElementById('voteDelete')

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

  candyButton.addEventListener('click', function () {
    // console.log('hi')
    voteModal.style.display = 'block'

    voteSuccess.addEventListener('click', async function () {

      const token = localStorage.getItem('token')

      const formData = new FormData();
       formData.append("candidate", candi.candidate)
       formData.append("office", candi.office)
       formData.append("logoUrl", candi.logoUrl)
      
      console.log([...formData])
      console.log(candi.candidate)

      const voteResponse = await fetch(`https://theelections.herokuapp.com/vote`, {
        method: "POST",
        body: formData,
        headers: {
          authorization: `Bearer ${token}`
        }
      })

      const getVote = await voteResponse.json()
      console.log(getVote)

      voteModal.style.display = 'none'

      voteDelete.addEventListener('click', function () {
        voteModal.style.display = 'none'
      })

   
    })
  });

    
    
  return candidateProfile;
    
}

