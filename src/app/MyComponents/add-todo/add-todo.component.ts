import { Component, OnInit, Output ,EventEmitter, NgModule} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title_ng_model:string;
  desc_ng_model:string;
  @Output() todo_add_emm:EventEmitter<Todo>= new EventEmitter();

  todo_add:Todo;

  constructor() { }

  ngOnInit(): void {
  }

  onAddFormSubmit(){
    this.todo_add={
      sno:8,
      title:this.title_ng_model,
      desc:this.desc_ng_model,
      active:true
    }
    console.log("hi");
    console.log(this.todo_add);
    this.todo_add_emm.emit(this.todo_add);

  }

}
