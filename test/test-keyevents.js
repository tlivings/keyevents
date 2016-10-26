'use strict';



import Test from 'tape';
import Keyevents from '../dist/lib';

Test('test keyevents', t => {

    t.test('stream', t => {
        t.plan(6);

        const stream = Keyevents({ a: 'A', b: { c : 'C', d: { e: 'E'}}, f: ['G', 'H', 'I']});

        stream.subscribe(
            x => {
                t.ok(x, 'data is not null.');
            }
        );
    });

    t.test('filter', t => {
        t.plan(1);

        const stream = Keyevents({ a: 'A', b: { c : 'C', d: { e: 'E'}}, f: ['G', 'H', 'I']});

        stream
        .filter(x => x.path === 'b.c' || x.path === 'b.d.e')
        .select(x => x.value)
        .toArray()
        .subscribe(
            x => {
                t.ok(x, 'data is not null.');
            }
        );
    });

});
