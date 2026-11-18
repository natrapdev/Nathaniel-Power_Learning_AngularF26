import { Component, inject, input, computed, effect, viewChild, ElementRef, afterNextRender } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { FlightService } from '../services/flight';
import { Router } from '@angular/router';
import { noWhitespaceValidator } from './flight-whitespace-validator';
import { flightDateValidator } from './flight-date-validator';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-flight-form',
  styleUrl: './flight-form.css',
  templateUrl: './flight-form.html',
})
export class FlightForm {
  private fb = inject(FormBuilder);
  private service = inject(FlightService);
  private router = inject(Router);

  id = input<string | number>();
  flight = computed(() => this.service.flightList().find((a) => a.id == this.id()));

  isEditMode = computed(() => !!this.id());

  firstField = viewChild<ElementRef>('firstField');

  constructor() {
    // This belongs in afterNextRender because element is not accessible during component initialization until it is rendered.
    afterNextRender(() => {
      this.firstField()?.nativeElement.focus();
    });

    effect(() => {
      const currentFlight = this.flight();
      if (currentFlight) {
        const flightValues = {
          ...currentFlight,
          flight_date: currentFlight.flight_date ? currentFlight.flight_date.substring(0, 10) : '',

          departure: {
            ...currentFlight.departure,
            scheduled: currentFlight.departure?.scheduled
              ? currentFlight.departure.scheduled.substring(0, 16)
              : '',
          },
          arrival: {
            ...currentFlight.arrival,
            scheduled: currentFlight.arrival?.scheduled
              ? currentFlight.arrival.scheduled.substring(0, 16)
              : '',
          },
        };

        this.flightForm.patchValue(flightValues);
      }
    });
  }

  flightForm = this.fb.group(
    {
      flight_date: ['', [Validators.required]],
      flight_status: ['scheduled', [Validators.required]],
      airline: this.fb.group({
        name: ['', [Validators.required, noWhitespaceValidator()]],
        iata: ['', [Validators.required, Validators.minLength(2)]],
      }),
      flight: this.fb.group({
        number: ['', [Validators.required]],
        iata: ['', [Validators.required, Validators.minLength(2)]],
      }),
      departure: this.fb.group({
        airport: ['', [Validators.required]],
        iata: ['', [Validators.required, Validators.minLength(2)]],
        scheduled: ['', [Validators.required]],
      }),
      arrival: this.fb.group({
        airport: ['', [Validators.required]],
        iata: ['', [Validators.required, Validators.minLength(2)]],
        scheduled: ['', [Validators.required]],
      }),
    },
    { validators: flightDateValidator },
  );

  onSubmit() {
    if (this.flightForm.invalid) return;

    const value = this.flightForm.getRawValue();
    if (this.isEditMode()) {
      this.service.updateFlight({ id: this.id()!, ...value });
    } else {
      this.service.addFlight({
        id: Date.now(),
        ...value,
      });
    }

    this.flightForm.reset();

    if (this.isEditMode()) this.router.navigate(['flights/', this.id()]);
  }
}
