import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Injector } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppRoute } from '../../config/constants/app-routes.config';
//import { LoginComponent } from '@app/modules/login/component/login.component';

import { InjectorService } from './injector.service'

describe('InjectorService', () => {
    let service: InjectorService;
    let router: Router
    let injector: Injector;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: InjectorService, useValue: {}}
            ],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([
                    //{path: AppRoute.Empty, component: LoginComponent},
                    //{path: AppRoute.Login, component: LoginComponent}
                ])
            ]
        });
        service = TestBed.inject(InjectorService);
        injector = TestBed.inject(Injector);
    });

    it('should be create', () => {
        expect(service).toBeTruthy();
    });

    it('set Router service', () => {
        InjectorService.setInjector(injector);
        const inj = InjectorService.getInjector();

        router = inj.get(Router);

        expect(router).toBeTruthy();
    });

    it('get Router service', () => {
        InjectorService.setInjector(injector);
        const inj = InjectorService.getInjector();

        router = inj.get(Router);

        expect(router).toBeInstanceOf(Router);
    });

    it('navigate Router service', () => {
        InjectorService.setInjector(injector);
        const inj = InjectorService.getInjector();

        router = inj.get(Router);

        spyOn(router, 'navigate').and.callThrough();
        expect(router.navigate(['/login']));
        expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });
});

