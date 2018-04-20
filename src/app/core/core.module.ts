import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [AppToolbarComponent],
    exports: [AppToolbarComponent]
})
export class CoreModule {
}