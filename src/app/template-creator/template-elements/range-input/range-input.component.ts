import { Component, OnInit, Input } from '@angular/core';
import { RangeInput } from './range-input-dto';
import { TemplateElementComponent } from '../template-element-component';
import { RangeType } from './range-type.enum';

let nextId = 0;

@Component({
    selector: 'app-range-input',
    templateUrl: './range-input.component.html',
    styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent implements OnInit, TemplateElementComponent {
    @Input() id = nextId++;
    value: RangeInput;
    _rangeTypes: string[] = [];

    get rangeTypes(): string[] {
        if (this._rangeTypes.length === 0) {
            for (const enumValue in RangeType) {
                if (1 === 1) {
                    this._rangeTypes.push(RangeType[enumValue]);
                }
            }
        }

        return this._rangeTypes;
    }
    constructor() {}

    ngOnInit() {
        this.value = new RangeInput();
    }

    getValue() {
        return this.value;
    }
}
