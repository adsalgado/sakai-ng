import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TipoCatalogoComponent } from './tipo-catalogo/tipo-catalogo.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { TipoEstatusComponent } from './tipo-estatus/tipo-estatus.component';
import { EstatusComponent } from './estatus/estatus.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'tipo-catalogo', component: TipoCatalogoComponent },
		{ path: 'catalogo', component: CatalogoComponent },
		{ path: 'tipo-estatus', component: TipoEstatusComponent },
		{ path: 'estatus', component: EstatusComponent }
	])],
	exports: [RouterModule]
})
export class TipoCatalogoRoutingModule { }
