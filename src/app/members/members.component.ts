import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  @ViewChild('inputName') inputName: ElementRef<HTMLInputElement>;

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    hours: [8, [Validators.min(1), Validators.max(16)]]
  });

  members = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fetchMembers();
  }

  createMember() {
    const member = this.form.getRawValue();
    let members: any[] = JSON.parse(localStorage.getItem('sgantt:members'));
    if(members) {
      members.push(member);
    } else {
      members = [member];
    }
    localStorage.setItem('sgantt:members', JSON.stringify(members));
    this.form.reset();
    this.inputName.nativeElement.focus();
    this.fetchMembers();
  }

  fetchMembers() {
    const members = JSON.parse(localStorage.getItem('sgantt:members'));
    if(members) {
      this.members = members;
    }
  }

  deleteMember(member) {
    const idx = this.members.findIndex(m => m.name === member.name);
    if(idx > -1) {
      this.members.splice(idx, 1);
      localStorage.setItem('sgantt:members', JSON.stringify(this.members));
      this.fetchMembers();
    }
  }

}
