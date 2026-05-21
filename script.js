function bukaMapel(mapel) {
    const konten = document.getElementById("konten");

    if (mapel === "pancasila") {
        konten.innerHTML = `
            <h3>Pendidikan Pancasila</h3>
            <ul>
                <li>Pancasila sebagai dasar negara</li>
                <li>Nilai-nilai Pancasila</li>
                <li>Hak dan kewajiban warga negara</li>
            </ul>
        `;
    } 
    else if (mapel === "matematika") {
        konten.innerHTML = `
            <h3>Matematika</h3>
            <ul>
                <li>Penjumlahan dan pengurangan</li>
                <li>Perkalian dan pembagian</li>
                <li>Rumus bangun datar</li>
            </ul>
        `;
    }
}