https://ankitpal7066.github.io/infiniteScrolling/                         

API Access Key: first I stored Unsplash API access key in the accessKey variable. This key is necessary for making requests to the Unsplash API and retrieving image data.


HTML Element Selection: The code selects several HTML elements from web page by their IDs or class names. These elements will be manipulated or used to interact with the user.


Search Images Function (searchImages): This function is triggered when the user submits the search form or clicks the "Show More" button. It retrieves the user's input from the search input field and constructs a URL to make an API request to Unsplash. The API request is made using the fetch function, and the response data is processed as JSON. If it's the first page of results (page === 1), the searchResultsEl container is cleared to display a fresh set of results. The function iterates through the image results and creates HTML elements (, , and ) to display each image with a link to its Unsplash page.


Event Listeners: The code adds event listeners to the search form and "Show More" button: When the search form is submitted (formEl.addEventListener("submit", ...)), it calls searchImages to initiate a new search. It also resets the page variable to 1. When the "Show More" button is clicked (showMoreButtonEl.addEventListener("click", ...)), it calls searchImages to load more results.


Theme Change Function (themeChange): This function is called when the user changes the theme using a select element. It updates the background color and text color of the body element and the color of anchor () tags based on the selected theme ("Dark" or "Light").


Theme Change Event Listener: An event listener is added to the theme select element () that triggers the themeChange function when the user selects a different theme.

Infinite Scrolling: Added window.event so that when window height is greater or equal to body height it calls searchImage function.

Debounced function: Also added debounced function for smoother page loading.
