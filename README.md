# Esma İyigünler - Portfolyo Sitesi

Modern ve responsive bir portfolyo web sitesi. HTML, CSS ve JavaScript kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Tek Sayfa Tasarım**: Tüm bölümler tek sayfada, smooth scroll ile geçiş
- **Responsive Design**: Mobil ve masaüstü cihazlarda mükemmel görünüm
- **Modern UI/UX**: Temiz ve profesyonel tasarım
- **Daktilo Efekti**: Hero section'da animasyonlu yazı efekti
- **Smooth Scroll**: Navbar linklerine tıklandığında yumuşak geçiş
- **Mobil Menü**: Hamburger menü ile mobil uyumluluk
- **Form Validasyonu**: İletişim formu için JavaScript validasyonu
- **Scroll Animasyonları**: Sayfa kaydırıldıkça elementler animasyonlu görünür

## 📱 Bölümler

1. **Hero Section**: Tam ekran arka plan resmi, karşılama mesajı ve daktilo efekti
2. **Hakkımda**: Kişisel bilgiler ve yetenekler
3. **Projelerim**: Portfolyo projeleri grid layout ile
4. **İletişim**: İletişim bilgileri ve mesaj formu
5. **Footer**: Sosyal medya linkleri ve telif hakkı

## 🛠️ Teknolojiler

- **HTML5**: Semantik markup
- **CSS3**: Modern CSS özellikleri, Flexbox, Grid, Animasyonlar
- **JavaScript (ES6+)**: DOM manipulation, Event handling, Smooth scroll
- **Font Awesome**: İkonlar için
- **Google Fonts**: Tipografi için

## 📁 Dosya Yapısı

```
Portfolyom/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS stilleri
├── script.js           # JavaScript fonksiyonları
└── README.md           # Proje dokümantasyonu
```

## 🚀 Kurulum ve Çalıştırma

1. Projeyi bilgisayarınıza indirin
2. `index.html` dosyasını web tarayıcınızda açın
3. Veya bir local server kullanarak çalıştırın

### Local Server ile Çalıştırma

```bash
# Python 3 ile
python -m http.server 8000

# Node.js ile (http-server paketi gerekli)
npx http-server

# PHP ile
php -S localhost:8000
```

## 🎨 Özelleştirme

### Renkleri Değiştirme
`style.css` dosyasında CSS değişkenlerini kullanarak ana renkleri değiştirebilirsiniz:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
}
```

### Arka Plan Resmini Değiştirme
Hero section'daki arka plan resmini değiştirmek için `style.css` dosyasında:

```css
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('YENİ_RESİM_URL_BURAYA');
}
```

### Daktilo Metinlerini Değiştirme
`script.js` dosyasında `typewriterEffect` fonksiyonunda:

```javascript
const texts = [
    'YENİ_METİN_1',
    'YENİ_METİN_2'
];
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 767px ve altı

## 🌟 Öne Çıkan Özellikler

### Smooth Scroll
Navbar linklerine tıklandığında sayfa yumuşak bir şekilde ilgili bölüme kayar.

### Daktilo Efekti
Hero section'da "FULL STACK DEVELOPER" yazısı yazılır, silinir ve "ESMA İYİGÜNLER" yazısı görünür.

### Mobil Uyumluluk
Hamburger menü ile mobil cihazlarda kolay navigasyon.

### Form Validasyonu
İletişim formunda JavaScript ile gerçek zamanlı validasyon.

### Scroll Animasyonları
Sayfa kaydırıldıkça elementler animasyonlu olarak görünür.

## 🔧 Geliştirme

### Yeni Bölüm Ekleme
1. HTML'de yeni section ekleyin
2. CSS'de stil tanımlayın
3. JavaScript'te smooth scroll için ID ekleyin

### Yeni Özellik Ekleme
1. JavaScript fonksiyonlarını genişletin
2. CSS animasyonları ekleyin
3. HTML yapısını güncelleyin

## 📞 İletişim

Bu proje hakkında sorularınız için:
- **Email**: esma@iyigunler.com
- **GitHub**: [GitHub Profiliniz]

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Not**: Bu portfolyo sitesi modern web standartlarına uygun olarak geliştirilmiştir ve tüm modern tarayıcılarda çalışır.

