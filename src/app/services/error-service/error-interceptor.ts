import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {ErrorService} from './error-service';
import {inject} from '@angular/core';
import {catchError, throwError} from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      errorService.message.set("An error has occurred.");
      if (error.status === 0) {
        errorService.message.set('Network error or request blocked by browser.');
      } else if (error.status === 404) {
        errorService.message.set('404 Not found.');
      } else if (error.status >= 500) {
        errorService.message.set('500+ Server error.');
      }

      return throwError(() => error);
    })
  );
};
