# TestesDeCode


function apresentar(){
   const lista = document.getElementById('ListaProjetos');
  
  
database
    .collection("projetos")
    .onSnapshot(function (documentos){
    
    documentos
      .docChanges()
      .forEach(function(changes){
            
            const documento = changes.doc;
            const titulo = documento.data().titulo;
            const autor = documento.data().Autor;
            const url = documento.data().url;
            
            console.log(documento.data());
            
            const lista = document.getElementById('ListaProjetos');
            
            const li = document.createElement('li');
            
            const divIten = document.createElement('div');
            divIten.classList.add('ProjetoAdd');
            
            const img = document.createElement('img');
            img.src = url;
            divIten.appendChild();
            
            const h2 = document.createElement('h2');
            h2.innerHTML = titulo;
            divIten.appendChild(h2);
            
            const p = document.createElement('p');
            p.innerHTML = autor;
            divIten.appendChild(p);
                    
            li.appendChild(divIten);
            lista.appendChild(li);
        
            //const nomeAutor = document.getElementById('nomeText');
            //nomeAutor.innerHTML = ("Por " + documento.data().Autor);
            //const img = document.getElementById('imgText');
            //img.src = documento.data().url;
      })
    })
        



}

