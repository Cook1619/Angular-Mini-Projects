import {Observable} from "rxjs";

const obs = new Observable(subscriber => {
    subscriber.next('Hello world')
    subscriber.error('Error!!!!')
    subscriber.next("test")

    subscriber.complete()
})

obs.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('complete called')
    },
    error: (err) => {
        console.error(err)
    }
})