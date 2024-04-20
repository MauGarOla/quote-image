# QuoteImage Component

The `QuoteImage` component is a React component that fetches Stoic quotes from the Stoic Quotes API and displays them alongside random landscape images from the Picsum Photos API. Users can interact with the component by changing the displayed quote or the background image.

## How it Works

The `QuoteImage` component fetches a new Stoic quote from the Stoic Quotes API each time it mounts or whenever the `newQuote` state changes. The quote is then displayed along with a random landscape image fetched from the Picsum Photos API.

Users can trigger a change in the displayed quote by clicking the "Change Quote" button, which toggles the `newQuote` state. Similarly, clicking the "Change Image" button increments the `image` state, causing a new random image to be fetched and displayed.

## Usage

To use the `QuoteImage` component in your React application, follow these steps:

1. Import the `QuoteImage` component into your React application:

    ```javascript
    import QuoteImage from './QuoteImage';
    ```

2. Add the `QuoteImage` component to your JSX:

    ```javascript
    <QuoteImage />
    ```

3. Customize the styling and behavior of the `QuoteImage` component as needed for your application.

## Dependencies

- React: This component is built using React, a JavaScript library for building user interfaces.

## Getting Started

To get started using the `QuoteImage` component in your project, ensure that you have React installed and configured. Then, simply import and use the `QuoteImage` component as described above.

## Contributing

Contributions to the `QuoteImage` component are welcome! If you have ideas for improvements, new features, or bug fixes, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
