import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { EventService } from '../../../services/event/event.service';

@Component({
	selector: 'app-marco',
	templateUrl: './marco.component.html',
	styleUrls: ['./marco.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MarcoComponent implements OnInit {
	constructor(private eventSer: EventService) {}

	ngOnInit() {}

	onScroll(event: Event) {
		const element = <HTMLElement>event.srcElement
		if (element.offsetHeight + element.scrollTop === element.scrollHeight) {
			this.eventSer.sendEventScroll()
		}
	}
}
