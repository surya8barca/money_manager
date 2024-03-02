import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-table-form',
  templateUrl: './create-table-form.component.html',
  styleUrl: './create-table-form.component.scss'
})
export class CreateTableFormComponent {

  formCreationType!:string
  
}
