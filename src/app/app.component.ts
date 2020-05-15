import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DynamicComponentService } from './dynamic-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild('dynamicHost') dynamicHost;
  
  title = 'ivy-dynamic-template-rendering';


  constructor(private dynamicService: DynamicComponentService) {}
  
  ngAfterViewInit() {
    this.dynamicService.renderComponent(`
    <lib-header #hh></lib-header>
    <lib-button (clicked)="hh.text='Really!! Is Ivy 🍃 dynamic component'" [text]="Push me to discover"></lib-button>`,
    this.dynamicHost)
  }
}
