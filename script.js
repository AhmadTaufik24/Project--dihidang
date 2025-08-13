document.addEventListener('DOMContentLoaded', () => {

    // DATA KONTEN
    const fotoData = [
        { 
            img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/foto/003.jpg", 
            judul: "NASI GORENG CHILI OIL 1", 
            deskripsi: "posisi potrait", 
            kelebihan: "Nasi goreng disajikan rapi dengan bentuk bulat dan bumbu merata, memiliki komposisi warna menarik, dilengkapi properti pendukung lengkap, uap panas yang terlihat, pencahayaan yang menonjolkan tekstur makanan serta retouch yang tepat menyempurnakan hasil fotonya.", 
            kekurangan: "Cahaya di beberapa bagian terlihat sedikit agak flat karena keterbatasan lampu dan alat pencahayaan, sehingga kontras kurang maksimal untuk menonjolkan kilap dan tekstur nasi, namun masih sangat cukup untuk keperluan makanan seperti ini." 
        },
        { 
            img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/foto/001.jpg", 
            judul: "NASI GORENG CHILI OIL 2", 
            deskripsi: "posisi landscape.", 
            kelebihan: "Komposisi foto rapi dengan penataan properti yang lengkap seperti sebelumnya, nasi goreng terlihat hangat dan bertekstur jelas dengan warna yang menggugah selera dan retouch yang tepat menyempurnakan hasil fotonya.", 
            kekurangan: "Fokus foto sedikit agak terpecah karena pencahayaan agak datar sehingga kilap nasi kurang menonjol, namun masih sangat cukup untuk keperluan produk nasi seperti nasi goreng ini." 
        },
        { 
            img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/foto/002.jpg", 
            judul: "NASI GORENG CHILI OIL 3", 
            deskripsi: "posisi pengambilan setengah frame.", 
            kelebihan: "Foto ini memiliki warna makanan yang lebih hidup sehingga nasi goreng terlihat menggugah selera. Pencahayaan merata membuat semua elemen terlihat jelas, dengan tekstur yang tajam dan detail. Pantulan cahaya lebih lembut, latar belakang netral, serta adanya efek uap panas yang menambah kesan segar. Hasil ini diperoleh karena menggunakan standar retouch profesional, sehingga warna, pencahayaan, dan detail makanan terlihat lebih optimal dan menarik..", 
            kekurangan: "Beberapa bagian properti seperti bawang dan kerupuk sedikit over-exposure (terlalu terang) karena keterbatasan alat lighting, namun tidak mengganggu fokus utama pada produk nasi goreng dan mash sangat cukup untuk produk nasi seperti ini." 
        }, // <<< KOMA YANG HILANG ADA DI SINI
        { 
            img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/foto/002.jpg", 
            judul: "ICE LEMON TEA 1", 
            deskripsi: "posisi pengambilan setengah frame.", 
            kelebihan: "Penataan properti yang rapi dan menarik. Warna nasi goreng yang dihasilkan sangat menggugah selera, dengan pencahayaan yang menonjolkan kilap dari minyak dan tekstur nasi yang jelas. Retouch yang bersih dan natural.", 
            kekurangan: "Beberapa bagian properti seperti bawang dan kerupuk sedikit over-exposure (terlalu terang) karena keterbatasan alat lighting, namun tidak mengganggu fokus utama pada produk nasi goreng." 
        }, // <<< KOMA YANG HILANG ADA DI SINI
        { 
            img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/foto/002.jpg", 
            judul: "ICE LEMON TEA 2", 
            deskripsi: "posisi pengambilan setengah frame.", 
            kelebihan: "Penataan properti yang rapi dan menarik. Warna nasi goreng yang dihasilkan sangat menggugah selera, dengan pencahayaan yang menonjolkan kilap dari minyak dan tekstur nasi yang jelas. Retouch yang bersih dan natural.", 
            kekurangan: "Beberapa bagian properti seperti bawang dan kerupuk sedikit over-exposure (terlalu terang) karena keterbatasan alat lighting, namun tidak mengganggu fokus utama pada produk nasi goreng." 
        }, // <<< KOMA YANG HILANG ADA DI SINI
        { 
            img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/foto/002.jpg", 
            judul: "ICE LEMON TEA 3", 
            deskripsi: "posisi pengambilan setengah frame.", 
            kelebihan: "Penataan properti yang rapi dan menarik. Warna nasi goreng yang dihasilkan sangat menggugah selera, dengan pencahayaan yang menonjolkan kilap dari minyak dan tekstur nasi yang jelas. Retouch yang bersih dan natural.", 
            kekurangan: "Beberapa bagian properti seperti bawang dan kerupuk sedikit over-exposure (terlalu terang) karena keterbatasan alat lighting, namun tidak mengganggu fokus utama pada produk nasi goreng." 
        }
    ];

    const desainData = [
        { 
            img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/desain/desain1.png", 
            judul: "Desain Story Instagram", 
            deskripsi: "Foto hidangan menjadi visual utama dalam desain menu, memberikan gambaran yang jelas dan menggugah selera bagi pelanggan." 
        },
        { 
            img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/desain/desain2.png",
            judul: "Desain Feed Instagram", 
            deskripsi: "Visual yang kuat sangat penting untuk media sosial. Foto berkualitas tinggi dapat meningkatkan engagement dan citra merek secara signifikan." 
        },
        { 
            img: "https://raw.githubusercontent.com/AhmadTaufik24/project-dihidang/main/images/desain/desain3.png", 
            judul: "Desain Menu", 
            deskripsi: "Pada Desain Menu, foto produk berfungsi sebagai 'wajah' yang menarik konsumen untuk membeli dan mencoba." 
        }
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
