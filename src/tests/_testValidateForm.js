import _test_ from './_test_ENV.js'
import { _validateEmail, _validatePwd } from '../validators/validateForm.js'


const emailTestCases = {
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
        'jeff.commando@.net',
        'jeff@.com'
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
        true,
        false //NOTE yeilds true should be false 
    ]
}


const pwdTestCases = {
    "inputs": [
        '123', 
        '1234', 
        '123abc', 
        '12345678901011121314151617'
    ], 
    "outputs": [
        false, 
        true, 
        true, 
        false 
    ]
}
_test_(_validateEmail, emailTestCases)
_test_(_validatePwd, pwdTestCases)

