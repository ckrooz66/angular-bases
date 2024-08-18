import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character>= new EventEmitter();

  public character:Character={
    name:'',
    power:0
  }


  emitCharacter(){
    console.log(this.character);
    if(this.character.name.length===0)return;

    const newCharacter: Character = {
      name: this.character.name,
      power: this.character.power
     };
     console.log(newCharacter);
   
     this.onNewCharacter.emit(newCharacter);
      
      
      

    this.character.name='';
    this.character.power=0;

  }
}
