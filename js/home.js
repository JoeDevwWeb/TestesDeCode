post();

function post(){
  firebase.firestore()
    .collection('projetos')
    .get()
    .then(snapshot => {
        console.log(snapshot);  
    })
};

function addTransactionsToScreen(transactions) {
  const lista = document.getElementById('lista');
  
  transactions.forEach(transactions =>  {
    const li = document.createElement('li');
    
    const legenda = document.createElement('h2');
    legenda.innerHTML = transactions.legenda;
    li.appendChild(legenda);
    
    const autor = document.createElement('p');
    autor.innerHTML = transactions.autor;
    li.appendChild(autor);
    
    
    lista.appendChild(li);
  });
  
};

const postagem = [{
    legenda: 'Tanque de Guerra',
    date: '12-04-2022',
    autor: 'Joe'
}, {
    legenda: 'Mural escolar',
    date: '11-03-201',
    autor: 'Lucas'
}
];


