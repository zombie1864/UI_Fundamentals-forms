const _test_ = (method, testCases) => { 
    /**
    @description: test against a series of inputs 
    @param {} 
    **/
    let arrOfInputs = testCases.inputs, 
        arrOfOutputs = testCases.outputs, 
        result = null
    console.log('------Test start------');
        arrOfInputs.forEach( input => { 
            result = method(input)
            console.log(input, result); 
        })
    console.log('------Test end------');
}

export default _test_