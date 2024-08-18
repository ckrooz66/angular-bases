import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Injectable({
    providedIn:'root'
})
export class DbzService{
    public characters:Character[]=[
        {
           name:'Krillin',
           power:100
        },
        {
           name:'Goku',
           power:1000
        },
        {
           name:'Vegeta',
           power:1100
        }
        
       ];
  
       onNewCharacter(character:Character):void{
         this.characters.push(character);
       }
  
  
       onDeleteCharacter(index:number):void{
        this.characters.splice(index,1);
        
      }
}