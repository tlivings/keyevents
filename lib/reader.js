
import Assert from 'assert';
import {Observable} from 'rx';

class Reader extends Observable {
    constructor(thing = {}) {
        super();
        this._subscribe = observer => {
            if (isObject(thing)) {
                for (let [key, value] of elements(thing)) {
                    observer.onNext({key, value});
                }
            }
            else if (Array.isArray(thing)) {
                for (let i = 0; i < thing.length; i++) {
                    observer.onNext({key: i, value: thing[i]});
                }
            }
            else {
                observer.onError(new Error('Object or Array required for reading.'));
            }

            observer.onCompleted();
        };
    }
}

class ObjectObservable extends Observable {
    constructor() {
        super();
        this._subscribe = observer => {
            for (let [key, value] of elements(thing)) {
                observer.onNext({key, value});
            }

            observer.onCompleted();
        }
    }
}

class ArrayObservable extends Observable {
    constructor() {
        super();
        this._subscribe = observer => {
            for (let i = 0; i < thing.length; i++) {
                observer.onNext({key: i, value: thing[i]});
            }

            observer.onCompleted();
        }
    }
}

const elements = function* (obj = {}) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
};

const isObject = (thing) => {
    return Object.prototype.toString.call(thing) === '[object Object]';
};

export {Reader as default, elements, isObject};
