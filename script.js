// ============ DATA ============
const DEFAULT_STUDENTS = [
  { nis: "001", nisn: "0123456789", nama: "Adi Saputra", lp: "L", ortu: "Bpk. Sutrisno" },
  { nis: "002", nisn: "0123456790", nama: "Ani Saputri", lp: "P", ortu: "Bpk. Santoso" },
  { nis: "003", nisn: "0123456791", nama: "Budi Santoso", lp: "L", ortu: "Bpk. Bambang" },
  { nis: "004", nisn: "0123456792", nama: "Citra Dewi", lp: "P", ortu: "Bpk. Darmawan" },
  { nis: "005", nisn: "0123456793", nama: "Dodi Pratama", lp: "L", ortu: "Bpk. Hendra" },
  { nis: "006", nisn: "0123456794", nama: "Eka Lestari", lp: "P", ortu: "Bpk. Surya" },
  { nis: "007", nisn: "0123456795", nama: "Fajar Nugroho", lp: "L", ortu: "Bpk. Agus" },
  { nis: "008", nisn: "0123456796", nama: "Gita Puspita", lp: "P", ortu: "Bpk. Joko" },
  { nis: "009", nisn: "0123456797", nama: "Hana Maulida", lp: "P", ortu: "Bpk. Rizal" },
  { nis: "010", nisn: "0123456798", nama: "Irfan Hakim", lp: "L", ortu: "Bpk. Yusuf" },
  { nis: "011", nisn: "0123456799", nama: "Joko Widodo", lp: "L", ortu: "Bpk. Slamet" },
  { nis: "012", nisn: "0123456800", nama: "Kartika Sari", lp: "P", ortu: "Bpk. Suryanto" },
  { nis: "013", nisn: "0123456801", nama: "Lukman Hakim", lp: "L", ortu: "Bpk. Rahim" },
  { nis: "014", nisn: "0123456802", nama: "Maya Anggraini", lp: "P", ortu: "Bpk. Hadi" },
  { nis: "015", nisn: "0123456803", nama: "Nanda Pratama", lp: "L", ortu: "Bpk. Sukarno" },
  { nis: "016", nisn: "0123456804", nama: "Oktaviani Putri", lp: "P", ortu: "Bpk. Wijaya" },
  { nis: "017", nisn: "0123456805", nama: "Putra Perdana", lp: "L", ortu: "Bpk. Rahmat" },
  { nis: "018", nisn: "0123456806", nama: "Qori Amalia", lp: "P", ortu: "Bpk. Fauzi" },
  { nis: "019", nisn: "0123456807", nama: "Rizky Ramadhan", lp: "L", ortu: "Bpk. Arifin" },
  { nis: "020", nisn: "0123456808", nama: "Sinta Bella", lp: "P", ortu: "Bpk. Gunawan" },
  { nis: "021", nisn: "0123456809", nama: "Taufik Hidayat", lp: "L", ortu: "Bpk. Sudirman" },
  { nis: "022", nisn: "0123456810", nama: "Umi Kalsum", lp: "P", ortu: "Bpk. Muslim" },
  { nis: "023", nisn: "0123456811", nama: "Vino Bastian", lp: "L", ortu: "Bpk. Sugeng" },
  { nis: "024", nisn: "0123456812", nama: "Wulan Guritno", lp: "P", ortu: "Bpk. Hasyim" },
  { nis: "025", nisn: "0123456813", nama: "Xavier Putra", lp: "L", ortu: "Bpk. Anton" },
  { nis: "026", nisn: "0123456814", nama: "Yuni Shara", lp: "P", ortu: "Bpk. Syahrul" }
];

let students = [...DEFAULT_STUDENTS];

const mapelList = [
  { kode: "PAI", nama: "Pendidikan Agama Islam" },
  { kode: "PP", nama: "Pendidikan Pancasila" },
  { kode: "BIN", nama: "Bahasa Indonesia" },
  { kode: "MTK", nama: "Matematika" },
  { kode: "IPAS", nama: "IPAS" },
  { kode: "BIG", nama: "Bahasa Inggris" },
  { kode: "PJOK", nama: "PJOK" },
  { kode: "SMUS", nama: "Seni Musik" },
  { kode: "KKA", nama: "Koding & Kecerdasan Artifisial" },
  { kode: "TAHF", nama: "Tahfidz Al-Quran" }
];

const babTP = {
  PAI: [
    { bab: "Bab 1: Menyayangi Anak Yatim", tp: ["PAI-B1-TP1: Membaca Surah At-Tin dengan tartil", "PAI-B1-TP2: Menghafal Surah At-Tin dengan lancar", "PAI-B1-TP3: Menjelaskan isi kandungan Surah At-Tin"] },
    { bab: "Bab 2: Mengenal Nama Allah dan Kitab-Nya", tp: ["PAI-B2-TP1: Memahami makna Asmaul Husna", "PAI-B2-TP2: Memahami tentang kitab-kitab Allah"] },
    { bab: "Bab 3: Aku Anak Saleh", tp: ["PAI-B3-TP1: Berbakti kepada orang tua dan guru", "PAI-B3-TP2: Menghormati orang lain dan sesama"] },
    { bab: "Bab 4: Bulan Ramadhan Penuh Hikmah", tp: ["PAI-B4-TP1: Memahami hikmah berpuasa", "PAI-B4-TP2: Memahami zakat, infaq, dan sedekah"] },
    { bab: "Bab 5: Manusia sebagai Khalifah", tp: ["PAI-B5-TP1: Memahami tugas manusia sebagai khalifah di bumi"] }
  ],
  PP: [
    { bab: "Bab 1: Pancasila dalam Kehidupanku", tp: ["PP-B1-TP1: Menjelaskan makna Pancasila sebagai dasar negara", "PP-B1-TP2: Menerapkan nilai-nilai Pancasila dalam kehidupan"] },
    { bab: "Bab 2: Norma dalam Kehidupanku", tp: ["PP-B2-TP1: Memahami makna norma dalam masyarakat", "PP-B2-TP2: Menerapkan norma dalam kehidupan sehari-hari"] },
    { bab: "Bab 3: Keragaman Budaya Indonesia", tp: ["PP-B3-TP1: Memahami makna Bhinneka Tunggal Ika", "PP-B3-TP2: Menghargai keragaman budaya di sekitar"] },
    { bab: "Bab 4: Mengamalkan Pancasila", tp: ["PP-B4-TP1: Nilai Pancasila sebagai pandangan hidup", "PP-B4-TP2: Menerapkan nilai Pancasila di kehidupan"] }
  ],
  BIN: [
    { bab: "Bab 1: Aku yang Unik", tp: ["BIN-B1-TP1: Mengidentifikasi unsur teks naratif", "BIN-B1-TP2: Membaca teks naratif dengan intonasi tepat", "BIN-B1-TP3: Menceritakan kembali isi teks naratif"] },
    { bab: "Bab 2: Buku Jendela Dunia", tp: ["BIN-B2-TP1: Memahami pesan dan informasi teks", "BIN-B2-TP2: Menulis teks sederhana berdasarkan gagasan"] },
    { bab: "Bab 3: Belajar Berwirausaha", tp: ["BIN-B3-TP1: Memahami teks prosedur sederhana", "BIN-B3-TP2: Menulis teks prosedur sederhana"] },
    { bab: "Bab 4: Menjadi Warga Dunia", tp: ["BIN-B4-TP1: Memahami teks eksplanasi sederhana", "BIN-B4-TP2: Menyajikan informasi dari teks eksplanasi"] }
  ],
  MTK: [
    { bab: "Bab 1: Bilangan Cacah sampai 100.000", tp: ["MTK-B1-TP1: Membaca dan menulis bilangan cacah sampai 100.000", "MTK-B1-TP2: Menentukan nilai tempat bilangan cacah", "MTK-B1-TP3: Membandingkan dan mengurutkan bilangan", "MTK-B1-TP4: Menyelesaikan operasi hitung bilangan cacah"] },
    { bab: "Bab 2: KPK dan FPB", tp: ["MTK-B2-TP1: Menentukan faktor dan kelipatan bilangan", "MTK-B2-TP2: Menentukan KPK dua bilangan", "MTK-B2-TP3: Menentukan FPB dua bilangan", "MTK-B2-TP4: Menyelesaikan masalah KPK dan FPB"] },
    { bab: "Bab 3: Bilangan Pecahan", tp: ["MTK-B3-TP1: Menjelaskan pengertian pecahan dan pecahan senilai", "MTK-B3-TP2: Membandingkan dan mengurutkan pecahan", "MTK-B3-TP3: Menyederhanakan pecahan", "MTK-B3-TP4: Menyelesaikan operasi pecahan"] },
    { bab: "Bab 4: Keliling Bangun Datar", tp: ["MTK-B4-TP1: Menjelaskan pengertian keliling", "MTK-B4-TP2: Menentukan keliling persegi & segitiga", "MTK-B4-TP3: Menentukan keliling bangun gabungan", "MTK-B4-TP4: Menyelesaikan masalah keliling"] },
    { bab: "Bab 5: Luas Daerah Bangun Datar", tp: ["MTK-B5-TP1: Menjelaskan pengertian luas daerah", "MTK-B5-TP2: Menentukan luas persegi & segitiga", "MTK-B5-TP3: Menentukan luas bangun gabungan", "MTK-B5-TP4: Menyelesaikan masalah luas"] },
    { bab: "Bab 6: Sudut", tp: ["MTK-B6-TP1: Mengenal jenis-jenis sudut", "MTK-B6-TP2: Mengukur besar sudut dengan busur", "MTK-B6-TP3: Menggambar sudut dengan besar tertentu", "MTK-B6-TP4: Menyelesaikan masalah terkait sudut"] },
    { bab: "Bab 7: Membandingkan Ciri-Ciri Bangun Datar", tp: ["MTK-B7-TP1: Mengidentifikasi ciri-ciri bangun datar", "MTK-B7-TP2: Membandingkan ciri-ciri bangun datar", "MTK-B7-TP3: Mengelompokkan bangun datar"] },
    { bab: "Bab 8: Data", tp: ["MTK-B8-TP1: Mengumpulkan dan menyajikan data", "MTK-B8-TP2: Menyajikan data dalam diagram", "MTK-B8-TP3: Membaca dan menafsirkan data", "MTK-B8-TP4: Menyelesaikan masalah terkait data"] },
    { bab: "Bab 9: Bilangan Cacah sampai 1.000.000", tp: ["MTK-B9-TP1: Membaca dan menulis bilangan sampai 1.000.000", "MTK-B9-TP2: Menentukan nilai tempat sampai 1.000.000", "MTK-B9-TP3: Membandingkan dan mengurutkan bilangan", "MTK-B9-TP4: Operasi hitung bilangan sampai 1.000.000"] }
  ],
  IPAS: [
    { bab: "Bab 1: Di Mana Indonesia Berada?", tp: ["IPAS-B1-TP1: Letak astronomis dan geografis Indonesia", "IPAS-B1-TP2: Pengaruh letak geografis terhadap iklim", "IPAS-B1-TP3: Posisi Indonesia pada peta dunia"] },
    { bab: "Bab 2: Majulah Daerahku", tp: ["IPAS-B2-TP1: Potensi sumber daya alam dan manusia daerah", "IPAS-B2-TP2: Kegiatan ekonomi masyarakat", "IPAS-B2-TP3: Ide memajukan daerah"] },
    { bab: "Bab 3: Harmoni dalam Ekosistem", tp: ["IPAS-B3-TP1: Menganalisis jaring-jaring makanan", "IPAS-B3-TP2: Mendeskripsikan transformasi energi", "IPAS-B3-TP3: Keseimbangan alam dan cara menjaganya"] },
    { bab: "Bab 4: Air Sumber Kehidupan", tp: ["IPAS-B4-TP1: Menjelaskan siklus air", "IPAS-B4-TP2: Mengidentifikasi sumber air dan kualitasnya", "IPAS-B4-TP3: Menerapkan perilaku hemat air"] },
    { bab: "Bab 5: Daerahku yang Bersejarah", tp: ["IPAS-B5-TP1: Mengenal warisan budaya dan sejarah daerah", "IPAS-B5-TP2: Menghubungkan sejarah dengan kehidupan saat ini", "IPAS-B5-TP3: Menyajikan informasi sejarah daerah"] },
    { bab: "Bab 6: Perubahan pada Diriku", tp: ["IPAS-B6-TP1: Mengidentifikasi perubahan fisik dan psikis pubertas", "IPAS-B6-TP2: Cara menjaga kesehatan pada masa pubertas", "IPAS-B6-TP3: Menerapkan pola hidup sehat"] },
    { bab: "Bab 7: Bermain dengan Cahaya", tp: ["IPAS-B7-TP1: Menjelaskan sifat-sifat cahaya", "IPAS-B7-TP2: Mendemonstrasikan proses penglihatan manusia", "IPAS-B7-TP3: Menerapkan sifat cahaya di kehidupan"] },
    { bab: "Bab 8: Ramai karena Bunyi", tp: ["IPAS-B8-TP1: Menjelaskan sifat-sifat bunyi", "IPAS-B8-TP2: Mendemonstrasikan proses pendengaran manusia", "IPAS-B8-TP3: Mengidentifikasi sumber bunyi"] }
  ],
  BIG: [
    { bab: "Bab 1: Greetings and Leave Takings", tp: ["BIG-B1-TP1: Memahami ungkapan salam dan perpisahan", "BIG-B1-TP2: Mengucapkan salam dan perpisahan"] },
    { bab: "Bab 2: Introducing Self and Others", tp: ["BIG-B2-TP1: Memperkenalkan diri sendiri", "BIG-B2-TP2: Memperkenalkan orang lain"] },
    { bab: "Bab 3: Describing People", tp: ["BIG-B3-TP1: Menyebutkan ciri fisik dan sifat seseorang", "BIG-B3-TP2: Mendeskripsikan teman/orang lain"] },
    { bab: "Bab 4: Things in the Classroom and School", tp: ["BIG-B4-TP1: Menyebutkan nama benda di sekolah", "BIG-B4-TP2: Menjelaskan fungsi benda dalam kalimat"] }
  ],
  PJOK: [
    { bab: "Bab 1: Permainan Bola Besar", tp: ["PJOK-B1-TP1: Mempraktikkan teknik dasar sepak bola", "PJOK-B1-TP2: Kombinasi gerak menendang dan menggiring", "PJOK-B1-TP3: Menerapkan kerja sama dalam tim"] },
    { bab: "Bab 2: Permainan Bola Kecil", tp: ["PJOK-B2-TP1: Mempraktikkan gerak dasar bola kecil", "PJOK-B2-TP2: Menerapkan strategi sederhana"] },
    { bab: "Bab 3: Atletik", tp: ["PJOK-B3-TP1: Mempraktikkan gerak lokomotor", "PJOK-B3-TP2: Memodifikasi keterampilan gerak lokomotor"] },
    { bab: "Bab 4: Senam Lantai", tp: ["PJOK-B4-TP1: Mempraktikkan gerakan senam lantai dasar", "PJOK-B4-TP2: Menerapkan keselamatan dalam senam"] },
    { bab: "Bab 5: Gerak Berirama", tp: ["PJOK-B5-TP1: Koordinasi gerakan tubuh mengikuti irama", "PJOK-B5-TP2: Melatih langkah kaki dan ayunan lengan", "PJOK-B5-TP3: Meningkatkan kreativitas gerak berirama"] }
  ],
  SMUS: [
    { bab: "Bab 1: Mengenal Notasi dan Tangga Nada", tp: ["SMUS-B1-TP1: Mengenal notasi angka sederhana", "SMUS-B1-TP2: Menyanyikan lagu dengan irama tepat", "SMUS-B1-TP3: Mengenal not angka dan not balok"] },
    { bab: "Bab 2: Mengenal Jenis Suara Manusia", tp: ["SMUS-B2-TP1: Membedakan jenis-jenis range suara", "SMUS-B2-TP2: Membedakan bunyi alat musik", "SMUS-B2-TP3: Mendeskripsikan alat musik dalam komposisi"] },
    { bab: "Bab 3: Bermain Musik dan Bernyanyi", tp: ["SMUS-B3-TP1: Memainkan alat musik perkusi", "SMUS-B3-TP2: Menyanyikan lagu daerah pilihan"] },
    { bab: "Bab 4: Apresiasi Musik", tp: ["SMUS-B4-TP1: Memberi kesan atas praktik bermusik", "SMUS-B4-TP2: Mendokumentasikan musik yang dialami"] }
  ],
  KKA: [
    { bab: "Bab 1: Berpikir Komputasional", tp: ["KKA-B1-TP1: Mengidentifikasi masalah sederhana sehari-hari", "KKA-B1-TP2: Menyusun langkah penyelesaian masalah", "KKA-B1-TP3: Menuliskan instruksi sederhana"] },
    { bab: "Bab 2: Mengenal Teknologi Digital", tp: ["KKA-B2-TP1: Contoh teknologi digital dan manfaatnya", "KKA-B2-TP2: Dampak positif dan negatif teknologi", "KKA-B2-TP3: Komponen dasar komputer dan fungsinya"] },
    { bab: "Bab 3: Keamanan Informasi Pribadi", tp: ["KKA-B3-TP1: Menjaga keamanan informasi pribadi", "KKA-B3-TP2: Menggunakan mesin pencari sederhana"] },
    { bab: "Bab 4: Pengenalan Kecerdasan Artifisial", tp: ["KKA-B4-TP1: Memahami konsep KA sederhana", "KKA-B4-TP2: Perbedaan manusia dan komputer"] }
  ],
  TAHF: [
    { bab: "Bab 1: Juz 30 (An-Naba)", tp: ["TAHF-B1-TP1: Menghafal Surah An-Naba ayat 1-20", "TAHF-B1-TP2: Menghafal Surah An-Naba ayat 21-40", "TAHF-B1-TP3: Murojaah dengan tajwid benar"] },
    { bab: "Bab 2: Juz 30 (An-Nazi'at)", tp: ["TAHF-B2-TP1: Menghafal Surah An-Nazi'at ayat 1-26", "TAHF-B2-TP2: Menghafal Surah An-Nazi'at ayat 27-46", "TAHF-B2-TP3: Murojaah dengan tartil"] },
    { bab: "Bab 3: Juz 30 (Abasa)", tp: ["TAHF-B3-TP1: Menghafal Surah Abasa ayat 1-20", "TAHF-B3-TP2: Menghafal Surah Abasa ayat 21-42", "TAHF-B3-TP3: Murojaah dengan tajwid"] },
    { bab: "Bab 4: Juz 30 (At-Takwir)", tp: ["TAHF-B4-TP1: Menghafal Surah At-Takwir ayat 1-14", "TAHF-B4-TP2: Menghafal Surah At-Takwir ayat 15-29", "TAHF-B4-TP3: Murojaah dengan lancar"] },
    { bab: "Bab 5: Juz 30 (Al-Infitar)", tp: ["TAHF-B5-TP1: Menghafal Surah Al-Infitar ayat 1-19", "TAHF-B5-TP2: Murojaah dengan tajwid"] }
  ]
};

const KOMPONEN_LIST = [
  { kode: "TH", nama: "Tugas Harian" }, { kode: "PR", nama: "PR" },
  { kode: "KUI", nama: "Kuis" }, { kode: "PRA", nama: "Praktik" },
  { kode: "SIK", nama: "Sikap" }, { kode: "BIC", nama: "Berbicara" },
  { kode: "MAJ", nama: "Maju" }, { kode: "PRE", nama: "Presentasi" }
];

const DEFAULT_BOBOT = { TH: 0.20, PR: 0.10, KUI: 0.15, PRA: 0.15, SIK: 0.10, BIC: 0.10, MAJ: 0.10, PRE: 0.10 };
const DEFAULT_KKTP = { PAI: 75, PP: 75, BIN: 75, MTK: 75, IPAS: 75, BIG: 70, PJOK: 75, SMUS: 75, KKA: 75, TAHF: 75 };

// Bobot Ujian: Harian 50%, MID 20%, UAS 30%
const BOBOT_UJIAN = { HARIAN: 0.5, MID: 0.2, UAS: 0.3 };

const JENIS_KASUS = [
  { kode: "K01", nama: "Tidak mengerjakan PR", poin: -5, target: "mapel" },
  { kode: "K02", nama: "Tidak mengerjakan Tugas Harian", poin: -3, target: "mapel" },
  { kode: "K03", nama: "Tidak bawa buku", poin: -2, target: "global" },
  { kode: "K04", nama: "Terlambat masuk kelas", poin: -2, target: "global" },
  { kode: "K05", nama: "Bermain/tidak fokus saat KBM", poin: -3, target: "global" },
  { kode: "K06", nama: "Tidak mau maju saat ditunjuk", poin: -5, target: "mapel" },
  { kode: "K07", nama: "Tidak mengumpulkan tugas presentasi", poin: -10, target: "mapel" },
  { kode: "K08", nama: "Mengganggu teman", poin: -5, target: "global" },
  { kode: "K09", nama: "Tidak hafal (Tahfidz)", poin: -10, target: "mapel" },
  { kode: "K10", nama: "Berkata tidak sopan", poin: -15, target: "global" },
  { kode: "K11", nama: "Tidak mengumpulkan tugas proyek", poin: -10, target: "mapel" }
];

const JENIS_REWARD = [
  { kode: "R01", nama: "Aktif bertanya di kelas", poin: 3, target: "global" },
  { kode: "R02", nama: "Menjawab pertanyaan dengan benar", poin: 3, target: "mapel" },
  { kode: "R03", nama: "Membantu teman belajar", poin: 5, target: "global" },
  { kode: "R04", nama: "Mengerjakan tugas dengan baik", poin: 3, target: "mapel" },
  { kode: "R05", nama: "Maju presentasi", poin: 5, target: "mapel" },
  { kode: "R06", nama: "Juara lomba kelas", poin: 10, target: "global" },
  { kode: "R07", nama: "Juara lomba sekolah", poin: 15, target: "global" },
  { kode: "R08", nama: "Juara lomba kecamatan/kota", poin: 20, target: "global" },
  { kode: "R09", nama: "Hafalan lancar (Tahfidz)", poin: 10, target: "mapel" },
  { kode: "R10", nama: "Membantu guru", poin: 3, target: "global" }
];

// ============ STATE ============
const STORAGE_KEY = "raporDigital_ultimate_v1";
const DEFAULT_PASSWORD = "guru2025";

let appData = loadData();
let nilaiData = appData.nilaiData;
let KKTP = appData.kktp || { ...DEFAULT_KKTP };
let BOBOT = appData.bobot || { ...DEFAULT_BOBOT };
let SEMESTER_AKTIF = appData.semester || 1;

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.students) students = data.students;
      if (!data.nilaiData) data.nilaiData = {};
      if (!data.kasus) data.kasus = [];
      if (!data.reward) data.reward = [];
      if (!data.riwayat) data.riwayat = [];
      return data;
    } catch (e) { console.error(e); }
  }
  return { nilaiData: {}, kasus: [], reward: [], riwayat: [], students: [...DEFAULT_STUDENTS], kktp: { ...DEFAULT_KKTP }, bobot: { ...DEFAULT_BOBOT }, password: DEFAULT_PASSWORD, semester: 1 };
}

function saveData() {
  appData.students = students;
  appData.kktp = KKTP;
  appData.bobot = BOBOT;
  appData.semester = SEMESTER_AKTIF;
  appData.nilaiData = nilaiData;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

// ============ UTILITY ============
function hitungRataRata(nilai) {
  const values = Object.values(nilai).filter(v => typeof v === "number" && !isNaN(v));
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}
function getPredikat(nilai) { return nilai >= 90 ? "A" : nilai >= 80 ? "B" : nilai >= 70 ? "C" : "D"; }
function getPredikatClass(nilai) { return nilai >= 90 ? "a" : nilai >= 80 ? "b" : nilai >= 70 ? "c" : "d"; }
function fmt(n) { return n === null || n === undefined || isNaN(n) ? "-" : n; }

function getNilaiAkhirMapel(nis, mapel) {
  const nilaiHarian = nilaiData[nis]?.[mapel] || 0;
  const ujian = nilaiData[nis]?.UJIAN?.[mapel] || {};
  const smt = SEMESTER_AKTIF;
  const mid = smt === 1 ? ujian.MID1 : ujian.MID2;
  const uas = smt === 1 ? ujian.UAS1 : ujian.UAS2;

  if (!mid && !uas) return nilaiHarian;
  if (!nilaiHarian && (mid || uas)) {
    let total = 0, bobot = 0;
    if (mid) { total += mid * BOBOT_UJIAN.MID; bobot += BOBOT_UJIAN.MID; }
    if (uas) { total += uas * BOBOT_UJIAN.UAS; bobot += BOBOT_UJIAN.UAS; }
    return bobot > 0 ? Math.round(total / bobot) : 0;
  }
  let total = nilaiHarian * BOBOT_UJIAN.HARIAN;
  let bobot = BOBOT_UJIAN.HARIAN;
  if (mid) { total += mid * BOBOT_UJIAN.MID; bobot += BOBOT_UJIAN.MID; }
  if (uas) { total += uas * BOBOT_UJIAN.UAS; bobot += BOBOT_UJIAN.UAS; }
  return Math.round(total / bobot);
}

function getKasusSiswa(nis) {
  const list = (appData.kasus || []).filter(k => k.nis === nis);
  let poinGlobal = 0;
  const poinMapel = {};
  list.forEach(k => {
    const jenis = JENIS_KASUS.find(j => j.kode === k.kodeKasus);
    if (!jenis) return;
    if (jenis.target === "mapel" && k.mapel) poinMapel[k.mapel] = (poinMapel[k.mapel] || 0) + jenis.poin;
    else poinGlobal += jenis.poin;
  });
  const total = list.reduce((s, k) => {
    const j = JENIS_KASUS.find(x => x.kode === k.kodeKasus);
    return s + (j ? j.poin : 0);
  }, 0);
  return { list, totalPoin: total, poinGlobal, poinMapel, jumlahKasus: list.length };
}

function getRewardSiswa(nis) {
  const list = (appData.reward || []).filter(k => k.nis === nis);
  let poinGlobal = 0;
  const poinMapel = {};
  list.forEach(k => {
    const jenis = JENIS_REWARD.find(j => j.kode === k.kodeReward);
    if (!jenis) return;
    if (jenis.target === "mapel" && k.mapel) poinMapel[k.mapel] = (poinMapel[k.mapel] || 0) + jenis.poin;
    else poinGlobal += jenis.poin;
  });
  const total = list.reduce((s, k) => {
    const j = JENIS_REWARD.find(x => x.kode === k.kodeReward);
    return s + (j ? j.poin : 0);
  }, 0);
  return { list, totalPoin: total, poinGlobal, poinMapel, jumlahReward: list.length };
}

function getStatusKedisiplinan(nis) {
  const k = getKasusSiswa(nis);
  const r = getRewardSiswa(nis);
  const netto = k.totalPoin + r.totalPoin;
  if (netto >= 0) return { label: "✅ Baik", kelas: "baik" };
  if (netto > -10) return { label: "⚠️ Perlu Perhatian", kelas: "perhatian" };
  return { label: "🚨 Perlu Bimbingan", kelas: "berat" };
}

function getRanking() {
  return students.map(s => {
    const nilaiAkhir = {};
    mapelList.forEach(m => {
      const na = getNilaiAkhirMapel(s.nis, m.kode);
      if (na > 0) nilaiAkhir[m.kode] = na;
    });
    const rataAsli = hitungRataRata(nilaiAkhir);
    const k = getKasusSiswa(s.nis);
    const r = getRewardSiswa(s.nis);
    const netto = k.poinGlobal + r.poinGlobal;
    const rataAkhir = Math.max(75, Math.min(100, rataAsli + netto));
    return {
      ...s,
      nilai: nilaiAkhir,
      rata: rataAkhir,
      rataAsli,
      totalPoinKasus: k.totalPoin,
      totalPoinReward: r.totalPoin,
      jumlahKasus: k.jumlahKasus,
      jumlahReward: r.jumlahReward
    };
  }).sort((a, b) => b.rata - a.rata);
}

function showToast(msg, type = "success") {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.className = "toast show " + type;
  setTimeout(() => t.className = "toast " + type, 2500);
}

function closeModal(e, id) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById(id).style.display = "none";
}

// ============ LOGIN ============
function doLogin() {
  const pass = document.getElementById("loginPassword").value;
  if (pass === (appData.password || DEFAULT_PASSWORD)) {
    sessionStorage.setItem("loggedIn", "1");
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("app").style.display = "block";
    initApp();
  } else {
    document.getElementById("loginError").style.display = "block";
  }
}

function logout() {
  if (!confirm("Keluar?")) return;
  sessionStorage.removeItem("loggedIn");
  location.reload();
}

function gantiPassword() {
  const lama = document.getElementById("passLama").value;
  const baru = document.getElementById("passBaru").value;
  if (lama !== (appData.password || DEFAULT_PASSWORD)) return showToast("Password lama salah!", "error");
  if (baru.length < 4) return showToast("Minimal 4 karakter!", "error");
  appData.password = baru;
  saveData();
  document.getElementById("passLama").value = "";
  document.getElementById("passBaru").value = "";
  showToast("✅ Password diubah!", "success");
}

// ============ TABS ============
function switchTab(tab, btn) {
  document.querySelectorAll(".nav-tab").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  ["rapor", "input", "ujian", "kasus", "reward", "siswa", "leger", "dashboard", "pengaturan"].forEach(t => {
    const el = document.getElementById("tab-" + t);
    if (!el) return;
    if (t === "rapor") el.style.display = (tab === "rapor") ? "grid" : "none";
    else el.style.display = (tab === t) ? "block" : "none";
  });

  if (tab === "input") populateInputSelects();
  if (tab === "ujian") { populateUjianSelects(); renderUjianTable(); }
  if (tab === "kasus") { populateKasusSelects(); renderRekapKasus(); renderLogKasus(); }
  if (tab === "reward") { populateRewardSelects(); renderRekapReward(); renderLogReward(); }
  if (tab === "siswa") renderTabelSiswa();
  if (tab === "leger") renderLeger();
  if (tab === "dashboard") renderDashboard();
  if (tab === "pengaturan") { renderDataInfo(); renderRiwayat(); renderFormKKTP(); renderFormBobot(); updateSemesterButtons(); }
}

// ============ SISWA ============
function renderStudentList() {
  const list = document.getElementById("studentList");
  if (!list) return;
  const ranking = getRanking();
  list.innerHTML = "";
  if (!ranking.length) { list.innerHTML = `<li style="padding:20px;text-align:center;color:var(--gray-500);font-size:13px;">Belum ada siswa.</li>`; return; }
  ranking.forEach((s, idx) => {
    const rank = idx + 1;
    let rc = "rank-badge";
    if (rank === 1) rc += " rank-1";
    else if (rank === 2) rc += " rank-2";
    else if (rank === 3) rc += " rank-3";
    else if (rank <= 5) rc += " rank-top";
    const li = document.createElement("li");
    li.className = "student-item";
    li.dataset.nis = s.nis;
    li.dataset.nama = s.nama.toLowerCase();
    li.innerHTML = `
      <div class="${rc}">${rank}</div>
      <div class="student-info" onclick="showRapor('${s.nis}')" style="cursor:pointer;">
        <div class="student-name">${s.nama}</div>
        <div class="student-score">Nilai: ${s.rata.toFixed(1)} • ${getPredikat(s.rata)}${s.jumlahKasus > 0 ? ' • ⚠️' + s.jumlahKasus : ''}${s.jumlahReward > 0 ? ' • 🏆' + s.jumlahReward : ''}</div>
      </div>
      <div class="student-actions">
        <button class="student-action-btn edit" onclick="event.stopPropagation();openEditSiswa('${s.nis}')">✏️</button>
        <button class="student-action-btn delete" onclick="event.stopPropagation();openHapusSiswa('${s.nis}')">🗑️</button>
      </div>`;
    list.appendChild(li);
  });
}

function filterStudents() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".student-item").forEach(i => {
    i.style.display = i.dataset.nama.includes(q) ? "flex" : "none";
  });
}

function renderTabelSiswa() {
  const el = document.getElementById("tabelSiswaContent");
  if (!el) return;
  const sorted = [...students].sort((a, b) => a.nama.localeCompare(b.nama));
  el.innerHTML = `
    <div class="siswa-table-wrapper"><table class="siswa-table">
      <thead><tr><th>No</th><th>NIS</th><th>NISN</th><th>Nama</th><th>L/P</th><th>Orang Tua</th><th>Aksi</th></tr></thead>
      <tbody>
        ${sorted.map((s, i) => `<tr>
          <td>${i + 1}</td><td>${s.nis}</td><td>${s.nisn}</td>
          <td style="font-weight:600;">${s.nama}</td><td>${s.lp}</td><td>${s.ortu}</td>
          <td>
            <button class="student-action-btn edit" style="opacity:1;" onclick="openEditSiswa('${s.nis}')">✏️</button>
            <button class="student-action-btn delete" style="opacity:1;" onclick="openHapusSiswa('${s.nis}')">🗑️</button>
          </td>
        </tr>`).join("")}
      </tbody>
    </table></div>`;
}

function openTambahSiswa() {
  ["addNis", "addNisn", "addNama", "addOrtu"].forEach(id => document.getElementById(id).value = "");
  document.getElementById("addLp").value = "L";
  document.getElementById("modalTambahSiswa").style.display = "flex";
}

function simpanTambahSiswa() {
  const nis = document.getElementById("addNis").value.trim();
  const nisn = document.getElementById("addNisn").value.trim();
  const nama = document.getElementById("addNama").value.trim();
  const lp = document.getElementById("addLp").value;
  const ortu = document.getElementById("addOrtu").value.trim();
  if (!nis || !nama) return showToast("NIS dan Nama wajib diisi!", "error");
  if (students.some(s => s.nis === nis)) return showToast("NIS sudah digunakan!", "error");
  students.push({ nis, nisn, nama, lp, ortu });
  saveData();
  renderStudentList(); renderTabelSiswa();
  populateInputSelects(); populateUjianSelects(); populateKasusSelects(); populateRewardSelects();
  closeModal(null, "modalTambahSiswa");
  showToast(`✅ Siswa ${nama} ditambahkan!`, "success");
}

function openEditSiswa(nis) {
  const s = students.find(x => x.nis === nis);
  if (!s) return;
  document.getElementById("editNisLama").value = s.nis;
  document.getElementById("editNis").value = s.nis;
  document.getElementById("editNisn").value = s.nisn;
  document.getElementById("editNama").value = s.nama;
  document.getElementById("editLp").value = s.lp;
  document.getElementById("editOrtu").value = s.ortu || "";
  document.getElementById("modalEditSiswa").style.display = "flex";
}

function simpanEditSiswa() {
  const nisLama = document.getElementById("editNisLama").value;
  const nisBaru = document.getElementById("editNis").value.trim();
  const nama = document.getElementById("editNama").value.trim();
  if (!nisBaru || !nama) return showToast("NIS dan Nama wajib!", "error");
  if (nisBaru !== nisLama && students.some(s => s.nis === nisBaru)) return showToast("NIS sudah digunakan!", "error");
  const idx = students.findIndex(s => s.nis === nisLama);
  if (idx === -1) return;
  students[idx] = { nis: nisBaru, nisn: document.getElementById("editNisn").value.trim(), nama, lp: document.getElementById("editLp").value, ortu: document.getElementById("editOrtu").value.trim() };
  if (nisBaru !== nisLama) {
    if (nilaiData[nisLama]) { nilaiData[nisBaru] = nilaiData[nisLama]; delete nilaiData[nisLama]; }
    (appData.kasus || []).forEach(k => { if (k.nis === nisLama) k.nis = nisBaru; });
    (appData.reward || []).forEach(r => { if (r.nis === nisLama) r.nis = nisBaru; });
  }
  saveData();
  renderStudentList(); renderTabelSiswa();
  populateInputSelects(); populateUjianSelects(); populateKasusSelects(); populateRewardSelects();
  closeModal(null, "modalEditSiswa");
  showToast(`✅ Data diubah!`, "success");
}

let hapusNisTarget = null;
function openHapusSiswa(nis) {
  const s = students.find(x => x.nis === nis);
  if (!s) return;
  hapusNisTarget = nis;
  document.getElementById("hapusNamaSiswa").textContent = `"${s.nama}" (NIS: ${s.nis})`;
  document.getElementById("modalHapusSiswa").style.display = "flex";
}

function konfirmasiHapusSiswa() {
  if (!hapusNisTarget) return;
  const s = students.find(x => x.nis === hapusNisTarget);
  const nama = s ? s.nama : "Siswa";
  students = students.filter(x => x.nis !== hapusNisTarget);
  delete nilaiData[hapusNisTarget];
  appData.kasus = (appData.kasus || []).filter(k => k.nis !== hapusNisTarget);
  appData.reward = (appData.reward || []).filter(r => r.nis !== hapusNisTarget);
  saveData();
  renderStudentList(); renderTabelSiswa();
  populateInputSelects(); populateUjianSelects(); populateKasusSelects(); populateRewardSelects();
  const main = document.getElementById("raporView");
  if (main) main.innerHTML = `<div class="empty-state"><div class="empty-icon">📄</div><h2>Pilih Siswa</h2></div>`;
  closeModal(null, "modalHapusSiswa");
  showToast(`🗑️ ${nama} dihapus`, "info");
  hapusNisTarget = null;
}

// ============ RAPOR ============
function getTingkat(nis) {
  const r = getRanking();
  const idx = r.findIndex(s => s.nis === nis);
  if (idx === -1) return "SEDANG";
  const rank = idx + 1;
  if (rank <= 5) return "TINGGI";
  if (rank > r.length - 5) return "RENDAH";
  return "SEDANG";
}

function getMapelLemah(nis, jumlah = 2) {
  const n = nilaiData[nis] || {};
  const only = {};
  Object.entries(n).forEach(([k, v]) => { if (!k.includes("_") && k !== "UJIAN" && typeof v === "number") only[k] = v; });
  return Object.entries(only).sort((a, b) => a[1] - b[1]).slice(0, jumlah).map(([kode, val]) => ({
    nama: mapelList.find(m => m.kode === kode)?.nama || kode, nilai: val
  }));
}

function getDetailMapel(nis, mapel) {
  const tp = nilaiData[nis]?.[mapel + "_TP"] || {};
  const bab = nilaiData[nis]?.[mapel + "_BAB"] || {};
  const daftarBab = babTP[mapel] || [];
  const kktp = KKTP[mapel] || 75;
  return daftarBab.map(bd => {
    const detail = bd.tp.map(tpStr => {
      const key = tpStr.split(":")[0].trim();
      const desc = tpStr.split(":").slice(1).join(":").trim() || tpStr;
      const komp = tp[key] || {};
      let total = 0, totalBobot = 0;
      Object.entries(komp).forEach(([k, v]) => { if (BOBOT[k]) { total += v * BOBOT[k]; totalBobot += BOBOT[k]; } });
      const akhir = totalBobot > 0 ? Math.round(total / totalBobot) : null;
      return { kode: key, deskripsi: desc, nilai: akhir, tercapai: akhir !== null && akhir >= kktp };
    });
    const nilaiBab = bab[bd.bab] || null;
    return { bab: bd.bab, nilaiBab, tercapaiBab: nilaiBab !== null && nilaiBab >= kktp, tp: detail };
  });
}

function generateDeskripsiMapel(nis, mapel) {
  const detail = getDetailMapel(nis, mapel);
  const semua = detail.flatMap(b => b.tp);
  const tercapai = semua.filter(t => t.tercapai);
  const belum = semua.filter(t => t.nilai !== null && !t.tercapai);
  if (!tercapai.length && !belum.length) return "Belum ada nilai yang diinput.";
  let d = "";
  if (tercapai.length) {
    d += `Menunjukkan penguasaan yang baik dalam: ${tercapai.slice(0, 3).map(t => t.deskripsi).join("; ")}`;
    if (tercapai.length > 3) d += `, dan ${tercapai.length - 3} tujuan pembelajaran lainnya`;
    d += ". ";
  }
  if (belum.length) {
    d += `Perlu peningkatan pada: ${belum.slice(0, 2).map(t => t.deskripsi).join("; ")}`;
    if (belum.length > 2) d += `, dan ${belum.length - 2} tujuan lainnya`;
    d += ".";
  } else if (tercapai.length) d += "Pertahankan prestasi!";
  return d;
}

function generateSaran(nis, nama) {
  const tingkat = getTingkat(nis);
  const ml = getMapelLemah(nis, 2);
  const m1 = ml[0]?.nama || "";
  const m2 = ml[1]?.nama || "";
  const SS = {
    TINGGI: [`${nama}, prestasi yang luar biasa! Pertahankan semangat belajar.`, `Luar biasa, ${nama}! Kamu mencapai hasil terbaik di kelas.`, `${nama}, prestasimu sangat membanggakan!`],
    SEDANG: [`${nama}, hasil belajarmu sudah baik. Tingkatkan dengan fokus pada ${m1}.`, `Bagus, ${nama}! Lebih aktif bertanya di kelas ya.`, `Kamu di jalur yang tepat, ${nama}! Fokus pada ${m1} dan ${m2}.`],
    RENDAH: [`${nama}, jangan berkecil hati. Ayo fokus pada ${m1} dan ${m2}.`, `${nama}, kita perbaiki bersama ya.`, `Kamu anak hebat, ${nama}! Nilai bisa ditingkatkan dengan usaha.`]
  };
  const SO = {
    TINGGI: [`Ananda ${nama} menunjukkan prestasi akademik yang sangat membanggakan.`, `Kami bersyukur atas prestasi ${nama}. Terima kasih atas kerja sama Bapak/Ibu.`, `${nama} memiliki potensi luar biasa. Pertimbangkan kegiatan pengayaan.`],
    SEDANG: [`Ananda ${nama} sudah menunjukkan perkembangan baik. Dampingi fokus pada ${m1}.`, `Kami apresiasi kemajuan ${nama}. Sediakan waktu belajar rutin.`, `${nama} berpotensi. Komunikasi dengan guru ${m1}.`],
    RENDAH: [`Ananda ${nama} perlu bimbingan intensif pada ${m1} dan ${m2}.`, `Ananda ${nama} perlu penguatan pada ${m1} dan ${m2}.`, `Mari dampingi ${nama} dengan sabar. Fokus: ${m1}.`]
  };
  const pilih = a => a[Math.floor(Math.random() * a.length)];
  return { tingkat, saranSiswa: pilih(SS[tingkat]), saranOrtu: pilih(SO[tingkat]), mapelLemah: ml };
}

function showRapor(nis) {
  document.querySelectorAll(".student-item").forEach(i => i.classList.remove("active"));
  document.querySelector(`.student-item[data-nis="${nis}"]`)?.classList.add("active");
  const siswa = students.find(s => s.nis === nis);
  if (!siswa) return;

  const nilaiAkhir = {};
  mapelList.forEach(m => {
    const na = getNilaiAkhirMapel(nis, m.kode);
    if (na > 0) nilaiAkhir[m.kode] = na;
  });

  const rataAsli = hitungRataRata(nilaiAkhir);
  const kasus = getKasusSiswa(nis);
  const reward = getRewardSiswa(nis);
  const netto = kasus.poinGlobal + reward.poinGlobal;
  const rata = Math.max(75, Math.min(100, rataAsli + netto));
  const predikat = getPredikat(rata);
  const ranking = getRanking();
  const rank = ranking.findIndex(s => s.nis === nis) + 1;
  const { tingkat, saranSiswa, saranOrtu, mapelLemah } = generateSaran(nis, siswa.nama);
  const statusDisiplin = getStatusKedisiplinan(nis);

  const ekskul = [
    { nama: "Pramuka", nilai: "A", ket: "Aktif dan disiplin" },
    { nama: "Tahfidz", nilai: "A", ket: "Hafalan lancar" }
  ];
  const kokurikuler = {
    proyek: "Kearifan Lokal",
    predikat: tingkat === "TINGGI" ? "Sangat Berkembang" : "Berkembang",
    deskripsi: `${siswa.nama} menunjukkan kemampuan bergotong royong dan kreatif.`
  };

  let totalTP = 0, tercapaiTP = 0, belumTP = 0;
  mapelList.forEach(m => {
    getDetailMapel(nis, m.kode).forEach(b => b.tp.forEach(t => {
      if (t.nilai !== null) { totalTP++; if (t.tercapai) tercapaiTP++; else belumTP++; }
    }));
  });

  const main = document.getElementById("raporView");
  main.innerHTML = `
    <div class="rapor-card">
      <div class="rapor-header">
        <h2>📄 Rapor Hasil Belajar</h2>
        <p>SDN 09 Kota Bengkulu — Kelas 5A — Semester ${SEMESTER_AKTIF} — TA 2025/2026</p>
      </div>
      <div class="rapor-identity">
        <div class="identity-item"><span class="identity-label">Nama Siswa</span><span class="identity-value">${siswa.nama}</span></div>
        <div class="identity-item"><span class="identity-label">NIS / NISN</span><span class="identity-value">${siswa.nis} / ${siswa.nisn}</span></div>
        <div class="identity-item"><span class="identity-label">Kelas / Fase</span><span class="identity-value">5A / Fase C</span></div>
        <div class="identity-item"><span class="identity-label">Wali Kelas</span><span class="identity-value">Mahyudi, M.Pd</span></div>
      </div>

      <div class="tp-stats">
        <div class="tp-stat-item"><div class="tp-stat-label">Total TP</div><div class="tp-stat-value">${totalTP}</div></div>
        <div class="tp-stat-item success"><div class="tp-stat-label">✓ Tercapai</div><div class="tp-stat-value">${tercapaiTP}</div></div>
        <div class="tp-stat-item warning"><div class="tp-stat-label">⚠ Perlu Peningkatan</div><div class="tp-stat-value">${belumTP}</div></div>
      </div>

      <div style="padding:20px 32px;">
        <div class="kasus-info-box ${netto < 0 ? 'ada-kasus' : 'aman'}">
          <div>
            <div class="kasus-info-label">📋 Kedisiplinan & Prestasi</div>
            <div class="kasus-info-value ${netto < 0 ? 'merah' : 'hijau'}">
              Kasus: ${kasus.totalPoin} (${kasus.jumlahKasus}x) • Reward: +${reward.totalPoin} (${reward.jumlahReward}x) • Netto: ${netto}
            </div>
          </div>
          <div style="text-align:right;">
            <div class="kasus-info-label">Status</div>
            <div style="margin-top:6px;"><span class="kasus-status-pill ${statusDisiplin.kelas}">${statusDisiplin.label}</span></div>
          </div>
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">Nilai Akademik & Capaian Kompetensi</h3>
        ${mapelList.map((m, i) => {
          const detail = getDetailMapel(nis, m.kode);
          const nilaiMapel = nilaiAkhir[m.kode];
          const nilaiHarian = nilaiData[nis]?.[m.kode];
          const ujian = nilaiData[nis]?.UJIAN?.[m.kode] || {};
          const deskripsi = generateDeskripsiMapel(nis, m.kode);
          const adaNilai = detail.some(b => b.tp.some(t => t.nilai !== null));
          return `
            <div class="mapel-detail-card">
              <div class="mapel-detail-header" onclick="toggleMapelDetail(${i})">
                <div class="mapel-detail-left">
                  <div class="mapel-detail-no">${i + 1}</div>
                  <div>
                    <div class="mapel-detail-nama">${m.nama}</div>
                    <div class="mapel-detail-capaian">${adaNilai ? 'Klik untuk detail ▾' : 'Belum ada nilai'}</div>
                  </div>
                </div>
                <div class="mapel-detail-right">
                  <div class="mapel-detail-nilai">${fmt(nilaiMapel)}</div>
                  <span class="predikat predikat-${getPredikat(nilaiMapel || 0)}">${getPredikat(nilaiMapel || 0)}</span>
                </div>
              </div>
              <div class="ujian-info-row">
                <div><b>Harian:</b> <span style="font-family:'Poppins';font-weight:800;color:var(--primary);font-size:14px;">${fmt(nilaiHarian)}</span></div>
                <div><b>MID S1:</b> ${fmt(ujian.MID1)}</div>
                <div><b>UAS S1:</b> ${fmt(ujian.UAS1)}</div>
                <div><b>MID S2:</b> ${fmt(ujian.MID2)}</div>
                <div><b>UAS S2:</b> ${fmt(ujian.UAS2)}</div>
              </div>
              <div class="mapel-detail-deskripsi"><b>Deskripsi:</b> ${deskripsi}</div>
              <div class="mapel-detail-body" id="detail-${i}" style="display:none;">
                ${detail.map(b => `
                  <div class="bab-detail">
                    <div class="bab-detail-header">
                      <span class="bab-title">📖 ${b.bab}</span>
                      <span class="bab-nilai ${b.tercapaiBab ? 'tercapai' : (b.nilaiBab ? 'belum' : '')}">${b.nilaiBab !== null ? `Nilai Bab: ${b.nilaiBab}` : 'Belum dinilai'}</span>
                    </div>
                    <div class="tp-list">
                      ${b.tp.map(t => `
                        <div class="tp-item ${t.tercapai ? 'tercapai' : (t.nilai !== null ? 'belum' : 'kosong')}">
                          <div class="tp-status">${t.tercapai ? '✓' : (t.nilai !== null ? '✗' : '○')}</div>
                          <div class="tp-deskripsi"><span class="tp-kode">${t.kode}</span>${t.deskripsi}</div>
                          <div class="tp-nilai-box">${t.nilai !== null ? `<b>${t.nilai}</b>` : '<i>-</i>'}</div>
                        </div>`).join("")}
                    </div>
                  </div>`).join("")}
              </div>
            </div>`;
        }).join("")}
        <div class="nilai-summary">
          <div class="summary-card"><div class="summary-label">Rata-rata</div><div class="summary-value">${rata.toFixed(1)}</div></div>
          <div class="summary-card"><div class="summary-label">Predikat</div><div class="summary-value">${predikat}</div></div>
          <div class="summary-card highlight"><div class="summary-label">Ranking</div><div class="summary-value">#${rank}</div></div>
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">Kokurikuler (P5)</h3>
        <div class="info-list">
          <div class="info-item"><span class="info-item-label">Proyek: ${kokurikuler.proyek}</span><span class="info-item-value">${kokurikuler.predikat}</span></div>
        </div>
        <p style="margin-top:12px;font-size:13px;color:var(--gray-500);font-style:italic;">"${kokurikuler.deskripsi}"</p>
      </div>

      <div class="section">
        <h3 class="section-title">Ekstrakurikuler</h3>
        <div class="info-list">
          ${ekskul.map(e => `<div class="info-item"><span class="info-item-label">${e.nama}</span><span class="info-item-value">${e.nilai} — ${e.ket}</span></div>`).join("")}
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">Catatan Wali Kelas</h3>
        <div class="saran-box ${tingkat.toLowerCase()}"><div class="saran-label">🌟 Saran untuk Siswa</div><p class="saran-text">"${saranSiswa}"</p></div>
        <div class="saran-box ${tingkat.toLowerCase()}"><div class="saran-label">👨‍👩‍👧 Saran untuk Orang Tua</div><p class="saran-text">"${saranOrtu}"</p></div>
        ${mapelLemah.length ? `<div style="margin-top:16px;"><div class="saran-label" style="color:var(--danger);">📌 Perlu Ditingkatkan</div><div class="mapel-lemah">${mapelLemah.map(m => `<span class="badge-lemah">${m.nama} (${m.nilai})</span>`).join("")}</div></div>` : ""}
      </div>

      <div class="ttd-section">
        <div class="ttd-box"><div><div class="ttd-label">Mengetahui,</div><div class="ttd-label">Kepala Sekolah</div></div><div><span class="ttd-name">(.....................)</span></div></div>
        <div class="ttd-box"><div><div class="ttd-label">Wali Kelas 5A</div></div><div><span class="ttd-name">Mahyudi, M.Pd</span></div></div>
      </div>
    </div>`;
}

function toggleMapelDetail(i) {
  const el = document.getElementById("detail-" + i);
  if (el) el.style.display = el.style.display === "none" ? "block" : "none";
}

// ============ INPUT NILAI ============
function populateInputSelects() {
  const ss = document.getElementById("inputSiswa");
  if (ss) {
    const cur = ss.value;
    ss.innerHTML = '<option value="">-- Pilih Siswa --</option>';
    [...students].sort((a, b) => a.nama.localeCompare(b.nama)).forEach(s => {
      const o = document.createElement("option"); o.value = s.nis; o.textContent = `${s.nis} — ${s.nama}`; ss.appendChild(o);
    });
    ss.value = cur;
  }
  const ms = document.getElementById("inputMapel");
  if (ms && ms.options.length <= 1) {
    mapelList.forEach(m => { const o = document.createElement("option"); o.value = m.kode; o.textContent = m.nama; ms.appendChild(o); });
  }
}

function updateBabOptions() {
  const mapel = document.getElementById("inputMapel").value;
  const bs = document.getElementById("inputBab");
  bs.innerHTML = '<option value="">-- Pilih Bab --</option>';
  document.getElementById("tpTableContainer").style.display = "none";
  document.getElementById("emptyTP").style.display = "block";
  if (!mapel || !babTP[mapel]) return;
  babTP[mapel].forEach(b => { const o = document.createElement("option"); o.value = b.bab; o.textContent = b.bab; bs.appendChild(o); });
}

function renderTPTable() {
  const nis = document.getElementById("inputSiswa").value;
  const mapel = document.getElementById("inputMapel").value;
  const bab = document.getElementById("inputBab").value;
  const container = document.getElementById("tpTableContainer");
  const empty = document.getElementById("emptyTP");
  const table = document.getElementById("tpTable");
  if (!nis || !mapel || !bab) { container.style.display = "none"; empty.style.display = "block"; return; }
  const bd = babTP[mapel]?.find(b => b.bab === bab);
  if (!bd) { container.style.display = "none"; empty.style.display = "block"; return; }
  const saved = nilaiData[nis]?.[mapel + "_TP"] || {};

  let html = `<thead><tr>
    <th class="tp-col-no">No</th>
    <th class="tp-col-tp">Tujuan Pembelajaran</th>
    ${KOMPONEN_LIST.map(k => `<th class="tp-col-nilai">${k.kode}</th>`).join("")}
    <th class="tp-col-akhir">Nilai TP</th>
    <th class="tp-col-status">Status</th>
  </tr></thead><tbody>`;

  bd.tp.forEach((tp, idx) => {
    const key = tp.split(":")[0].trim();
    const desc = tp.split(":").slice(1).join(":").trim();
    const s = saved[key] || {};
    html += `<tr>
      <td class="tp-col-no"><div>${idx + 1}</div></td>
      <td class="tp-col-tp"><div class="tp-kode-badge">${key}</div><div class="tp-deskripsi-input">${desc}</div></td>
      ${KOMPONEN_LIST.map(k => {
        const v = s[k.kode] || "";
        return `<td><input type="number" class="tp-input ${v ? 'filled' : ''}" min="0" max="100" placeholder="-" data-tp="${key}" data-komponen="${k.kode}" value="${v}" oninput="updateNilaiTP(this)"></td>`;
      }).join("")}
      <td><span class="tp-nilai-akhir" id="akhir-${key}">-</span></td>
      <td><span class="tp-status-badge" id="status-${key}">—</span></td>
    </tr>`;
  });
  html += `</tbody>`;
  table.innerHTML = html;
  container.style.display = "block";
  empty.style.display = "none";
  bd.tp.forEach(tp => hitungNilaiTP(tp.split(":")[0].trim()));
}

function hitungNilaiTP(key) {
  const inputs = document.querySelectorAll(`input[data-tp="${key}"]`);
  let total = 0, tb = 0;
  inputs.forEach(inp => {
    const v = parseFloat(inp.value);
    if (!isNaN(v)) { total += v * BOBOT[inp.dataset.komponen]; tb += BOBOT[inp.dataset.komponen]; inp.classList.add("filled"); }
    else inp.classList.remove("filled");
  });
  const el = document.getElementById("akhir-" + key);
  const st = document.getElementById("status-" + key);
  const mapel = document.getElementById("inputMapel").value;
  const kktp = KKTP[mapel] || 75;
  if (tb > 0) {
    const akhir = Math.round(total / tb);
    el.textContent = akhir;
    el.style.background = akhir >= 90 ? "#dcfce7" : akhir >= 80 ? "#dbeafe" : akhir >= 70 ? "#fef3c7" : "#fee2e2";
    el.style.color = akhir >= 90 ? "#16a34a" : akhir >= 80 ? "#2563eb" : akhir >= 70 ? "#f59e0b" : "#dc2626";
    if (akhir >= kktp) { st.textContent = "Tercapai"; st.className = "tp-status-badge tercapai"; }
    else { st.textContent = "Perlu Tingkatkan"; st.className = "tp-status-badge belum"; }
  } else {
    el.textContent = "-"; el.style.background = ""; el.style.color = "";
    st.textContent = "—"; st.className = "tp-status-badge";
  }
}

function updateNilaiTP(input) { hitungNilaiTP(input.dataset.tp); }

function simpanSemuaNilai() {
  const nis = document.getElementById("inputSiswa").value;
  const mapel = document.getElementById("inputMapel").value;
  const bab = document.getElementById("inputBab").value;
  if (!nis || !mapel || !bab) return showToast("Lengkapi pilihan!", "error");
  const bd = babTP[mapel]?.find(b => b.bab === bab);
  if (!bd) return;
  if (!nilaiData[nis]) nilaiData[nis] = {};
  if (!nilaiData[nis][mapel + "_TP"]) nilaiData[nis][mapel + "_TP"] = {};
  if (!nilaiData[nis][mapel + "_BAB"]) nilaiData[nis][mapel + "_BAB"] = {};
  let count = 0, arr = [];
  bd.tp.forEach(tp => {
    const key = tp.split(":")[0].trim();
    const inputs = document.querySelectorAll(`input[data-tp="${key}"]`);
    const komp = {}; let ada = false;
    inputs.forEach(i => { const v = parseFloat(i.value); if (!isNaN(v)) { komp[i.dataset.komponen] = v; ada = true; } });
    if (ada) {
      nilaiData[nis][mapel + "_TP"][key] = komp;
      count++;
      const v = parseInt(document.getElementById("akhir-" + key).textContent);
      if (!isNaN(v)) arr.push(v);
    }
  });
  if (arr.length) {
    const rataBab = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
    nilaiData[nis][mapel + "_BAB"][bab] = rataBab;
    const all = Object.values(nilaiData[nis][mapel + "_BAB"]);
    if (all.length) nilaiData[nis][mapel] = Math.round(all.reduce((a, b) => a + b, 0) / all.length);
  }
  if (!appData.riwayat) appData.riwayat = [];
  appData.riwayat.unshift({ waktu: new Date().toISOString(), nis, mapel, bab, jumlahTP: count, aksi: "input-tp" });
  if (appData.riwayat.length > 100) appData.riwayat = appData.riwayat.slice(0, 100);
  saveData();
  renderStudentList();
  showToast(`✅ ${count} TP disimpan!`, "success");
}

function resetTPTable() {
  if (!confirm("Reset nilai di tabel?")) return;
  document.querySelectorAll(".tp-input").forEach(i => { i.value = ""; i.classList.remove("filled"); });
  document.querySelectorAll(".tp-nilai-akhir").forEach(e => { e.textContent = "-"; e.style.background = ""; e.style.color = ""; });
  document.querySelectorAll(".tp-status-badge").forEach(e => { e.textContent = "—"; e.className = "tp-status-badge"; });
}

// ============ UJIAN ============
function populateUjianSelects() {
  const ms = document.getElementById("ujianMapel");
  if (ms && ms.options.length <= 1) {
    mapelList.forEach(m => { const o = document.createElement("option"); o.value = m.kode; o.textContent = m.nama; ms.appendChild(o); });
  }
}

function renderUjianTable() {
  const mapel = document.getElementById("ujianMapel").value;
  const container = document.getElementById("ujianTableContainer");
  const empty = document.getElementById("emptyUjian");
  const table = document.getElementById("ujianTable");
  if (!mapel) { container.style.display = "none"; empty.style.display = "block"; return; }

  const sorted = [...students].sort((a, b) => a.nama.localeCompare(b.nama));
  let html = `<thead><tr>
    <th class="tp-col-no">No</th>
    <th class="tp-col-tp" style="text-align:left;">Nama Siswa</th>
    <th class="tp-col-nilai">MID S1</th>
    <th class="tp-col-nilai">UAS S1</th>
    <th class="tp-col-nilai">MID S2</th>
    <th class="tp-col-nilai">UAS S2</th>
    <th class="tp-col-akhir">Rata Ujian</th>
  </tr></thead><tbody>`;

  sorted.forEach((s, idx) => {
    const u = nilaiData[s.nis]?.UJIAN?.[mapel] || {};
    html += `<tr>
      <td class="tp-col-no"><div>${idx + 1}</div></td>
      <td class="tp-col-tp" style="text-align:left;">
        <div style="font-weight:600;">${s.nama}</div>
        <div style="font-size:11px;color:var(--gray-500);">NIS: ${s.nis}</div>
      </td>
      <td><input type="number" class="tp-input ${u.MID1 ? 'filled' : ''}" min="0" max="100" placeholder="-" data-nis="${s.nis}" data-mapel="${mapel}" data-jenis="MID1" value="${u.MID1 || ''}" oninput="hitungRataUjian('${s.nis}','${mapel}')"></td>
      <td><input type="number" class="tp-input ${u.UAS1 ? 'filled' : ''}" min="0" max="100" placeholder="-" data-nis="${s.nis}" data-mapel="${mapel}" data-jenis="UAS1" value="${u.UAS1 || ''}" oninput="hitungRataUjian('${s.nis}','${mapel}')"></td>
      <td><input type="number" class="tp-input ${u.MID2 ? 'filled' : ''}" min="0" max="100" placeholder="-" data-nis="${s.nis}" data-mapel="${mapel}" data-jenis="MID2" value="${u.MID2 || ''}" oninput="hitungRataUjian('${s.nis}','${mapel}')"></td>
      <td><input type="number" class="tp-input ${u.UAS2 ? 'filled' : ''}" min="0" max="100" placeholder="-" data-nis="${s.nis}" data-mapel="${mapel}" data-jenis="UAS2" value="${u.UAS2 || ''}" oninput="hitungRataUjian('${s.nis}','${mapel}')"></td>
      <td><span class="tp-nilai-akhir" id="ujian-avg-${s.nis}">-</span></td>
    </tr>`;
  });
  html += `</tbody>`;
  table.innerHTML = html;
  container.style.display = "block";
  empty.style.display = "none";
  sorted.forEach(s => hitungRataUjian(s.nis, mapel));
}

function hitungRataUjian(nis, mapel) {
  const inputs = document.querySelectorAll(`input[data-nis="${nis}"][data-mapel="${mapel}"]`);
  let total = 0, count = 0;
  inputs.forEach(inp => {
    const v = parseFloat(inp.value);
    if (!isNaN(v)) { total += v; count++; inp.classList.add("filled"); }
    else inp.classList.remove("filled");
  });
  const el = document.getElementById("ujian-avg-" + nis);
  if (el) {
    if (count > 0) {
      const avg = Math.round(total / count);
      el.textContent = avg;
      el.style.background = avg >= 90 ? "#dcfce7" : avg >= 80 ? "#dbeafe" : avg >= 70 ? "#fef3c7" : "#fee2e2";
      el.style.color = avg >= 90 ? "#16a34a" : avg >= 80 ? "#2563eb" : avg >= 70 ? "#f59e0b" : "#dc2626";
    } else {
      el.textContent = "-"; el.style.background = ""; el.style.color = "";
    }
  }
}

function simpanSemuaUjian() {
  const mapel = document.getElementById("ujianMapel").value;
  if (!mapel) return showToast("Pilih mapel!", "error");
  const inputs = document.querySelectorAll(`input[data-mapel="${mapel}"]`);
  const byNis = {};
  inputs.forEach(inp => {
    const nis = inp.dataset.nis;
    const jenis = inp.dataset.jenis;
    const v = parseFloat(inp.value);
    if (!byNis[nis]) byNis[nis] = {};
    if (!isNaN(v)) byNis[nis][jenis] = v;
  });
  let count = 0;
  Object.entries(byNis).forEach(([nis, ujian]) => {
    if (!nilaiData[nis]) nilaiData[nis] = {};
    if (!nilaiData[nis].UJIAN) nilaiData[nis].UJIAN = {};
    if (Object.keys(ujian).length > 0) {
      nilaiData[nis].UJIAN[mapel] = ujian;
      count++;
    }
  });
  if (!appData.riwayat) appData.riwayat = [];
  const mn = mapelList.find(m => m.kode === mapel)?.nama || mapel;
  appData.riwayat.unshift({ waktu: new Date().toISOString(), aksi: "input-ujian", detail: `Input ujian ${mn} untuk ${count} siswa` });
  if (appData.riwayat.length > 100) appData.riwayat = appData.riwayat.slice(0, 100);
  saveData();
  renderStudentList();
  showToast(`✅ Nilai ujian ${mn} disimpan!`, "success");
}

// ============ KASUS ============
function populateKasusSelects() {
  const ss = document.getElementById("kasusSiswa");
  if (ss) {
    const cur = ss.value;
    ss.innerHTML = '<option value="">-- Pilih Siswa --</option>';
    [...students].sort((a, b) => a.nama.localeCompare(b.nama)).forEach(s => {
      const o = document.createElement("option"); o.value = s.nis; o.textContent = `${s.nis} — ${s.nama}`; ss.appendChild(o);
    });
    ss.value = cur;
  }
  const ks = document.getElementById("kasusKode");
  if (ks && ks.options.length <= 1) {
    JENIS_KASUS.forEach(k => { const o = document.createElement("option"); o.value = k.kode; o.textContent = `${k.kode} — ${k.nama} (${k.poin})`; ks.appendChild(o); });
  }
  const ms = document.getElementById("kasusMapel");
  if (ms && ms.options.length <= 1) {
    mapelList.forEach(m => { const o = document.createElement("option"); o.value = m.kode; o.textContent = m.nama; ms.appendChild(o); });
  }
  const t = document.getElementById("kasusTanggal");
  if (t && !t.value) t.value = new Date().toISOString().slice(0, 10);
}

function updateKasusPreview() {
  const kode = document.getElementById("kasusKode").value;
  const mapel = document.getElementById("kasusMapel").value;
  const p = document.getElementById("kasusPreview");
  if (!kode) { p.style.display = "none"; return; }
  const j = JENIS_KASUS.find(k => k.kode === kode);
  if (!j) { p.style.display = "none"; return; }
  const mn = mapel ? mapelList.find(m => m.kode === mapel)?.nama : "Global";
  document.getElementById("kasusPreviewDetail").innerHTML = `<b>${j.nama}</b> → <b>${j.target === "mapel" ? mn : "Nilai Rapor Akhir"}</b>`;
  document.getElementById("kasusPreviewPoin").textContent = j.poin;
  p.style.display = "block";
}

function simpanKasus() {
  const nis = document.getElementById("kasusSiswa").value;
  const tanggal = document.getElementById("kasusTanggal").value;
  const kode = document.getElementById("kasusKode").value;
  const mapel = document.getElementById("kasusMapel").value;
  const ket = document.getElementById("kasusKet").value.trim();
  if (!nis || !tanggal || !kode) return showToast("Lengkapi data!", "error");
  const j = JENIS_KASUS.find(k => k.kode === kode);
  if (j.target === "mapel" && !mapel) return showToast("Pilih mapel!", "error");
  if (!appData.kasus) appData.kasus = [];
  appData.kasus.unshift({
    id: "k_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
    tanggal, nis, nama: students.find(s => s.nis === nis)?.nama || "",
    kodeKasus: kode, jenisKasus: j.nama, mapel: mapel || "", keterangan: ket, poin: j.poin, target: j.target
  });
  saveData();
  renderRekapKasus(); renderLogKasus(); renderStudentList();
  resetFormKasus();
  showToast(`⚠️ Kasus dicatat (${j.poin} poin)`, "info");
}

function resetFormKasus() {
  ["kasusSiswa", "kasusKode", "kasusMapel", "kasusKet"].forEach(id => document.getElementById(id).value = "");
  document.getElementById("kasusTanggal").value = new Date().toISOString().slice(0, 10);
  document.getElementById("kasusPreview").style.display = "none";
}

function renderRekapKasus() {
  const el = document.getElementById("rekapKasusContent");
  if (!el) return;
  const data = students.map(s => {
    const k = getKasusSiswa(s.nis);
    return { nis: s.nis, nama: s.nama, totalPoin: k.totalPoin, poinGlobal: k.poinGlobal, jumlah: k.jumlahKasus, status: getStatusKedisiplinan(s.nis) };
  }).filter(d => d.jumlah > 0).sort((a, b) => a.totalPoin - b.totalPoin);
  if (!data.length) {
    el.innerHTML = `<div style="padding:30px;text-align:center;background:var(--success-light);border-radius:12px;border:1.5px dashed var(--success);"><div style="font-size:40px;">🎉</div><div style="font-weight:700;color:var(--success);">Tidak Ada Pelanggaran!</div></div>`;
    return;
  }
  el.innerHTML = `<table class="rekap-kasus-table"><thead><tr><th>Nama</th><th>Jml</th><th>Poin Global</th><th>Total</th><th>Status</th><th>Aksi</th></tr></thead><tbody>
    ${data.map(d => `<tr>
      <td style="font-weight:600;">${d.nama}</td>
      <td>${d.jumlah}</td>
      <td>${d.poinGlobal}</td>
      <td><span class="kasus-poin-badge ${d.totalPoin === 0 ? 'safe' : d.totalPoin > -10 ? 'warning' : ''}">${d.totalPoin}</span></td>
      <td><span class="kasus-status-pill ${d.status.kelas}">${d.status.label}</span></td>
      <td><button class="student-action-btn" style="opacity:1;" onclick="renderLogKasus('${d.nis}')">👁️</button></td>
    </tr>`).join("")}</tbody></table>`;
}

function renderLogKasus(filterNis = null) {
  const el = document.getElementById("logKasusContent");
  if (!el) return;
  let list = appData.kasus || [];
  if (filterNis) list = list.filter(k => k.nis === filterNis);
  if (!list.length) { el.innerHTML = `<p style="font-size:13px;color:var(--gray-500);text-align:center;padding:20px;">Belum ada catatan kasus.</p>`; return; }
  el.innerHTML = `<div class="log-kasus-list">${list.slice(0, 30).map(k => {
    const tgl = new Date(k.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
    const j = JENIS_KASUS.find(x => x.kode === k.kodeKasus) || {};
    const mn = k.mapel ? mapelList.find(m => m.kode === k.mapel)?.nama : null;
    return `<div class="log-kasus-item">
      <div class="log-kasus-icon">⚠️</div>
      <div class="log-kasus-info">
        <div class="log-kasus-nama">${k.nama}</div>
        <div class="log-kasus-detail"><b>${j.nama}</b> ${mn ? '• ' + mn : '• Global'}<br>📅 ${tgl}${k.keterangan ? ' • "' + k.keterangan + '"' : ''}</div>
      </div>
      <div class="log-kasus-poin">${j.poin}</div>
      <div class="log-kasus-actions">
        <button class="log-kasus-btn edit" onclick="openEditKasus('${k.id}')">✏️</button>
        <button class="log-kasus-btn delete" onclick="hapusKasus('${k.id}')">🗑️</button>
      </div>
    </div>`;
  }).join("")}</div>${filterNis ? '<div style="text-align:center;margin-top:12px;"><button class="btn btn-outline" style="background:var(--gray-100);color:var(--gray-700);" onclick="renderLogKasus()">Tampilkan Semua</button></div>' : ''}`;
}

function openEditKasus(id) {
  const k = (appData.kasus || []).find(x => x.id === id);
  if (!k) return;
  document.getElementById("editKasusId").value = k.id;
  document.getElementById("editKasusTanggal").value = k.tanggal;
  document.getElementById("editKasusNama").value = k.nama;
  document.getElementById("editKasusKet").value = k.keterangan || "";
  const sel = document.getElementById("editKasusKode");
  sel.innerHTML = "";
  JENIS_KASUS.forEach(j => { const o = document.createElement("option"); o.value = j.kode; o.textContent = `${j.kode} — ${j.nama}`; if (j.kode === k.kodeKasus) o.selected = true; sel.appendChild(o); });
  const ms = document.getElementById("editKasusMapel");
  ms.innerHTML = '<option value="">-- Global --</option>';
  mapelList.forEach(m => { const o = document.createElement("option"); o.value = m.kode; o.textContent = m.nama; if (m.kode === k.mapel) o.selected = true; ms.appendChild(o); });
  document.getElementById("modalEditKasus").style.display = "flex";
}

function simpanEditKasus() {
  const id = document.getElementById("editKasusId").value;
  const idx = (appData.kasus || []).findIndex(x => x.id === id);
  if (idx === -1) return;
  const kode = document.getElementById("editKasusKode").value;
  const j = JENIS_KASUS.find(x => x.kode === kode);
  appData.kasus[idx].tanggal = document.getElementById("editKasusTanggal").value;
  appData.kasus[idx].kodeKasus = kode;
  appData.kasus[idx].jenisKasus = j.nama;
  appData.kasus[idx].mapel = document.getElementById("editKasusMapel").value || "";
  appData.kasus[idx].keterangan = document.getElementById("editKasusKet").value.trim();
  appData.kasus[idx].poin = j.poin;
  appData.kasus[idx].target = j.target;
  saveData();
  renderRekapKasus(); renderLogKasus(); renderStudentList();
  closeModal(null, "modalEditKasus");
  showToast("✅ Kasus diubah!", "success");
}

function hapusKasus(id) {
  const k = (appData.kasus || []).find(x => x.id === id);
  if (!k || !confirm(`Hapus kasus "${k.jenisKasus}" untuk ${k.nama}?`)) return;
  appData.kasus = appData.kasus.filter(x => x.id !== id);
  saveData();
  renderRekapKasus(); renderLogKasus(); renderStudentList();
  showToast("🗑️ Kasus dihapus", "info");
}

// ============ REWARD ============
function populateRewardSelects() {
  const ss = document.getElementById("rewardSiswa");
  if (ss) {
    const cur = ss.value;
    ss.innerHTML = '<option value="">-- Pilih Siswa --</option>';
    [...students].sort((a, b) => a.nama.localeCompare(b.nama)).forEach(s => {
      const o = document.createElement("option"); o.value = s.nis; o.textContent = `${s.nis} — ${s.nama}`; ss.appendChild(o);
    });
    ss.value = cur;
  }
  const rs = document.getElementById("rewardKode");
  if (rs && rs.options.length <= 1) {
    JENIS_REWARD.forEach(r => { const o = document.createElement("option"); o.value = r.kode; o.textContent = `${r.kode} — ${r.nama} (+${r.poin})`; rs.appendChild(o); });
  }
  const ms = document.getElementById("rewardMapel");
  if (ms && ms.options.length <= 1) {
    mapelList.forEach(m => { const o = document.createElement("option"); o.value = m.kode; o.textContent = m.nama; ms.appendChild(o); });
  }
  const t = document.getElementById("rewardTanggal");
  if (t && !t.value) t.value = new Date().toISOString().slice(0, 10);
}

function updateRewardPreview() {
  const kode = document.getElementById("rewardKode").value;
  const mapel = document.getElementById("rewardMapel").value;
  const p = document.getElementById("rewardPreview");
  if (!kode) { p.style.display = "none"; return; }
  const j = JENIS_REWARD.find(k => k.kode === kode);
  if (!j) { p.style.display = "none"; return; }
  const mn = mapel ? mapelList.find(m => m.kode === mapel)?.nama : "Global";
  document.getElementById("rewardPreviewDetail").innerHTML = `<b>${j.nama}</b> → <b>${j.target === "mapel" ? mn : "Nilai Rapor Akhir"}</b>`;
  document.getElementById("rewardPreviewPoin").textContent = "+" + j.poin;
  p.style.display = "block";
}

function simpanReward() {
  const nis = document.getElementById("rewardSiswa").value;
  const tanggal = document.getElementById("rewardTanggal").value;
  const kode = document.getElementById("rewardKode").value;
  const mapel = document.getElementById("rewardMapel").value;
  const ket = document.getElementById("rewardKet").value.trim();
  if (!nis || !tanggal || !kode) return showToast("Lengkapi data!", "error");
  const j = JENIS_REWARD.find(k => k.kode === kode);
  if (!appData.reward) appData.reward = [];
  appData.reward.unshift({
    id: "r_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
    tanggal, nis, nama: students.find(s => s.nis === nis)?.nama || "",
    kodeReward: kode, jenisReward: j.nama, mapel: mapel || "", keterangan: ket, poin: j.poin, target: j.target
  });
  saveData();
  renderRekapReward(); renderLogReward(); renderStudentList();
  resetFormReward();
  showToast(`🏆 Reward dicatat (+${j.poin})!`, "success");
}

function resetFormReward() {
  ["rewardSiswa", "rewardKode", "rewardMapel", "rewardKet"].forEach(id => document.getElementById(id).value = "");
  document.getElementById("rewardTanggal").value = new Date().toISOString().slice(0, 10);
  document.getElementById("rewardPreview").style.display = "none";
}

function renderRekapReward() {
  const el = document.getElementById("rekapRewardContent");
  if (!el) return;
  const data = students.map(s => {
    const r = getRewardSiswa(s.nis);
    return { nis: s.nis, nama: s.nama, totalPoin: r.totalPoin, jumlah: r.jumlahReward };
  }).filter(d => d.jumlah > 0).sort((a, b) => b.totalPoin - a.totalPoin);
  if (!data.length) {
    el.innerHTML = `<div style="padding:30px;text-align:center;background:var(--gray-50);border-radius:12px;border:1.5px dashed var(--gray-300);"><div style="font-size:40px;">🏆</div><div style="font-weight:700;color:var(--gray-500);">Belum ada reward</div></div>`;
    return;
  }
  el.innerHTML = `<table class="rekap-kasus-table rekap-reward-table"><thead><tr><th>Nama</th><th>Jml</th><th>Total Poin</th><th>Aksi</th></tr></thead><tbody>
    ${data.map(d => `<tr>
      <td style="font-weight:600;">${d.nama}</td>
      <td>${d.jumlah}</td>
      <td><span class="reward-poin-badge">+${d.totalPoin}</span></td>
      <td><button class="student-action-btn" style="opacity:1;background:var(--success-light);color:var(--success);" onclick="renderLogReward('${d.nis}')">👁️</button></td>
    </tr>`).join("")}</tbody></table>`;
}

function renderLogReward(filterNis = null) {
  const el = document.getElementById("logRewardContent");
  if (!el) return;
  let list = appData.reward || [];
  if (filterNis) list = list.filter(k => k.nis === filterNis);
  if (!list.length) { el.innerHTML = `<p style="font-size:13px;color:var(--gray-500);text-align:center;padding:20px;">Belum ada catatan reward.</p>`; return; }
  el.innerHTML = `<div class="log-reward-list">${list.slice(0, 30).map(r => {
    const tgl = new Date(r.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
    const j = JENIS_REWARD.find(x => x.kode === r.kodeReward) || {};
    const mn = r.mapel ? mapelList.find(m => m.kode === r.mapel)?.nama : null;
    return `<div class="log-reward-item">
      <div class="log-reward-icon">🏆</div>
      <div class="log-reward-info">
        <div class="log-reward-nama">${r.nama}</div>
        <div class="log-reward-detail"><b>${j.nama}</b> ${mn ? '• ' + mn : '• Global'}<br>📅 ${tgl}${r.keterangan ? ' • "' + r.keterangan + '"' : ''}</div>
      </div>
      <div class="log-reward-poin">+${j.poin}</div>
      <div class="log-reward-actions">
        <button class="log-reward-btn delete" onclick="hapusReward('${r.id}')">🗑️</button>
      </div>
    </div>`;
  }).join("")}</div>${filterNis ? '<div style="text-align:center;margin-top:12px;"><button class="btn btn-outline" style="background:var(--gray-100);color:var(--gray-700);" onclick="renderLogReward()">Tampilkan Semua</button></div>' : ''}`;
}

function hapusReward(id) {
  const r = (appData.reward || []).find(x => x.id === id);
  if (!r || !confirm(`Hapus reward "${r.jenisReward}" untuk ${r.nama}?`)) return;
  appData.reward = appData.reward.filter(x => x.id !== id);
  saveData();
  renderRekapReward(); renderLogReward(); renderStudentList();
  showToast("🗑️ Reward dihapus", "info");
}

// ============ LEGER ============
function renderLeger() {
  const ranking = getRanking();
  const el = document.getElementById("legerContent");
  if (!el) return;
  el.innerHTML = `
    <div class="leger-table-wrapper"><table class="leger-table">
      <thead><tr>
        <th>Nama</th>
        ${mapelList.map(m => `<th>${m.kode}</th>`).join("")}
        <th>Kasus</th><th>Reward</th><th>Rata</th><th>Rank</th>
      </tr></thead>
      <tbody>
        ${ranking.map((s, i) => `<tr>
          <td>${s.nama}</td>
          ${mapelList.map(m => `<td><span class="leger-nilai ${getPredikatClass(s.nilai[m.kode] || 0)}">${s.nilai[m.kode] || '-'}</span></td>`).join("")}
          <td>${s.totalPoinKasus < 0 ? `<span class="kasus-poin-badge">${s.totalPoinKasus}</span>` : '<span class="kasus-poin-badge safe">0</span>'}</td>
          <td>${s.totalPoinReward > 0 ? `<span class="reward-poin-badge">+${s.totalPoinReward}</span>` : '<span class="kasus-poin-badge safe">0</span>'}</td>
          <td><span class="leger-rata">${s.rata.toFixed(1)}</span></td>
          <td><b>#${i + 1}</b></td>
        </tr>`).join("")}
      </tbody>
    </table></div>`;
}

// ============ DASHBOARD ============
function renderDashboard() {
  const el = document.getElementById("dashboardContent");
  if (!el) return;
  const ranking = getRanking();
  const totalSiswa = students.length;
  const rataKelas = ranking.length ? ranking.reduce((s, x) => s + x.rata, 0) / ranking.length : 0;
  const tertinggi = ranking[0]?.rata.toFixed(1) || "-";
  const terendah = ranking[ranking.length - 1]?.rata.toFixed(1) || "-";
  const dist = { A: 0, B: 0, C: 0, D: 0 };
  ranking.forEach(s => { dist[getPredikat(s.rata)]++; });
  let siswaAdaKasus = 0, siswaAdaReward = 0, totalKasus = 0, totalReward = 0;
  students.forEach(s => {
    const k = getKasusSiswa(s.nis);
    const r = getRewardSiswa(s.nis);
    if (k.jumlahKasus > 0) siswaAdaKasus++;
    if (r.jumlahReward > 0) siswaAdaReward++;
    totalKasus += k.jumlahKasus;
    totalReward += r.jumlahReward;
  });
  const top5 = ranking.slice(0, 5);

  el.innerHTML = `
    <div class="dashboard-grid">
      <div class="dashboard-card">
        <h4>📊 Statistik Kelas</h4>
        <div class="stat-box">
          <div class="stat-item"><div class="stat-label">Total Siswa</div><div class="stat-value">${totalSiswa}</div></div>
          <div class="stat-item"><div class="stat-label">Rata Kelas</div><div class="stat-value">${rataKelas.toFixed(1)}</div></div>
          <div class="stat-item green"><div class="stat-label">Tertinggi</div><div class="stat-value">${tertinggi}</div></div>
          <div class="stat-item yellow"><div class="stat-label">Terendah</div><div class="stat-value">${terendah}</div></div>
        </div>
      </div>
      <div class="dashboard-card">
        <h4>🎯 Distribusi Predikat</h4>
        <div class="bar-chart">
          <div class="bar-item"><div class="bar-label">A (≥90)</div><div class="bar-track"><div class="bar-fill" style="width:${totalSiswa ? dist.A / totalSiswa * 100 : 0}%"></div></div><div class="bar-value">${dist.A}</div></div>
          <div class="bar-item"><div class="bar-label">B (80-89)</div><div class="bar-track"><div class="bar-fill" style="width:${totalSiswa ? dist.B / totalSiswa * 100 : 0}%;background:linear-gradient(90deg,#2563eb 0%,#06b6d4 100%);"></div></div><div class="bar-value">${dist.B}</div></div>
          <div class="bar-item"><div class="bar-label">C (70-79)</div><div class="bar-track"><div class="bar-fill" style="width:${totalSiswa ? dist.C / totalSiswa * 100 : 0}%;background:linear-gradient(90deg,#f59e0b 0%,#eab308 100%);"></div></div><div class="bar-value">${dist.C}</div></div>
          <div class="bar-item"><div class="bar-label">D (&lt;70)</div><div class="bar-track"><div class="bar-fill" style="width:${totalSiswa ? dist.D / totalSiswa * 100 : 0}%;background:linear-gradient(90deg,#dc2626 0%,#ef4444 100%);"></div></div><div class="bar-value">${dist.D}</div></div>
        </div>
      </div>
      <div class="dashboard-card">
        <h4>⚖️ Kedisiplinan Kelas</h4>
        <div class="stat-box">
          <div class="stat-item red"><div class="stat-label">Siswa Ada Kasus</div><div class="stat-value">${siswaAdaKasus}</div></div>
          <div class="stat-item red"><div class="stat-label">Total Kasus</div><div class="stat-value">${totalKasus}</div></div>
          <div class="stat-item green"><div class="stat-label">Siswa Ada Reward</div><div class="stat-value">${siswaAdaReward}</div></div>
          <div class="stat-item green"><div class="stat-label">Total Reward</div><div class="stat-value">${totalReward}</div></div>
        </div>
      </div>
      <div class="dashboard-card">
        <h4>🏆 Top 5 Siswa</h4>
        <div class="bar-chart">
          ${top5.map((s, i) => `<div class="bar-item">
            <div class="bar-label">#${i + 1} ${s.nama.split(" ")[0]}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${s.rata}%"></div></div>
            <div class="bar-value">${s.rata.toFixed(1)}</div>
          </div>`).join("")}
        </div>
      </div>
    </div>`;
}

// ============ PENGATURAN ============
function renderDataInfo() {
  const el = document.getElementById("dataInfo");
  if (!el) return;
  let totalNilai = 0;
  Object.values(nilaiData).forEach(s => Object.entries(s).forEach(([k, v]) => { if (!k.includes("_") && k !== "UJIAN" && typeof v === "number") totalNilai++; }));
  el.innerHTML = `<div class="data-info-grid">
    <div class="data-info-item"><div class="data-info-label">Total Siswa</div><div class="data-info-value">${students.length}</div></div>
    <div class="data-info-item"><div class="data-info-label">Mata Pelajaran</div><div class="data-info-value">${mapelList.length}</div></div>
    <div class="data-info-item"><div class="data-info-label">Nilai Terinput</div><div class="data-info-value">${totalNilai}</div></div>
    <div class="data-info-item"><div class="data-info-label">Total Kasus</div><div class="data-info-value">${(appData.kasus || []).length}</div></div>
    <div class="data-info-item"><div class="data-info-label">Total Reward</div><div class="data-info-value">${(appData.reward || []).length}</div></div>
    <div class="data-info-item"><div class="data-info-label">Riwayat</div><div class="data-info-value">${(appData.riwayat || []).length}</div></div>
  </div>`;
}

function renderRiwayat() {
  const el = document.getElementById("riwayatContent");
  if (!el) return;
  const list = appData.riwayat || [];
  if (!list.length) { el.innerHTML = `<p style="font-size:13px;color:var(--gray-500);">Belum ada riwayat.</p>`; return; }
  el.innerHTML = `<div style="max-height:300px;overflow-y:auto;">${list.slice(0, 20).map(r => {
    const s = students.find(x => x.nis === r.nis);
    const m = mapelList.find(x => x.kode === r.mapel);
    const tgl = new Date(r.waktu).toLocaleString("id-ID", { dateStyle: "short", timeStyle: "short" });
    const txt = r.aksi === "input-tp" ? `${m?.nama || r.mapel} — ${r.bab} • ${r.jumlahTP} TP` : (r.detail || r.aksi);
    return `<div style="padding:10px 12px;border-bottom:1px solid var(--gray-100);font-size:12.5px;">
      <div style="font-weight:600;">${s?.nama || r.nis || "-"}</div>
      <div style="color:var(--gray-500);font-size:11px;">${txt} • ${tgl}</div>
    </div>`;
  }).join("")}</div>`;
}

function renderFormKKTP() {
  const el = document.getElementById("formKKTP");
  if (!el) return;
  el.innerHTML = `<div class="form-row" style="grid-template-columns:repeat(2,1fr);">${mapelList.map(m => `
    <div class="form-group"><label>${m.nama}</label>
      <input type="number" id="kktp-${m.kode}" min="0" max="100" value="${KKTP[m.kode] || 75}">
    </div>`).join("")}</div>`;
}

function simpanKKTP() {
  mapelList.forEach(m => {
    const v = parseInt(document.getElementById("kktp-" + m.kode).value);
    if (!isNaN(v)) KKTP[m.kode] = v;
  });
  saveData();
  showToast("✅ KKTP diperbarui!", "success");
}

function renderFormBobot() {
  const el = document.getElementById("formBobot");
  if (!el) return;
  el.innerHTML = `<div class="form-row" style="grid-template-columns:repeat(2,1fr);">${KOMPONEN_LIST.map(k => `
    <div class="form-group"><label>${k.nama} (${k.kode})</label>
      <input type="number" id="bobot-${k.kode}" min="0" max="100" step="1" value="${Math.round((BOBOT[k.kode] || 0) * 100)}">
    </div>`).join("")}</div>
    <p style="font-size:12px;color:var(--gray-500);margin-top:8px;">* Dalam persen (%). Total harus 100%.</p>`;
}

function simpanBobot() {
  let total = 0;
  const temp = {};
  KOMPONEN_LIST.forEach(k => {
    const v = parseFloat(document.getElementById("bobot-" + k.kode).value) || 0;
    temp[k.kode] = v / 100;
    total += v;
  });
  if (Math.abs(total - 100) > 0.5) return showToast(`Total bobot ${total}% (harus 100%)!`, "error");
  BOBOT = temp;
  saveData();
  showToast("✅ Bobot diperbarui!", "success");
}

function updateSemesterButtons() {
  const b1 = document.getElementById("btnSmt1");
  const b2 = document.getElementById("btnSmt2");
  if (!b1 || !b2) return;
  b1.style.background = SEMESTER_AKTIF === 1 ? "var(--primary)" : "white";
  b1.style.color = SEMESTER_AKTIF === 1 ? "white" : "var(--primary)";
  b1.style.border = "2px solid var(--primary)";
  b2.style.background = SEMESTER_AKTIF === 2 ? "var(--primary)" : "white";
  b2.style.color = SEMESTER_AKTIF === 2 ? "white" : "var(--primary)";
  b2.style.border = "2px solid var(--primary)";
}

function gantiSemester(s) {
  SEMESTER_AKTIF = s;
  saveData();
  document.getElementById("semesterLabel").textContent = "Semester " + s;
  updateSemesterButtons();
  renderStudentList();
  showToast(`📅 Semester ${s} aktif`, "info");
}

// ============ CETAK BATCH ============
function openCetakBatch() {
  const list = document.getElementById("cetakBatchList");
  if (!list) return;
  list.innerHTML = students.map(s => `
    <label style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;cursor:pointer;font-size:13px;">
      <input type="checkbox" class="cetakCheckbox" value="${s.nis}">
      <span><b>${s.nama}</b> <span style="color:var(--gray-500);">(${s.nis})</span></span>
    </label>`).join("");
  document.getElementById("modalCetakBatch").style.display = "flex";
}

function selectAllCetak(checked) {
  document.querySelectorAll(".cetakCheckbox").forEach(c => c.checked = checked);
}

function cetakBatch() {
  const selected = Array.from(document.querySelectorAll(".cetakCheckbox:checked")).map(c => c.value);
  if (!selected.length) return showToast("Pilih minimal 1 siswa!", "error");
  const temp = document.createElement("div");
  temp.id = "batchPrintContainer";
  temp.style.position = "absolute";
  temp.style.left = "-9999px";
  temp.style.top = "0";
  temp.style.width = "1000px";
  document.body.appendChild(temp);
  const originalHTML = document.getElementById("raporView").innerHTML;
  let allHTML = "";
  selected.forEach(nis => {
    showRapor(nis);
    allHTML += document.getElementById("raporView").innerHTML + '<div style="page-break-after:always;"></div>';
  });
  document.getElementById("raporView").innerHTML = originalHTML;
  temp.innerHTML = allHTML;
  document.getElementById("app").style.display = "none";
  temp.style.position = "static";
  temp.style.left = "0";
  setTimeout(() => {
    window.print();
    setTimeout(() => {
      document.body.removeChild(temp);
      document.getElementById("app").style.display = "block";
      closeModal(null, "modalCetakBatch");
      showToast(`🖨️ ${selected.length} rapor siap dicetak!`, "success");
    }, 500);
  }, 300);
}

// ============ EXPORT/IMPORT ============
function exportData() {
  const data = {
    students, nilaiData,
    kasus: appData.kasus || [],
    reward: appData.reward || [],
    riwayat: appData.riwayat || [],
    kktp: KKTP, bobot: BOBOT, semester: SEMESTER_AKTIF,
    password: appData.password,
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rapor-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("📥 Data di-download!", "info");
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.nilaiData) {
        appData = { ...appData, ...data };
        nilaiData = data.nilaiData;
        if (data.students) students = data.students;
        if (data.kktp) KKTP = data.kktp;
        if (data.bobot) BOBOT = data.bobot;
        if (data.semester) SEMESTER_AKTIF = data.semester;
        if (!appData.kasus) appData.kasus = [];
        if (!appData.reward) appData.reward = [];
        saveData();
        renderStudentList(); renderLeger(); renderDataInfo(); renderRiwayat();
        showToast("✅ Data di-import!", "success");
      } else showToast("❌ File tidak valid!", "error");
    } catch (err) { showToast("❌ Gagal: " + err.message, "error"); }
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (!confirm("⚠️ Reset SEMUA data? Semua nilai, kasus, reward akan HILANG!")) return;
  if (!confirm("KONFIRMASI TERAKHIR: Data tidak dapat dikembalikan. Lanjutkan?")) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

// ============ INIT ============
function initApp() {
  renderStudentList();
  populateInputSelects();
  populateUjianSelects();
  populateKasusSelects();
  populateRewardSelects();
  document.getElementById("semesterLabel").textContent = "Semester " + SEMESTER_AKTIF;
}

document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("loggedIn") === "1") {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("app").style.display = "block";
    initApp();
  } else {
    document.getElementById("loginPassword").focus();
  }
});
