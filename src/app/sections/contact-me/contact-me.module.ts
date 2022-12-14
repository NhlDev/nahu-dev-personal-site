import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ContactMeRoutingModule } from './contact-me-routing.module';
import { reCaptchaConfig } from '../../constants/re-captcha-config.const';

@NgModule({
    declarations: [
        ContactMeComponent,
    ],
    imports: [
        CommonModule,
        ContactMeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RecaptchaV3Module,
    ],
    providers: [{
        provide: RECAPTCHA_V3_SITE_KEY,
        useValue: reCaptchaConfig.siteKey,
    }],
})
export class ContactMeModule { }
