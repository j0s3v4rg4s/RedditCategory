import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MarcoComponent } from './marco/marco.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CategoryComponent } from './category/category.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';





@NgModule({
	imports: [CommonModule, MatToolbarModule, MatDialogModule, MatButtonModule, MatIconModule, MatCardModule],
	declarations: [MarcoComponent, CategoryComponent],
	exports: [MarcoComponent],
	entryComponents: [CategoryComponent]
})
export class CommonComponentsModule {}
