import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoCatalogoComponent } from './tipo-catalogo/tipo-catalogo.component';
import { TipoCatalogoRoutingModule } from './catalogs-routing.module';
import { FormsModule } from '@angular/forms';
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
import { MessagesModule } from 'primeng/messages';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { TipoEstatusComponent } from './tipo-estatus/tipo-estatus.component';
import { EstatusComponent } from './estatus/estatus.component';

@NgModule({
    imports: [
        CommonModule,
        TipoCatalogoRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule
    ],
    declarations: [TipoCatalogoComponent, CatalogoComponent, TipoEstatusComponent, EstatusComponent]
})
export class CatalogsModule { }
