import { Service, signal } from '@angular/core';

@Service()
export class ErrorService {
  message = signal<string | null>(null);

  public clearMessage() {
    this.message.set(null);
  }
}
