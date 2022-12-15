
import { AfterViewInit, Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, finalize, tap } from 'rxjs';
import { MessageSenderService } from 'src/app/services/message-sender.service';
import { getDocument } from 'ssr-window';

import { PlatformChekService } from '../../../../services/platform-check.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContactMeComponent implements OnInit, AfterViewInit, OnDestroy {

  @HostBinding() class = 'contact-me';

  private document = getDocument();

  constructor(
    private formBuilder: FormBuilder,
    private messageSenderSrv: MessageSenderService,
    private platformChekSrv: PlatformChekService,
  ) { }

  public contactForm!: FormGroup;
  public sending: boolean = false;
  public success: boolean = false;
  public error: boolean = false;

  public ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email, , Validators.maxLength(100)]],
      messageBody: [null, [Validators.required, , Validators.maxLength(200)]],
    });
  }

  public submit(): void {
    if (this.platformChekSrv.isBrowser && this.contactForm.valid) {
      this.sending = true;
      this.messageSenderSrv.sendMessage(this.contactForm.value)
        .pipe(
          tap((data) => data.success ? this.success = true : this.error = true),
          delay(2000),
          finalize(() => this.sending = this.success = this.error = false)
        ).subscribe((response) => {
          if (response.success) {
            this.contactForm.reset();
          }
        });
    }
  }

  public ngAfterViewInit(): void {
    if (this.platformChekSrv.isBrowser) {
      //give some time to load
      setTimeout(() => {
        const element = this.document.getElementsByClassName('grecaptcha-badge')[0] as HTMLElement;
        if (element) {
          element.style.visibility = 'visible';
        }
      }, 2000);
    }
  }

  public ngOnDestroy(): void {
    if (this.platformChekSrv.isBrowser) {
      const element = this.document.getElementsByClassName('grecaptcha-badge')[0] as HTMLElement;
      if (element) {
        element.style.visibility = 'hidden';
      }
    }
  }
}
