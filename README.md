# Task Manager

This project allows users to keep track of their tasks.

## Details

For a textarea element that expands according to the length of the its content, I used the [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize) package.

All tasks are stored with a timestamp so that they are ordered according to the time they were created.

Due to unexpected issues with the input element, I had to use a div and style it as a checkbox. Checked checkboxes have a background-image with a tick mark.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.