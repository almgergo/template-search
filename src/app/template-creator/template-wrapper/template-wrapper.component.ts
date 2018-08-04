import {
    Component,
    OnInit,
    ViewChild,
    ComponentFactoryResolver,
    Type,
    Input,
    Output,
    EventEmitter,
    ComponentRef
} from '@angular/core';
import { TemplateElementDirectiveDirective } from '../template-element-directive.directive';
import { TemplateElementComponent } from '../template-elements/template-element-component';
import { Subject } from '../../../../node_modules/rxjs';

@Component({
    selector: 'app-template-wrapper',
    templateUrl: './template-wrapper.component.html',
    styleUrls: ['./template-wrapper.component.css']
})
export class TemplateWrapperComponent implements OnInit {
    @ViewChild(TemplateElementDirectiveDirective) adHost: TemplateElementDirectiveDirective;
    refEmitter: Subject<ComponentRef<TemplateWrapperComponent>>;
    templateElement: TemplateElementComponent;
    _ref: ComponentRef<TemplateWrapperComponent>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this.refEmitter = new Subject();
    }

    ngOnInit() {}

    addComponent(componentType: Type<TemplateElementComponent>) {

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        const viewContainerRef = this.adHost.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);

        this.templateElement = componentRef.instance;
    }

    remove() {
        this.refEmitter.next(this._ref);
        this._ref.destroy();
    }
}
