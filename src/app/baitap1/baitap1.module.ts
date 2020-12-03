import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { Baitap1Component } from './baitap1.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    Baitap1Component,
  ],
  imports: [CommonModule],
  exports: [Baitap1Component],
})
export class Baitap1Module {}
