import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCommonsModule } from '../my-commons/my-commons.module';
import { TemplatePageComponent } from './template-page/template-page.component';
import { ComboInputComponent } from './template-elements/combo-input/combo-input.component';

import { FormsModule } from '@angular/forms';
import { TemplateElementDirectiveDirective } from './template-element-directive.directive';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TemplateWrapperComponent } from './template-wrapper/template-wrapper.component';
import { RangeInputComponent } from './template-elements/range-input/range-input.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { StringInputComponent } from './template-elements/string-input/string-input.component';

@NgModule({
    imports: [
        CommonModule,
        MyCommonsModule,
        FormsModule,
        BsDropdownModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule
    ],
    entryComponents: [ComboInputComponent, TemplateWrapperComponent, RangeInputComponent, StringInputComponent],
    declarations: [
        TemplatePageComponent,
        ComboInputComponent,
        TemplateElementDirectiveDirective,
        TemplateWrapperComponent,
        RangeInputComponent,
        StringInputComponent,
    ],
    exports: [TemplatePageComponent]
})
export class TemplateCreatorModule {}
