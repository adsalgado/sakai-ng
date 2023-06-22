import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TipoCatalogoComponent } from './tipo-catalogo/tipo-catalogo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'tipo-catalogo', component: TipoCatalogoComponent }
	])],
	exports: [RouterModule]
})
export class TipoCatalogoRoutingModule { }
