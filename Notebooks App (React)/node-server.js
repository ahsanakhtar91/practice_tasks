const express = require('express');
const fetch = require('node-fetch');
const app = express();
var cors = require('cors');

app.use(cors());

const clientSecret = 'a324f898d773b8c39f88e53f9099bb940524972a'; //GitHub App Client Secret Key

app.get('/getAccessToken', function (req, res) 
{
    let finalResponse = {};

    fetch('https://github.com/login/oauth/access_token?client_id='+req.query.clientId+'&client_secret='+clientSecret+'&code='+req.query.code, 
        {
            method: "POST", 
            body: {
                "data": ""
            }
        })
    .then(function(response) 
    {
        return response.text();
    })
    .then(function(textResponse) 
    {
        let access_token = textResponse.replace('access_token=','')
        access_token = access_token.substring(0, access_token.indexOf('&'));

        finalResponse.accessToken = access_token;

        return fetch('https://api.github.com/user', {
                                                        method: "GET", 
                                                        headers: {
                                                            'Authorization': 'token ' + access_token
                                                        }
                                                    })
    })
    .then(function(resp) 
    {
        return resp.json();
    })
    .then(jsonResp => 
    {
        finalResponse.user = jsonResp.login;
        finalResponse.name = jsonResp.name;

        console.log('ServerResponse =>', finalResponse);

        res.send(finalResponse);
    })
    .catch(function(err)
    {
        res.send(err);
    });
});


var server = app.listen(8081, function () 
{
   var host = server.address().address;
   var port = server.address().port;
   console.log("Listening at http://%s:%s", host, port);
});