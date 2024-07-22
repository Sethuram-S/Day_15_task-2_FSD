# Pagination System for GitHub Gist API

This JavaScript code implements a simple pagination system for a list of items fetched from a GitHub Gist API endpoint.

## How it Works

### Variables and Constants

- <b>dataUrl</b>: The URL of the GitHub Gist API endpoint that returns the list of items.

- <b>currentPage</b>: The current page number, initialized to 1.

- <b>itemsPerPage</b>: The number of items to display per page, set to 10.

### Functions

- <b>fetchData()</b>: An async function that fetches the data from the GitHub Gist API endpoint and returns the response data as JSON.

- <b>renderPagination(totalItems)</b>: A function that renders the pagination buttons based on the total number of items.

- <b>createButton(text, onClick)</b>: A function that creates a button element with the given text and onClick event handler.

- <b>renderItems(items)</b>: A function that renders the list of items for the current page.

- <b>highlightCurrentPage()</b>: A function that highlights the current page button by adding an active class to it.

### Initialization

The `init()` function is called when the document is loaded, which fetches the data, renders the items for the first page, and renders the pagination buttons.

### Pagination Logic

The pagination buttons are created with event handlers that update the `currentPage` variable and call `renderItems()` and `highlightCurrentPage()` to update the displayed items and highlight the current page button.

### Features

- Fetches data from a GitHub Gist API endpoint
- Renders a list of items with pagination
- Supports navigation between pages using First, Previous, Next, and Last buttons
- Highlights the current page button