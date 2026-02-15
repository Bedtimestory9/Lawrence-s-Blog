---
id: 1
title: 'Promise.allSettled() and its async await syntax'
author: 'Lawrence Su'
date: "2026-01-05"
slug: "promise_allsettled()_and_its_async_await_syntax"
thumbnail: "./tech_images/1_thumbnail.png"
---

# Promise.allSettled() and its async await syntax

## What is Promise.allSettled()?

`Promise.allSettled()` returns an array of object that describe the outcome of each promise, unlike `Promise.all()` that rejects on any rejected promise, it will always settle all the promises.

## How to get the value of each resolved promise?

The MDN <abbr title="MDN doc"><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled' target='_blank' rel='noopener noreferer'>doc</a></abbr> has introduced us a way to get the status of each promise. However, to get the value of each resolved promise as well as writing it in async await syntax, we can start by constructing 3 mocked promises:

```js
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo"),
);
const promise3 = Promise.resolve(3);

const promises = [promise1, promise2, promise3];
```

Then we can resolve the promises:

```js
void async function() {
    const settledPromises = await Promise.allSettled(promises)
    const resolvedPromises = settledPromises
        .filter((p) => p.status === 'fulfilled')
        .map(p => p.value)
    const rejectedPromises = settledPromises
        .filter((p) => p.status === 'rejected')
        .map(p => p.reason)

    console.log("resolve: ", resolvedPromises, "rejects: ", rejectedPromises)
    // Expected output:
    // "resolve: [1, 3], reject: ['foo']"
}()
```

The fulfilled promise will have `value` available, and the `rejected` promise will return its `reason`.
