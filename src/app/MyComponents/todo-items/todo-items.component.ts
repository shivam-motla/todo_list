import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() received_todo:Todo;
  @Output() todo_del_emm:EventEmitter<Todo> = new EventEmitter();
  @Output() todo_with_changed_active:EventEmitter<Todo> = new EventEmitter();
  @Output() todo_with_changed_active2:EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete(rec_todo:Todo){
    this.todo_del_emm.emit(rec_todo);
    console.log("Delete is clicked");
    
  }

  // onCheckboxClick(checkTodo:Todo){
  //   checkTodo.active=false;
  //   this.todo_with_changed_active.emit(checkTodo);

  // }
  checkCheckBoxvalue(event:Event){
    if((<HTMLInputElement>event.target).checked==true){
      //this.received_todo.active=true;
      this.received_todo.active=false;
      this.todo_with_changed_active.emit(this.received_todo);
    }
    else{
      this.received_todo.active=true;
      this.todo_with_changed_active2.emit(this.received_todo);
    }
  }

}
