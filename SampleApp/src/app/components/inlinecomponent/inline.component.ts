import { Component } from '@angular/core';

@Component({
    selector: 'app-inline',
    template: `
    <div>
        <h1>Welcome To Angular 15 Development</h1>
        <h1>{{Message}}</h1>
        <h3>{{Message}}</h3>
    </div>
`,
    styles: [
        'h1{font-weight:bold;font-style:italic;text-decoration:underline;color:blue}',
        'h3{color:red}'
    ]
})
export class InlineComponent {
    Message: string = "This is Inline Angular 15 Component.";
}