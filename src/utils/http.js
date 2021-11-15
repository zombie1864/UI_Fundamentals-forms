export const POSTdata = async (dataToSubmit) => {
    /**
    @description: Performs HTTP POST req and awaits resp from server
    @param {dataToSubmit} Object
    **/
    const httpReq = await fetch(
        'http://127.0.0.1:5000', 
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

