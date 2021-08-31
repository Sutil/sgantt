import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  a: Item = new Item(
    'a', 'a', new Date('2021-09-01 00:00'), new Date('2021-09-25 00:00'), 15,
  );

  c = new Item('c', 'c', new Date('2021-09-01 00:00'), new Date('2021-09-25 00:00'), 2);

  b: Item = new Item(
     'b',
    'b',
     new Date('2021-09-02 00:00'),
     new Date('2021-09-25 00:00'),
     30,
     this.a,
     [this.c]
  );



  items: Item[] = [
    this.a,
    this.b
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
