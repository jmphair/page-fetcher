/** 
 * It should take two command line arguments: which means I need to use process.argv again...
 * a URL done ✅
 * a local file path done ✅
 * 
 * Think of this user input from the command line as an array: 
 * node fetcher.js http://www.example.edu/ ./index.html
 *  0      1                2                     3
 * 
 * this means that when i create my variables for url and file path they are basically values from the array of the user input...
 * 
 * the user input is accessed by process.argv so that would be 
 * 
 * url: process.argv[2]
 * file path: process.argv[3]
 * 
 * Tips
 * Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for
 * our purposes.) DONE ✅
 * Use Node's fs (file system) module to write the file DONE ✅
 * Use the callback based approach we've been learning so far 
 * Do not use the pipe function
 * Do not use synchronous functions 
*/

//proof of concept that it's an array
// console.log (process.argv[2]);
// console.log (process.argv[3]);

const url = process.argv[2];
const filePath = process.argv[3];
const fs = require('fs');
const request = require('request');



request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the homepage that the USER INPUTS!

  //ok right out of the node website
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error(err);
    }
  });
  
  // realized there's a hint for file size in the directions, 1 character is equal to 1 byte... duh
  // body is all the html that's printed to console and it can be accessed with length!
  console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);

});

