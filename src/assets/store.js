const storage_key = 'fygtodolist'
export default{
  get(){
    var todos =  JSON.parse(window.localStorage.getItem(storage_key) || '[]')
    todos.forEach(function (todo, index) { 
      todo.id = index;
     })
     todos.uid = todos.length;
     return todos;
  }, 
  set(todos){
    window.localStorage.setItem(storage_key,JSON.stringify(todos))
  },
  delAll(){
    window.localStorage.clear()
  },
}