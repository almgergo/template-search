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
import { trigger, style, state, transition, animate } from '../../../../node_modules/@angular/animations';

@Component({
    selector: 'app-template-wrapper',
    templateUrl: './template-wrapper.component.html',
    styleUrls: ['./template-wrapper.component.css'],
    animations: [
        trigger('openClose', [
            state(
                'true',
                style({
                    height: '*',
                    marginTop: '*',
                    marginBottom: '*',
                    paddingTop: '*',
                    paddingBottom: '*',
                    opacity: '*'
                })
            ),
            state(
                'false',
                style({
                    height: '0px',
                    marginTop: '0px',
                    marginBottom: '0px',
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    opacity: 0,
                    display: 'none'
                })
            ),
            transition('false <=> true', animate(350))
        ])
    ]
})
export class TemplateWrapperComponent implements OnInit {
    hideBody: boolean;

    @ViewChild(TemplateElementDirectiveDirective) adHost: TemplateElementDirectiveDirective;
    refEmitter: Subject<ComponentRef<TemplateWrapperComponent>>;
    templateElement: TemplateElementComponent;
    _ref: ComponentRef<TemplateWrapperComponent>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this.refEmitter = new Subject();
    }

    ngOnInit() {
        this.hideBody = false;
    }

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
