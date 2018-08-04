import { FilterType } from '../../filter-types.enum';
import { FilterElement } from '../filter-element-base';

export class ComboInput extends FilterElement {
    filterType = FilterType.COMBO;
    name: string;
    values: ComboElement[];

    id = 0;

    constructor() {
        super();
        this.values = [];
    }

    addValue(value: string) {
        this.values.push(new ComboElement(this.id++, value, this.values.length + 1));
    }

    removeElement(value: ComboElement) {
        this.values.splice(this.values.indexOf(value), 1);
        this.values.forEach((v, index) => (v.order = index + 1));
    }
}

export class ComboElement {
    id: number;
    value: string;
    order: number;

    constructor(id: number, value: string, order: number) {
        this.id = id;
        this.value = value;
        this.order = order;
    }
}
