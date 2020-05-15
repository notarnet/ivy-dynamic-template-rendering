import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-button',
    template: '<button (click)="onClick($event)">{{text}}</button>'
})

export class LibButtonComponent implements OnInit {
    
    @Input() text: string;
    @Output() clicked = new EventEmitter();
    
    constructor() { }
    
    ngOnInit() { }

    onClick(event) {
        this.clicked.emit(event);
    }
}