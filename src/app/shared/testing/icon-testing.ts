import { EnvironmentProviders, Provider } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAngularSvgIcon } from 'angular-svg-icon';

export const ICON_TEST_PROVIDERS: readonly (Provider | EnvironmentProviders)[] = [
  provideAngularSvgIcon(),
  provideHttpClient(),
  provideHttpClientTesting(),
];
