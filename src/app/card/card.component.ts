import { Component, Input, input } from '@angular/core';
import { IRobot } from '../model/robots';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  robot: IRobot = {
    id: 0,
    name: "Robot",
    username: "robot",
    email: "robot@email.com"
  }

}
