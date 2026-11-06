import { Component, inject, input, computed, effect } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { AirlineService } from '../services/airline';
import { Router } from '@angular/router';

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
    name: ['', [Validators.required]],
    type: ['scheduled'],
    fleetSize: ['' as string | number],
    iataCode: ['', [Validators.required, Validators.minLength(2)]],
    callsign: ['', [Validators.required]],
    dateFounded: ['' as string | number],
    countryName: ['', [Validators.required]],
    countryIso2: ['', [Validators.required, Validators.minLength(2)]],
  });

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
