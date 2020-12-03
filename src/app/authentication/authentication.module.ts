import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeactiveGuardGuard } from '../core/guards/deactive-guard.guard';

const router: Routes = [
  { path: 'signin', component: SigninComponent },
  {
    path: 'signup',
    component: SignupComponent,
    canDeactivate: [DeactiveGuardGuard],
  },
];

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
  ],
})
export class AuthenticationModule {}
