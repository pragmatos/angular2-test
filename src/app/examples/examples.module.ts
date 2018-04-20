import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './components/examples/examples.component';
import { AuthRoutingModule } from './routing/examples-routing.module';
import { MaterialModule } from '../material/material.module';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [ExamplesComponent, PipesExampleComponent, FormsComponent, TemplateComponent, ReactiveComponent]
})
export class ExamplesModule { }
