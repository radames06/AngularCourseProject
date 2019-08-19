import { Component, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component"
import { ComponentFactoryResolver } from "@angular/core";
import { PlaceholderDirective } from "../shared/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy{
    constructor(
        private authService: AuthService, 
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver
        ) { }

    isLoginMode = true;
    isLoading = false;
    error: string = null;
    @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
    private closeSub: Subscription;

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        } else {
            const email = form.value.email;
            const password = form.value.password;
            this.isLoading = true;

            let authObs: Observable<AuthResponseData>;

            if (this.isLoginMode) {
                authObs = this.authService.login(email, password);
            } else {
                authObs = this.authService.signup(email, password);
            }
            authObs.subscribe(
                resData => {
                    console.log(resData);
                    this.isLoading = false;
                    this.router.navigate(['/recipes']);
                },
                error => {
                    this.error = error;
                    this.showErrorAlert(error);
                    this.isLoading = false;
                }
            )
            form.reset();
        }
    }

    ngOnDestroy() {
        if (this.closeSub) {
            this.closeSub.unsubscribe();
        }
    }

    onHandleError() {
        this.error=null;
    }

    showErrorAlert(error: string) {
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message = error; 
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
}