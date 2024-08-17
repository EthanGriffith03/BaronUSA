// Function to open the operating manual
function openManual() {
    window.open('manual.pdf', '_blank');
}

// Function to open the contact email
function contactUs() {
    window.location.href = 'mailto:sales@baronusa.com';
}

// Function to open the vendor literature section
function openVenderLiterature() {
    document.getElementById('venderLiteratureSection').style.display = 'block';
}

// Function to open the selected vendor literature
function openSelectedLiterature() {
    const selectElement = document.getElementById('literatureSelect');
    const selectedValue = selectElement.value;
    if (selectedValue) {
        window.open(selectedValue, '_blank');
    } else {
        alert('Please select a manual.');
    }
}

// Function to open the company website
function openWebsite() {
    window.open('https://www.baronusa.com/', '_blank');
}

// Function to close the application
function exitApp() {
    window.close();
}

// Add event listeners to buttons
document.getElementById('manualButton').addEventListener('click', openManual);
document.getElementById('contactButton').addEventListener('click', contactUs);
document.getElementById('venderButton').addEventListener('click', openVenderLiterature);
document.getElementById('openLiteratureButton').addEventListener('click', openSelectedLiterature);
document.getElementById('websiteButton').addEventListener('click', openWebsite);
document.getElementById('exitButton').addEventListener('click', exitApp);
