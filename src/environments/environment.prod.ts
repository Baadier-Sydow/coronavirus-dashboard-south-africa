export const environment = {
  production: true,
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
