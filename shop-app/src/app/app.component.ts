import { Component, OnDestroy, Inject } from '@angular/core';
import { APP_CONFIG, appSettings, AppConfig } from './app.config';

@Component({
    selector: 'sv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [{ provide: APP_CONFIG, useValue: appSettings }],
})
export class AppComponent implements OnDestroy {
    title = 'Shop Application';

    constructor(@Inject(APP_CONFIG) config: AppConfig) { }

    ngOnDestroy(): void { }
}
