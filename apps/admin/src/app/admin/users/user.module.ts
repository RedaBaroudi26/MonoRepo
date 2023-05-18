import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { UsersRoutingModule } from './user-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';
import { ComponentsModule } from 'apps/admin/src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { FeatherComponent } from 'angular-feather';

@NgModule({
  declarations: [
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    UsersRoutingModule,
    ComponentsModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class UsersModule {}
