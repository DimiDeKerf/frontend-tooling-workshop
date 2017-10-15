import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';  // URL to web api

    constructor(private http: Http) { }

    getHeroes(): Observable<Array<Hero>> {
        return this.http
            .get(this.heroesUrl)
            .map((response) => {
                return response.json() as Hero[];
            });
    }

    getHero(id: number): Observable<Hero> {
        return this.getHeroes()
            .map(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    save(hero: Hero): Observable<Hero> {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }

    delete(hero: Hero): Observable<Response> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .delete(url, { headers: headers });
    }

    // Add new Hero
    private post(hero: Hero): Observable<Hero> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .map(res => res.json());
    }

    // Update existing Hero
    private put(hero: Hero): Observable<Hero> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .map(() => hero);
    }

}
