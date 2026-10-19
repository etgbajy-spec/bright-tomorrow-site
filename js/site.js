(function () {
  const AREAS = [
    {
      id: "industrial",
      title: "산업·시설자재",
      kicker: "Industrial Materials",
      cat: "산업·작업장",
      image: "assets/img/warehouse.jpg",
      lead: "모듈형 작업대, 금속 타공판, 철망 보관대차처럼 시설 운영에 반복해서 필요한 품목을 규격과 수량에 맞춰 공급합니다.",
      body: "공공기관, 건설 현장, 제조 사업장의 구매 요청을 받으면 용도, 치수, 수량을 먼저 확인합니다. 작업면 길이와 수납 구성에 맞는 작업대와 운반 설비를 공급합니다.",
      services: ["모듈형 작업대·금속 타공판", "운반대차·철망 보관대차", "현장 소모성 자재 소싱"],
      values: ["치수와 하중을 먼저 확인", "여러 품목을 한 번에 정리", "납품 조건은 견적과 함께 협의"]
    },
    {
      id: "welding",
      title: "용접 정반·지그",
      kicker: "Welding Fixtures",
      cat: "용접·지그",
      image: "assets/img/welding.jpg",
      lead: "3차원 타공 정반, 클램프·지그, 차광 스크린처럼 작업물 고정과 주변 보호에 쓰는 기자재를 사양에 맞춰 공급합니다.",
      body: "상판 규격은 단품 표로 두고, 프레임 크기와 높이는 견적에서 정합니다. 클램프와 차광 스크린은 쓰는 장비에 맞춥니다.",
      services: ["3차원 용접용 타공 정반", "고정 클램프·지그", "용접 차광 스크린"],
      values: ["정반과 클램프의 호환 확인", "반복 작업용 고정 방식 검토", "안전 관련 인증은 모델별로 확인"]
    },
    {
      id: "storage",
      title: "작업대·보관설비",
      kicker: "Storage & Work",
      cat: "보관·수납",
      image: "assets/img/shelves.jpg",
      lead: "공구 캐비닛, 팔레트랙, 48서랍 부품 보관함처럼 작업장 정리와 보관에 쓰는 설비를 공급합니다.",
      body: "서랍 수, 적재 하중, 설치 면적, 이동 바퀴 유무를 기준으로 모델을 고릅니다. 카탈로그와 다른 치수가 필요하면 맞춤 소싱으로 안내합니다.",
      services: ["이동형 공구 캐비닛", "보관랙·팔레트랙", "48서랍 부품 보관함"],
      values: ["하중과 설치 면적을 먼저 확인", "잠금·이동 옵션을 구분", "기존 설비와 맞는지 확인"]
    },
    {
      id: "outdoor",
      title: "야외시설물",
      kicker: "Outdoor Structures",
      cat: "야외시설물",
      image: "assets/img/outdoor.jpg",
      lead: "파고라·썬룸, 피크닉테이블, 공공 벤치처럼 외부 휴게 공간에 두는 시설물을 현장 조건에 맞춰 공급합니다.",
      body: "크기, 지붕과 벽체 구성, 목재 마감, 고정 방식은 설치 장소에 따라 달라집니다. 유형과 크기를 장소에 맞춰 안내합니다.",
      services: ["파고라·썬룸", "피크닉테이블·공원테이블", "공공용 야외벤치"],
      values: ["설치 장소와 규격을 함께 확인", "유형별 구성을 나눠 안내", "현장 사진이 있으면 견적이 빨라집니다"]
    },
    {
      id: "interior",
      title: "조명·음향",
      kicker: "Lighting & Audio",
      cat: "조명·음향",
      image: "assets/img/interior.jpg",
      lead: "시설용 LED 선형 조명과 전문 음향 믹서를 용도와 인증 조건에 맞춰 공급합니다.",
      body: "전기용품은 국내 인증 대상인지, 어디에 설치하는지를 먼저 확인합니다. 인증과 사후관리 조건은 견적에 함께 적습니다.",
      services: ["시설용 LED 선형 조명", "전문 음향 믹서", "인테리어 자재 소싱"],
      values: ["인증 필요 여부를 먼저 구분", "설치 공사 범위는 별도", "사후관리 조건은 견적과 함께 안내"]
    },
    {
      id: "sourcing",
      title: "구매대행·맞춤 소싱",
      kicker: "Custom Sourcing",
      cat: "",
      image: "assets/img/factory.jpg",
      lead: "목록에 없는 제품도 모델명, 도면, 현장 사진을 받아 국내외에서 찾아 공급합니다.",
      body: "밝은내일은 국내외 제품 소싱과 기업 납품을 합니다. 모델명, 도면, 현장 사진, 수량을 받아 공급할 제품과 대체품을 정리합니다.",
      services: ["국내외 구매대행", "규격·도면 기반 탐색", "다품목 견적 정리"],
      values: ["모델명과 수량으로 찾습니다", "납기와 인도 장소를 함께 확인", "대체품이 있으면 같이 제안"]
    }
  ];

  const MENUS = [
    { href: "about.html", label: "회사 소개", children: [
      ["about.html#start", "공급 기준"],
      ["about.html#ch1", "규격 확인"],
      ["about.html#ch2", "현장 확장"],
      ["about.html#ch3", "맞춤 소싱"],
      ["about.html#info", "회사정보"]
    ]},
    { href: "business.html", label: "사업 영역", children: AREAS.map((a) => ["business.html?area=" + a.id, a.title]) },
    { href: "products.html", label: "제품 카탈로그", children: [
      ["products.html", "제품 검색"],
      ["catalog.html", "종합 카탈로그"]
    ]},
    { href: "contact.html", label: "견적 문의", children: [
      ["contact.html", "견적 문의"],
      ["contact.html#list", "문의할 제품"]
    ]}
  ];

  function lang() {
    return localStorage.getItem("btlang") === "en" ? "en" : "ko";
  }
  function t(ko, en) {
    return lang() === "en" ? en : ko;
  }
  const EN_LABEL = {
    "회사 소개": "Company",
    "사업 영역": "Business",
    "제품 카탈로그": "Products",
    "견적 문의": "Quote",
    "공급 기준": "How we supply",
    "규격 확인": "Specification",
    "현장 확장": "Sites",
    "맞춤 소싱": "Sourcing",
    "회사정보": "Facts",
    "산업·시설자재": "Industrial",
    "용접 정반·지그": "Welding",
    "작업대·보관설비": "Storage",
    "야외시설물": "Outdoor",
    "조명·음향": "Lighting & Audio",
    "구매대행·맞춤 소싱": "Custom sourcing",
    "제품 검색": "Search",
    "종합 카탈로그": "Catalogue",
    "문의할 제품": "Selected items"
  };
  function L(ko) {
    return lang() === "en" ? (EN_LABEL[ko] || ko) : ko;
  }

  function logo() {
    return '<svg viewBox="0 0 28 28" aria-hidden="true"><rect x="1.4" y="1.4" width="25.2" height="25.2" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 18.5h14M9 18.5 14 8.5l5 10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  }

  function renderHeader() {
    const overlay = document.body.dataset.header === "overlay";
    const gnb = MENUS.map((m) => {
      const sub = m.children.map(([h, l]) => '<a href="' + h + '">' + L(l) + "</a>").join("");
      return '<div class="gnb-item"><a href="' + m.href + '">' + L(m.label) + '</a><div class="sub">' + sub + "</div></div>";
    }).join("");
    const mobile = MENUS.map((m, i) => {
      const sub = m.children.map(([h, l]) => '<a href="' + h + '">' + L(l) + "</a>").join("");
      return '<div><button class="acc" type="button" data-acc="' + i + '">' + L(m.label) + '<span>+</span></button><div class="sublinks" id="acc-' + i + '">' + sub + "</div></div>";
    }).join("");
    const el = document.getElementById("chrome-header");
    if (!el) return;
    el.innerHTML =
      '<header class="site-header' + (overlay ? " at-top" : " solid at-top") + '" id="siteHeader">' +
      '<div class="header-bar"><div class="head-cluster"><a class="brand" href="index.html">' + logo() + '<span class="brand-name">밝은내일</span></a>' +
      '<a class="slogan" href="about.html">' + t("정교한 기준, 단정한 납품", "A precise standard.") + '</a></div>' +
      '<nav class="gnb" aria-label="주요">' + gnb +
      '<button class="lang" id="langBtn" type="button" title="' + t("English", "한국어") + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z"/></svg> ' + (lang() === "en" ? "EN" : "KR") + '</button></nav>' +
      '<button class="hamb" id="hamb" aria-label="메뉴"><span></span></button></div>' +
      '<div class="mobile-panel" id="mobilePanel">' + mobile + "</div></header>";
  }

  function renderFooter() {
    const el = document.getElementById("chrome-footer");
    if (!el) return;
    const cols = MENUS.map((m) => {
      const links = m.children.map(([h, l]) => '<a href="' + h + '">' + L(l) + "</a>").join("");
      return '<div class="foot-col"><span>' + L(m.label) + "</span>" + links + "</div>";
    }).join("");
    el.innerHTML =
      '<footer class="site-footer"><div class="frame foot-grid"><div><div class="brand" style="margin-bottom:16px">' + logo() +
      '<span class="brand-name">밝은내일</span></div><p class="legal" style="margin-top:0">' + t("<span class=\"nw\">산업·시설자재</span>, 용접 기자재, 보관설비, 야외시설물, <span class=\"nw\">조명·음향</span> 장비를 기업과 기관에 공급합니다.", "We supply industrial materials, welding gear, storage, outdoor structures, lighting, and audio to businesses and public buyers.") + '</p></div>' +
      cols + '</div><div class="frame legal"><p class="co-kicker">' + t("기업정보", "Company") + '</p><dl class="co-info">' +
      '<div><dt>' + t("상호", "Name") + '</dt><dd>밝은내일</dd></div>' +
      '<div><dt>' + t("대표", "Representative") + '</dt><dd>허진영</dd></div>' +
      '<div><dt>' + t("사업자등록번호", "Business no.") + '</dt><dd>629-50-00640</dd></div>' +
      '<div><dt>' + t("주소", "Address") + '</dt><dd>' + t("세종특별자치시 해밀3로 90, 303호", "90 Haemil 3-ro, unit 303, Sejong") + '</dd></div>' +
      '<div><dt>' + t("업태", "Type") + '</dt><dd>' + t("도매 및 소매업", "Wholesale and retail") + '</dd></div>' +
      '<div><dt>' + t("종목", "Items") + '</dt><dd>' + t("해외직구대행업, 전자상거래 소매업, 홈페이지 제작·웹개발 대행", "Overseas purchasing, e-commerce retail, website production") + '</dd></div>' +
      '<div><dt>' + t("취급", "Range") + '</dt><dd>' + t("<span class=\"nw\">산업·시설자재</span>, <span class=\"nw\">용접 정반·지그</span>, <span class=\"nw\">작업대·보관설비</span>, <span class=\"nw\">야외시설물</span>, <span class=\"nw\">조명·음향</span>, <span class=\"nw\">구매대행</span>", "Industrial materials, welding fixtures, storage, outdoor structures, lighting and audio, and custom sourcing") + '</dd></div>' +
      '<div><dt>' + t("주요 고객", "Clients") + '</dt><dd>' + t("공공기관, 건설사, 제조업체, 산업시설", "Public agencies, builders, manufacturers, and industrial sites") + '</dd></div>' +
      '<div><dt>' + t("문의", "Contact") + '</dt><dd>q886654@naver.com</dd></div></dl></div></footer>' +
      '<button class="totop" id="toTop" aria-label="맨 위로"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 14l6-6 6 6"/></svg></button>';
  }

  function bindChrome() {
    const header = document.getElementById("siteHeader");
    const hamb = document.getElementById("hamb");
    if (hamb) {
      hamb.addEventListener("click", () => header.classList.toggle("menu-open"));
    }
    document.querySelectorAll(".acc").forEach((btn) => {
      btn.addEventListener("click", () => {
        const box = document.getElementById("acc-" + btn.dataset.acc);
        box.classList.toggle("open");
      });
    });
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle("at-top", y < 12);
      const hide = y > last && y > 140 && !header.classList.contains("menu-open") && !header.classList.contains("nav-open");
      header.classList.toggle("hidden", hide);
      if (document.body.dataset.header === "overlay") header.classList.toggle("solid", y > 40);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    let closeTimer = 0;
    const closeMenus = () => {
      document.querySelectorAll(".gnb-item.open").forEach((item) => {
        item.classList.remove("open");
        delete item.dataset.lock;
      });
      header.classList.remove("nav-open");
    };
    document.querySelectorAll(".gnb-item").forEach((item) => {
      const link = item.querySelector(":scope > a");
      item.addEventListener("mouseenter", () => {
        clearTimeout(closeTimer);
        document.querySelectorAll(".gnb-item.open").forEach((other) => {
          if (other !== item) {
            other.classList.remove("open");
            delete other.dataset.lock;
          }
        });
        item.classList.add("open");
        header.classList.add("nav-open");
      });
      item.addEventListener("mouseleave", () => {
        if (item.dataset.lock === "1") return;
        closeTimer = setTimeout(() => {
          item.classList.remove("open");
          if (!document.querySelector(".gnb-item.open")) header.classList.remove("nav-open");
        }, 400);
      });
      if (link) link.addEventListener("click", (e) => {
        if (window.innerWidth < 1100) return;
        if (item.dataset.lock === "1") return;
        e.preventDefault();
        item.dataset.lock = "1";
        item.classList.add("open");
        header.classList.add("nav-open");
      });
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".gnb")) closeMenus();
    });
    const top = document.getElementById("toTop");
    if (top) top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    const langBtn = document.getElementById("langBtn");
    if (langBtn) langBtn.addEventListener("click", () => {
      localStorage.setItem("btlang", lang() === "en" ? "ko" : "en");
      location.reload();
    });
    document.querySelectorAll("[data-en]").forEach((el) => {
      if (!el.dataset.ko) el.dataset.ko = el.innerHTML;
      el.innerHTML = lang() === "en" ? el.dataset.en : el.dataset.ko;
    });
    watchInview();
  }

  function watchInview(root) {
    (root || document).querySelectorAll(".inview:not(.watched)").forEach((node) => {
      node.classList.add("watched");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) en.target.classList.add("in"); });
      }, { threshold: 0.12 });
      io.observe(node);
    });
  }

  function playVideos() {
    document.querySelectorAll("video").forEach((video) => {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("playsinline", "");
      const kick = () => video.play().catch(() => {});
      video.addEventListener("error", () => {
        const sec = video.closest(".hero, .band");
        if (sec) sec.classList.add("is-fallback");
      });
      if ("lazy" in video.dataset) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((en) => { if (en.isIntersecting) kick(); else video.pause(); });
        }, { rootMargin: "200px" });
        io.observe(video);
      } else {
        video.addEventListener("canplay", kick);
        kick();
      }
    });
  }

  function heroTitle() {
    const h = document.getElementById("heroTitle");
    if (!h) return;
    const lines = lang() === "en" ? ["Exacting conditions,", "composed results"] : ["조건은 까다롭게,", "결과는 단정하게"];
    let n = 0;
    h.innerHTML = lines.map((line, li) => {
      const chars = [...line].map((ch) => {
        const delay = (n++ / 18).toFixed(3);
        const glyph = ch === " " ? "&nbsp;" : ch;
        return '<span class="ch" style="animation-delay:' + delay + 's">' + glyph + "</span>";
      }).join("");
      return "<span>" + chars + "</span>" + (li === 0 ? "<br>" : "");
    }).join("");
  }

  function story() {
    const root = document.getElementById("story");
    const collage = document.getElementById("collage");
    if (!root || !collage) return;
    const main = document.getElementById("storyMain");
    const sats = [...collage.querySelectorAll(".sat")];
    const copy = document.getElementById("storyCopy");
    const title = document.getElementById("storyTitle");
    const desc = document.getElementById("storyDesc");
    const slides = [
      ["조건을 줄이지 않고<br>기준으로 남깁니다", "용도, 치수, 수량을 한 목록에 적습니다."],
      ["현장 자재와 설비를<br>한 목록에 담습니다", "산업 자재, 용접 고정구, 보관 설비처럼<br>반복되는 품목을 먼저 둡니다."],
      ["밖에 두는 제품은<br>장소부터 살핍니다", "파고라와 야외 가구는<br>크기와 고정 방식이 장소마다 다릅니다."]
    ];
    const keys = [0, 0.14, 0.32, 1];
    const mainKeys = [
      [45, 78, 12, 42],
      [33.3, 15.3, 33.3, 69.3],
      [-2.5, -2.4, 105, 105],
      [-2.5, -2.4, 105, 105]
    ];
    const satKeys = [
      [[10, 42, 42.4, 45], [10, -8, 42.4, 45], [10, -40, 42.4, 45], [10, -40, 42.4, 45]],
      [[75, 62, 29.7, 31], [75.3, 12.4, 29.7, 31.3], [75.3, -22, 29.7, 31.3], [75.3, -22, 29.7, 31.3]],
      [[-8, 70, 28, 33], [-5, 52, 27.8, 33.3], [-5, 8, 27.8, 33.3], [-5, 8, 27.8, 33.3]],
      [[70, 92, 40, 36], [58.3, 78.8, 46.7, 43.4], [58.3, 42, 46.7, 43.4], [58.3, 42, 46.7, 43.4]]
    ];
    const lerp = (a, b, t) => a + (b - a) * t;
    const sample = (track, p) => {
      let i = 0;
      while (i < keys.length - 2 && p > keys[i + 1]) i++;
      const span = keys[i + 1] - keys[i] || 1;
      const t = Math.min(1, Math.max(0, (p - keys[i]) / span));
      return track[i].map((n, k) => lerp(n, track[i + 1][k], t));
    };
    const place = (el, box, radius, cover) => {
      el.style.borderRadius = radius + "px";
      if (cover) {
        el.style.left = "0";
        el.style.top = "0";
        el.style.width = "100%";
        el.style.height = "100%";
        el.style.transform = "scale(1.04)";
        return;
      }
      el.style.transform = "none";
      el.style.left = box[0] + "%";
      el.style.top = box[1] + "%";
      el.style.width = box[2] + "%";
      el.style.height = box[3] + "%";
    };
    const copyAt = 0.32;
    const onScroll = () => {
      const rect = root.getBoundingClientRect();
      const total = root.offsetHeight - window.innerHeight;
      const p = total ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      const radius = p > copyAt ? 0 : 10;
      place(main, sample(mainKeys, p), radius, p >= copyAt);
      sats.forEach((img, i) => {
        place(img, sample(satKeys[i], p), 10, false);
        img.style.opacity = String(p < 0.18 ? 1 : Math.max(0, 1 - (p - 0.18) / 0.14));
      });
      copy.style.opacity = String(Math.min(1, Math.max(0, (p - copyAt) / 0.05)));
      const span = (1 - copyAt) / slides.length;
      const idx = Math.min(slides.length - 1, Math.floor(Math.max(0, p - copyAt) / span));
      title.innerHTML = slides[idx][0];
      desc.innerHTML = slides[idx][1];
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function process() {
    const stage = document.getElementById("processStage");
    if (!stage) return;
    const steps = [
      ["요청 접수", "01", "assets/img/warehouse.jpg", "수량과 납기를<br>먼저 받습니다", "품목 이름만 있어도 됩니다. 수량과 납기는 함께 적습니다."],
      ["규격·용도 확인", "02", "assets/img/aisle.jpg", "쓰임과 치수를<br>먼저 확인합니다", "하중, 설치 장소, 장비 규격을 용도와 함께 살핍니다."],
      ["국내외 소싱", "03", "assets/img/trolley.jpg", "국내 유통과<br>해외 제품을 나눕니다", "국내에서 바로 구하는 제품과 해외에서 가져올 제품을 나눕니다."],
      ["견적 제안", "04", "assets/img/tools.jpg", "품목과 규격을<br>한 목록에 적습니다", "확인한 치수와 수량을 가격과 함께 적습니다."],
      ["납품 조건 조율", "05", "assets/img/shelves.jpg", "인도 장소와<br>일정을 맞춥니다", "반입 경로와 납품 일정을 견적과 함께 조율합니다."]
    ];
    const title = document.getElementById("processTitle");
    const no = document.getElementById("processNo");
    const next = document.getElementById("processNext");
    const nextNo = document.getElementById("processNextNo");
    const nextWrap = document.getElementById("processNextWrap");
    const img = document.getElementById("processImg");
    const head = document.getElementById("processHead");
    const desc = document.getElementById("processDesc");
    let current = -1;
    const onScroll = () => {
      const rect = stage.getBoundingClientRect();
      const total = Math.max(stage.offsetHeight - window.innerHeight * 0.6, 1);
      const passed = Math.min(Math.max(window.innerHeight * 0.4 - rect.top, 0), total);
      const idx = Math.min(steps.length - 1, Math.floor((passed / total) * steps.length));
      title.textContent = steps[idx][0];
      no.textContent = steps[idx][1];
      if (idx !== current) {
        current = idx;
        if (head) head.innerHTML = steps[idx][3];
        if (desc) desc.textContent = steps[idx][4];
        if (img.getAttribute("src") !== steps[idx][2]) img.src = steps[idx][2];
      }
      const nxt = steps[idx + 1];
      nextWrap.style.visibility = nxt ? "visible" : "hidden";
      if (nxt) {
        next.textContent = nxt[0];
        nextNo.textContent = nxt[1];
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const QUOTE_KEY = "btbasket";
  function readQuote() {
    try { return JSON.parse(localStorage.getItem(QUOTE_KEY) || "[]"); }
    catch (e) { return []; }
  }
  function writeQuote(ids) {
    localStorage.setItem(QUOTE_KEY, JSON.stringify(ids));
  }

  let PRODUCTS = [];
  async function loadProducts() {
    if (!document.getElementById("productGrid") && !document.getElementById("areaProducts") && !document.getElementById("quoteList") && !document.getElementById("productRoot") && !document.getElementById("catalogRoot")) return;
    const res = await fetch("products.json");
    PRODUCTS = await res.json();
    const preset = new URLSearchParams(location.search).get("cat");
    if (preset) document.body.dataset.cat = preset;
    drawProducts();
    drawAreaProducts();
    drawQuote();
    renderProduct();
    renderCatalog();
    const hash = location.hash.replace("#", "");
    if (hash && PRODUCTS.some((p) => p.id === hash) && !document.getElementById("productRoot")) location.href = "product.html?id=" + encodeURIComponent(hash);
  }

  function safe(s) {
    return String(s || "").replace(/[&<>"]/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[t]));
  }

  function cardFigure(p, alt) {
    if (!p.photo) return '<figure><div class="empty">제품 사진 준비 중</div></figure>';
    return '<figure><img src="' + safe(p.photo) + '" alt="' + safe(alt == null ? p.title : alt) + '" loading="lazy" decoding="async"></figure>';
  }

  function drawProducts() {
    const grid = document.getElementById("productGrid");
    if (!grid) return;
    const cat = document.body.dataset.cat || "전체";
    const q = (document.getElementById("q")?.value || "").trim().toLowerCase();
    const filters = document.getElementById("filters");
    const cats = ["전체", ...new Set(PRODUCTS.map((p) => p.cat))];
    if (filters && !filters.dataset.ready) {
      filters.innerHTML = cats.map((c) => '<button type="button" data-cat="' + c + '">' + c + "</button>").join("");
      filters.dataset.ready = "1";
      filters.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        document.body.dataset.cat = b.dataset.cat;
        drawProducts();
      });
    }
    if (filters) {
      filters.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.cat === (document.body.dataset.cat || "전체")));
    }
    const list = PRODUCTS.filter((p) => (cat === "전체" || p.cat === cat) && (!q || (p.title + p.en + p.id + p.lead + (p.detail || "") + (p.example || "")).toLowerCase().includes(q)));
    grid.innerHTML = list.map((p, i) =>
      '<a class="pcard inview" href="product.html?id=' + encodeURIComponent(p.id) + '" style="transition-delay:' + ((i % 4) * 70) + 'ms">' + cardFigure(p) + '<div class="meta">' + safe(p.id) + " · " + safe(p.label) + "</div><h3>" + (lang() === "en" ? safe(p.en) : safe(p.title)) + "</h3><p>" + safe(p.lead) + '</p><span class="badge">' + t("상세 페이지", "Details") + "</span></a>"
    ).join("") || '<p class="empty">검색 결과가 없습니다.</p>';
    watchInview(grid);
    grid.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.replaceWith(Object.assign(document.createElement("div"), { className: "empty", textContent: "사진을 불러오지 못했습니다" }));
      });
    });
  }

  function drawAreaProducts() {
    const box = document.getElementById("areaProducts");
    if (!box) return;
    const area = AREAS.find((a) => a.id === (new URLSearchParams(location.search).get("area") || "industrial")) || AREAS[0];
    const list = area.cat ? PRODUCTS.filter((p) => p.cat === area.cat) : [];
    box.innerHTML = list.map((p) =>
      '<a class="pcard" href="product.html?id=' + encodeURIComponent(p.id) + '">' + cardFigure(p, "") + '<div class="meta">' + safe(p.id) + " · " + safe(p.label) + "</div><h3>" + safe(p.title) + "</h3><p>" + safe(p.lead) + "</p></a>"
    ).join("") || '<p class="empty">요청하신 모델명과 수량으로 제품을 찾습니다.</p>';
    box.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.replaceWith(Object.assign(document.createElement("div"), { className: "empty", textContent: "사진을 불러오지 못했습니다" }));
      });
    });
  }

  function drawQuote() {
    const box = document.getElementById("quoteList");
    if (!box) return;
    const ids = readQuote();
    const items = ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
    box.innerHTML = items.length ? items.map((p) =>
      '<div class="quote-chip"><span>' + safe(p.title) + " · " + safe(p.id) + '</span><button type="button" data-remove="' + p.id + '">빼기</button></div>'
    ).join("") : '<p class="empty">아직 고른 제품이 없습니다. 제품 상세에서 견적 문의를 누르면 여기에 모입니다.</p>';
    const count = document.getElementById("quoteCount");
    if (count) count.textContent = items.length ? " " + items.length : "";
    box.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        writeQuote(readQuote().filter((id) => id !== btn.dataset.remove));
        drawQuote();
      });
    });
  }

  const BIZ = {
    industrial: {
      cards: [
        ["현장 자재", "작업대, 타공판, 보관대차를 치수와 구성으로 나눠 공급합니다.", "assets/img/workshop.jpg", "products.html?cat=" + encodeURIComponent("산업·작업장"), "이 품목 보기"],
        ["여러 품목 정리", "한 현장의 작업대, 타공판, 대차를 한 목록으로 정리합니다.", "assets/img/aisle.jpg", "contact.html", "견적 문의"]
      ],
      itemHead: ["작업대, 타공판, 운반 설비", "Workbenches, pegboards, and carts"],
      itemLead: ["조립과 정비, 자재 이동에 쓰는 설비를 치수와 구성에 맞춰 공급합니다.", "Benches, pegboards, and carts matched to size and layout."],
      scope: [
        ["작업대", "서랍장과 상부 타공판을 고르는 모듈형 작업대. 길이 1,200~2,100mm, 기본 깊이 750mm, 기본 작업면 높이 800mm."],
        ["금속 타공판", "공구를 걸어 두는 금속 타공판. 화이트·블랙, 양면 스탠드·바퀴형·단면형, 크기 26가지."],
        ["운반대차", "박스와 자재를 싣는 평판형 운반대차. 접이식 손잡이형 중심이고, 데크 크기와 하중은 견적에서 협의합니다."],
        ["철망 보관대차", "부품과 자재를 철망 안에 나눠 담고 옮기는 보관대차. 크기 세 가지와 선반 구성으로 견적합니다."],
        ["기타 소모품", "걸이, 바퀴, 보수용 부속처럼 본체와 함께 요청되는 부품."]
      ],
      groups: [
        ["작업대", ["작업면 길이", "상부 타공판", "수납 구성"]],
        ["타공판", ["색", "형태", "크기"]],
        ["운반", ["데크 크기", "하중", "브레이크"]],
        ["확인", ["설치 면적", "반입 경로", "수량"]]
      ]
    },
    welding: {
      cards: [
        ["정반·클램프", "정반 규격과 필요한 클램프 종류로 구성을 정합니다.", "assets/img/welding.jpg", "products.html?cat=" + encodeURIComponent("용접·지그"), "이 품목 보기"],
        ["작업 분리", "차광 스크린은 크기와 이동, 인증 필요 여부를 따로 적습니다.", "assets/img/factory.jpg", "contact.html", "규격 보내기"]
      ],
      itemHead: ["정반, 클램프, 보호 설비", "Tables, clamps, and protection"],
      itemLead: ["반복 용접에 쓰는 정반과 고정구, 차광 설비와 보호구를 규격에 맞춰 찾습니다.", "Fixture tables, clamps, screens, and protective gear matched to the weld setup."],
      scope: [
        ["타공 정반", "HT250 회주철 3차원 용접 정반. 상판 단품 9규격과 프레임 포함 완성형."],
        ["클램프", "앵글, 토글·레버, 나사형 클램프, 스토퍼를 작업에 맞춰 조합합니다. 핀 규격과 개구는 모델별로 확인합니다."],
        ["차광 스크린", "작업 구역을 나누는 프레임·커튼 스크린. 차광·난연 성능은 모델 자료로 확인합니다."],
        ["기타 안전구", "장갑, 앞치마, 보안면처럼 용접 작업에 함께 쓰는 보호구."]
      ],
      groups: [
        ["정반", ["상판 규격", "프레임", "잠금핀"]],
        ["고정", ["클램프 종류", "수량", "정반 사진"]],
        ["보호", ["스크린 크기", "바퀴", "커튼"]],
        ["확인", ["보유 장비", "반복 작업", "인증"]]
      ]
    },
    storage: {
      cards: [
        ["보관 설비", "캐비닛, 랙, 부품함의 하중과 본체 크기를 공간에 맞춥니다.", "assets/img/shelves.jpg", "products.html?cat=" + encodeURIComponent("보관·수납"), "이 품목 보기"],
        ["반입 검토", "문과 엘리베이터보다 큰 제품은 분해 반입 가능 여부부터 봅니다.", "assets/img/aisle.jpg", "contact.html", "치수 문의"]
      ],
      itemHead: ["캐비닛, 랙, 부품함", "Cabinets, racks, and bins"],
      itemLead: ["공구와 부품을 나눠 두는 보관 설비를 공간과 하중에 맞춥니다.", "Storage sized to the room and the load on each shelf."],
      scope: [
        ["공구 캐비닛", "서랍에 공구를 나눠 담고 작업 위치로 옮기는 캐비닛. 서랍 수, 잠금, 바퀴는 모델마다 확인합니다."],
        ["경량 보관랙", "공구와 부품 상자를 다단으로 올리는 조립식 선반. 무볼트형 중심이고, 크기와 단수는 견적에서 협의합니다."],
        ["팔레트랙", "팔레트 단위 중량물을 올리는 기둥·빔 랙. 폭·깊이·높이, 단수, 하중은 현장에서 협의합니다."],
        ["부품함", "48서랍형 부품 보관함. 외형 크기, 서랍 내부 치수와 설치 방식은 모델마다 확인합니다."],
        ["특수 보관", "장척, 위험물, 온습도처럼 일반 선반으로 두기 어려운 보관."]
      ],
      groups: [
        ["캐비닛", ["서랍 수", "잠금", "캐스터"]],
        ["랙", ["단 하중", "층수", "고정"]],
        ["부품", ["칸 크기", "라벨", "서랍 수"]],
        ["공간", ["폭·깊이·높이", "통로", "바닥"]]
      ]
    },
    outdoor: {
      cards: [
        ["휴게 시설", "파고라, 테이블, 벤치를 설치 장소와 고정 방식으로 나눕니다.", "assets/img/outdoor.jpg", "products.html?cat=" + encodeURIComponent("야외시설물"), "이 품목 보기"],
        ["현장 조건", "기초, 풍하중, 반입 경로는 제품 이름과 별도로 받습니다.", "assets/img/road.jpg", "contact.html", "현장 정보"]
      ],
      itemHead: ["파고라, 테이블, 벤치", "Pergolas, tables, and benches"],
      itemLead: ["휴게 공간의 시설물을 설치 장소와 고정 방식에 맞춰 제안합니다.", "Outdoor structures matched to the site and how they are fixed."],
      scope: [
        ["파고라·썬룸", "전동 루버형, 유리 썬룸형, 고정 지붕형 가제보. 루버형과 유리형은 현장 크기로 정하고, 가제보는 3×3m부터 4×6m까지 선택 규격이 있습니다."],
        ["야외 테이블", "원목 일체형, 육각형, 사각형 벤치형. 원목형 길이는 1,200mm부터 2,000mm까지 여섯 가지이고, 파라솔은 선택 구성입니다."],
        ["벤치", "공원과 산책로에 두는 야외 벤치. 등받이, 길이, 자립 또는 바닥 고정은 모델과 현장으로 협의합니다."],
        ["전기·기초", "조명 배선과 기초 공사는 시설물 납품과 항목을 나눠 견적합니다."]
      ],
      groups: [
        ["파고라", ["유형", "크기", "지붕·벽"]],
        ["테이블", ["형태", "길이", "파라솔"]],
        ["벤치", ["등받이", "길이", "설치"]],
        ["현장", ["바닥", "반입", "유지보수"]]
      ]
    },
    interior: {
      cards: [
        ["조명·음향", "LED 조명과 음향 믹서를 길이, 출력, 채널, 국내 인증으로 나눠 공급합니다.", "assets/img/interior.jpg", "products.html?cat=" + encodeURIComponent("조명·음향"), "이 품목 보기"],
        ["공사와 제품", "전기 공사와 장비 납품은 한 항목으로 섞지 않습니다.", "assets/img/workshop.jpg", "contact.html", "인증 문의"]
      ],
      itemHead: ["조명, 음향, 시설 자재", "Lighting, audio, and fit-out"],
      itemLead: ["LED 조명, 음향 믹서, 마감 자재를 설치 방식과 인증 조건에 맞춰 공급합니다.", "Lights, mixers, and finishes matched to the install and certification."],
      scope: [
        ["선형 조명", "공장과 창고에 쓰는 LED 선형 조명. 길이, 전력, 색온도, 직부·매달기는 모델마다 확인합니다."],
        ["인테리어 자재", "마감재와 부착 자재. 기존 면의 치수와 수량을 받아 찾습니다."],
        ["음향 믹서", "공연장, 강당, 행사장, 회의·방송 공간에 쓰는 믹서. 아날로그·디지털·파워드 중에서 채널 수와 입출력으로 고릅니다."],
        ["전기 공사", "배선과 등기구 교체 공사는 제품 금액과 따로 적습니다."]
      ],
      groups: [
        ["조명", ["길이", "색온도", "설치"]],
        ["인증", ["KC 대상", "정품 경로", "사후관리"]],
        ["음향", ["믹서 종류", "채널", "입출력"]],
        ["범위", ["제품 납품", "설치 공사", "기존 등 교체"]]
      ]
    },
    sourcing: {
      cards: [
        ["조건으로 찾기", "모델명, 도면, 사진, 수량만 있어도 공급 가능 여부를 알려 드립니다.", "assets/img/factory.jpg", "contact.html", "소싱 문의"],
        ["답변", "공급 가능 여부, 대체품, 진행이 어려운 이유를 구분해 알립니다.", "assets/img/warehouse.jpg", "products.html", "제품 보기"]
      ],
      itemHead: ["목록에 없는 제품", "Items not in the catalogue"],
      itemLead: ["모델명, 도면, 현장 사진이 있으면 국내외에서 공급 가능 여부를 확인합니다.", "With a model, drawing, or site photo, we check whether it can be supplied."],
      scope: [
        ["국내 유통", "국내에서 모델명으로 연결할 수 있는 제품. 수량과 납기를 함께 받습니다."],
        ["해외 소싱", "해외 제조사 제품을 규격, 도면, 수량 기준으로 찾습니다."],
        ["도면 맞춤", "도면이나 현장 사진이 있는 맞춤 제작과 대체품."],
        ["추가 요청", "카탈로그에 없는 품목도 사용 조건이 있으면 공급 가능 여부를 확인합니다."]
      ],
      groups: [
        ["받는 정보", ["제품명", "모델명", "수량"]],
        ["함께 받으면 좋은 자료", ["사진", "도면", "기존 제품"]],
        ["정리해서 답합니다", ["공급 가능", "대체품", "진행이 어려운 경우"]],
        ["진행 조건", ["납기", "인증", "인도 장소"]]
      ]
    }
  };

  function businessPage() {
    const root = document.getElementById("businessRoot");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("area") || "industrial";
    const area = AREAS.find((a) => a.id === id) || AREAS[0];
    const biz = BIZ[area.id];
    document.title = area.title + " | 밝은내일";
    const cards = biz.cards.map(([title, text, img, href, cta]) =>
      '<article class="svc"><img src="' + img + '" alt=""><div><h3>' + title + "</h3><p>" + text + '</p><a href="' + href + '">' + cta + " ↗</a></div></article>"
    ).join("");
    const quotes = area.values.map((v) => "<article>" + v + "</article>").join("");
    const scope = biz.scope.map(([label, note]) =>
      "<li><b>" + label + "</b><span>" + note + "</span></li>"
    ).join("");
    const groups = biz.groups.map(([title, items]) =>
      "<div><h3>" + title + "</h3><ul>" + items.map((item) => "<li>" + item + "</li>").join("") + "</ul></div>"
    ).join("");
    const valueTitle = {
      industrial: ["현장 치수에 맞춥니다", "Matched to the site"],
      welding: ["보유 장비에 맞춥니다", "Matched to the tools on site"],
      storage: ["보관 공간에 맞춥니다", "Matched to the room"],
      outdoor: ["설치 장소에 맞춥니다", "Matched to the location"],
      interior: ["설치 방식에 맞춥니다", "Matched to the install"],
      sourcing: ["요청 조건으로 찾습니다", "Found from the request"]
    }[area.id] || [area.title, area.kicker];
    root.innerHTML =
      '<section class="biz-hero" style="background-image:url(' + area.image + ')"><div class="biz-hero-dim"></div><div class="frame"><h1>' + area.title + "</h1></div></section>" +
      '<section class="biz-lead inview"><div class="frame biz-lead-grid"><p>' + area.lead + '</p><nav class="dotnav" id="dotnav"><a href="#scope" class="on"><i></i>' + t("주요 범위", "Scope") + '</a><a href="#items"><i></i>' + t("취급 품목", "Items") + "</a></nav></div></section>" +
      '<section class="biz-blue inview" id="scope"><div class="frame"><h2 class="t-h">' + t("주요 범위", "Scope") + '</h2><div class="svc-grid">' + cards + "</div></div></section>" +
      '<section class="biz-value inview" id="value"><div class="frame"><h2 class="t-h">' + t(valueTitle[0], valueTitle[1]) + '</h2><div class="value-banner" style="background-image:url(' + area.image + ')"><span></span><p>' + area.body + '</p></div><div class="quote-grid">' + quotes + "</div></div></section>" +
      '<section class="section inview" id="items"><div class="frame"><p class="t-kicker">' + t("취급 품목", "Items") + '</p><h2 class="t-h">' + t(biz.itemHead[0], biz.itemHead[1]) + '</h2><p class="muted">' + t(biz.itemLead[0], biz.itemLead[1]) + '</p><ul class="scope-list">' + scope + '</ul><div class="group-grid">' + groups + '</div><div class="pgrid" id="areaProducts" style="margin-top:36px"></div><p style="margin-top:28px"><a class="btn dark" href="contact.html">' + t("견적 문의하기", "Request a quote") + "</a></p></div></section>";
    watchInview(root);
    bizSpy();
  }

  function bizSpy() {
    const links = [...document.querySelectorAll("#dotnav a")];
    if (!links.length) return;
    const onScroll = () => {
      let current = links[0].getAttribute("href");
      links.forEach((a) => {
        const el = document.querySelector(a.getAttribute("href"));
        if (el && el.getBoundingClientRect().top < 180) current = a.getAttribute("href");
      });
      links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === current));
    };
    const hero = document.querySelector(".biz-hero");
    const nav = document.getElementById("dotnav");
    window.addEventListener("scroll", () => {
      onScroll();
      if (hero) hero.style.backgroundPosition = "center " + Math.min(28, window.scrollY * 0.035) + "%";
      const blue = document.getElementById("scope");
      const items = document.getElementById("items");
      if (nav && blue && items) {
        const pastLead = blue.getBoundingClientRect().top < 160;
        const stillInPage = items.getBoundingClientRect().bottom > 200;
        nav.classList.toggle("float", pastLead && stillInPage);
      }
    }, { passive: true });
    onScroll();
  }

  function storyChapters() {
    const chapters = [...document.querySelectorAll("[data-chapter]")];
    if (!chapters.length) return;
    const onScroll = () => {
      chapters.forEach((sec) => {
        const track = sec.querySelector(".chapter-track");
        if (!track || window.innerWidth < 800) {
          if (track) track.style.transform = "none";
          return;
        }
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - window.innerHeight;
        const raw = total ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        const p = raw < 0.22 ? 0 : Math.min(1, (raw - 0.22) / 0.78);
        const max = Math.max(0, track.scrollWidth - Math.min(980, window.innerWidth - 80));
        track.style.transform = "translate3d(" + (-p * max) + "px,0,0)";
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  function renderProduct() {
    const root = document.getElementById("productRoot");
    if (!root) return;
    const id = new URLSearchParams(location.search).get("id");
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) {
      root.innerHTML = '<section class="page-hero"><div class="frame"><h1 class="t-h">제품을 찾지 못했습니다</h1><p><a class="btn dark" href="products.html">제품 목록</a></p></div></section>';
      return;
    }
    document.title = (lang() === "en" ? p.en : p.title) + " | 밝은내일";
    const names = p.points || p.spec || [];
    const notes = p.specNotes || [];
    const rows = names.map((item, i) => "<div><dt>" + safe(item) + "</dt><dd>" + safe(notes[i] || "") + "</dd></div>").join("");
    const typeRows = (p.types || []).map((row) => "<tr><td>" + safe(row[0]) + "</td><td>" + safe(row[1]) + "</td><td>" + safe(row[2]) + "</td></tr>").join("");
    const typeBlock = typeRows
      ? '<div class="size-wrap"><h2 class="t-h">' + t("확인된 형태", "Confirmed types") + '</h2><p class="size-note">' + t("디자인은 같고, 색과 구조만 다릅니다. 단면형은 벽에 기대어 세웁니다.", "The design is the same. Color and structure change. Single-sided boards need a wall.") + '</p><table class="size-table"><thead><tr><th>' + t("구분", "Type") + "</th><th>" + t("색", "Color") + "</th><th>" + t("형태", "Form") + "</th></tr></thead><tbody>" + typeRows + "</tbody></table></div>"
      : "";
    const customSize = Array.isArray(p.sizeHead) && p.sizeHead.length;
    const sizeHeads = customSize ? p.sizeHead : [t("높이", "Height"), t("폭", "Width"), t("포함 후크", "Hooks included")];
    const sizeNote = p.sizeNote ? safe(p.sizeNote) : t("첫 숫자는 높이, 둘째 숫자는 폭입니다. 후크는 그 크기에 포함됩니다.", "The first number is height, the second is width. Hooks come with that size.");
    const sizeTitle = p.sizeTitle ? safe(p.sizeTitle) : t("크기 옵션", "Size options");
    const sizeRows = (p.sizes || []).map((row) => "<tr>" + row.map((cell) => "<td>" + safe(cell) + "</td>").join("") + "</tr>").join("");
    const sizeBlock = sizeRows
      ? '<div class="size-wrap"><h2 class="t-h">' + sizeTitle + '</h2><p class="size-note">' + sizeNote + '</p><table class="size-table' + (customSize ? "" : " count") + '"><thead><tr>' + sizeHeads.map((head) => "<th>" + safe(head) + "</th>").join("") + "</tr></thead><tbody>" + sizeRows + "</tbody></table></div>"
      : "";
    const steps = (p.install || [p.example || p.detail || p.lead]).map((text, i) => "<li><b>0" + (i + 1) + "</b><span>" + safe(text) + "</span></li>").join("");
    const more = PRODUCTS.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 3).map((x) =>
      '<a class="pcard" href="product.html?id=' + encodeURIComponent(x.id) + '">' + cardFigure(x, "") + "<h3>" + safe(x.title) + "</h3><p>" + safe(x.lead) + "</p></a>"
    ).join("");
    const gallery = Array.isArray(p.photos) && p.photos.length
      ? p.photos.map((item) => typeof item === "string" ? { src: item, alt: p.title } : item)
      : (p.photo ? [{ src: p.photo, alt: p.title }] : []);
    const shotHtml = gallery.map((item) => '<img src="' + safe(item.src) + '" alt="' + safe(item.alt || p.title) + '"' + (item.wide ? ' class="wide"' : "") + ">").join("");
    const heroTitle = '<div class="frame"><p>' + safe(p.en) + "</p><h1>" + safe(lang() === "en" ? p.en : p.title) + "</h1></div>";
    const shotClass = gallery.length > 5 ? " shots many" : gallery.length > 1 ? " shots" : "";
    const shotNote = p.photoNote ? '<p class="shot-note">' + safe(p.photoNote) + "</p>" : "";
    const hero = !gallery.length
      ? '<section class="biz-hero pack"><div class="shot"><p class="empty">제품 사진 준비 중</p></div>' + heroTitle + "</section>"
      : p.packshot
      ? '<section class="biz-hero pack"><div class="shot' + shotClass + '">' + shotHtml + "</div>" + shotNote + heroTitle + "</section>"
      : '<section class="biz-hero" style="background-image:url(' + safe(p.photo) + ')"><div class="biz-hero-dim"></div>' + heroTitle + "</section>";
    const installLead = p.packshot
      ? '<p class="detail-copy">' + safe(p.example || p.lead) + "</p>"
      : '<div class="value-banner" style="background-image:url(' + safe(p.photo) + ')"><span></span><p>' + safe(p.example || p.lead) + "</p></div>";
    root.innerHTML =
      hero +
      '<section class="biz-lead"><div class="frame"><p class="t-kicker">' + safe(p.cat) + " · " + safe(p.id) + '</p><p class="detail-copy">' + safe(p.detail || p.lead) + "</p></div></section>" +
      '<section class="section" id="spec"><div class="frame"><p class="t-kicker">' + t("규격", "Specification") + '</p><h2 class="t-h">' + t("주요 사양", "Key specifications") + '</h2><dl class="spec-table">' + rows + "</dl>" + typeBlock + sizeBlock + "</div></section>" +
      '<section class="biz-value" id="install"><div class="frame"><p class="kicker-left">' + (p.packshot ? t("고르는 기준", "How to choose") : t("설치와 사용", "Installation and use")) + "</p>" + installLead + '<ol class="install-steps">' + steps + '</ol><p style="margin-top:28px"><button class="btn dark" type="button" id="addQuote">' + t("이 제품으로 견적 문의", "Quote this product") + "</button></p></div></section>" +
      (more ? '<section class="section"><div class="frame"><h2 class="t-card">' + t("같은 영역의 다른 제품", "More in this range") + '</h2><div class="pgrid" style="margin-top:24px">' + more + "</div></div></section>" : "");
    const img = root.querySelector(".biz-hero");
    root.querySelectorAll("img").forEach((el) => {
      el.addEventListener("error", () => {
        el.replaceWith(Object.assign(document.createElement("div"), { className: "empty", textContent: "사진을 불러오지 못했습니다" }));
      });
    });
    document.getElementById("addQuote").onclick = () => {
      const ids = readQuote();
      if (!ids.includes(p.id)) ids.push(p.id);
      writeQuote(ids);
      location.href = "contact.html#list";
    };
    if (img && !p.packshot) img.style.backgroundImage = "url('" + p.photo + "')";
  }

  function renderCatalog() {
    const root = document.getElementById("catalogRoot");
    if (!root) return;
    const cats = [...new Set(PRODUCTS.map((p) => p.cat))];
    root.innerHTML = cats.map((cat) => {
      const cards = PRODUCTS.filter((p) => p.cat === cat).map((p) =>
        '<a class="pcard" href="product.html?id=' + encodeURIComponent(p.id) + '">' + cardFigure(p) + '<div class="meta">' + safe(p.id) + " · " + safe(p.label) + "</div><h3>" + safe(lang() === "en" ? p.en : p.title) + "</h3><p>" + safe(p.lead) + "</p></a>"
      ).join("");
      return '<section class="section" style="padding-top:28px"><p class="t-kicker">' + safe(cat) + '</p><div class="pgrid">' + cards + "</div></section>";
    }).join("");
    root.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.replaceWith(Object.assign(document.createElement("div"), { className: "empty", textContent: t("사진을 불러오지 못했습니다", "Photo unavailable") }));
      });
    });
  }

  function contactForm() {
    const form = document.getElementById("quoteForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ids = readQuote();
      const names = ids.map((id) => {
        const p = PRODUCTS.find((x) => x.id === id);
        return p ? p.title + "(" + p.id + ")" : id;
      });
      const company = document.getElementById("company").value;
      const body = [
        "기관/회사: " + company,
        "담당자: " + document.getElementById("name").value,
        "연락처: " + document.getElementById("phone").value,
        "이메일: " + document.getElementById("email").value,
        "",
        "요청 제품: " + (names.join(", ") || "지정 없음"),
        "",
        document.getElementById("detail").value
      ].join("\n");
      const mailto = "mailto:q886654@naver.com?subject=" + encodeURIComponent("[밝은내일 견적문의] " + company) + "&body=" + encodeURIComponent(body);
      const done = document.getElementById("quoteDone");
      const plain = document.getElementById("quotePlain");
      if (plain) plain.textContent = body;
      if (done) done.hidden = false;
      const open = document.getElementById("openMail");
      if (open) open.onclick = () => { location.href = mailto; };
      const copy = document.getElementById("copyQuote");
      if (copy) copy.onclick = () => navigator.clipboard.writeText(body).then(() => { copy.textContent = t("복사했습니다", "Copied"); });
      location.href = mailto;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    bindChrome();
    heroTitle();
    playVideos();
    story();
    process();
    businessPage();
    storyChapters();
    document.documentElement.lang = lang() === "en" ? "en" : "ko";
    const search = document.getElementById("q");
    if (search) search.addEventListener("input", drawProducts);
    contactForm();
    document.querySelectorAll("[data-scroll]").forEach((btn) => {
      btn.addEventListener("click", () => document.getElementById(btn.dataset.scroll)?.scrollIntoView({ behavior: "smooth" }));
    });
    loadProducts().catch(() => {
      const grid = document.getElementById("productGrid");
      if (grid) grid.innerHTML = '<p class="empty">제품 정보를 불러오지 못했습니다. 페이지를 웹 서버로 열어 주세요.</p>';
    });
  });
})();
