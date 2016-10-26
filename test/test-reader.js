'use strict';



import Test from 'tape';
import Reader from '../dist/lib/reader';

Test('test reader', t => {

    t.test('stream', t => {
        const stream = new Reader({ a: 'A', b: 'B', c: 'C'});

        stream.doOnCompleted(t.end).subscribe(
            x => {
                t.ok(x, 'data is not null.');
                t.ok(x.key, 'key exists.');
                t.ok(x.value, 'value exists.');
            }
        );
    });

});
