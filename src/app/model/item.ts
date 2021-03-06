import { Member } from './member';
import { addDays } from 'date-fns';

export class Item {

  constructor(
    public id: number,
    public parentId: number,
    public key: string,
    public name: string,
    public startDate: Date,
    public endDate: Date,
    public duration?: number,
    public depends?: Item,
    public children?: Item[],
    public dependsId?: number,
    public error?: string,
    public assignee?: Member
    ) {}

    getDuration() {
      if(this.children && this.children.length > 0) {
        return this.children.reduce((max, cur) => {return cur.getDuration() > max ? cur.getDuration() : max}, 0);
      }
      return this.duration || 0;
    }

    getHoursPerDay() {
      if(this.assignee) {
        return this.assignee.hours;
      }
      return 8;
    }

    getRealDuration() {
      const realDuration = (this.getDuration() / this.getHoursPerDay()) * 8;

      return Math.ceil(realDuration);
    }


    getEndDate(): Date {

      if(this.children && this.children.length > 0) {
        return this.children.reduce((maxDate, child) => {
          if(child.getEndDate() > maxDate) {
            return child.getEndDate();
          }
          return maxDate;
        }, new Date('1970-01-01 00:00'));

      }

      if(this.getStartDate()) {
        const a = addDays(this.getStartDate(), this.getRealDuration());

        return a;
      }
      return this.endDate;
    }

    minDate(): Date {
      const minDate = this.depends?.getEndDate();
      if(minDate) {
        return addDays(minDate, 1);
      }
      return null;
    }

    getStartDate() {
      const minDate = this.minDate();
      if(this.minDate()) {
        return this.startDate >= minDate ? this.startDate : minDate;
      }

      return this.startDate;
    }

}
