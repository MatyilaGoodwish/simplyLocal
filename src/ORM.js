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
}
const ORM = () => Object.create(CRUD);


