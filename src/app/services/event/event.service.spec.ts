import { TestBed, inject } from '@angular/core/testing'

import { EventService } from './event.service'

describe('EventService', () => {
	let serviceDefault: EventService
	beforeEach(() => {
		serviceDefault = new EventService()
		TestBed.configureTestingModule({
			providers: [EventService]
		})
	})

	it('should be created', inject([EventService], (service: EventService) => {
		expect(service).toBeTruthy()
	}))

	it('should emit a event to a Observe "$obsEventScroll" ', (done) => {
		serviceDefault.$obsEventScroll.subscribe(() => {
			done()
		})
		serviceDefault.sendEventScroll()
	})
})
