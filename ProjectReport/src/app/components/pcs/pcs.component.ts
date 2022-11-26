import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcs',
  templateUrl: './pcs.component.html',
  styleUrls: ['./pcs.component.css']
})
export class PcsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  previous(){
    $('#pcs-tab').removeClass('active');
    $('#pcs-tab-pane').removeClass('active');
    $('#pcs-tab-pane').removeClass('show');
    $('#research-tab').addClass('active');
    $('#research-tab').removeClass('disabled');
    $('#research-tab-pane').addClass('active');
    $('#research-tab-pane').addClass('show');
  
  }
  saveandnext() {
    //alert("click me")
    $('#pcs-tab').removeClass('active');
    $('#pcs-tab-pane').removeClass('active');
    $('#pcs-tab-pane').removeClass('show');
    $('#finance-tab').addClass('active');
    $('#finance-tab').removeClass('disabled');
    $('#finance-tab-pane').addClass('active');
    $('#finance-tab-pane').addClass('show');
  }


}
