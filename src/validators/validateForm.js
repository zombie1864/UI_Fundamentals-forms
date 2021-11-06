export const validateForm = (data) => {
    /**
    @description: validates data from login form 
    @param {data} Object: contains input data from user
    @returns {Object} Object: true/false
    **/
    return {
        containsValidEmail: _validateEmail(data.email), 
        containsValidPwd: _validatePwd(data.pwd)
    }
}


export const _validateEmail = email => {
    /**
    @description: aux function 
    @param {email} String: 
    **/
    if (email.includes(' ')) return false 
    if (!email.includes('@')) return false 
    if (email.length > 50) return false 
    const validEmailExt = ['.com', '.edu', '.net', '.io', '.gov']
    let atSymIdx = email.indexOf('@'),
        firstStrSeg = email.slice(0, atSymIdx), 
        SecondStrSeg = email.slice(atSymIdx + 1), 
        firstdStrSegExList = firstStrSeg.split('.'), 
        secondStrSegExList = SecondStrSeg.split('.') 
    if (firstStrSeg === '') return false
    return !_scan(firstdStrSegExList, validEmailExt) && _scan(secondStrSegExList, validEmailExt) 
}


export const _scan = (listA, listB) => {
    /**
    @description: aux func that checks for common el in listA and listB. Match results in true, no match results in false 
    @param {} 
    **/
    let match = true 
    for (let i = 0; i < listB.length; i++) {
        let validExt = listB[i], 
            breakLoop = false 
        for (let j = 0; j < listA.length; j++) {
            let inputEx = listA[j]
            if (`.${inputEx}` === validExt) breakLoop = true 
            if (j === listA.length - 1 && i === listB.length - 1) match = false 
        }
        if (breakLoop) break 
    }
    return match 
}


export const _validatePwd = pwd => {
    /**
    @description: aux function
    @param {pwd} String 
    **/
   return  pwd.length <= 16 && pwd.length >= 4
}
