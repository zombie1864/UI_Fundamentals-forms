export const POSTdata = async (dataToSubmit) => {
    /**
    @description: Performs HTTP POST req and awaits resp from server
    @param {dataToSubmit} Object
    **/
    const httpReq = await fetch(
        'http://dev.rapptrlabs.com/Tests/scripts/user-login.php', 
        {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json',
                'access-token': '',
                'Access-Control-Allow-Origin': '*',
            }, 
            body: JSON.stringify(dataToSubmit)
        }
    )
    const httpResp = await httpReq.json()
    return httpResp
}

// test@rapptrlabs.com