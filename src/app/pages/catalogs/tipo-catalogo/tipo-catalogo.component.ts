import { HttpErrorResponse } from '@angular/common/http';
import { TipoCatalogoService } from './../../../services/tipo-catalogo.service';
import { Component, OnInit } from '@angular/core';
import { ITipoCatalogo } from '@app/models';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-tipo-catalogo',
  templateUrl: './tipo-catalogo.component.html',
  styleUrls: ['./tipo-catalogo.component.scss'],
  providers: [MessageService]
  
})
export class TipoCatalogoComponent implements OnInit {

  registroDialog: boolean = false;
  deleteRegistroDialog: boolean = false;
  deleteRegistrosDialog: boolean = false;
  registros: ITipoCatalogo[] = [];
  selectedRegistros: ITipoCatalogo[] = [];
  cols: any[] = [];
  registro: ITipoCatalogo = {};
  submitted: boolean = false;

  constructor(public tipoCatalogoService: TipoCatalogoService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    
    this.load();

    this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'descripcion', header: 'Descripción' }
    ];

  }

  load() {
    this.tipoCatalogoService.getAll().subscribe({
      next: data => this.registros = data
    });
  }

  deleteSelectedRegistros() {
    this.deleteRegistrosDialog = true;
  }

  confirmDeleteSelected() {
    this.tipoCatalogoService.deleteAllByIds(this.selectedRegistros).subscribe({
      next: () => {
        this.deleteRegistrosDialog = false;
        this.registros = this.registros.filter(val => !this.selectedRegistros.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registros eliminados', life: 3000 });
        this.selectedRegistros = [];
      },
      error: (errorResponse) => this.onError(errorResponse, 'Error al eliminar los registros'),
    });
  }

  editRegistro(registro: any) {
    this.registro = { ...registro };
    this.registroDialog = true;
  }

  deleteRegistro(registro: any) {
    this.deleteRegistroDialog = true;
    this.registro = { ...registro };
  }

  confirmDelete() {
    this.tipoCatalogoService.deleteById(this.registro.id).subscribe({
      next: () => {
        this.deleteRegistroDialog = false;
        this.registros = this.registros.filter(val => val.id !== this.registro.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro eliminado', life: 3000 });
        this.registro = {};
      },
      error: (errorResponse) => this.onError(errorResponse, 'Error al eliminar el registro'),
    });
  }

  openNew() {
    this.registro = {};
    this.submitted = false;
    this.registroDialog = true;
  }

  saveRegistro() {
    this.submitted = true;

    if (this.registro.nombre?.trim()) {
        if (this.registro.id) {
          this.tipoCatalogoService.update(this.registro).subscribe({
            next: (data) => {
              // @ts-ignore
              this.registros[this.findIndexById(this.registro.id)] = this.registro;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'registro Updated', life: 3000 });    
            },
            error: (errorResponse) => this.onError(errorResponse, 'Error al actualizar el registro'),
            complete: () => {
              this.registros = [...this.registros];
              this.registroDialog = false;
              this.registro = {};
            }
          });
        } else {
          this.tipoCatalogoService.create(this.registro).subscribe({
            next: data => {
              this.registro.id = data.id;
              this.registros.push(this.registro);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'registro Created', life: 3000 });  
            },
            error: (errorResponse) => this.onError(errorResponse, 'Error al crear el registro'),
            complete: () => {
              this.registros = [...this.registros];
              this.registroDialog = false;
              this.registro = {};
            }
          });
        }

    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.registros.length; i++) {
        if (this.registros[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}

  hideDialog() {
      this.registroDialog = false;
      this.submitted = false;
  }

  onError(errorResponse: HttpErrorResponse, message: string): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message, life: 3000 });  
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  
}
