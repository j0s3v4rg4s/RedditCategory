import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MarcoComponent } from './marco/marco.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
	imports: [CommonModule, MatToolbarModule],
	declarations: [MarcoComponent],
	exports: [MarcoComponent]
})
export class CommonComponentsModule {}
