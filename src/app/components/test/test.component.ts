import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @ViewChild('test', { static: false }) el!: ElementRef;
  dynamicValue = '';
  constructor() {}

  ngOnInit(): void {}

  runPDF() {
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(this.el.nativeElement, {
      callback: (pdf) => {
        doc.save('test.pdf');
      },
    });
  }
}
