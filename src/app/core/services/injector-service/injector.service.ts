import { Injector } from '@angular/core';

export class InjectorService {
    private static injector: Injector;

    static setInjector(injector: Injector) {
        this.injector = injector;
    }

    static getInjector(): Injector {
        return InjectorService.injector;
    }
}

