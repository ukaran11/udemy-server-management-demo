import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  label = input.required();
}
