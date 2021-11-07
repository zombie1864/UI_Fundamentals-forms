export const POSTdata = async (dataToSubmit) => {
    console.log(dataToSubmit);
    const httpReq = fetch(
        'http://dev.rapptrlabs.com/Tests/scripts/user-login.php', 
        {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Origin': '*',
            }, 
            body: JSON.stringify(dataToSubmit)
        }
    )
    const httpResp = await httpReq.json()
    console.log(httpResp);
}

// test@rapptrlabs.com