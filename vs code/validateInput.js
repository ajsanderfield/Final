//AJ Sanderfield
//Oct 15 2023

{
    function validateInput (event){
    event.preventDefault();
    let  firstName = document.getElementById("fname").value;
    console.log(firstName);
    let  lastName = document.getElementById("lname").value;
    console.log(lastName);
    let  zip = document.getElementById("zip").value;
    console.log(zip);

    let firstlast = firstName + " " + lastName;
    console.log(firstName)

    if(firstlast.length < 20){
        alert("Not Enough characters, First and Last name must have at least 20 characters.");
        return;
    }
  
    const zipRegExp = /\b\d{5}\b/;

    if (!zipRegExp.test(zip)) {
        alert("Invalid Zip Code. Zip Code Must be 5 digits");
        console.log(typeof zip)
        return false;
    }
    console.log(parseInt("33"));
    console.log(parseInt("3.3"))
    console.log("Zip Valid")
}

window.addEventListener("DOMContentLoaded", (event) =>  {
    const form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit", validateInput)
    }
})
}