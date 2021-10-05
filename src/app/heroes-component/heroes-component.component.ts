import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero'

@Component({
  selector: 'app-heroes-component',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.scss']
})
export class HeroesComponentComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
