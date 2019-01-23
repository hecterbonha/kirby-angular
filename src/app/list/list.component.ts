import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  datas: any;
  render: boolean;
  @Input() messageText: string;
  
  constructor (
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.render = false;
  }

  feedKirby(): void {
    this.httpClient.get('http://localhost:1234/foods',{ 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      responseType: 'json'
    })
    .subscribe(data => {
      this.datas = data;      
      this.render = true;
    });
  }
}
