const path = require('path');

module.exports = {
    mode: 'development', // Use 'production' for optimized output
    entry: './src/app.js', // Your main application JavaScript file
    output: {
        filename: 'bundle.js', // The bundled output file
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    devtool: 'inline-source-map', // Helps with debugging
    // Add a resolver for React and ReactDOM to ensure Webpack finds them
    resolve: {
        alias: {
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        },
    },
};