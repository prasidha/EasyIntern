// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD6snM4A7EHGumvahMdfXKJOSKutgA754I",
    authDomain: "easyintern-f758a.firebaseapp.com",
    databaseURL: "https://easyintern-f758a.firebaseio.com",
    projectId: "easyintern-f758a",
    storageBucket: "easyintern-f758a.appspot.com",
    messagingSenderId: "585855924823",
    appId: "1:585855924823:web:746910035c455fb8898112",
    measurementId: "G-0VYXHN8RCW"
  };


  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const auth =firebase.auth()
  const db = firebaseApp.firestore();
  export {db ,auth} ;



  // export async function isStudent(){
  //   const types=[]
  //   return  db.collection("userdata").get().then((querySnapshot) => { 
  //     querySnapshot.forEach((doc) => {
  //        const data=doc.data()
  //        console.log("dataaaaa",data)
  //        types.push(data)
  //       //  console.log("heyyyy",currentUser.types)
  //     }); 
    
  //   });
  // }
  


  