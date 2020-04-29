import { Component, OnInit } from '@angular/core';
import {moveIn, fallIn} from '../router.animation';


@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [moveIn(), fallIn()]
  
})
export class AboutusComponent implements OnInit {
  state: string= '';

  constructor() { }

  ngOnInit() {
  }

}
