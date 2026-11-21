
const form = document.querySelector("#search-form");
const usernameInput = document.querySelector("#username");
const searchButton = document.querySelector("#tom-pencari");
const statusMessage = document.querySelector("#pesan-status");

const profileCard = document.querySelector("#profilCard");
const avatar = document.querySelector("#avatar");
const nama = document.querySelector("#nama");
const usernameLink = document.querySelector("#usernameLink");
const bio = document.querySelector("#bio");
const repositories = document.querySelector("#repositories");
const profileLink = document.querySelector("#profileLink");


// Pesan status

function tampilkanStatus(pesan, tipe = "") {
    statusMessage.textContent = pesan;
    statusMessage.className = `status ${tipe}`;
}

// loading

function aturLoading(loading) {
    searchButton.disabled = loading;

    searchButton.textContent = loading
        ? "Mencari..."
        : "Cari Profil";
}


// Tampilkan Profil


function tampilkanProfil(user) {
    
    avatar.src = user.avatar_url;
    avatar.alt = `Foto profil ${user.login}`;
  
    nama.textContent = user.name || user.login;
 
    usernameLink.textContent = `@${user.login}`;
    usernameLink.href = user.html_url;

    bio.textContent = user.bio || "Pengguna belum menambahkan bio.";
    
    repositories.textContent = user.public_repos.toLocaleString("id-ID");

    profileLink.href = user.html_url;

    profileCard.classList.add("tampil");
}

// PENCARIAN PROFIL

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (!username) {
        tampilkanStatus("Masukkan username GitHub terlebih dahulu.", "error");
        return;
    }

    profileCard.classList.remove("tampil");

    aturLoading(true);

    tampilkanStatus("Sedang mencari profil GitHub...");

    try {

        const url = `https://api.github.com/users/${encodeURIComponent(username)}`;

        const response = await fetch(url, {
            headers: {
                Accept: "application/vnd.github+json"
            }
        });

        if (!response.ok) {

            if (response.status === 404) {
                throw new Error("Username GitHub tidak ditemukan.");
            }

            if (response.status === 403 || response.status === 429) {
                throw new Error("Batas permintaan API tercapai. Coba lagi nanti.");
            }

            throw new Error("Terjadi kesalahan saat mengambil data GitHub.");
        }

        const user = await response.json();

        tampilkanProfil(user);

        tampilkanStatus(
            `Profil @${user.login} berhasil ditemukan.`,
            "success"
        );

    } catch (error) {

        tampilkanStatus(error.message, "error");

    } finally {

        aturLoading(false);

    }

});

