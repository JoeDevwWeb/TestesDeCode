function loading() {
  const div = document.createElement("div");
  div.classList.add("loading");
  const label = document.createElement("label");
  label.innerHTML = "Carregando...";
  div.appendChild(label);
  document.body.appendChild(div);
}

function loadingOut() {
 const loadings = document.getElementsByClassName("loading");
 if(loadings.length){
   loadings[0].remove();
 }
}

function imagem(src, width, heigth, alt){
  var img = document.createElement('img');
  img.src = src; 
  img.width = width;
  img.heigth = heigth;
  img.alt = alt;
  document.body.appendChild(img);
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


