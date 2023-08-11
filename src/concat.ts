import { of, Observable } from 'rxjs';
import { delay, first, map, switchMap, concatMap } from 'rxjs/operators';

export class Concat {
    webSocket = (url: any): Observable<string> => {
        return of('[WEBSOCKET] processed url => ' + url);
    };
    getUrl: Observable<string> = of('wss://url', 'not a valid url').pipe(
        delay(2000)
    );
    /**
     *
     */
    constructor() {
        // this.webSocket;
    }
    load() {
        const flux: Observable<boolean> = this.getUrl
            .pipe(
                concatMap(url => this.webSocket(url).pipe(
                    map(url => url.indexOf('wss') !== -1)
                ))
            );
        return flux;
    }
    load2() {
        const flux: Observable<boolean> = this.getUrl.pipe(first())
            .pipe(
                switchMap(url => this.webSocket(url).pipe(
                    map(url => url.indexOf('wss') !== -1)
                ))
            );
        return flux;
    }
}