const objectList = [
    {
        'nome': 'Wayne Barnett',
        'ruolo' : 'Founder & CEO',
        'foto' : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'ruolo' : 'Chief Editor',
        'foto' : 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'foto' : 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'foto' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo' : 'Developer',
        'foto' : 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
        'foto' : 'barbara-ramos-graphic-designer.jpg'
    }
];
console.log(objectList);
let i = 0;
const ulEl = document.querySelector('ul')
while(i < objectList.length){
    console.log(objectList[i]);
    const liEl = document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.append(Object.values(objectList[i]));
    i++;
}
