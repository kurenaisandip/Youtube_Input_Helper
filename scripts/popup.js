function openAddItemPage()
{
    chrome.tabs.create({ url: "./pages/addItems.html" });
    console.log("Add Item Page Opened");
}

document.getElementById('addItemBtn').addEventListener('click', openAddItemPage);
