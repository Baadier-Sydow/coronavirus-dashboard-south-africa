// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';

// import * as https from 'https';
// import * as csvToJson from 'csvtojson';

// const dataHost = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/';
// const confirmedResource = 'covid19za_timeline_confirmed.csv';
// const deathsResource = 'covid19za_timeline_deaths.csv';
// const testingResource = 'covid19za_timeline_testing.csv';
// const transmissionResource = 'covid19za_timeline_transmission_type.csv';
// const travelLocationsResource = 'covid19za_travel_locations_coordinates.csv';
// const publicHospitalResource = 'health_system_za_public_hospitals.csv';
// const publicHospitalContactResource = 'health_system_za_public_hospitals_contacts.csv';
// const publicHospitalExtendedInfoResource = 'health_system_za_public_hospitals_extended_details.csv';

// export const helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });

// export const returnCases = functions.https.onRequest((request, response) => {
//     updateCases().then((data: any) => {
//         csvToJson().fromString(data).then((json)=>{
//             response.send(json);
//         });
//         // response.send(convertCsvToJson(data));
//     }, (error) => {
//         response.send(error);
//     });
// });

// export const updateCases = () => {
//     return new Promise((resolve, reject) => {
//         let data = '';
//         const req = https.get(dataHost + confirmedResource, (res) => {
//             res.on('data', (result) => {
//                 data += result;
//             });
//             res.on('end', () => {
//                 resolve(data);
//             });
//         });
//         req.on('error', (error) => {
//             reject(error)
//         });
//     });
// }

// export const convertCsvToJson = (csv: any) => {
//     csvToJson().fromString(csv).then((json)=>{
//         return json;
//     });
// }

