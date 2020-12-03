import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectivesModule } from './directives/directives.module';
import { Baitap6Module } from './baitap6/baitap6.module';
import { CommunicationModule } from './communication/communication.module';
import { Baitap8Module } from './baitap8/baitap8.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/Interceptors/auth.interceptor';
import { AdminGuard } from './core/guards/admin.guard';

const router: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
  // {path: '*', component: NotFound}
];
@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(router),
    AuthenticationModule,
    // HomeModule,
    BrowserModule,
    Baitap1Module,
    Baitap2Module,
    DataBindingModule,
    DirectivesModule,
    Baitap6Module,
    CommunicationModule,
    Baitap8Module,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
