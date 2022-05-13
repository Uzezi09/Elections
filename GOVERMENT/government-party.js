let governmentOffice = [
  {
    "id": 0,
    "type": "Local Government",
    "name": "chairman",
    "logoUrl": "https://pbs.twimg.com/profile_images/1140876879076954112/-1Whe02-_400x400.jpg"
  },
  {
    "id": 1,
    "type": "Federal",
    "name": "President",
    "logoUrl": "https://citybusinessnews.com/wp-content/uploads/2021/11/Nigeria-Presidency.jpeg"
  },
  {
    "id": 2,
    "type": "Federal",
    "name": "Senate",
    "logoUrl": "https://straightnews.ng/wp-content/uploads/2019/12/unnamed3.jpg"
  }
]

async function firstData() {
  const token = localStorage.getItem('token')
  
  const govData = await fetch('http://localhost:7000/office', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const res = await govData.json()

  governmentOffice = [
    ...res.data
  ]

  for (let gOffice of governmentOffice) {
    govOfficeD.append(createOffice(gOffice));
    
  }

}

firstData()




const govOfficeD = document.getElementById('gov-office');

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
  return govOfficeD;
  
}