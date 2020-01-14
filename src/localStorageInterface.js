export class LocalStorageInterface {
    static Save(bucketName, data) {
        return localStorage.setItem(bucketName, JSON.stringify(data))
    }
    static Delete(bucketName) {
        return localStorage.setItem(bucketName, JSON.stringify(null))
    }
    static Read(bucketName) {
        return JSON.parse(localStorage.getItem(bucketName))
    }
    static Create(bucketName) {
        localStorage.setItem(bucketName, null)
    }
}