import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CategoriesComponent } from './categories.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { CommonComponentsModule } from '../../modules/common-components/common-components.module'
import { RequestService } from '../../services/request/request.service'

describe('CategoriesComponent', () => {
	let component: CategoriesComponent
	let fixture: ComponentFixture<CategoriesComponent>

	beforeEach(async(() => {
		const requestServiceMock = jasmine.createSpyObj('RequestService', ['getCategories', 'getNexCategories'])
		requestServiceMock.getCategories.and.returnValue(
			Promise.resolve({
				data: {
					after: '123'
				}
			})
		)

		TestBed.configureTestingModule({
			declarations: [CategoriesComponent],
			imports: [
				MatToolbarModule,
				FlexLayoutModule,
				MatCardModule,
				MatProgressSpinnerModule,
				MatButtonModule,
				MatDialogModule,
				MatToolbarModule,
				CommonComponentsModule
			],
			providers: [
				{
					provide: RequestService,
					useValue: requestServiceMock
				}
			]
		}).compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(CategoriesComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
