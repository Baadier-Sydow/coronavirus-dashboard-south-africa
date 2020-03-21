// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    local: {
      url: 'https://covid-za-api.herokuapp.com/',
      confirmed: 'cases/confirmed',
    },
    international: {
      url: 'https://api.covid19api.com/'
    },
    origin: {
      url: 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/',
      confirmed: 'covid19za_timeline_confirmed.csv',
      transmission: 'covid19za_timeline_transmission_type.csv',
      testing: 'covid19za_timeline_testing.csv',
      deaths: 'covid19za_timeline_deaths.csv'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
