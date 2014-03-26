if (localStorage["savedUrls"] === undefined ) {
  localStorage["savedUrls"] = JSON.stringify([]);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.method === "sendURL") {
      var arrayOfUrls = JSON.parse(localStorage["savedUrls"]);
      arrayOfUrls.push(request.sentUrl);
      localStorage["savedUrls"] = JSON.stringify(arrayOfUrls);
      sendResponse({status: 200});
    }
  });
  