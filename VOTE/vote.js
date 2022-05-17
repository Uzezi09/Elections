let vote = []

async function getAllVote() {
  const token = localStorage.getItem('token')
  
  const voteData = await fetch('https://theelections.herokuapp.com/vote', {
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
