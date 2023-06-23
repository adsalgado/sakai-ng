import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TipoCatalogoComponent } from './tipo-catalogo/tipo-catalogo.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'tipo-catalogo', component: TipoCatalogoComponent },
		{ path: 'catalogo', component: CatalogoComponent }
	])],
	exports: [RouterModule]
})
export class TipoCatalogoRoutingModule { }
