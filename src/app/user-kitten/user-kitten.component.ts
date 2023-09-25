import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent {

  adoptedKittenList: Array<Kitten> = [];
  
  @Input()
  adoptedKitten: any = {};

  ngOnChanges() {
    if(Object.values(this.adoptedKitten).length !== 0) {
      this.adoptedKittenList.push(this.adoptedKitten);
    }
  }

}
