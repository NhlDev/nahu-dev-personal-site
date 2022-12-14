import { AfterViewInit, Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContactMeComponent implements OnInit, AfterViewInit, OnDestroy {

  @HostBinding() class = 'contact-me';

  constructor(private formBuilder: FormBuilder, private captchaV3Service: ReCaptchaV3Service) { }

  public contactForm!: FormGroup

  public ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80)]],
      eMail: ['', [Validators.required, Validators.email, , Validators.maxLength(100)]],
      message: ['', [Validators.required, , Validators.maxLength(200)]],
    });
  }

  public submit(): void {
    this.captchaV3Service.execute("SendMail").subscribe((response) => {
      console.log(response)
    })

  }

  public ngAfterViewInit(): void {
    //give some time to load
    setTimeout(() => {
      const element = document.getElementsByClassName('grecaptcha-badge')[0] as HTMLElement;
      if (element) {
        element.style.visibility = 'visible';
      }
    }, 2000);
  }


  public ngOnDestroy(): void {
    const element = document.getElementsByClassName('grecaptcha-badge')[0] as HTMLElement;
    if (element) {
      element.style.visibility = 'hidden';
    }
  }
}
