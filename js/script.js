  const firebaseConfig = {
    apiKey: "AIzaSyAAGqIkpR4nVkdoxgsCDpxYFutEJ0O_mOY",
    authDomain: "diariodoaluno-d32c8.firebaseapp.com",
    projectId: "diariodoaluno-d32c8",
    storageBucket: "diariodoaluno-d32c8.appspot.com",
    messagingSenderId: "843419785955",
    appId: "1:843419785955:web:2fb0903f48c83661a5c3d6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  // Desconectar a conta
function logout() {
   firebase.auth().signOut()
  .then(() => {
    window.location.href = "./html/login.html";
  }).catch(() => {
    alert("Erro ao fazer logout");
  });
};


let storageRef = firebase.storage()
  .ref('imagens');
  
storageRef.child('imagen1.jpg').getDownloadURL()
  .then(url=>{
    console.log(url);
  }).catch(e=>{
    console.log(e)
  })
  
function upload(){
  let file = document.getElementById("files")
  .files[0]
  console.log(file);
  
  let thisRef = storageRef.child(file.name)
  
  thisRef.put(file).then(res=>{
    console.log('Upload completo')
    alert('Upload completo')
  }).catch(e=>{
    console.log(e)
  })
}




  
