import { useState } from "react";

const events = [
  {
    date: "3 Temmuz 2011",
    title: "Operasyon Başlıyor",
    category: "hukuk",
    desc: "İstanbul Cumhuriyet Savcılığı tarafından 'futbolda şike' operasyonu başlatıldı. Aralarında Fenerbahçe Başkanı Aziz Yıldırım'ın da bulunduğu çok sayıda kişi gözaltına alındı. Yıldırım, 93 gün tutuklu kaldı.",
    detail: "Operasyon sabahın erken saatlerinde eş zamanlı baskınlarla gerçekleştirildi. İddialara göre 2010-11 sezonu şampiyonluğu dahil çok sayıda maç şikeye karışmıştı.",
    color: "#dc2626",
  },
  {
    date: "Temmuz 2011",
    title: "Şampiyonlar Ligi'nden Men",
    category: "uefa",
    desc: "TFF, UEFA baskısı sonucunda Fenerbahçe'yi 2011-12 Şampiyonlar Ligi'nden çekti. Yerine Trabzonspor katıldı. CAS'a yapılan itiraz reddedildi.",
    detail: "UEFA'nın acil paneli TFF kararının ardından hızla toplandı. Fenerbahçe CAS'a koştu ama geçici tedbir talebi de reddedildi. Bu karar, Fenerbahçe'ye göre $500 milyon dolarlık kayba yol açtı.",
    color: "#7c3aed",
  },
  {
    date: "2 Temmuz 2012",
    title: "İlk Mahkeme Kararı",
    category: "hukuk",
    desc: "İstanbul 16. Ağır Ceza Mahkemesi kararını açıkladı: Aziz Yıldırım şike ve teşvik priminden 3 yıl 9 ay, örgüt kurmaktan 2 yıl 6 ay olmak üzere toplam hapis cezasına çarptırıldı.",
    detail: "Mahkeme, telefon dinleme kayıtlarını ve DVD delillerini esas aldı. Onlarca sanık çeşitli cezalar aldı. Ancak karar hem savcı hem sanıklar tarafından temyize taşındı.",
    color: "#dc2626",
  },
  {
    date: "Haziran 2013",
    title: "UEFA Avrupa'dan Yasakladı",
    category: "uefa",
    desc: "UEFA, Fenerbahçe ve Beşiktaş'ı Avrupa kupalarından men etti. Fenerbahçe 1, Beşiktaş 1 yıl boyunca Avrupa'da oynayamayacaktı.",
    detail: "UEFA'nın Club Financial Control Body'si kararı verdi. Fenerbahçe bu yasağı da CAS'a taşıdı ancak sonuç değişmedi.",
    color: "#7c3aed",
  },
  {
    date: "9 Ekim 2015",
    title: "Bozma ve Beraat",
    category: "hukuk",
    desc: "Yargıtay, ilk mahkeme kararını bozdu. Yeniden yargılamada Aziz Yıldırım başta olmak üzere pek çok sanık beraat etti. DVD ve dinleme kayıtları delil olmaktan çıkarıldı.",
    detail: "Mahkeme, delillerin hukuka aykırı yollarla elde edildiğine ve yargılama sürecinde usul hatalarının bulunduğuna hükmetti. Bu karar, FETÖ iddialarının güçlenmesine zemin hazırladı.",
    color: "#16a34a",
  },
  {
    date: "2016 Sonrası",
    title: "FETÖ İddiası Öne Çıktı",
    category: "feto",
    desc: "15 Temmuz 2016 darbe girişiminin ardından hükümet ve Fenerbahçe, tüm şike soruşturmasının FETÖ'nün Türk futbolunu ve Fenerbahçe'yi çökertmek için kurduğu bir tuzak olduğunu savundu.",
    detail: "Samanyolu TV sahibi Hidayet Karaca'ya şike davası bağlantıları gerekçesiyle 1406 yıl hapis cezası verildi. Fenerbahçe ise $500 milyon tazminat davası açtı.",
    color: "#ea580c",
  },
  {
    date: "Günümüz",
    title: "Dava Hâlâ Tartışmalı",
    category: "feto",
    desc: "Şike mi yapıldı, yoksa şike mi kurgulandı? Soru hâlâ yanıtsız. İki farklı anlatı varlığını sürdürüyor: biri gerçek bir şike örgütü, diğeri FETÖ'nün Fenerbahçe'ye karşı kurduğu kumpas.",
    detail: "Uluslararası gözlemciler, Türkiye'deki yargı bağımsızlığı sorunları nedeniyle her iki anlatıya da şüpheyle yaklaşıyor. Trabzonspor ise şampiyonluğunu hâlâ geri istiyor.",
    color: "#6b7280",
  },
];

const categoryColors = {
  hukuk: "#dc2626",
  uefa: "#7c3aed",
  feto: "#ea580c",
};

const categoryLabels = {
  hukuk: "⚖️ Hukuk",
  uefa: "🏆 UEFA",
  feto: "🔍 FETÖ İddiası",
};

export default function SikeDavasiTimeline() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? events : events.filter((e) => e.category === filter);

  return (
    <div style={{ margin: "2rem 0", fontFamily: "system-ui, sans-serif" }}>
      {/* Filter bar */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
        {["all", "hukuk", "uefa", "feto"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              border: "2px solid",
              borderColor: filter === cat ? (cat === "all" ? "#374151" : categoryColors[cat]) : "#e5e7eb",
              backgroundColor: filter === cat ? (cat === "all" ? "#374151" : categoryColors[cat]) : "#fff",
              color: filter === cat ? "#fff" : "#6b7280",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat === "all" ? "📋 Tümü" : categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: "20px",
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: "#e5e7eb",
        }} />

        {filtered.map((event, i) => (
          <div
            key={i}
            style={{ position: "relative", paddingLeft: "52px", marginBottom: "20px", cursor: "pointer" }}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            {/* Dot */}
            <div style={{
              position: "absolute",
              left: "12px",
              top: "14px",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              backgroundColor: event.color,
              border: "3px solid #fff",
              boxShadow: "0 0 0 2px " + event.color,
              zIndex: 1,
            }} />

            {/* Card */}
            <div style={{
              backgroundColor: selected === i ? "#fafafa" : "#fff",
              border: "1px solid",
              borderColor: selected === i ? event.color : "#e5e7eb",
              borderRadius: "12px",
              padding: "14px 16px",
              transition: "all 0.2s",
              boxShadow: selected === i ? `0 4px 12px ${event.color}22` : "0 1px 3px rgba(0,0,0,0.06)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#9ca3af", fontWeight: 600, marginBottom: "3px" }}>
                    {event.date}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#111827", marginBottom: "4px" }}>
                    {event.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.6 }}>
                    {event.desc}
                  </div>
                </div>
                <div style={{
                  flexShrink: 0,
                  fontSize: "18px",
                  transition: "transform 0.2s",
                  transform: selected === i ? "rotate(180deg)" : "none",
                }}>
                  ↓
                </div>
              </div>

              {/* Expanded detail */}
              {selected === i && (
                <div style={{
                  marginTop: "12px",
                  paddingTop: "12px",
                  borderTop: "1px solid #f3f4f6",
                  fontSize: "13px",
                  color: "#374151",
                  lineHeight: 1.7,
                  backgroundColor: "#f9fafb",
                  borderRadius: "8px",
                  padding: "12px",
                }}>
                  {event.detail}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px", padding: "12px 16px", backgroundColor: "#f9fafb", borderRadius: "10px", fontSize: "12px", color: "#6b7280" }}>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <span key={key} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: categoryColors[key], display: "inline-block" }} />
            {label}
          </span>
        ))}
        <span style={{ marginLeft: "auto", fontStyle: "italic" }}>Detay için kartlara tıkla</span>
      </div>
    </div>
  );
}
