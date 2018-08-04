import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appTemplateElementDirective]'
})
export class TemplateElementDirectiveDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
