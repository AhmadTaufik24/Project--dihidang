document.addEventListener('DOMContentLoaded', () => {

    // DATA KONTEN
    const fotoData = [
        { img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/foto/003.jpg", judul: "Nasi Goreng Spesial", deskripsi: "Nasi goreng lezat dengan bumbu rempah pilihan.", kelebihan: "Rasa gurih dan aroma wangi.", kekurangan: "Tidak cocok untuk diet rendah karbo." },
        { img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/foto/001.jpg", judul: "Ice Lemon Tea", deskripsi: "Minuman segar dengan lemon asli.", kelebihan: "Menyegarkan dan cocok di cuaca panas.", kekurangan: "Terlalu manis jika tanpa request gula sedikit." },
        { img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/foto/002.jpg", judul: "Mie Ayam", deskripsi: "Mie ayam gurih dengan kuah kaldu ayam kampung.", kelebihan: "Kuah kaldunya kaya rasa.", kekurangan: "Kurang cocok untuk yang alergi gluten." }
    ];

    const desainData = [
        { img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/desain/desain1.png", judul: "Poster Nasi Goreng", deskripsi: "Desain promosi modern untuk restoran." },
        { img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/desain/desain2.png", judul: "Menu Ice Lemon Tea", deskripsi: "Desain menu segar dengan nuansa tropis." },
        { img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/desain/desain3.png", judul: "Banner Mie Ayam", deskripsi: "Desain banner mie ayam hangat dan mengundang selera." }
    ];

    // LOGIKA LIGHTBOX (POP-UP GAMBAR)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // FUNGSI UMUM UNTUK SLIDER
    function createSlider(config) {
        let currentIndex = 0;
        const { data, imageEl, prevBtn, nextBtn, textElements } = config;

        function updateContent(index) {
            const item = data[index];
            imageEl.classList.add('fade-out');
            setTimeout(() => {
                imageEl.src = item.img;
                for (const key in textElements) {
                    if (textElements[key] && item[key] !== undefined) {
                        textElements[key].textContent = item[key];
                    } else if (textElements[key]) {
                        textElements[key].textContent = '';
                    }
                }
                imageEl.classList.remove('fade-out');
            }, 400);
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + data.length) % data.length;
            updateContent(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % data.length;
            updateContent(currentIndex);
        });

        imageEl.addEventListener('click', () => {
            openLightbox(imageEl.src);
        });
        
        updateContent(0);
    }

    // INISIALISASI SLIDER FOTO
    createSlider({
        data: fotoData,
        imageEl: document.getElementById('foto-slider-image'),
        prevBtn: document.getElementById('foto-prev-btn'),
        nextBtn: document.getElementById('foto-next-btn'),
        textElements: {
            judul: document.getElementById('foto-judul'),
            deskripsi: document.getElementById('foto-deskripsi'),
            kelebihan: document.getElementById('foto-kelebihan'),
            kekurangan: document.getElementById('foto-kekurangan'),
        }
    });

    // INISIALISASI SLIDER DESAIN
    createSlider({
        data: desainData,
        imageEl: document.getElementById('desain-slider-image'),
        prevBtn: document.getElementById('desain-prev-btn'),
        nextBtn: document.getElementById('desain-next-btn'),
        textElements: {
            judul: document.getElementById('desain-judul'),
            deskripsi: document.getElementById('desain-deskripsi'),
        }
    });

    // LOGIKA VIDEO (INTERSECTION OBSERVER)
    const video = document.getElementById('project-video');
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play().catch(error => console.log("Autoplay video dicegah:", error));
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5 
    });
    videoObserver.observe(video);
    
    // LOGIKA TOMBOL SCROLL DOWN
    const scrollDownBtn = document.getElementById('scroll-down-btn');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', () => {
            const fotoSection = document.getElementById('foto-section');
            if (fotoSection) {
                fotoSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});