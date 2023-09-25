import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {
  kittenList: Array<Kitten> = [];

  firstKitten = new Kitten('Aku', 'Angora', '12/08/2022', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg');
  secondKitten = new Kitten('Django', 'American', '26/02/2019', 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg')

  ngOnInit() {
    this.kittenList.push(this.firstKitten);
    this.kittenList.push(this.secondKitten);
  }

  @Input()
  newKitten: any = {};

  ngOnChanges() {
    if(Object.values(this.newKitten).length !== 0) {
      this.kittenList.push(this.newKitten);
    }
  }

  @Output()
  adoptedKitten: EventEmitter<Object> = new EventEmitter();

  adoptKitten(index: number): void {
    this.adoptedKitten.emit(this.kittenList[index]);
    this.kittenList.splice(index, 1);
  }

}
