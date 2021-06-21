import { SettingComponent } from './modules/setting/setting.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { ProductsComponent } from './modules/products/products.component';
import { PlansComponent } from './modules/plans/plans.component';
import { CostumersComponent } from './modules/costumers/costumers.component';
import { LoginComponent } from './modules/login/login.component';
import { UpdateUserComponent } from './modules/update-user/update-user.component';
import { AddUserComponent } from './modules/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UsersComponent } from './modules/users/users.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuditLogComponent } from './modules/audit-log/audit-log.component';

const routes: Routes = [
  {
    path : '',
    component : DefaultComponent,
    children : [
      {
        path:'' ,
        component : DashboardComponent , canActivate : [AuthGuardGuard]
      },
      {
        path:'users' ,
        component : UsersComponent, canActivate : [AuthGuardGuard]
      },
      {
        path:'Customers' ,
        component : CostumersComponent, canActivate : [AuthGuardGuard]
      },
      {
        path:'add' ,
        component : AddUserComponent , canActivate : [AuthGuardGuard]
      },
      {
        path:'users/edit/:id' ,
        component : UpdateUserComponent , canActivate : [AuthGuardGuard]
      },
      {
        path:'plans' ,
        component : PlansComponent , canActivate : [AuthGuardGuard]
      },
      {
        path:'products' ,
        component : ProductsComponent , canActivate : [AuthGuardGuard]
      },
      {
        path:'orders' ,
        component : OrdersComponent , canActivate : [AuthGuardGuard]
      },
      {
        path:'setting' ,
        component : SettingComponent , canActivate : [AuthGuardGuard]
      },
      {
        path:'audit-log' ,
        component : AuditLogComponent , canActivate : [AuthGuardGuard]
      }


    ]

  },
  {
    path:'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuardGuard]
})
export class AppRoutingModule { }
