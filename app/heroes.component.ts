import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html' ,
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: []

})

export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router
  ){}

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail(){
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

// once navigate to hero details from dashboard back button changes the url but page doesn't display
// console.error EXCEPTION: Error: Uncaught (in promise): ObjectUnsubscribedError
