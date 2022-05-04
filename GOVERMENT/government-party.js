const governmentOffice = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFc0S-LhigPNV6_7PYifTgQkWyeMONthr4s9eLK8_Lk_Qs6c1Rh1Vly8aZcEM_mo3BKM&usqp=CAU',
    type: 'Federal',
    name: 'Senate',
    id: 1
  
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_a0Uc5lNecwZsdF233BrKjd_mp0_g4h0Kwa233iuiRE6UrvPcFd8qNuW72r3x2CvcIE&usqp=CAU',
    type: 'Federal',
    name: 'House of Rep',
    id: 2
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLA6o1rzVOdWNHKKkQQPem7cnohg7sQgHj-lAc5ZQ3HoeQ75o5RY1KpHnjUKhDuR8Qo5E&usqp=CAU',
    type: 'Federal',
    name: 'President',
    id: 3
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRSxMp_KcrL_uJmuZnIpsmn9hI1KN7KV4sUeoyqtU5-2NJ-sGnkVZ212d-PeKKEf3tqI&usqp=CAU',
    type: 'Local Government',
    name: 'Chairman',
    id: 4
  },
  {
    image: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGY96gMeW2k3Q/company-logo_200_200/0/1525776528161?e=2147483647&v=beta&t=tVxwksvEWvNxnBvWAaqfscsWO8ciu0cz0oEBkoR1ob4',
    type: 'Federal',
    name: 'House of Assembly',
    id: 5
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizs6bujGkYYP_gB9Z0VOckarORmVihNNAZVYHi12A-7wbYeaUzxlsqbBBQyXZLZ2Bzvk&usqp=CAU',
    type: 'State',
    name: 'Governor',
    id: 5
  }
]


const govOffice = document.getElementById('gov-office');

function createOffice(office) {
  const govOffice = document.createElement('div');
  govOffice.className = 'gov-office'
  const img = document.createElement('img');
  img.setAttribute('src', office.image);
  govOffice.appendChild(img)
  const text = document.createElement('div')
  text.className = 'text';
  text.innerText = `Office Type: ${office.type} \n Office Name: ${office.name}`;

  govOffice.appendChild(text);
  return govOffice;
  
}



for (let office of governmentOffice) {
  govOffice.appendChild(createOffice(office));
}