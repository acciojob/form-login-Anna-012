function getFormvalue() {
    //Write your code here
  // Get the first name and last name input values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;

  // Create the full name by concatenating the first and last name
  const fullName = firstName + " " + lastName;

  // Display the full name using alert()
  alert(fullName);
}
