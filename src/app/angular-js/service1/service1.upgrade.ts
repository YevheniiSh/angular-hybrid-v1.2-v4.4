import { FactoryProvider } from '@angular/core';

const ServiceOneToken = 'service1';

export function serviceOneFactory(i: any) {
  return i.get(ServiceOneToken);
}

export const ServiceOne: FactoryProvider = {
  provide: ServiceOneToken,
  useFactory: serviceOneFactory,
  deps: ['$injector']
};
