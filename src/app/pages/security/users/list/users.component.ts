import { Observable } from 'rxjs';
import { UserManagmentService } from './../../../../services/user-managment.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IUser } from '@app/models';
import { Table } from 'primeng/table';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [MessageService]
})
export class UsersComponent implements OnInit {

  registros$ !: Observable<IUser[]>;
  registros : IUser[] = [];
  registroDialog: boolean = false;
  deleteRegistroDialog: boolean = false;
  deleteRegistrosDialog: boolean = false;
  selectedRegistros : IUser[] = [];
  cols: any[] = [];
  registro: IUser = {};
  submitted: boolean = false;

  constructor(public userManagmentService : UserManagmentService, private messageService: MessageService){

  }

  ngOnInit(): void {
    this.registros$ = this.userManagmentService.getAll();
    this.load();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'login', header: 'Login' },
      { field: 'firstName', header: 'Nombre' },
      { field: 'lastName', header: 'A. Paterno' },
      { field: 'email', header: 'Email' },
      { field: 'roles', header: 'Roles' }
    ];

  }

  load() {
    this.registros$.subscribe(
      data => this.registros = data
    );
  }

  deleteSelectedRegistros() {
    this.deleteRegistrosDialog = true;
  }

  confirmDeleteSelected() {
    this.userManagmentService.deleteAllByIds(this.selectedRegistros).subscribe({
      next: () => {
        this.deleteRegistrosDialog = false;
        this.registros = this.registros.filter(val => !this.selectedRegistros.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registros eliminados', life: 3000 });
        this.selectedRegistros = [];
      },
      error: (errorResponse) => this.onError(errorResponse, 'Error al eliminar los registros'),
    });
  }

  deleteRegistro(registro: any) {
    this.deleteRegistroDialog = true;
    this.registro = { ...registro };
  }

  confirmDelete() {
    this.userManagmentService.deleteById(this.registro.login).subscribe({
      next: () => {
        this.deleteRegistroDialog = false;
        this.registros = this.registros.filter(val => val.id !== this.registro.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro eliminado', life: 3000 });
        this.registro = {};
      },
      error: (errorResponse) => this.onError(errorResponse, 'Error al eliminar el registro'),
    });
  }

  onError(errorResponse: HttpErrorResponse, message: string): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });  
  }
  
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  
}
