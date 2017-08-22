function makeGetRequest(url, onRequestLoad){
  const request = new XMLHttpRequest();
  request.addEventListener("load", onRequestLoad)
  request.open("GET", url);
  request.send();
}

export default makeGetRequest;
