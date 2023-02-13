import {Observable} from "rxjs";

const obs = new Observable(subscriber => {
    const id = setInterval(() => {
        subscriber.next("testing")
    }, 1000)
    return () => {
        clearInterval(id)
    }
})

const subs = obs.subscribe({
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

setTimeout(()=> {
    subs.unsubscribe()
}, 4000)