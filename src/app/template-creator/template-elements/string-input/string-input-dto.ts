import { FilterElement } from '../filter-element-base';
import { FilterType } from '../../filter-types.enum';

export class StringInput extends FilterElement {
    filterType = FilterType.TEXT;
    name: string;
    multipleChoice: boolean;
}
