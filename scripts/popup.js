function openAddItemPage()
{
    // Fetch the content of addItems.html
    fetch(chrome.runtime.getURL("pages/addItems.html"))
        .then(response => response.text())
        .then(data =>
        {
            // Replace popup.html content with addItems.html content
            document.body.innerHTML = data;

        })
        .catch(error =>
        {
            console.error('Error fetching addItems.html:', error);
        });

}

document.getElementById('addItemBtn').addEventListener('click', openAddItemPage);
