import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ExamplesComponent } from '../components/examples/examples.component';

export const examplesRoutes: Routes = [
    {
        path: '',
        component: ExamplesComponent,
        children: [
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            examplesRoutes,
        ),
    ],
    exports: [
        RouterModule,
    ],
})
export class AuthRoutingModule {
}