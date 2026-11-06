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

  airlineForm = this.fb.group({
    name: ['', [Validators.required]],
    type: ['scheduled'],
    fleetSize: [''],
    iataCode: ['', [Validators.required, Validators.minLength(3)]],
    callsign: ['', [Validators.required]],
    dateFounded: [''],
    countryName: ['', [Validators.required]],
    countryIso2: ['', [Validators.required, Validators.minLength(2)]],
  });

  onSubmit() {
    if (this.airlineForm.invalid) return;

    const value = this.airlineForm.getRawValue();

    this.service.addAirline({
      id: Date.now(),
      ...value,
    });

    this.airlineForm.reset({ type: 'scheduled' });
  }
}
