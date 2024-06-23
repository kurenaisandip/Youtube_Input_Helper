// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>
{
    if (message.type === 'fillForm')
    {
        // Fill in the title and description fields with the received data
        const titleInput = document.querySelector('input[name="title"]');
        const descriptionInput = document.querySelector('textarea[name="description"]');

        if (titleInput && descriptionInput)
        {
            titleInput.value = message.title;
            descriptionInput.value = message.description;
        }
    }
});
