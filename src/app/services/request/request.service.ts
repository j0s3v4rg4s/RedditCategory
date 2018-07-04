import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Categories } from '../../interfaces/categories'
import { Comments } from '../../interfaces/comments'

@Injectable({
	providedIn: 'root'
})
export class RequestService {
	// ----------------------------------------------------------------------------------------------------------------
	// Constructor
	// ----------------------------------------------------------------------------------------------------------------
	constructor(private http: HttpClient) {}

	// ----------------------------------------------------------------------------------------------------------------
	// Methods
	// ----------------------------------------------------------------------------------------------------------------
	getCategories() {
		return this.http.get<Categories>('https://www.reddit.com/reddits.json').toPromise()
	}

	getNexCategories(after: string) {
		return this.http.get<Categories>('https://www.reddit.com/reddits.json?after=' + after).toPromise()
	}

	getBestComments(urlCategory: string) {
		return this.http.get<Comments>('https://www.reddit.com/' + urlCategory + 'top.json').toPromise()
	}
}
