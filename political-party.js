const politicalParty = [
  {
    logoUrl: 'https://tribuneonlineng.com/wp-content/uploads/2019/03/AAC-1.jpg',
    name: 'AAC',
    hqAddress: 'Kano State',
    id: 1
  
  },
  {
    logoUrl: 'https://cdn.punchng.com/wp-content/uploads/2019/07/13173835/PDP-logo-e1563035957817.jpg',
    name: 'PDP ',
    hqAddress: 'Lagos State',
    id: 2
  },
  {
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOYNUWZ-kfVu6XeXNFu60FIE6vklyX1o71A&usqp=CAU',
    name: 'APGA',
    hqAddress: 'Lagos State',
    id: 3
  },
  {
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/23/All_Progressives_Congress_logo.png',
    name: 'APC',
    hqAddress: 'Niger State',
    id: 4
  },
  {
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWb5BpPnkwCq0JNutUxIHLnitw4mcwkdAeMkhvFc-hBU_MZgQ4DfW3_GLhX3FdopXRn8&usqp=CAU',
    name: 'ACCORD',
    hqAddress: 'Lagos State',
    id: 5
  },
  {
    logoUrl: 'https://storage.googleapis.com/thisday-846548948316-wp-data/wp-media/2019/03/9b5f573d-apda-logo.jpg',
    name: 'APDA',
    hqAddress: 'Lagos State',
    id: 6
  }
]


const polPty = document.getElementById('polPty');

function createParty(party) {
  const polPty = document.createElement('div');
  polPty.className = 'polPty'
  const img = document.createElement('img');
  img.setAttribute('src', party.logoUrl);
  polPty.appendChild(img)
  const text = document.createElement('div')
  text.className = 'text';
  text.innerText = `Name: ${party.name} \n Address: ${party.hqAddress}`;
  // Office ID: ${party.id}

  polPty.appendChild(text);
  return polPty;
  
}



for (let party of politicalParty) {
  polPty.appendChild(createParty(party));
}