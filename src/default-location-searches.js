import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-washington-dc',
    predictionPlace: {
      address: 'Washington, DC, USA',
      bounds: new LatLngBounds(
        new LatLng(38.995261, -77.041239),
        new LatLng(38.819308, -77.009520)
      ),
    },
  },
  {
    id: 'default-los-angeles',
    predictionPlace: {
      address: 'Los Angeles, California, USA',
      bounds: new LatLngBounds(
        new LatLng(34.161440999758, -118.121305008073),
        new LatLng(33.9018913203336, -118.521456965901)
      ),
    },
  },
  {
    id: 'default-san-francisco',
    predictionPlace: {
      address: 'San Francisco, California, USA',
      bounds: new LatLngBounds(
        new LatLng(37.8324430069081, -122.354995082683),
        new LatLng(37.6044780500533, -122.517910874663)
      ),
    },
  },
  {
    id: 'default-seattle',
    predictionPlace: {
      address: 'Seattle, Washington, USA',
      bounds: new LatLngBounds(
        new LatLng(47.7779392908564, -122.216605992108),
        new LatLng(47.3403950185547, -122.441233019046)
      ),
    },
  },
  {
    id: 'default-portland',
    predictionPlace: {
      address: 'Portland, Oregon, USA',
      bounds: new LatLngBounds(
        new LatLng(45.858099013046, -122.441059986416),
        new LatLng(45.3794799927623, -122.929215816001)
      ),
    },
  },
];
