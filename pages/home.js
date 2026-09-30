pages.home = [
    // 1. HERO
    {
        section: 'hero',
        title: 'Open Courseware Pemrograman Berorientasi Objek',
        tagline: 'Dari Kelas Pertama hingga Aplikasi Berbasis Objek — Satu Semester, Satu pbo-lab.',
        description: 'Platform belajar terbuka untuk mata kuliah Pemrograman Berorientasi Objek. 16 modul terstruktur memandu mahasiswa membangun pbo-lab — aplikasi JavaScript berbasis objek dengan enkapsulasi, pewarisan, pola desain, GUI, dan pengujian.',
        badges: [
            'JavaScript ES6+',
            'Object-Oriented',
            'Design Patterns',
            '16 Modul',
            'pbo-lab',
            'License: MIT'
        ],
        cta: {
            text: 'Mulai Belajar',
            link: 'learn'
        },
        imgClass: 'di-donat'
    },

    // 2. KEY FEATURES — diambil dari 4 bagian kurikulum pbo.js
    {
        section: 'features',
        items: [
            {
                icon: 'di-code',
                title: 'Fondasi OOP',
                content: 'Paradigma prosedural vs OOP, kelas dan objek, atribut, metode, konstruktor, enkapsulasi, akses modifier, getter dan setter. 4 pertemuan untuk membangun fondasi kelas yang kokoh.',
                linkText: 'Mulai Bagian 1 &raquo;',
                linkTarget: 'learn/modul01'
            },
            {
                icon: 'di-web',
                title: 'Pewarisan & Abstraksi',
                content: 'Inheritance, polymorphism, method overriding, super, abstract class, interface, dan exception handling. Diuji di UTS dengan desain hierarki kelas.',
                linkText: 'Mulai Bagian 2 &raquo;',
                linkTarget: 'learn/modul05'
            },
            {
                icon: 'di-setting',
                title: 'Koleksi, I/O & Pola Desain',
                content: 'Exception handling, Array/Set/Map, generik, File I/O dan serialisasi JSON, pola Singleton, Factory, Observer, serta GUI dengan MVC. Dari kelas menjadi aplikasi utuh.',
                linkText: 'Mulai Bagian 3 &raquo;',
                linkTarget: 'learn/modul09'
            }
        ]
    },

    // 3. KURIKULUM + CARA SITASI
    {
        section: 'article',
        leftCol: {
            subtitle: 'Kurikulum 16 Modul',
            lines: [
                '### Bagian 1: Fondasi OOP',
                '**P1** — Kontrak Kuliah & Pengantar PBO',
                '**P2** — Pengantar PBO, Paradigma & Perbandingan Prosedural',
                '**P3** — Kelas & Objek',
                '**P4** — Enkapsulasi & Akses Modifier',
                '---',
                '### Bagian 2: Pewarisan, Abstraksi & UTS',
                '**P5** — Pewarisan & Polimorfisme',
                '**P6** — Abstraksi & Antarmuka',
                '**P7** — Review & Integrasi P2–P6',
                '**P8** — UTS: Evaluasi Tengah Semester',
                '---',
                '### Bagian 3: Koleksi, I/O & Pola Desain',
                '**P9** — Exception Handling, Koleksi & Generik',
                '**P10** — File I/O & Serialisasi Objek',
                '**P11** — Pola Desain',
                '**P12** — GUI Programming',
                '---',
                '### Bagian 4: Pengujian, Proyek & Evaluasi Akhir',
                '**P13** — Refactoring & Pengujian Perangkat Lunak',
                '**P14** — Proyek Akhir',
                '**P15** — Final Review & Demo P9–P14',
                '**P16/UAS** — Demo Terpadu pbo-lab'
            ]
        },
        rightCol: {
            subtitle: 'Target Proyek & Cara Sitasi',
            lines: [
                '### Target Proyek Akhir Semester',
                'Mahasiswa membangun **pbo-lab** — aplikasi berbasis objek dalam JavaScript dengan struktur berlapis:',
                '```javascript',
                '// Fitur yang wajib berfungsi di UAS:\n// ✅ Model domain (Mahasiswa, MataKuliah, Nilai)\n// ✅ Enkapsulasi dengan private field & validasi\n// ✅ Pewarisan & polimorfisme (abstract class)\n// ✅ Koleksi Map/Set untuk data dinamis\n// ✅ File I/O + serialisasi JSON\n// ✅ Pola desain: Singleton, Factory, Observer\n// ✅ GUI dengan pola MVC\n// ✅ Unit test gaya JUnit + siklus TDD',
                '```',
                '---',
                '### Bobot Penilaian UAS',
                'skill:25%:Fungsionalitas aplikasi (CRUD + GUI):Utama',
                'skill:25%:Kualitas kode & pengujian (unit test):Teknis',
                'skill:20%:Inovasi desain (pola, arsitektur):Inovasi',
                'skill:15%:Dokumentasi & repo (README, API):Profesional',
                'skill:15%:Presentasi & demo aplikasi:Presentasi',
                '---',
                '### How to Cite This Courseware',
                '**Yogi Kristiyanto.** (2026). *OCW-PBO: Open Courseware Pemrograman Berorientasi Objek*. Figshare.'
            ]
        }
    }
];
