
import Reader from './reader';
import {isObject as IsObject} from './reader';
import {Observable} from 'rx';

const keyevents = (obj) => {
    return spread(new Reader(obj));
};

const spread = (observable, name) => {
    return observable.flatMap(
        x => {
            const path = name ? `${name}.${x.key}` : x.key;

            if (IsObject(x.value) || Array.isArray(x.value)) {
                return spread(new Reader(x.value), path);
            }

            return Observable.return({path, value: x.value});
        }
    );
};

export {keyevents as default, spread};
