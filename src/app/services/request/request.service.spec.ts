import { TestBed, inject, getTestBed } from '@angular/core/testing'

import { RequestService } from './request.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('RequestService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [RequestService]
		})
	})

	it('should be created', inject([RequestService], (service: RequestService) => {
		expect(service).toBeTruthy()
	}))

	it('should get categories', inject(
		[RequestService, HttpTestingController],
		(service: RequestService, httpMock: HttpTestingController) => {
			service.getCategories().then((data) => {
				expect(data).toBeTruthy()
			})
			const req = httpMock.expectOne('https://www.reddit.com/reddits.json')
			expect(req.request.method).toBe('GET')
			req.flush({})
		}
	))

	it('should get more categories', inject(
		[RequestService, HttpTestingController],
		(service: RequestService, httpMock: HttpTestingController) => {
			service.getNexCategories('prueba').then((data) => {
				expect(data).toBeTruthy()
			})
			const req = httpMock.expectOne('https://www.reddit.com/reddits.json?after=prueba')
			expect(req.request.method).toBe('GET')
			req.flush({})
		}
	))

	it('should get best comments', inject(
		[RequestService, HttpTestingController],
		(service: RequestService, httpMock: HttpTestingController) => {
			service.getBestComments('prueba/').then((data) => {
				expect(data).toBeTruthy()
			})
			const req = httpMock.expectOne('https://www.reddit.com/prueba/top.json')
			expect(req.request.method).toBe('GET')
			req.flush({})
		}
	))
})
