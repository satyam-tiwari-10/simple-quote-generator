// Array of quotes and their authors
        const quotes = [
            {
                quote: "The only way to do great work is to love what you do.",
                author: "Steve Jobs"
            },
            {
                quote: "Believe you can and you're halfway there.",
                author: "Theodore Roosevelt"
            },
            {
                quote: "The future belongs to those who believe in the beauty of their dreams.",
                author: "Eleanor Roosevelt"
            },
            {
                quote: "It is during our darkest moments that we must focus to see the light.",
                author: "Aristotle Onassis"
            },
            {
                quote: "Strive not to be a success, but rather to be of value.",
                author: "Albert Einstein"
            },
            {
                quote: "The best way to predict the future is to create it.",
                author: "Peter Drucker"
            },
            {
                quote: "The mind is everything. What you think you become.",
                author: "Buddha"
            },
            {
                quote: "An unexamined life is not worth living.",
                author: "Socrates"
            },
            {
                quote: "Life is what happens when you're busy making other plans.",
                author: "John Lennon"
            },
            {
                quote: "The only impossible journey is the one you never begin.",
                author: "Tony Robbins"
            }
        ];

        // Get references to the HTML elements
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        const generateButton = document.getElementById('generate-button');

        /**
         * Function to display a random quote from the quotes array.
         */
        function displayRandomQuote() {
            // Generate a random index
            const randomIndex = Math.floor(Math.random() * quotes.length);
            // Get the quote object at the random index
            const randomQuote = quotes[randomIndex];

            // Update the text content of the quote and author elements
            quoteText.textContent = randomQuote.quote;
            quoteAuthor.textContent = `- ${randomQuote.author}`;
        }

        // Add an event listener to the button
        // When the button is clicked, the displayRandomQuote function will be called
        generateButton.addEventListener('click', displayRandomQuote);

        // Display a random quote when the page first loads
        window.onload = displayRandomQuote;