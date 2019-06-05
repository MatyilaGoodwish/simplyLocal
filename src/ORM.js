/**
 * @author: Goodwish
 * @copyright: 2019
 * @license MIT
 * @country: South Africa
 * CRUD LocalStorage ORM Utils
 */
const CRUD = {
      Save: function (bucketName, data){
            return localStorage.setItem(bucketName, JSON.stringify(data))
      },
      Delete: (bucketName) => localStorage.setItem(bucketName, JSON.stringify(null)),
      Read: (bucketName) => JSON.parse(localStorage.getItem(bucketName)),
      Create: (bucketName) => localStorage.setItem(bucketName, null),
      Config: (options)=>{
            firebase: false
      },
      //update to firebase
      Database: () => {
            return {
                  Update:  (bucketName) =>{
                        return firebase.auth().onAuthStateChanged(function(user){
                              if(user){
                                    firebase.firestore().collection(bucketName).add(ORM().Read(bucketName))
                              }else{
                                    console.warn("configure auth keys for firebase on your project")
                              }
                        });
                  }
            }
      }
}
const  ORM = () => Object.create(CRUD);




