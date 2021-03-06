import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Label, Report } from '../../../../Interface/userinfo';
import {HttpService} from '../../../../http.service';
import {ApiResult} from '../../../../Interface/ApiResult';

@Component({
  selector: 'app-detailinfo-bylabel',
  templateUrl: './detailinfo-bylabel.component.html',
  styleUrls: ['./detailinfo-bylabel.component.less']
})
export class DetailinfoBylabelComponent implements OnInit {
  label: Label;
  label_reports: Report[];
  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
  ) { }

  ngOnInit() {
    this.label = new Label();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.label.id = +params.get('label_id');
    });
    this.get_label_reports();
  }
  get_label_reports() {
    const label_callback = (result: ApiResult) => {
      if (result.success) {
        this.label_reports = result.data.reports;
        this.label.name = result.data.name;
      }
    };
    this.http.query_label(this.label.id, label_callback);
  }

}
