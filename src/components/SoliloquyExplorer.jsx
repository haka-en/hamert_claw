import { useState } from "react";

const soliloquies = [
  {
    act: "Perde I, Sahne II",
    opening: "O, that this too, too solid flesh would melt…",
    turkish: "Ah, şu et yığını eriyip yok olsa...",
    topic: "Yas & İntihar Düşüncesi",
    summary:
      "Hamlet babasının ölümü ve annesinin Claudius ile evliliği karşısında duyduğu tiksinti ve çaresizliği dile getirir. Yaşamak istemez ama intiharı günah saydığı için eyleme geçemez.",
    psychology:
      "Derin bir melankolinin ilk işareti. Freudyen okumada anneye duyulan bastırılmış öfkenin kendine yönelmesi.",
    color: "#6366f1",
  },
  {
    act: "Perde I, Sahne V",
    opening: "O all you host of heaven! O earth! what else?…",
    turkish: "Ey gökyüzünün tüm ordusu! Ey yer!...",
    topic: "Hayaletle Karşılaşma",
    summary:
      "Babasının hayaletiyle karşılaşıp gerçeği öğrendikten sonra Hamlet, intikam yemini eder. Her şeyi silip yalnızca bu emri aklında tutmaya karar verir.",
    psychology:
      "Travmatik bir açıklamanın ardından gelen dissosiyatif tepki. Kimliğin yeniden kurulma anı.",
    color: "#8b5cf6",
  },
  {
    act: "Perde II, Sahne II",
    opening: "O, what a rogue and peasant slave am I!…",
    turkish: "Ne alçak, ne köylü bir kul benim!...",
    topic: "Kendini Yargılama",
    summary:
      "Bir oyuncu sahte duygularla ağlarken Hamlet gerçek bir acıyla hareketsiz kalmanın utancını duyar. Kendini kınar, planlar yapar: 'Oyun içinde oyun' fikrini ortaya atar.",
    psychology:
      "Eylemsizliğe karşı kendine yönelen öfke. Hamlet'in kronik prokrastinasyonunun psikolojik kökleri burada.",
    color: "#a855f7",
  },
  {
    act: "Perde III, Sahne I",
    opening: "To be, or not to be, that is the question…",
    turkish: "Olmak ya da olmamak, işte bütün mesele...",
    topic: "Varoluşsal Sorgulama",
    summary:
      "İngiliz edebiyatının en ünlü satırları. Yaşamanın mı yoksa ölmenin mi daha onurlu olduğunu sorgular. Ölüm korkusu — öte dünyanın bilinmezliği — onu eylemden alıkoyar.",
    psychology:
      "Varoluşçu felsefenin öncüsü. Belirsizlik karşısında felç olan zihin: karar verememe halinin anatomisi.",
    color: "#ec4899",
  },
  {
    act: "Perde III, Sahne II",
    opening: "'Tis now the very witching time of night…",
    turkish: "Şimdi tam büyünün vakti, gece...",
    topic: "Karanlık Kararlılık",
    summary:
      "Oyunun Claudius'u nasıl etkilediğini gördükten sonra Hamlet kendini en karanlık duygularına bırakır. Annesine giderken sert ama zarar vermemeye söz verir.",
    psychology:
      "Kısa süreli bir 'aktif mod' — bastırılmış enerjinin dışa vurumu. Ama yine de eylem gerçekleşmez.",
    color: "#f43f5e",
  },
  {
    act: "Perde III, Sahne III",
    opening: "Now might I do it pat, now he is praying…",
    turkish: "Şimdi tam yapabilirim, dua ederken...",
    topic: "İntikamı Erteleme",
    summary:
      "Claudius'u öldürmek için mükemmel fırsat elindeyken Hamlet onu öldürmez — dua ederken öldürülürse cennete gidebileceği kaygısıyla. Bu en büyük rasyonalizasyon anıdır.",
    psychology:
      "Klasik bir savunma mekanizması: entelektüel gerekçe üretme (intellectualization). Gerçek neden daha derin bir kararsızlıktır.",
    color: "#ef4444",
  },
  {
    act: "Perde IV, Sahne IV",
    opening: "How all occasions do inform against me…",
    turkish: "Her şey benim aleyhime işliyor...",
    topic: "Son Uyanış",
    summary:
      "Fortinbras'ın ordusuyla karşılaşıp onun kör cesaretini görünce Hamlet kendini son kez yargılar. Büyük düşünceler büyük eylemler gerektirmez diyerek artık harekete geçmeye karar verir.",
    psychology:
      "Oyunun psikolojik dönüm noktası. Hamlet ilk kez eylemi düşünceden üstün tutar — fakat artık çok geç midir?",
    color: "#f97316",
  },
];

export default function SoliloquyExplorer() {
  const [selected, setSelected] = useState(0);
  const s = soliloquies[selected];

  return (
    <div style={{
      margin: "2rem 0",
      borderRadius: "16px",
      border: "1px solid #e5e7eb",
      overflow: "hidden",
      fontFamily: "system-ui, sans-serif",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    }}>
      {/* Coloured header */}
      <div style={{
        padding: "20px 24px",
        backgroundColor: s.color,
        transition: "background-color 0.35s ease",
        color: "#fff",
      }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.8, marginBottom: "6px" }}>
          {s.act}
        </div>
        <div style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.4 }}>
          "{s.opening}"
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", overflowX: "auto", backgroundColor: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
        {soliloquies.map((sol, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            style={{
              flexShrink: 0,
              padding: "10px 14px",
              fontSize: "11px",
              fontWeight: 600,
              background: "none",
              border: "none",
              borderBottom: selected === i ? `3px solid ${sol.color}` : "3px solid transparent",
              color: selected === i ? sol.color : "#9ca3af",
              cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            {i + 1}. Soliloquy
          </button>
        ))}
      </div>

      {/* Content grid */}
      <div style={{
        padding: "24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
        backgroundColor: "#fff",
      }}>
        <div>
          <div style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            padding: "3px 10px",
            borderRadius: "6px",
            marginBottom: "12px",
            color: "#fff",
            backgroundColor: s.color,
          }}>
            {s.topic}
          </div>
          <p style={{ fontSize: "13px", color: "#6b7280", fontStyle: "italic", marginBottom: "10px", lineHeight: 1.6 }}>
            "{s.turkish}"
          </p>
          <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7, margin: 0 }}>
            {s.summary}
          </p>
        </div>

        <div style={{
          backgroundColor: "#f3f4f6",
          borderRadius: "12px",
          padding: "16px",
        }}>
          <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: "10px" }}>
            🧠 Psikolojik Yorum
          </div>
          <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7, margin: 0 }}>
            {s.psychology}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
      }}>
        <button
          onClick={() => setSelected((prev) => Math.max(0, prev - 1))}
          disabled={selected === 0}
          style={{
            fontSize: "12px",
            color: selected === 0 ? "#d1d5db" : "#6b7280",
            background: "none",
            border: "none",
            cursor: selected === 0 ? "default" : "pointer",
            padding: "4px 0",
          }}
        >
          ← Önceki
        </button>
        <span style={{ fontSize: "12px", color: "#9ca3af" }}>
          {selected + 1} / {soliloquies.length}
        </span>
        <button
          onClick={() => setSelected((prev) => Math.min(soliloquies.length - 1, prev + 1))}
          disabled={selected === soliloquies.length - 1}
          style={{
            fontSize: "12px",
            color: selected === soliloquies.length - 1 ? "#d1d5db" : "#6b7280",
            background: "none",
            border: "none",
            cursor: selected === soliloquies.length - 1 ? "default" : "pointer",
            padding: "4px 0",
          }}
        >
          Sonraki →
        </button>
      </div>
    </div>
  );
}
