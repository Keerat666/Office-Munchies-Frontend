import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-angular-section',
  templateUrl: './angular-section.component.html',
  styleUrls: ['./angular-section.component.css']
})
export class AngularSectionComponent implements OnInit {


  constructor(private modalService: NgbModal, calendar: NgbCalendar) {

  }

  
  ngOnInit() {
  }

}
