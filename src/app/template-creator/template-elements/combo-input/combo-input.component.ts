import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ComboInput, ComboElement } from './combo-input-dto';
import { TemplateElementComponent } from '../template-element-component';

@Component({
    selector: 'app-combo-input',
    templateUrl: './combo-input.component.html',
    styleUrls: ['./combo-input.component.css']
})
export class ComboInputComponent implements OnInit, TemplateElementComponent {
    value: ComboInput;
    draggedValue: ComboElement;

    @ViewChild('newValueInput') valueInput: ElementRef;

    constructor() {}

    ngOnInit() {
        this.value = new ComboInput();
    }

    getValue(): ComboInput {
        return this.value;
    }

    addNewValue(newValueInput) {
        if (newValueInput.value !== '') {
            this.value.addValue(newValueInput.value);
            newValueInput.value = '';
        }

        this.valueInput.nativeElement.focus();
    }

    removeElement(element: ComboElement) {
        this.value.removeElement(element);
    }

    dragstart(event, comboElement) {
        this.draggedValue = comboElement;
    }

    dragover(event, comboElement) {
        if (this.draggedValue !== comboElement) {
            this.switchPlaces(this.draggedValue, comboElement);
        }
    }

    switchPlaces(draggedValue: ComboElement, comboElement: ComboElement) {
        const sourceIndex = this.value.values.indexOf(draggedValue);
        const targetIndex = this.value.values.indexOf(comboElement);
        // console.log(sourceIndex, targetIndex);

        this.value.values[sourceIndex].order = this.value.values[targetIndex].order;
        if (sourceIndex > targetIndex) {
            for (let i = targetIndex; i < sourceIndex; i++) {
                this.value.values[i].order += 1;
            }
        } else if (sourceIndex < targetIndex) {
            for (let i = sourceIndex + 1; i <= targetIndex; i++) {
                this.value.values[i].order -= 1;
            }
        }

        this.sortInputElements();
    }

    private sortInputElements() {
        this.value.values.sort((c1, c2) => {
            if (c1.order > c2.order) {
                return 1;
            } else if (c1.order <= c2.order) {
                return -1;
            }
        });
    }
}
