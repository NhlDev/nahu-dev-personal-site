import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { catchError, mergeMap, Observable, of } from 'rxjs';

@Injectable()
export class MessageSenderService {

  constructor(
    private captchaV3Service: ReCaptchaV3Service,
    private http: HttpClient
  ) { }

  public sendMessage(request: sendMessageRequest): Observable<{ success: boolean, message: string }> {
    return this.captchaV3Service.execute("sendMessage")
      .pipe(
        mergeMap((token: string) => this.http.post<sendMessageResponse>('api/send-message', Object.assign(request, { 'g-recaptcha-response': token }))),
        catchError((err: sendMessageResponse) => of({ success: false, message: '' })),
      );
  }
}


export interface sendMessageRequest {
  name: string;
  email: string;
  messageBody: string;
  'g-recaptcha-response'?: string
}

export interface sendMessageResponse {
  success: boolean; message: string;
}
