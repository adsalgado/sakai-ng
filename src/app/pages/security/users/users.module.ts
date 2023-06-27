import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { UsersComponent } from './list/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BadgeModule } from 'primeng/badge';
import { UserUpdateComponent } from './user-update/user-update.component';
import { PanelModule } from 'primeng/panel';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [ UsersComponent, UserDetailComponent, UserUpdateComponent ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    MultiSelectModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    PanelModule,
    BadgeModule
  ]
})
export class UsersModule { }
