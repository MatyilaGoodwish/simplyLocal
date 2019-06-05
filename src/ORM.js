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
      Create: (bucketName) => bucket.setItem(bucketName, null)
}
const  ORM = () => Object.create(CRUD);