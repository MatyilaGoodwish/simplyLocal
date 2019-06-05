/**
 * @author: Goodwish
 * @copyright: 2019
 * @license MIT
 * @country: South Africa
 * CRUD LocalStorage ORM Utils
 */
 const bucket = localStorage;
 const CRUD = {
      Save: (bucketName) => bucket.setItem(bucketName, JSON.stringify(eval(bucketName))),
      Delete: (bucketName) => bucket.setItem(bucketName, JSON.stringify(null)),
      Read: (bucketName) => JSON.parse(bucket.getItem(bucketName)),
      Create: (bucketName) => bucket.setItem(bucketName, null),
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




