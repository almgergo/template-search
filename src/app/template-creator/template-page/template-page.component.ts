import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, Type, ComponentRef } from '@angular/core';
import { TemplateElementComponent } from '../template-elements/template-element-component';
import { TemplateElementDirectiveDirective } from '../template-element-directive.directive';
import { ComboInputComponent } from '../template-elements/combo-input/combo-input.component';
import { TemplateWrapperComponent } from '../template-wrapper/template-wrapper.component';
import { FilterType } from '../filter-types.enum';
import { RangeInputComponent } from '../template-elements/range-input/range-input.component';

@Component({
    selector: 'app-template-page',
    templateUrl: './template-page.component.html',
    styleUrls: ['./template-page.component.css']
})
export class TemplatePageComponent implements OnInit {
    filterTypes: { component: Type<TemplateElementComponent>; name: string }[];
    filterWrappers: ComponentRef<TemplateWrapperComponent>[];

    @ViewChild(TemplateElementDirectiveDirective) adHost: TemplateElementDirectiveDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this.filterWrappers = [];
        this.filterTypes = [
            { component: ComboInputComponent, name: FilterType.COMBO },
            { component: RangeInputComponent, name: FilterType.RANGE }
        ];
        this.addComponent(RangeInputComponent);
        this.addComponent(ComboInputComponent);
    }

    addComponent(componentType: Type<TemplateElementComponent>) {
        // Create wrapper component
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TemplateWrapperComponent);
        const viewContainerRef = this.adHost.viewContainerRef;
        const templateWrapperRef = viewContainerRef.createComponent(componentFactory);

        // Create filter component in wrapper
        templateWrapperRef.instance._ref = templateWrapperRef;
        templateWrapperRef.instance.addComponent(componentType);
        templateWrapperRef.instance.refEmitter.subscribe(ref => {
            this.filterWrappers.splice(this.filterWrappers.indexOf(ref), 1);
            console.log(this.filterWrappers);
        });

        this.filterWrappers.push(templateWrapperRef);
    }

    destroyComponent(componentRef: ComponentRef<TemplateWrapperComponent>) {
        componentRef.destroy();
    }

    printValues() {
        this.filterWrappers.forEach(f => console.log(f.instance.templateElement.getValue()));
    }
}
