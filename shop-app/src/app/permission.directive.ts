import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef,
    OnInit,
} from '@angular/core';

@Directive({
    selector: '[svPermission]',
})
export class PermissionDirective implements OnInit {
    @Input() svPermission: string[] = [];
    private currentRole = 'agent';
    constructor(
        private tmplRef: TemplateRef<any>,
        private vc: ViewContainerRef
    ) {}
    ngOnInit(): void {
        if (this.svPermission.indexOf(this.currentRole) === -1) {
            this.vc.clear();
        } else {
            this.vc.createEmbeddedView(this.tmplRef);
        }
    }
}
