import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input()
    public hero: Hero;

    @Output()
    public close = new EventEmitter();
    public error: any;
    public navigated = false; // true if navigated here

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const id = +params['id'];
                this.navigated = true;
                this.heroService.getHero(id)
                    .subscribe((hero: Hero) =>
                        this.hero = hero
                    );
            } else {
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    public save(): void {
        this.heroService
            .save(this.hero)
            .subscribe((hero: Hero) => {
                this.hero = hero;
                this.goBack(hero);
            }, (error: any) =>
                this.error = error
            );
    }

    public goBack(savedHero: Hero = null): void {
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    }
}
