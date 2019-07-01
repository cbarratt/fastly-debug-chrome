chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    console.log(details);
    console.log("Fastly headers added to: " + details.url);

    details.requestHeaders.push({ name: "Fastly-Debug", value: "1" })

    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["<all_urls>"] }, ["blocking", "requestHeaders"]
);
