import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notion-config',
  templateUrl: './notion-config.component.html',
  styleUrls: ['./notion-config.component.scss']
})
export class NotionConfigComponent implements OnInit {

  form = this.fb.group(
    {
      notionKey: ['', [Validators.required]],
      notionDatabaseId: ['', [Validators.required]]
    }
  )

  notionConfig;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.notionConfig = JSON.parse(localStorage.getItem('sgantt:notionConfig'));
  }

  save() {
    if(this.form.invalid) {
      return;
    }

    const notionsConfig = this.form.getRawValue();
    this.notionConfig = notionsConfig;
    localStorage.setItem('sgantt:notionConfig', JSON.stringify(notionsConfig));
  }

}
