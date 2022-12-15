import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { Student } from '../../../models/student.model';
import { Student } from 'src/app/models/student.model';



@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']

})
export class StudentDialogComponent {
  firstNameControl = new FormControl('')
  lastNameControl = new FormControl('')
  dniControl = new FormControl('')

  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    dni: this.dniControl,
  })

  constructor(
    private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null,) {
    //console.log(data);
    if (data) {
      this.studentForm.patchValue(data)
    }
  }

  close() {
    this.dialogRef.close()
  }
}
