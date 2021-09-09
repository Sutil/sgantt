import { ChartService } from './../chart/chart.service';
import { Component, OnInit } from '@angular/core';
import { Model } from './../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-reader',
  templateUrl: './issue-reader.component.html',
  styleUrls: ['./issue-reader.component.scss']
})
export class IssueReaderComponent implements OnInit {

  issues = "";
  items: string[] = [];

  objs: Model[] = [];

  selectedDate = new Date();


  constructor(private chartService: ChartService, private router: Router) { }

  ngOnInit(): void {
  }

  insert(event) {
    this.issues = event.target.value;
  }

  check() {
    this.removeWrongCommas();
    this.transformToObject();
  }

  removeWrongCommas() {
    if(this.issues) {
      const strList = this.issues.split("\n");
      const newList:string[]  = [];
      strList.forEach(i => {

        const position: number[] = [];

        for(let idx = 0; idx < i.length ; idx++) {

          if(i[idx] === '"') {
            position.push(idx);
          }
        }

        if(position.length > 1) {
          const entreAspas = i.substring(position[0] + 1, position[1]);
          const entreAspasSemVirgula = entreAspas.replaceAll(/,/g, '-');

          i = i.replaceAll(entreAspas, entreAspasSemVirgula);
        }
        newList.push(i);
      });

      this.items = newList;
    }
  }

  transformToObject() {
    if(this.items) {
      this.objs = this.items.map(
        item =>  {
          const props = item.split(",");
          return this.transforItemToObject(props);
        }
      );
    }
  }

  transforItemToObject(strItem: string[]): Model {
    try {

      let parentId = 0
      if(Number(3) !== NaN) {
        parentId = Number(strItem[3])
      }

      return {
        type: strItem[0],
        id: Number(strItem[2]),
        parentId: parentId,
        estimate: Number(strItem[5]),
        key: strItem[1],
        name: strItem[4],
        assignee: strItem[8],
        dependsId: 0
      };
    } catch(err) {
      console.log(err);
      return {
        type: "",
        id: 0,
        parentId: 0,
        estimate: 0,
        key: "",
        name: "erro",
        dependsId: 0,
        erro: "erro"
      }
    }
  }

  selectDate(strDate) {
    console.log(strDate);
  }

  export() {
    this.chartService.setModel(this.objs, this.selectedDate);
    this.router.navigate(['chart'])
  }

}
