import { InjectionToken } from '@angular/core';

export interface AppConfig {
    title: string;
    version: number;
};

export const appSettings: AppConfig = {
    title: 'Shop Application',
    version: 1.0
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
