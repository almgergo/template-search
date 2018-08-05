import { FilterElement } from '../template-elements/filter-element-base';

export class TemplateDto {
    templateName: string;
    filters: FilterElement[];

    constructor() {
        this.filters = [];
    }
}
