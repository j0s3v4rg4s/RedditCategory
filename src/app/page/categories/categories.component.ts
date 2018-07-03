import { Component, OnInit } from '@angular/core'
import { RequestService } from '../../services/request/request.service'
import { Child } from '../../interfaces/categories';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

	categories: Child[]

	private nexCategories: string

	constructor(private request: RequestService) {
		request.getCategories().then((data) => {
			this.nexCategories = data.data.after
			this.categories = data.data.children
		})
	}
	ngOnInit() {}
}
