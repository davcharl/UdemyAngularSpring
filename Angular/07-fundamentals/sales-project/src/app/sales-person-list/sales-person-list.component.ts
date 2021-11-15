import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList:SalesPerson[] = [
    new SalesPerson("John","Mayer","john.mayer@mail.com",4),
    new SalesPerson("Jane","Hamman","jane.hamman@mail.com",5),
    new SalesPerson("Allan","Green","allan.green@mail.com",5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
