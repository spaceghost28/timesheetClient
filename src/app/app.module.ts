import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';

import { ProjectService } from './_services/project.service';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth-guard.service';
import { RegisterComponent } from './login/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponentComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        ProjectService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
