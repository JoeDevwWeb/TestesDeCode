// Botao do sidebar
$(document).ready(function(){
    
    $('#btnOpen').click(function(){
            $('.barraferramentas').css("left","0");
    });
    $('#btnClose').click(function(){
        $('.barraferramentas').css("left","-240px");
});
});



const store = firebase.firestore();
const storage = firebase.storage();

const Foto = storage.ref("projetos").child("https://firebasestorage.googleapis.com/v0/b/diariodoaluno-d32c8.appspot.com/o/projetos%2Fimagem1.jpg?alt=media&token=5933e0e4-7590-447d-83c3-4c1b29907174");


function imagem(src, width, heigth, alt){
  var img = document.createElement('img');
  img.src = src; 
  img.width = width;
  img.heigth = heigth;
  img.alt = alt;
  document.body.appendChild(img);
};

function storageOnComplete(file) {
  // The file param would be a File object from a file selection event in the browser.
  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
  // - https://developer.mozilla.org/en-US/docs/Web/API/File

  const metadata = {
    'contentType': file.type
  };

  // [START storage_on_complete]
  const storageRef = firebase.storage().ref();
  storageRef.child('projetos/imagem1.jpg' + file.name).put(file, metadata)
    .then((snapshot) => {
      console.log('Uploaded', snapshot.totalBytes, 'bytes.');
      console.log('File metadata:', snapshot.metadata);
      // Let's get a download URL for the file.
      snapshot.ref.getDownloadURL().then((url) => {
        console.log('File available at', url);
        // ...
      });
    }).catch((error) => {
      console.error('Upload failed', error);
      // ...
    });
  // [END storage_on_complete]
};
