import { Component, OnInit, Inject, SecurityContext } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Child } from '../../../interfaces/categories'
import { ChildComment } from '../../../interfaces/comments'
import { RequestService } from '../../../services/request/request.service'

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
	// ----------------------------------------------------------------------------------------------------------------
	// Attributes
	// ----------------------------------------------------------------------------------------------------------------
	bestComments: ChildComment[]

	// ----------------------------------------------------------------------------------------------------------------
	// Constructor
	// ----------------------------------------------------------------------------------------------------------------
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: Child,
		private request: RequestService
	) {
		request.getBestComments(data.data.url).then((comments) => {
			this.bestComments = comments.data.children.slice(0, 5)
		})
	}

	getBannerProperty() {
		return {
			height: this.data.data.banner_size[1] + 'px',
			'background-color': this.data.data.banner_background_color
		}
	}

	ngOnInit() {}

	convertHtml(data: string) {
		if (data) {
			return data
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>')
				.replace(/&amp;/g, '&')
		}
		return null
	}
}
