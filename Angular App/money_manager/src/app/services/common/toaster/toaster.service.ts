import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private snackBar: MatSnackBar) { }


  open(message:string)
  {
    this.snackBar.open(message,'',{
      horizontalPosition:'center',
      verticalPosition:'top',
      duration:3000
    })
  }
}
