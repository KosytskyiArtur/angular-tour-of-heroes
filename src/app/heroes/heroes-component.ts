import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes-component',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.scss']
})
export class HeroesComponentComponent implements OnInit {

  heroes = HEROES;

  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
