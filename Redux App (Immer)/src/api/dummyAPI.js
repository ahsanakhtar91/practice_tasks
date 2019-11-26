const timezoneURL = "http://worldtimeapi.org/api/timezone";

//Just hitting a dummy URL that returns a timezone JSON, not doing anything on server end in both cases...

export function addItemOnServer()
{
    return fetch(timezoneURL).then((response) => response.json());
}

export function deleteItemOnServer()
{
    return fetch(timezoneURL).then((response) => response.json());
}