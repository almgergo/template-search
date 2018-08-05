import { Component, OnInit } from '@angular/core';
import { TemplateElementComponent } from '../template-element-component';
import { StringInput } from './string-input-dto';

@Component({
    selector: 'app-string-input',
    templateUrl: './string-input.component.html',
    styleUrls: ['./string-input.component.css']
})
export class StringInputComponent implements OnInit, TemplateElementComponent {
    value: StringInput;

    constructor() {}

    ngOnInit() {
        this.value = new StringInput();
    }

    getValue() {
        return this.value;
    }
}
