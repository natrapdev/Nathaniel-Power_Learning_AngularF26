import { Component, inject, input, computed, effect } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { AirlineService } from '../services/airline';
import { Router } from '@angular/router';
import { airlineNoWhitespaceValidator } from './airline-whitespace-validator';
import { airlineNoNegativesValidator } from './airline-no-negatives-validator';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-airline-form',
  styleUrl: './airline-form.css',
  templateUrl: './airline-form.html',
})
export class AirlineForm {
  private fb = inject(FormBuilder);
  private service = inject(AirlineService);
  private router = inject(Router);

  id = input<string | number>();
  airline = computed(() => this.service.airlineList().find((a) => a.id == this.id()));

  isEditMode = computed(() => !!this.id());

  constructor() {
    effect(() => {
      if (this.airline()) {
        this.airlineForm.patchValue(this.airline()!);
      }
    });
  }

  airlineForm = this.fb.group({
    airline_name: ['', [Validators.required]],
    type: ['scheduled'],
    fleet_size: ['' as string | number],
    iata_code: ['', [Validators.required, Validators.minLength(2)]],
    callsign: ['', [Validators.required]],
    date_founded: ['' as string | number],
    country_name: ['', [Validators.required, airlineNoWhitespaceValidator()]],
    country_iso2: ['', [Validators.required, Validators.minLength(2)]],
  }, {validators: airlineNoNegativesValidator});

  onSubmit() {
    if (this.airlineForm.invalid) return;

    const value = this.airlineForm.getRawValue();
    if (this.isEditMode()) {
      this.service.updateAirline({ id: this.id()!, ...value });
    } else {
      this.service.addAirline({
        id: Date.now(),
        ...value,
      });
    }

    this.airlineForm.reset({ type: 'scheduled' });

    if (this.isEditMode()) this.router.navigate(['airlines/', this.id()]);
  }
}
