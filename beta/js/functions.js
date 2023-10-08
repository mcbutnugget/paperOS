var bootloader = localStorage.getItem("computator");
var computator = JSON.parse(bootloader);

eval(PathToFile(computator,"p/paperOS_appdat/functions.js"));

function PathToFile(computator, path) {
  const pathElements = path.split("/");
  let currentLocation = computator;

  for (const element of pathElements) {
    if (element === "..") {
      currentLocation = currentLocation[0][1]; // Go back one level
    } else {
      const item = currentLocation.find((item) => item[0] === element);

      if (!item) {
       // $('#shellData').append(`<h4 class = 'error'>File "${element}" in path "${path}" does not exist.</h4>`);
        return null;
      }

      if (Array.isArray(item[1])) {
        // If it's a folder, update the current location
        currentLocation = item[1];
      } else {
        // It's a file, check if it's the last element in the path
        if (element === pathElements[pathElements.length - 1]) {
          return item[1]; // Return the file data
        } else {
        //  $('#shellData').append(`<h4 class = 'error'>File "${element}" in path "${path}" is not a folder.</h4>`);
          return null;
        }
      }
    }
  }

 // $('#shellData').append(`<h4 class = 'error'>Path "${path}" does not point to a file.</h4>`);
  return null;
}