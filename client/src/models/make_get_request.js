function makeGetRequest(request, url, onRequestLoad){
  request.addEventListener("load", onRequestLoad)
  request.open("GET", url);
  request.send();
}

export default makeGetRequest;
