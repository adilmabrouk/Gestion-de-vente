import { AuditLogComponent } from './../../modules/audit-log/audit-log.component';
import { PlansComponent } from './../../modules/plans/plans.component';
import { CostumersComponent } from './../../modules/costumers/costumers.component';
import { ChartsComponent } from './../../modules/charts/charts.component';
import { LoginComponent } from './../../modules/login/login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { UsersService } from 'src/app/services/users.service';
import { ReactiveFormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from 'src/app/modules/add-user/add-user.component';

import { MatTableExporterModule } from 'mat-table-exporter';
import { FlashMessagesModule } from 'flash-messages-angular';
import { UpdateUserComponent } from 'src/app/modules/update-user/update-user.component';
import { ChartsModule } from 'ng2-charts';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { OrdersComponent } from 'src/app/modules/orders/orders.component';
import { SettingComponent } from 'src/app/modules/setting/setting.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    LoginComponent,
    ChartsComponent,
    CostumersComponent,
    PlansComponent,
    ProductsComponent,
    OrdersComponent,
    SettingComponent,
    AuditLogComponent,




  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    MatTableExporterModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FlashMessagesModule.forRoot(),
    ChartsModule


  ],
  providers:[
    UsersService
  ]
})
export class DefaultModule { }
