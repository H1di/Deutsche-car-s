// choosing address
function selectAddress(name) {
                    localStorage.setItem("selectedAddress", JSON.stringify({ name }));
                    window.location.href = "bookTestDrive.html"; 
                }

        let TestDriveAddress = JSON.parse(localStorage.getItem("selectedAddress"));

        if (TestDriveAddress) {
            document.getElementById("AddressTest").textContent = TestDriveAddress.name;
        }
        else {
            document.getElementById("AddressTest").textContent = 0;
        };


// back button 

const button = document.querySelector("#backbutton")

button.addEventListener('click', () => {
    window.location.href = 'index.html';
});


