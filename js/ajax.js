window.addEventListener("load",doWork);
function doWork()
{
    var serverUrl="http://localhost:4000/accounts";
    fetch(serverUrl).then(done).catch(error);
}
function done(response)
{
    response.json().then(printData);
}
function error(err)
{
    console.log("error is:",err);
}