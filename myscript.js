var div = document.createElement("div");
div.className = "main-contents";
while (document.body.firstChild) {
  div.appendChild(document.body.firstChild);
}
document.body.appendChild(div);

var iFrame  = document.createElement ("iframe");
iFrame.className = 'left-contents';
iFrame.src  = chrome.extension.getURL ("nav.html");
document.body.insertBefore (iFrame, document.body.firstChild);
