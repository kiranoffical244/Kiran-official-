// Set current date

var currentDate = new Date();

var currentYear = currentDate.getFullYear();

var birthDate = new Date(currentYear, 8, 26);  // Assumes birthday on 26th of September (Asar 26th)

// Calculate age dynamically

if (currentDate >= birthDate) {

    document.getElementById('age').innerText = currentYear - 2006; // If birthday already occurred this year

} else {

    document.getElementById('age').innerText = currentYear - 2006 - 1; // If birthday not yet this year

}