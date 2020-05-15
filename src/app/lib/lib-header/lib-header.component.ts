import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lib-header',
    template: `<h1>{{text}}</h1>`
})

export class LibHeaderComponent implements OnInit {
    @Input() text: string = "This is a dynamic component. Do you believe it?";

    constructor() { }

    ngOnInit() { }
}