import { Service, signal, computed } from '@angular/core';

@Service()
export class LoadingService {
  private count = signal(0);

  readonly isLoading = computed(() => this.count() > 0);

  increase() {
    this.count.update(c => c++);
  }

  decrease() {
    this.count.update(c => c--);
  }
}
