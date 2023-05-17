import { Component } from '@angular/core';

@Component({
    selector: 'app-inline',
    template: `
    <div class=roundercornerswithborder>
        <h1>{{Message}}</h1>
        <h3>{{Message}}</h3>
    </div>
`,
    styles: [
        'h1{font-weight:bold;color:rgb(2, 78, 158)}',
        'h3{color:rgb(195, 79, 2)}'
    ]
})
export class InlineComponent {
    Message: string = "This is Inline Component.";
}