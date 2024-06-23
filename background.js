chrome.runtime.onMessage.addListener(function (message, sender, sendResponse)
{
    // Forward message to all tabs
    chrome.tabs.query({}, function (tabs)
    {
        tabs.forEach(function (tab)
        {
            chrome.tabs.sendMessage(tab.id, message);
        });
    });
});