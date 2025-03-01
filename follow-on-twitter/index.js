// --------------------------------
//
// Source: https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
// 
// "The introduction to Reactive Programming you've been missing"
// Andrew Staltz

// import * as Rx from 'rxjs';
import { of, map } from 'rxjs';

of(1, 2, 3)
    .pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 1
// value: 4
// value: 9

const requestUrl = "https://api.github.com/users"

// We create a stream with one string element

// let requestStream = Rx.Observable.just(requestUrl)

// We need to subscribe to it

// requestStream.subscribe(function(requestUrl){ 
//     let responseStream = Rx.Observable.create(function (observer) {
//         jQuery.getJSON(requestUrl)
//             .done(function (response) { observer.onNext(response); })
//             .fail(function (jqXHR, status, error) { observer.onError(error) })
//             .always(function () { observer.onCompleted(); })
//     })
    
//     responseStream.subscribe(function (response) { 
//         console.log(Object.getOwnPropertyNames(response))
//     })
// })


// ------------------------------------------------------------------
//
// jQuery / AJAX requires a DOM to run, so without any 
// HTML window / DOM we would need to mock a DOM using something 
// like the package 'jsdom'
// 
// Try Promises and modern fetch instead?

// let requestStream = Rx.of(requestUrl)

// requestStream.subscribe(function (requestUrl) {
//     let responseStream = Rx.Observable.create(function (observer) {
//         fetch(requestUrl)
//             .then(response => observer.onNext(response))
//             .catch(response => observer.onError(response))
//             // .finally( observer.onCompleted())
//     })

//     responseStream.subscribe(function (response) {
//         console.log(Object.getOwnPropertyNames(response))
//     })
// })

//