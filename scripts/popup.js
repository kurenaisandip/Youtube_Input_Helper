function openAddItemPage()
{
    chrome.windows.create({
        url: chrome.runtime.getURL("pages/addItems.html"),
        type: "popup",
        width: 400,
        height: 600
    }, function (window)
    {
        console.log("Add Item Page Opened");
    });

}

document.getElementById('addItemBtn').addEventListener('click', openAddItemPage);
