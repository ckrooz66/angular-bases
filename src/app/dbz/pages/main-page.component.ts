import { Character } from './../interfaces/character.interface';
import { DbzService } from './../services/dbz.service';
import { Component } from "@angular/core";

 @Component({
    selector:'app-dbz-main-page',
    templateUrl:'./main-page.component.html'
 })


 export class MainComponent  {

    constructor(private dbzService:DbzService){ }
    
    get characters():Character[]{
      return [...this.dbzService.characters];
   }
   
   onNewCharacter(character:Character):void{
      this.dbzService.onNewCharacter(character);
    }


    onDeleteCharacter(index:number):void{
     this.dbzService.onDeleteCharacter(index);
     
   }


     

 }