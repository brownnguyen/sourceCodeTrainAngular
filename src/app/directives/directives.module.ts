import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
@NgModule({
  declarations: [DirectivesComponent, ButtonComponent],
  imports: [CommonModule, FormsModule],
  exports: [DirectivesComponent],
})
export class DirectivesModule {}
