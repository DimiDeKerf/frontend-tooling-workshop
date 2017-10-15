import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';
import { Response } from '@angular/http';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    public heroes: Hero[];
    public selectedHero: Hero;
    public addingHero = false;
    public error: any;
    public showNgFor = false;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    public getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes: Hero[]) => {
                this.heroes = heroes;
            }, (error: any) => {
                this.error = error;
            }
            );
    }

    public addHero(): void {
        this.addingHero = true;
        this.selectedHero = null;
    }

    public close(savedHero: Hero): void {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    }

    public deleteHero(hero: Hero, event: any): void {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .subscribe((res: Response) => {
                this.heroes = this.heroes.filter((h: Hero) => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            }, (error: any) =>
                this.error = error
            );
    }

    public ngOnInit(): void {
        this.getHeroes();
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.addingHero = false;
    }

    public gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
