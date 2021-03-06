const assert = require('assert');
const arrayToString = require('../arrayToString');

const TestCases = {
    "1,2,3,4,5,6,7,8": "1-8",

    "1,3,4,5,6,7,8": "1,3-8",

    "1,3,4,5,6,7,8,10,11,12": "1,3-8,10-12",

    "1,2,3": "1-3",

    "1,2": "1,2",

    "1,2,4": "1,2,4",

    "1,2,4,5,6": "1,2,4-6",

    "1,2,3,7,8,9,15,17,19,20,21": "1-3,7-9,15,17,19-21",

    "1,2,3,4,5,6,100,1091,1999,2000,2001,2002": "1-6,100,1091,1999-2002",

    "1": "1",

    "1,3,5,7,9,11": "1,3,5,7,9,11"
};

describe('arrayToString', function() {

    Object.keys(TestCases)
        .forEach(key => {
            const val = TestCases[key];

            it(`[${key}] -->  ${val}`, function(done) {
                arrayToString(key.split(',').map(str => +str))
                    .then(result => {
                        assert.equal(result, val);
                        done();
                    });
            });
        });
});