document.addEventListener("DOMContentLoaded", function () {
            const carData = JSON.parse(localStorage.getItem("selectedCar"));
            if (carData) {
                document.getElementById("car-image").src = carData.image;
                document.getElementById("car-name").textContent = carData.name;
                document.getElementById("car-price").textContent = `Price: ${carData.price}`;
                document.getElementById("car-description").textContent = carData.description;
                
                const characteristicsList = document.getElementById("car-characteristics");
                carData.characteristics.forEach(char => {
                    const li = document.createElement("li");
                    li.textContent = char;
                    characteristicsList.appendChild(li);
                });
            }
        });

document.addEventListener("DOMContentLoaded", function () {
    const carBlocks = document.querySelectorAll(".car_block");

    carBlocks.forEach((carBlock, index) => {
        carBlock.querySelector(".buy_car").addEventListener("click", function () {
            const selectedCar = {
                image: carBlock.querySelector("img").src,
                name: carBlock.querySelector("h2").textContent,
                price: carBlock.querySelector(".car_additional p").textContent,
                description: getCarDescription(index),
                characteristics: getCarCharacteristics(index)
            };

            localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
            window.location.href = "car.html";
        });
    });

    function getCarDescription(index) {
        const descriptions = [
            "The Golf is celebrating its 50th anniversary with a fresh design, improved features and enhanced performance. Enjoy a smooth drive with advanced driver systems, making every journey a comfortable and connected experience.",
            "The Passat is a flexible vehicle and a trusty companion that convinces with high-level diversity and comfort. It doesn’t matter what your or your families’ plans are, the Passat will be by your side.",
            "The new BMW X5 is designed to inspire confidence. The kidney grille design refreshes the front end and striking LED headlights emphasise the muscular stature and width. To the rear, an X-themed light cluster creates an athletic vision that leaves a lasting impression.",
            "Modern, progressive and user-friendly: Inside, the A-Class impresses with a wide range of connectivity and safety innovations. Whether it's the further improved MBUX multimedia system or the comfort seats - the A-Class is completely focused on the driver.",
            "Welcome to the pinnacle of BMW M. The new BMW M8 Competition Coupé, Convertible and Gran Coupé elevate our vision of high-performance luxury to a whole new level. Designed to stir emotions and ignite passion, the BMW M8 exquisitely combines luxurious refinement with scintillating performance for a driving experience that will change perspectives. ",
            "The new Tiguan is spacious, comfortable, and equipped with the latest technology. Whether it’s a family road trip or a daily commute, the Tiguan helps you to confidently tackle almost any challenge.",
            "The Mercedes-AMG CLE Coupé combines sportiness and dynamic design in an unmistakable and powerful way. Characteristic coupé proportions shape the progressive design. The long bonnet and short overhangs are complemented by brand-specific details with distinctive AMG character such as specific radiator trim, front apron, side skirts, rear apron, spoiler lip, as well as large AMG light-alloy wheels."
        ];
        return descriptions[index] || "No description available.";
    }

    function getCarCharacteristics(index) {
        const characteristics = [
            ["1.5L Turbo Engine", "Front-Wheel Drive", "LED Headlights", "Adaptive Cruise Control"],
            ["2.0L TSI Engine", "Leather Seats", "Parking Assist", "Dual-Zone Climate Control"],
            ["3.0L Twin-Turbo Engine", "All-Wheel Drive", "Panoramic Sunroof", "Gesture Control"],
            ["1.3L Turbo Engine", "MBUX Infotainment", "Wireless Charging", "Keyless Start"],
            ["4.4L V8 Twin-Turbo Engine", "xDrive All-Wheel Drive (AWD)", "M Carbon Ceramic Brakes", "Adaptive M Suspension", "M Sport Exhaust System"],
            ["2.0L TSI Engine", "4Motion AWD", "Digital Cockpit", "Heated Seats"],
            ["2.0L Hybrid Engine", "AMG Styling", "Burmester Sound System", "Adaptive Suspension"]
        ];
        return characteristics[index] || [];
    }
});

