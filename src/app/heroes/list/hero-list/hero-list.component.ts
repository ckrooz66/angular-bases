import { HeroComponent } from './../../hero/hero.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {

  public heroNames:string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deletedHero?:string;

  removeLastHero():void{

    const deletedHero:string|undefined =this.heroNames.pop();
    this.deletedHero=deletedHero;
    console.log({deletedHero});
  }

}
