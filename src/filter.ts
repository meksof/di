import { from } from "rxjs";
import { filter } from "rxjs/operators";

const src = [1, undefined, null, "test", 4];

export const myFilter = () => {
    return from(src)
        .pipe(
            filter((x: any) => !!x)
        )
}