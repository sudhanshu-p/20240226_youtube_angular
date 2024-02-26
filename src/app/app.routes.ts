import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home.component';
import { SubscriptionsComponent } from './subscriptionspage/subscriptions.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "sub", component: SubscriptionsComponent }
];