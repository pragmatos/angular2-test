import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule
} from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTooltipModule,
        MatTabsModule
    ],
    exports: [
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTooltipModule,
        MatTabsModule
    ],
})
export class MaterialModule {
}