const storage_key = 'fygtodolist'
export default{
  get(){
    return JSON.parse(window.localStorage.getItem(storage_key) || '[]')
  },
  set(items){
    window.localStorage.setItem(storage_key,JSON.stringify(items))
  },
  delOne(items){
    window.localStorage.removeItem(storage_key,JSON.stringify(items))
  },
  delAll(){
    window.localStorage.clear();
  }
}