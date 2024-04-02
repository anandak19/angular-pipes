import { CommonModule, CurrencyPipe, DecimalPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GenderCheckPipe } from '../gender-check.pipe';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, CommonModule, DecimalPipe, PercentPipe, SlicePipe, CurrencyPipe, GenderCheckPipe],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent {
  public currentDate: Date = new Date();

  public students = [
    { 
      id: 1,
      name: 'Mobin Thomas', 
      gender: 'Male', 
      age: 26,
      department: 'english', 
      totalMark: 818.458, 
      percentage: 0.75, 
      grade: 'a', 
      address: 'Mobin Villa Muhamma, Alappuzha', 
      scholarship: 120000,
      phone: '+919578987425'
     },
    {
      id: 2,
      name: 'Keerthi Suresh', 
      gender: 'Female', 
      age: 25,
      department: 'it', 
      totalMark: 718.654, 
      percentage: 0.55, 
      grade: 'b', 
      address: 'Keerthi Villa, Kuttanad, Alappuzha', 
      scholarship: 150000,
      phone: '+919898547823'
    },
   {
    id: 3, 
    name: 'Hari Govind', 
    gender: 'Male', 
    age: 22,
    department: 'physics', 
    totalMark: 521.270, 
    percentage: 0.51, 
    grade: 'C', 
    address: 'Hari Villa, Alappuzha, Alappuzha', 
    scholarship: 100000,
    phone: '+919815789254'
   },
   {
    id: 4, 
    name: 'Anjana Anil', 
    gender: 'Female', 
    age: 23,
    department: 'english', 
    totalMark: 898.984, 
    percentage: 0.87, 
    grade: 'a', 
    address: 'Anjana Villa, Vikom, Kottayam', 
    scholarship: 160000,
    phone: '+919848527397'
   },
   {
    id: 5, 
    name: 'AnandaKrishnan H', 
    gender: 'Male', 
    age: 24,
    department: 'it', 
    totalMark: 889.200, 
    percentage: 0.87, 
    grade: 'a', 
    address: 'Anandan Villa, Muthukulam, Alappuzha', 
    scholarship: 150000,
    phone: '+919544928736'
   },
   {
    id: 6, 
    name: 'Nimmya Sunil', 
    gender: 'Female', 
    age: 25,
    department: 'physics', 
    totalMark: 691.500, 
    percentage: 0.68, 
    grade: 'b', 
    address: 'Nimmya Villa, Purakkad, Alappuzha', 
    scholarship: 140000,
    phone: '+919815784209'
   },
  ];
}
