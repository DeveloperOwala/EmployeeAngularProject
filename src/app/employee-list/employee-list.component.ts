import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];

  constructor(private employeeService:EmployeeService, private router: Router) { }

  ngOnInit()  {
    this.getEmployees();
  }
  getEmployees(): void{
    this.employeeService.getEmployeeList().subscribe(
      (response:Employee[]) => {
        this.employees = response;
      }
    ),
    (error : HttpErrorResponse) => {
      alert(error.message);
    }
     
    }
    updateEmployee(id:number){
      this.router.navigate(['update-employee', id]);
    }
    deleteEmployee(id:number){
       this.employeeService.deleteEmployee(id).subscribe( data =>{
        console.log(data); 
        this.getEmployees();
       });
    }
    employeeDetails(id:number){
      this.router.navigate([`employee-details`, id])
    }
  }
  

