import { Component, OnInit } from '@angular/core'
import { RequestService } from '../../services/request/request.service'
import { Child } from '../../interfaces/categories'
import { EventService } from '../../services/event/event.service'
import { MatDialog } from '@angular/material/dialog'
import { CategoryComponent } from '../../modules/common-components/category/category.component'

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	// ----------------------------------------------------------------------------------------------------------------
	// Attributes
	// ----------------------------------------------------------------------------------------------------------------
	loadCategories = false
	loadMoreCategories = false
	categories: Child[]
	private nexCategories: string

	// ----------------------------------------------------------------------------------------------------------------
	// Constructor
	// ----------------------------------------------------------------------------------------------------------------
	constructor(private request: RequestService, private eventSer: EventService, public dialog: MatDialog) {
		this.loadFirstChildren().then(() => {
			eventSer.$obsEventScroll.subscribe(() => {
				this.loadNextChildren()
			})
		})
	}
	// ----------------------------------------------------------------------------------------------------------------
	// Methods
	// ----------------------------------------------------------------------------------------------------------------
	ngOnInit() {}

	async loadFirstChildren() {
		this.loadCategories = true
		const data = await this.request.getCategories()
		this.nexCategories = data.data.after
		this.categories = data.data.children
		this.loadCategories = false
	}

	async loadNextChildren() {
		if (!this.loadCategories) {
			this.loadMoreCategories = true
			const data = await this.request.getNexCategories(this.nexCategories)
			this.nexCategories = data.data.after
			this.categories = [...this.categories, ...data.data.children]
			this.loadMoreCategories = false
		}
	}

	showCategory(item: Child) {
		this.dialog.open(CategoryComponent, {
			data: item,
			width: '100%',
			maxWidth: '100%',
			height: '100%',
			maxHeight: '100%',
			panelClass: 'customModal'
		})
	}
}
