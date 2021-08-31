import { addDays } from 'date-fns';

export class Item {

  constructor(
    public key: string,
    public name: string,
    public startDate: Date,
    public endDate: Date,
    public duration?: number,
    public depends?: Item,
    public children?: Item[],
    ) {}

    getDuration() {
      if(this.children && this.children.length > 0) {
        return this.children.reduce((max, cur) => {return cur.getDuration() > max ? cur.getDuration() : max}, 0);
      }
      return this.duration || 0;
    }


    getEndDate(): Date {
      if(this.getStartDate()) {
        return addDays(this.getStartDate(), this.getDuration());
      }
      return this.endDate;
    }

    minDate(): Date {
      return this.depends?.getEndDate();
    }

    getStartDate() {
      if(this.minDate()) {
        return this.startDate >= this.minDate() ? this.startDate : this.minDate();
      }

      return this.startDate;
    }

}
