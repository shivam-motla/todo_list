import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem_string:string;
  todos:Todo[];

  constructor() {

    //this.localItem_string=localStorage.getItem("todos");
    this.localItem_string=JSON.stringify(localStorage.getItem('todos'));
    console.log(this.localItem_string)  
    var variable_=(this.localItem_string) 
    if(variable_==null){
      this.todos=[]
    }
    else{
       this.todos=JSON.parse(JSON.parse(this.localItem_string));;
      //this.todos=JSON.parse(localStorage.getItem('todos')||'');
      console.log("todos in local");
      console.log(this.todos);
    }
    // this.todos=[
    //   {
    //     sno:1,
    //     title:"This is titlee",
    //     desc:"discriptionn",
    //     active :true
    //   },
    //   {
    //     sno:2,
    //     title:"This is second title",
    //     desc:"discriptionn2",
    //     active :true
    //   },
    //   {
    //     sno:3,
    //     title:"This is third title",
    //     desc:"discriptionn3",
    //     active :true
    //   }
    // ]
    
  }

  ngOnInit(): void {
  }
  
  returned_to_del(d_todo:Todo){
    console.log(d_todo);
    const index = this.todos.indexOf(d_todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  returned_to_change_active(a_todo:Todo){
    console.log(a_todo);
    const index = this.todos.indexOf(a_todo);
    this.todos.splice(index,1);
    this.todos.push(a_todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  returned_to_change_active2(a_todo:Todo){
    const index = this.todos.indexOf(a_todo);
    this.todos.splice(index,1);
    this.todos.unshift(a_todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo_todos(a_todo:Todo){
    console.log(a_todo);
    // this.todos.push(a_todo);
    this.todos.unshift(a_todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
