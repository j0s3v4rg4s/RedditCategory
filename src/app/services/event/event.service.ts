import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class EventService {
	private subEventScroll = new Subject<void>()
	$obsEventScroll = this.subEventScroll.asObservable()

	constructor() {}

	sendEventScroll() {
		this.subEventScroll.next()
	}
}
