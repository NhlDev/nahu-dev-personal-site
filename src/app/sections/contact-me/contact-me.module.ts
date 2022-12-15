import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ContactMeRoutingModule } from './contact-me-routing.module';
import { SeparatorModule } from '../../components/separator/separator.module';
import { MessageSenderService } from '../../services/message-sender.service';

import { PRIVATE_KEYS } from 'secrets-keys.const';

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
        SeparatorModule
    ],
    providers: [{
        provide: RECAPTCHA_V3_SITE_KEY,
        useValue: PRIVATE_KEYS.RECAPTCHA_SITE_KEY,
    }, MessageSenderService],
})
export class ContactMeModule { }
