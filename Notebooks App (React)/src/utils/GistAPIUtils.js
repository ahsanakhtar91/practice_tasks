import AppConstants from '../constants/AppConstants';

export default {
    getAccessToken: function(code, successCallback, errorCallback) 
    {
        fetch(
            AppConstants.GITHUB_TOKEN_URL+'?code=' + code + '&clientId=' + AppConstants.clientId,
            {
              method: "GET"
            })
        .then(function(response) 
        {
            return response.text();
        })
        .then(textResponse => 
        {
            if(successCallback)
                successCallback(textResponse);
        })
        .catch(err => 
        {
            (errorCallback) ? errorCallback(err) : console.log('err_access_token ==> ', err);
        });
    },


    getAllNotebooks(successCallback, errorCallback)
    {
        fetch(
            AppConstants.GITHUB_GISTS_URL,
            {
              method: "GET",
              cache: "no-store",
              headers: 
              {
                "Authorization" : "token " + localStorage.accessToken
              }
            })
        .then((response) =>
        {
            return response.json();
        })
        .then((jsonResponse) => 
        {
            if(successCallback)
                successCallback(jsonResponse);
        })
        .catch(err => 
        {
            (errorCallback) ? errorCallback(err) : console.log('err_fetch_notebooks ==> ', err);
        });
    },


    async getNotebook(notebookId)
    {
        let response = await fetch(
                                AppConstants.GITHUB_GISTS_URL + "/" + notebookId,
                                {
                                    method: "GET",
                                    cache: "no-store",
                                    headers: 
                                    {
                                        "Authorization" : "token " + localStorage.accessToken
                                    }
                                });

        let notebookJson = await response.json();
        return notebookJson;
    },


    createNotebook(newItemObj, successCallback, errorCallback)
    {   
        const newNotebookObj = {
            "description": newItemObj.NotebookName,
            "public": true,
            "files":{
                [newItemObj.NoteFile]: {
                    content: newItemObj.Content
                }
            }
          };
    
          fetch(
            AppConstants.GITHUB_GISTS_URL,
            {
              method: "POST",
              headers: 
              {
                "Authorization" : "token " + localStorage.accessToken,
              },
              body: JSON.stringify(newNotebookObj)
            })
          .then((response) =>
          {
              return response.json();
          })
          .then(jsonResponse => 
          {
            if(successCallback)
                successCallback(jsonResponse);
          })
          .catch(err => 
          {
            (errorCallback) ? errorCallback(err) : console.log('err_create_notebook ==> ', err);
          });
    },


    async deleteNotebook(notebookId)
    {
        let response = await fetch(
                                AppConstants.GITHUB_GISTS_URL + "/" + notebookId,
                                {
                                    method: "DELETE",
                                    cache: "no-store",
                                    headers: 
                                    {
                                        "Authorization" : "token " + localStorage.accessToken
                                    }
                                });

        let responseJson = await response.text();
        return responseJson;
    },


    updateNotebook(updatedItemObj, notebookId, successCallback, errorCallback)
    {
        const updatedNotebookObj = {
            "description": updatedItemObj.description,
            "files":updatedItemObj.files
          };
    
          fetch(
            AppConstants.GITHUB_GISTS_URL + "/" + notebookId,
            {
              method: "PATCH",
              headers: 
              {
                "Authorization" : "token " + localStorage.accessToken,
              },
              body: JSON.stringify(updatedNotebookObj)
            })
          .then((response) =>
          {
              return response.json();
          })
          .then(jsonResponse => 
          {
            if(successCallback)
                successCallback(jsonResponse);
          })
          .catch(err => 
          {
            (errorCallback) ? errorCallback(err) : console.log('err_update_notebook ==> ', err);
          });
    },
};
