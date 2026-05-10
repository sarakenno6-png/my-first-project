function sonucuGoster() {

    let puanlar = {
        mantikli: 0,
        yaratici: 0,
        sosyal: 0,
        duygusal: 0,
        sessiz: 0
    };

    // Seçilen cevapları al
    let cevaplar = document.querySelectorAll('input[type="radio"]:checked');

    // Puanları artır
    cevaplar.forEach((cevap) => {
        puanlar[cevap.value]++;
    });

    // En yüksek puanı bul
    let enYuksek = 0;
    let sonuc = "";

    for (let tip in puanlar) {

        if (puanlar[tip] > enYuksek) {
            enYuksek = puanlar[tip];
            sonuc = tip;
        }
    }

    // Sonuç açıklamaları
    let mesajlar = {

        mantikli: `
        🧠 MANTIKLI KİŞİLİK <br><br>
        Sen olaylara mantıklı yaklaşan birisin.
        Kararlarını düşünerek verirsin ve kolay kolay panik olmazsın.
        İnsanlar sana genelde güvenilir biri olarak bakar.
        problemleri çözmede iyisin.
        genelde olaylara duguslla değil mantıkla yaklaşmayı tercih edersin.
        `,

        yaratici: `
        🎨 YARATICI KİŞİLİK <br><br>
        Hayal gücün oldukça güçlü.
        Farklı düşünmeyi ve yeni fikirler üretmeyi seviyorsun.
        Sıradan şeylerden çabuk sıkılabilirsin.
        fikir üretmeye sever birisin .
        tasarım ve sanatla ilgilenmeye eğilimli birisin.
        `,

        sosyal: `
        🤝 SOSYAL KİŞİLİK <br><br>
        İnsanlarla iletişim kurmayı seviyorsun.
        Enerjin çevrendeki insanlara da yansıyor.
        Kalabalık ortamlarda kendini rahat hissedersin.
        arkadaş canlısı ve dışa dönük birisin.
        yeni insanlarla tanışmayı ve sosyalleşmeyi seviyorsun.
        `,

        duygusal: `
        💖 DUYGUSAL KİŞİLİK <br><br>
        Hislerin senin için çok önemli.
        İnsanların davranışlarından kolay etkilenebilirsin.
        Empati gücün oldukça yüksek.
        İnsanların duygularını anlamaya çalışırsın ve onlara destek olmayı seversin.
        hislerinle hareket etmeye eğilimli birisin ve bu da seni oldukça duyarlı yapar.
        `,

        sessiz: `
        🌙 SESSİZ KİŞİLİK <br><br>
        Sessiz ve sakin bir yapın var.
        Kalabalık yerine kendi alanında huzur buluyorsun.
        İnsanları dikkatlice gözlemleyen birisin.
        çok konuşmaktan hoşlanmaz ve genelde gözlem yapmayı sever .
        kendinle daha çok vakit geçmeyi seven birisin.
        `
    };

    // Sonucu ekrana yaz
    document.getElementById("result").innerHTML = mesajlar[sonuc];

}