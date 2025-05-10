import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import 'jest-fetch-mock';
require('jest-fetch-mock').enableMocks();

setupZoneTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});
