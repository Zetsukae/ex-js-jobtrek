/**
 * In JavaScript we can use the fetch function to make HTTP calls over the network.
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * When the user clicks on the button with id "click-to-fetch",
 * you have to call this url : https://api.github.com/octocat
 * Then, display the text content returned by the API in the "pre" element with id "display-here".
 * Handle potential network errors gracefully.
 */
export function fetchDataOnClick() {
    const button = document.getElementById("click-to-fetch");
    const displayElement = document.getElementById("display-here");
    const url = "https://api.github.com/octocat";

    button.addEventListener("click", async() => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.text();
            displayElement.textContent = data;
        } catch (error) {
            displayElement.textContent = `Error fetching data: ${error.message}`;
        }
    })
};