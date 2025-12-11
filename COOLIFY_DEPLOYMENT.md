# Coolify Deployment Rehberi

Bu proje, Coolify üzerinde Docker Compose kullanılarak deploy edilmek üzere yapılandırılmıştır. Aşağıdaki adımları takip ederek projenizi canlı ortama alabilirsiniz.

## Ön Hazırlık

1.  **GitHub'a Pushlama:**
    Projenizin son halini GitHub (veya GitLab/Bitbucket) üzerindeki bir repository'ye pushladığınızdan emin olun.
    ```bash
    git add .
    git commit -m "Coolify deployment hazırlığı"
    git push origin main
    ```

## Coolify Üzerinde Kurulum

1.  **Coolify Paneline Giriş Yapın:**
    Kendi Coolify sunucunuza tarayıcı üzerinden erişin ve giriş yapın.

2.  **Yeni Kaynak Oluşturun:**
    *   Dashboard'da **"+ New Resource"** butonuna tıklayın.
    *   **"Git Source"** (GitHub App, GitLab App vb.) seçeneğini seçin. Eğer daha önce bağlamadıysanız, "Public Repository" seçeneğini de kullanabilirsiniz (repo public ise).
    *   Deploy etmek istediğiniz repository'yi seçin (`yirmisaniye_ANGULAR` veya GitHub'daki adı neyse).

3.  **Konfigürasyon:**
    *   **Branch:** `main` (veya hangi branch'i deploy edecekseniz).
    *   **Build Pack:** Coolify genellikle otomatik algılar, ancak **"Docker Compose"** seçeneğini seçtiğinizden emin olun. Bu proje `docker-compose.yml` dosyası ile çalışacak şekilde ayarlanmıştır.
    *   **Docker Compose File Location:** `/docker-compose.yml` (varsayılan olarak böyledir, değiştirmeyin).

4.  **Environment Variables (Ortam Değişkenleri):**
    Projenin güvenli çalışması için veritabanı şifrelerini ve diğer hassas bilgileri "Environment Variables" bölümüne eklemelisiniz. `docker-compose.yml` dosyasında tanımladığımız değişkenler şunlardır:

    *   `DB_USER`: Veritabanı kullanıcı adı (Örn: `app_user`)
    *   `DB_PASSWORD`: Veritabanı şifresi (Güçlü bir şifre belirleyin)
    *   `DB_NAME`: Veritabanı adı (Örn: `yirmisaniye_db`)
    *   `DB_ROOT_PASSWORD`: MySQL root şifresi (Çok güçlü bir şifre belirleyin)
    *   `JWT_SECRET`: Backend için gizli anahtar (Rastgele uzun bir string)

    Bu değerleri Coolify'daki projenizin **"Environment Variables"** sekmesinden ekleyin.

5.  **Domain Ayarları:**
    *   **Frontend:** `frontend` servisi için bir domain belirleyin (Örn: `app.siteniz.com`). Port olarak `80` (container portu) seçili olmalıdır.
    *   **Backend:** `backend` servisi için bir domain belirleyin (Örn: `api.siteniz.com`). Port olarak `3000` seçili olmalıdır.
    *   **PhpMyAdmin (Opsiyonel):** Veritabanını yönetmek isterseniz `phpmyadmin` servisi için de bir domain (Örn: `db.siteniz.com`) belirleyebilirsiniz. Port: `80`.

6.  **Deploy:**
    *   Tüm ayarları yaptıktan sonra sağ üstteki **"Deploy"** butonuna tıklayın.
    *   "Deployment Logs" sekmesinden süreci takip edebilirsiniz. İlk build işlemi biraz zaman alabilir.

## Sorun Giderme

*   **Build Hatası:** Eğer build sırasında hata alırsanız, `View Logs` diyerek hatanın detayına bakın. Genellikle Node.js versiyonu veya eksik dosya kaynaklı olabilir.
*   **Veritabanı Bağlantı Hatası:** Backend loglarında veritabanına bağlanamadığı yazıyorsa, Environment Variable'ların doğru ayarlandığından emin olun. `DB_HOST` değişkeni `docker-compose.yml` içinde otomatik olarak `db` servisine yönlendirilir, bunu değiştirmeyin.

## Önemli Notlar

*   `docker-compose.yml` dosyasında portlar dışarıya açılmıştır (`4000:80`, `3000:3000`, `8080:80`). Coolify kullanırken genellikle Coolify'ın kendi proxy'si (Traefik) trafiği yönetir. Eğer Coolify üzerinde "Expose Port" seçeneğini kullanmazsanız, bu portlar sadece sunucu içinde erişilebilir olur ki bu daha güvenlidir. Domain tanımlaması yaptığınızda Coolify trafiği otomatik yönlendirir.
