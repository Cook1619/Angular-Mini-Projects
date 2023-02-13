import {timer, fromEvent, of, from} from "rxjs";
import {map, pluck} from 'rxjs/operators'

// Example of the different operators by rxjs

// const observable = timer(0,1000);

const observable = fromEvent(document, 'keydown').pipe(pluck('code'))

// const observable = of(1,2,3,4,5).pipe(map((value) => `$${value}`))

// From is better with complex objects
// const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));

const subs = observable.subscribe({
    next(value){
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
})
