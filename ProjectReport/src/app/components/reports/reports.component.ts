import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // generatePDF(){
  //   let pdf = new jsPDF()

  //   pdf.html(this.el.nativeElement,{
  //     callback:(pdf) => {
  //       pdf.save("output.pdf")
  //     }
  //   })
  // }

  download(){
    var element = document.getElementById('report')!

    html2canvas(element).then((canvas)=>{

      console.log(canvas);

      var imgData = canvas.toDataURL('image/png');

      var doc = new jsPDF();

      var imgHeight = canvas.height *208/canvas.width;

      doc.addImage(imgData,0,0,208,imgHeight);

      doc.save("report.xls");
 
    })

  }
  

}
