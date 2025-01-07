// Select the image and button elements
const mainImage = document.getElementById('mainImage');
const changeButton = document.getElementById('changeButton');

// Array of image URLs
const images = [
  'https://images.pexels.com/photos/29745519/pexels-photo-29745519/free-photo-of-man-harvesting-in-xicotepec-de-juarez-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load+1', // First image
  'https://images.pexels.com/photos/29668090/pexels-photo-29668090/free-photo-of-charming-outdoor-cafe-with-leafy-canopy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load+2', // Second image
  'https://images.pexels.com/photos/17089382/pexels-photo-17089382/free-photo-of-snow-on-lakeshore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load+3'  // Third image
];

let currentImageIndex = 0;

// Function to change the image
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through the images
  mainImage.src = images[currentImageIndex];
}

// Add event listener to the button
changeButton.addEventListener('click', changeImage);
