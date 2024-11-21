function getFormvalue() {
    //Write your code here
   // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the first name and last name input values
  const firstName = document.forms["form1"]["fname"].value;
  const lastName = document.forms["form1"]["lname"].value;

  // Create the full name by concatenating the first and last name
  const fullName = firstName + " " + lastName;

  // Display the full name using alert
  alert(fullName);
}
