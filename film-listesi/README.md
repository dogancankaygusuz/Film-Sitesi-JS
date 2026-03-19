# 🎬 Film ve Dizi İzleme Listesi (React + TypeScript + Tailwind)

Bu proje, modern web teknolojileri kullanılarak sıfırdan geliştirilmiş frontend uygulamasıdır. Proje yönergesinde istenen tüm şartlar eksiksiz olarak yerine getirilmiş, ekstra özelliklerle zenginleştirilmiştir.

## 🔗 Canlı Demo
Projeyi canlı olarak incelemek için tıklayın: **https://filmsitesiprojesi.netlify.app/**

## 📸 Ekran Görüntüleri

<img width="1918" height="1090" alt="SS" src="https://github.com/user-attachments/assets/2a442921-5ceb-44db-89ef-315b8e994e53" />

## 🎯 Proje Özellikleri (CRUD İşlemleri)
Eğitim yönergelerinde istenen 4 temel işlem başarıyla uygulanmıştır:
- **Ekleme (Create):** Kullanıcılar yeni film veya dizi ekleyebilir.
- **Listeleme (Read):** Eklenen öğeler dinamik olarak listelenir. Üst kısımda anlık istatistikler (Toplam, İzlenen, Kalan) gösterilir.
- **Güncelleme (Update):** 
  - Filmler kutucuğa tıklanarak "İzlendi" olarak işaretlenebilir.
  - **"Düzenle"** butonu ile film isimleri sonradan güncellenebilir.
- **Silme (Delete):** Eklenen öğeler listeden kalıcı olarak silinebilir.
- **🌟 Ekstra Özellik (LocalStorage):** Tüm veriler tarayıcının yerel hafızasına kaydedilir. Sayfa yenilendiğinde veriler kaybolmaz!

## 🛠️ Kullanılan Teknolojiler
- **Altyapı:** Vite & ReactJS
- **Dil:** TypeScript (Kural ve Interface yönetimi için)
- **Tasarım:** Tailwind CSS
- **Canlı Yayın:** Netlify

## 📂 Proje Mimarisi (Dosya Ağacı)
Yönergede istenen klasörleme yapısı profesyonel olarak kurulmuştur:
- `src/Components/` : Tekrar kullanılabilir arayüz parçaları (`AddMovieForm`, `MovieItem`).
- `src/Pages/` : Tüm mantığın ve CRUD işlemlerinin yönetildiği ana sayfa (`HomePage`).
- `src/Interfaces/` : TypeScript tip ve kural tanımlamaları (`IMovie`).
