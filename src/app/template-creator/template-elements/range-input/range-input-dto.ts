import { FilterElement } from '../filter-element-base';
import { FilterType } from '../../filter-types.enum';
import { RangeType } from './range-type.enum';

export class RangeInput extends FilterElement {
    filterType = FilterType.RANGE;
    name: string;
    rangeType: RangeType;
}
