import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ParagraphComponent } from 'src/app/component/paragraph/paragraph.component';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component implements OnInit, AfterViewInit {
  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  public placeholder!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {}
  genP() {
    this.placeholder.createComponent(ParagraphComponent);
  }
  remP() {
    this.placeholder.remove();
  }
  genHead() {}

  ngAfterViewInit(): void {}
}
