import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../../models/student.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  students: Student[] = [
    new Student(1, 'Gustavo', 'Cerati', '32475955', true),
    new Student(2, 'Andres', 'Calamaro', '34589623', false),
    new Student(3, 'Charly', 'Garcia', '25964122', true),
    new Student(4, 'Fito', 'Paez', '35894133', false),
    new Student(5, 'Fabiana', 'Cantilo', '36856120', true),
  ]

  displayedColumns = ['id', 'firstName', 'lastName', 'dni', 'isActive', 'edit', 'delete'];

  constructor(private readonly dialogService: MatDialog) { }
  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        // this.students.push(new Student(lastId + 1, value.firstName, value.lastName, value.dni, true))
        // ... Los tres puntos se llaman operador esprep
        this.students = [...this.students, new Student(lastId + 1, value.firstName, value.lastName, value.dni, true)];
      }
    })
  }

  removeStudent(student: Student){
    this.students = this.students.filter((stu) => stu.id !== student.id)
  }

  editStudent(student: Student){
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        // console.log (data);
        this.students = this.students.map((stu) => stu.id === student.id ? {...stu, ...data } : stu) 
      }
    })
  }
}
