import { Router } from '@angular/router';

import { InjectorService } from '../services/injector-service/injector.service';

export class Navigator {

    /**
     * @description Navigation method to basic route. The method concat slash plus route and returns
     * path to navigate. For example '/login'
     * 
     * @param {string} _route path to navigate
     * 
     * @returns void
     */
    static navigate(_route: string): void {
        this.getRouterInstance().navigate([_route]);
    }

    private static getRouterInstance(): Router {
        const injector = InjectorService.getInjector();

        return injector.get(Router);
    }
}
