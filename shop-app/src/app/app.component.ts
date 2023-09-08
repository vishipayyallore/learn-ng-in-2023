import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'sv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
    title = 'Shop Application';

    ngOnDestroy(): void { }
}
