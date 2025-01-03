import { Component, input, signal } from '@angular/core';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
  standalone: true,
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }
}
