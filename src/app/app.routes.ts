import { Routes } from '@angular/router';
import { HomeComponent } from './pages/homepage/home.component';
import { SubscriptionsComponent } from './pages/subscriptionspage/subscriptions.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "sub", component: SubscriptionsComponent },
    { path: "settings", component: SettingsPageComponent }
];