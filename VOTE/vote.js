let vote = [
  {
    "id": 0,
    "createdOn": Date.now(),
    "createdBy": 'Maureen',
    "office": 'federal',
    "candidate": 'Atiku Abubakar',
    'logoUrl': 'https://nigerianinfopedia.com.ng/wp-content/uploads/2020/02/richest-politician-in-nigeria.jpeg'
  },
  {
    "id": 1,
    "createdOn": Date.now(),
    "createdBy": 'Nana',
    "office": 'state',
    "candidate": 'Richard Richard',
    'logoUrl': 'https://nigerianinfopedia.com.ng/wp-content/uploads/2020/02/richest-politician-in-nigeria.jpeg'
  }
]

async function getAllVote() {
  const token = localStorage.getItem('token')
  
  const voteData = await fetch('http://localhost:7000/vote', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const voteRes = await voteData.json()

  vote = [
    ...voteRes.data
  ]

  for (let voter of vote) {
    voters.appendChild(getVote(voter));
  }  

}
getAllVote()

const voters = document.querySelector('.voters')
const candyButton = document.querySelector('.candyButton')

function getVote(voter) {
  const candidateDetails = document.createElement('div')
  candidateDetails.className = 'candidate-details'
  const img = document.createElement('img')
  img.setAttribute('src', voter.logoUrl)
  img.className = 'img'
  candidateDetails.appendChild(img)
  const voterId = document.createElement('div')
  voterId.className = 'candyId'
  voterId.innerText = `${voter.id}`
  // voterId.style.display = "none"
  candidateDetails.appendChild(voterId)
  const text = document.createElement('div')
  text.className = 'text';
  text.innerText = `${voter.candidate} \n ${voter.office}`
  candidateDetails.appendChild(text)
  
  return candidateDetails;
}
