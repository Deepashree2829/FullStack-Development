import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
