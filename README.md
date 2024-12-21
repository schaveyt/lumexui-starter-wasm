# LumexUi Starter for WASM

This is a starter template for a Blazor WebAssembly application using [LumexUI](https://lumexui.org/).

## Getting Started

To run this project, you'll need to have the following installed:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/)

Once you have those installed, run the following commands:

```bash
cd src/WebApp.Client
npm install # installs tailwindcss utils
dotnet restore # restores dependencies
```

## Running the Application

Development consists of two `parallel` command-line tools running simultaneously

1. tailwindcss minification

    ```sh
    cd src/WebApp.Client
    npm run watchcss
    ```

2. flask web server

    ```sh
    cd src/WebApp.Client
    dotnet watch
    ```

This will start the application in development mode. Open your browser to `http://localhost:5072` to view it.

