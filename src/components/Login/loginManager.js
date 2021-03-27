import firebase from 'firebase/app'
import "firebase/auth";
import firebaseConfig from './firebase.config';


export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
      }
}


export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // console.log("clicked")
    return firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // console.log(result)
        const {displayName, photoURL, email} = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true
        }
        return signedInUser;
        // console.log(displayName, email, photoURL);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }


  export const handleSignOut = () => {
    // console.log("Clicked");
    return firebase.auth().signOut()
    .then(result => {
        const signOutUser = {
          isSignedIn: false,
          name: '',
          photo: '',
          email: ''
        }
        return signOutUser;
        // console.log(result);
    })
    .catch( err => {

    })
  }


 export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
 }


export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
}


const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(function() {
      console.log('user name updated successfully')
    }).catch(function(error) {
      console.log(error);
    });
  }