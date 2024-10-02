const button = document.getElementById('btn');
const gallerySection = document.getElementById('gallery');

button.addEventListener('click', function()
{
  gallerySection.scrollIntoView({ behavior: 'smooth' });
});

const form = document.getElementById("inquiry-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all the fields.");
    return; 
  }
  alert("Thank you, your message has been sent successfully!");
  form.reset();
});
