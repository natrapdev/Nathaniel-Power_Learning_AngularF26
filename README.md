# NathanielPowerLearningAngularF26

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## API: Aviation Stack
[Documentation](https://docs.apilayer.com/aviationstack/docs/aviationstack-api-v-1-0-0?utm_source=AviationstackHomePage&utm_medium=Referral#/API%20Endpoints/getAirlines)

Example request URL: https://api.aviationstack.com/v1/flights?access_key=123

## Lazy Loading
### Before:
```
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-53SDLNDN.js    | main          | 346.52 kB |                90.27 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 346.52 kB |                90.27 kB
```
### After:
```
Initial chunk files | Names         |  Raw size | Estimated transfer size
chunk-PWCMI5YW.js   | -             | 284.09 kB |                77.89 kB
main-OG5U3YRK.js    | main          |   7.63 kB |                 2.39 kB
chunk-EXFWD75L.js   | -             | 301 bytes |               301 bytes
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 292.02 kB |                80.58 kB
                    
Lazy chunk files    | Names         |  Raw size | Estimated transfer size
chunk-W6BX6PSI.js   | flight-form   |  53.29 kB |                11.34 kB
chunk-5QF7BADM.js   | flight-detail |   2.87 kB |                 1.12 kB
```
All secondary route components utilize loadComponent so they are split into separate chunks.


## Lifecycle
When reading `this.id()` in the constructor, it threw an input required error since signal inputs are not available in constructors.
Navigating away from the flight detail page calls `ngOnDestroy`, destroying the component instance when you leave its route.
