import { Component, inject, input, OnInit, computed } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { AirlineService } from '../services/airline';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-airline-form',
  styleUrl: './airline-form.css',
  templateUrl: './airline-form.html',
})
export class AirlineForm {
  private fb = inject(FormBuilder);
  private service = inject(AirlineService);
  id = input<string>();

  isEditMode = computed(() => !!this.id());

  airlineForm = this.fb.group({
    name: ['', [Validators.required]],
    iataCode: ['', [Validators.required, Validators.minLength(3)]],
  });

  onSubmit(): void {
    if (this.airlineForm.invalid) return;

    const value = this.airlineForm.getRawValue();
    this.airlineForm.reset();
  }

  ngOnInit() {
    if (this.id()) {
      const airline = this.service.getAirlineById(this.id());
      if (airline) {
        this.airlineForm.pathValue(airline);
      }
    }
  }
}
