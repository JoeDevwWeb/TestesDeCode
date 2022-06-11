// Ja logado direcionar automaticamente
firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.href = "../index.html";
      }
    });
    
// Pegar valores
const form = {
  email: () => document.querySelector('[name=email]'),
  password: () => document.querySelector('[name=password]')
}


// Conta nova
function registrar() {
      
const email = form.email().value;
const senha = form.password().value;

firebase.auth().createUserWithEmailAndPassword(email, senha)
  .then(() => {
    window.location.href = "../index.html";
  }).catch((error) => {
    console.log(error);
  });
      
};
      

// Ja tem conta
function login() {

  const email = form.email().value;
  const senha = form.password().value;

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(response => {
      window.location.href = "../index.html";
    }).catch(erro => {
      alert(error.code);
    });
};
