// RxJS v6+
import { merge, from, Observable, partition } from 'rxjs';
import { map } from 'rxjs/operators';

type Source = { count?: number, value?: any, name: string }

const data: Source = {
    count: 2,
    name: 'dataSource',
    value: [
        {
            a: 1,
            b: 'a'
        }
    ]
}

const source = from(Object.values(data));

const [count, value]: [Observable<any>, Observable<any>] = partition(source, (res: any) => !Array.isArray(res));

export function main ()
{
    merge(
        count.pipe(map((val: any) => `Count/Name: ${val}`)),
        value.pipe(map((val: any) => `Value: ${val[0].b}`))
    ).subscribe(val => console.log(val));
}
