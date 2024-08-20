window.onload = function() {
    document.querySelector('h1').textContent = "Latihan JavaScript Selesai";

    // Nama variabel
    let name = "John";
    const age = 30;
    
    // Tampilkan nama dan umur di ID "output"
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>Nama: ${name}</p><p>Umur: ${age}</p>`;

    // tampilkan semua buah
    let fruits = ["Apple", "Banana", "Mango"];
    outputDiv.innerHTML += "<p>Buah-buahan:</p><ul>";
    for (let i = 0; i < fruits.length; i++) {
        outputDiv.innerHTML += `<li>${fruits[i]}</li>`;
    }
    outputDiv.innerHTML += "</ul>";
    function cekNilai() {
        let inputValue = document.getElementById("userInput").value;
        let outputDiv = document.getElementById("output");

        // Memeriksa apakah nilai lebih besar dari, sama dengan, atau kurang dari 10
        if (inputValue > 10) {
            outputDiv.innerHTML += `<p>Nilai ${inputValue} lebih besar dari 10.</p>`;
        } else if (inputValue == 10) {
            outputDiv.innerHTML += `<p>Nilai ${inputValue} sama dengan 10.</p>`;
        } else {
            outputDiv.innerHTML += `<p>Nilai ${inputValue} kurang dari 10.</p>`;
        }

        // Menampilkan angka 1 hingga selanjutnya
        outputDiv.innerHTML += "<p>Angka dari 1 hingga " + inputValue + ":</p><ul>";
        for (let i = 1; i <= inputValue; i++) {
            outputDiv.innerHTML += `<li>${i}</li>`;
        }
        outputDiv.innerHTML += "</ul>";
    }
    // Nama pertama dan nama terakhir 
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
    outputDiv.innerHTML += `<p>Nama Lengkap: ${person.firstName} ${person.lastName}</p>`;

    // Fungsi greet
    function greet(name) {
        return `Halo, ${name}`;
    }

    // Memanggil fungsi greet dengan argumen berbeda
    outputDiv.innerHTML += `<p>${greet("Alice")}</p>`;
    outputDiv.innerHTML += `<p>${greet("Bob")}</p>`;

    // Fungsi calculateSquare
    function calculateSquare(number) {
        return number * number;
    }

    // Kuadrat
    outputDiv.innerHTML += `<p>Kuadrat dari 4: ${calculateSquare(4)}</p>`;
    outputDiv.innerHTML += `<p>Kuadrat dari 7: ${calculateSquare(7)}</p>`;

    // Fungsi panah yang menjumlahkan dua angka
    const sum = (a, b) => a + b;

    // Penjumlahan
    outputDiv.innerHTML += `<p>Penjumlahan 5 + 3: ${sum(5, 3)}</p>`;
    outputDiv.innerHTML += `<p>Penjumlahan 10 + 15: ${sum(10, 15)}</p>`;

    // Buat array students dan tambahkan satu nama menggunakan push()
    let students = ["Alice", "Bob", "Charlie"];
    students.push("David");

    // Gunakan forEach untuk menampilkan semua nama siswa
    outputDiv.innerHTML += "<p>Nama Siswa:</p><ul>";
    students.forEach(function(student) {
        outputDiv.innerHTML += `<li>${student}</li>`;
    });
    outputDiv.innerHTML += "</ul>";

    // Buat objek car
    let car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    };

    // Tampilkan semua properti dari objek car menggunakan for...in loop
    outputDiv.innerHTML += "<p>Informasi Mobil:</p><ul>";
    for (let key in car) {
        outputDiv.innerHTML += `<li>${key}: ${car[key]}</li>`;
    }
    outputDiv.innerHTML += "</ul>";

    // Buat array objek untuk beberapa data mobil
    let cars = [
        { brand: "Toyota", model: "Corolla", year: 2020 },
        { brand: "Honda", model: "Civic", year: 2019 },
        { brand: "Ford", model: "Focus", year: 2018 }
    ];

    // Gunakan forEach untuk menampilkan informasi setiap mobil
    outputDiv.innerHTML += "<p>Daftar Mobil:</p><ul>";
    cars.forEach(function(car) {
        outputDiv.innerHTML += `<li>${car.brand} ${car.model} (${car.year})</li>`;
    });
    outputDiv.innerHTML += "</ul>";
};

// Fungsi untuk mengecek nilai input


