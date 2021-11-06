import _test_ from './_test_ENV.js'
import {_validateEmail} from '../validators/validateForm.js'


const testCases = {
    "inputs": [
        '',
        ' ',
        'jeff',
        'jeff.com',
        'jeff@.com', 
        '@.com',
        'jeff@ .com', 
        'jeff@.cuny.edu',
        'jeff@.comz',
        'jeff.io@.com',
        'jeff.commando@.net'
    ], 
    "outputs": [
        false, 
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        true
    ]
}

_test_(_validateEmail, testCases)

