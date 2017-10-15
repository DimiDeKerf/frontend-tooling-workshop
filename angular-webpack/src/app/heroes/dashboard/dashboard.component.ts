import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    public ngOnInit(): void {
        this.heroService.getHeroes()
            .subscribe((heroes: Hero[]) => {
                if (typeof heroes !== 'undefined') {
                    this.heroes = heroes.slice(1, 5);
                }
            });
    }

    public gotoDetail(hero: Hero): void {
        const link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
