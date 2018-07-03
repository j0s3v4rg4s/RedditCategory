import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CategoriesComponent } from './page/categories/categories.component'
import { CommonComponentsModule } from './modules/common-components/common-components.module'
import { RequestService } from './services/request/request.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
	declarations: [AppComponent, CategoriesComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CommonComponentsModule,
		HttpClientModule,
		FlexLayoutModule,
		FormsModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatButtonModule
	],
	providers: [RequestService],
	bootstrap: [AppComponent]
})
export class AppModule {}
