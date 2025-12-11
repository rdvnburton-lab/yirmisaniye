import { 
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next) => {
  const token = localStorage.getItem('authToken');

  // Eğer token varsa ve istek /api ile başlıyorsa, header'ı ekle
  if (token && request.url.startsWith('/api')) {
    request = request.clone({
      setHeaders: { 'x-auth-token': token }
    });
  }

  return next(request);
};