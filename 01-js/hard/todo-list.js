/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index note if the updatedTodo is "Invalid Task" do not update the list
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todo_list=[];
  }
  add(todo){
    this.todo_list.push(todo);
  }
  remove(index){
    this.todo_list.splice(index,1);
  }
  update(index,todo){
    if(todo=='Invalid Task'){return;}
    if(index>=(this.todo_list.length)){return;}
    this.todo_list.splice(index,1,todo);
  }

  getAll(){
    return this.todo_list;
  }
  get(index){
    const ans=this.todo_list[index];
    if(ans==undefined){return null;}
    return ans;
  }
  clear(){
    this.todo_list=[];
  }
}

module.exports = Todo;
