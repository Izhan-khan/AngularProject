import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import helper from '../helper';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  authenticationService: any;

  constructor(private router: Router) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let errorMsg = "";
    let bearerToken = "";

    if (sessionStorage.getItem("token") != null) {
      bearerToken = "" + sessionStorage.getItem("token");
      //  console.warn(bearerToken);
    }
    if(sessionStorage.getItem("universityToken") != null){
     bearerToken = "" + sessionStorage.getItem("universityToken");
    }
   
    
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: bearerToken
      }
    })

    return next.handle(jwtToken).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError(
        (
          httpErrorResponse: HttpErrorResponse,
          _: Observable<HttpEvent<any>>
        ) => {
          if (httpErrorResponse.status === HttpStatusCode.Unauthorized) {

            if (httpErrorResponse.url?.substring(0, 32) == `${helper.universityUrl}`) {
              this.router.navigateByUrl("/universityLogin");
            } else {
              this.router.navigateByUrl("/login");
            }
          }
          return throwError(httpErrorResponse);
        }
      )
    );
  }
}
