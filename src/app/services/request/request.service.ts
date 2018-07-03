import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Categories } from '../../interfaces/categories'

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
}
