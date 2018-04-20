import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'examples',
        pathMatch: 'full'
    },
    {
        path: 'examples',
        loadChildren: 'app/examples/examples.module#ExamplesModule',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        ),
    ],
    exports: [
        RouterModule,
    ],
})
export class RoutingModule {
}