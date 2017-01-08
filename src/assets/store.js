const storage_key = 'fygtodolist'
export default{
  get(){
    return JSON.parse(window.localStorage.getItem(storage_key) || '[]')
  },
  set(items){
    window.localStorage.setItem(storage_key,JSON.stringify(items))
  }
}