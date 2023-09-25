import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modalService: NgbModal) { }

  // Initialize Bootstrap
  public open(modal: any): void {
    this.modalService.open(modal);
  }

  newKitten: Object = {};

  transfereKitten(cat: Object): void {
    this.newKitten = cat;
  }

  adoptedKitten: Object = {};

  adoptKitten(cat: any): void {
    this.adoptedKitten = cat;
  }

}
