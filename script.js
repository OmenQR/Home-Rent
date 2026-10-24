(() => {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const translations = {
    en: {
      call:"Call to enquire",available:"A PLACE TO CALL YOUR OWN",welcome:"Welcome to Gupta's Home",
      heroTitle:"A little more<br><em>room to live.</em>",heroDesc:"A newly built 1 BHK designed for comfortable, everyday living.",
      explore:"Explore the home",propertyAt:"YOUR NEXT ADDRESS",oneBhk:"1 BHK Home",shortAddress:"East Kabin Road, Khagaria, Bihar",
      bedBath:"bathroom",floors:"floors available",viewDetails:"View property details",newlyBuilt:"Newly built · Well maintained",
      comfortable:"Comfortable living",thoughtful:"Thoughtfully planned 1 BHK",secure:"Safe & secure",peace:"A place to feel at ease",connected:"Conveniently located",nearbyMarket:"Market and essentials nearby",
      discover:"DISCOVER THE PROPERTY",detailsTitle:"Made for everyday comfort.",detailsDesc:"A practical, well-maintained home with the essentials for a comfortable routine.",
      propertyOverview:"PROPERTY OVERVIEW",overviewTitle:"Your own comfortable corner.",overviewDesc:"A newly built 1 BHK home in Khagaria, with useful everyday amenities and a convenient neighbourhood.",
      layout:"Layout",area:"Area",bathroom:"Bathroom",kitchen:"Kitchen",parking:"Parking",availableYes:"Available",floor:"Floor",firstSecond:"1st & 2nd",askAbout:"Ask about availability",
      lightTitle:"Light & ventilation",lightDesc:"Ventilation designed to keep daily living comfortable.",locationTitle:"Convenient location",locationDesc:"Close to local essentials and the nearby market.",
      littleExtras:"THE LITTLE EXTRAS",amenitiesTitle:"Everyday essentials, covered.",amenitiesDesc:"Tap any amenity to learn more about what it means for your stay.",
      water:"24×7 water",electricity:"Electricity",twoWheeler:"2-wheeler parking",safeArea:"Safe & secure area",cctv:"CCTV surveillance",ventilation:"Good ventilation",convenient:"Convenient location",market:"Nearby market",tapDetails:"Tap for details ↗",
      takeLook:"TAKE A CLOSER LOOK",galleryTitle:"A look around the home.",galleryDesc:"Property photos and videos will appear here as you add them to the images folder.",
      movingView:"IN MOTION",videoTitle:"See it in motion.",videoHint:"Add video1.mp4, video2.mp4…",findUs:"FIND YOUR WAY",whereTitle:"A convenient address in Khagaria.",
      whereDesc:"Located on East Kabin Road, Hazipur Road, Ward No. 21, Khagaria, Bihar — directly in front of Durga Temple.",
      fullAddress:"FULL ADDRESS",landmark:"Landmark: In front of Durga Temple",openMaps:"Open in Google Maps",
      nextStep:"YOUR NEXT STEP",contactTitle:"Could this be your next home?",contactDesc:"Get in touch to ask about the property, availability or a visit.",
      callNow:"Call now",whatsapp:"WhatsApp enquiry",footerText:"A comfortable place to call home · Khagaria, Bihar",backTop:"Back to top ↑",
      navHome:"Home",navAmenities:"Amenities",navGallery:"Gallery",navLocation:"Location",navContact:"Contact",amenityDetails:"AMENITY DETAILS",gotIt:"Got it",
      photoLabels:["Home exterior","Living space","Bedroom","Kitchen","Bathroom","Entrance"],
      videoLabels:["Property walkthrough","Home tour","Around the property"],
      amenityTitles:{water:"24×7 water supply",electricity:"Electricity",parking:"Two-wheeler parking",security:"Safe & secure area",cctv:"CCTV surveillance",ventilation:"Good ventilation",location:"Convenient location",market:"Nearby market"},
      amenityDescriptions:{
        water:"Water availability is listed as a property amenity. Please contact us to confirm the current supply arrangement and any details you would like to know.",
        electricity:"Electricity is available at the property. Please ask during your enquiry about the meter, billing and any other arrangements.",
        parking:"Two-wheeler parking is available. Contact us if you need to confirm the exact parking arrangement before visiting.",
        security:"The property is in a residential area described as safe and secure. We recommend visiting the location and checking that it suits your needs.",
        cctv:"CCTV surveillance is listed among the property amenities. Please ask us about the coverage and common areas during your enquiry.",
        ventilation:"The home has ventilation intended to support comfortable day-to-day living. You can check the airflow and natural light during a visit.",
        location:"The home is on East Kabin Road, Hazipur Road, Ward No. 21, Khagaria, Bihar, directly in front of Durga Temple.",
        market:"A local market and everyday essentials are nearby. Contact us for more information about the surrounding area."
      },
      photoPlaceholder:"Add image",videoPlaceholder:"Add video",emptyMedia:"Your property media will appear here"
    },
    hi: {
      call:"किराये के लिए संपर्क करें",available:"आपके अपने घर जैसी जगह",welcome:"गुप्ता होम में आपका स्वागत है",
      heroTitle:"थोड़ी और जगह,<br><em>सुकून से जीने के लिए।</em>",heroDesc:"आरामदायक रोज़मर्रा की ज़िंदगी के लिए नया बना 1 BHK घर।",
      explore:"घर देखें",propertyAt:"आपका अगला पता",oneBhk:"1 BHK घर",shortAddress:"ईस्ट कबिन रोड, खगड़िया, बिहार",
      bedBath:"बाथरूम",floors:"उपलब्ध मंज़िलें",viewDetails:"घर की जानकारी देखें",newlyBuilt:"नया बना · अच्छी तरह से रखा गया",
      comfortable:"आरामदायक घर",thoughtful:"सुविचारित 1 BHK",secure:"सुरक्षित माहौल",peace:"सुकून से रहने की जगह",connected:"सुविधाजनक लोकेशन",nearbyMarket:"पास में बाज़ार और ज़रूरी सुविधाएँ",
      discover:"प्रॉपर्टी के बारे में",detailsTitle:"रोज़मर्रा के आराम के लिए।",detailsDesc:"आरामदायक दिनचर्या के लिए ज़रूरी सुविधाओं वाला व्यावहारिक और अच्छी तरह रखा गया घर।",
      propertyOverview:"घर की जानकारी",overviewTitle:"आपका अपना आरामदायक कोना।",overviewDesc:"खगड़िया में नया बना 1 BHK घर, रोज़मर्रा की उपयोगी सुविधाओं और सुविधाजनक आसपास के क्षेत्र के साथ।",
      layout:"लेआउट",area:"क्षेत्रफल",bathroom:"बाथरूम",kitchen:"रसोई",parking:"पार्किंग",availableYes:"उपलब्ध",floor:"मंज़िल",firstSecond:"पहली और दूसरी",askAbout:"उपलब्धता पूछें",
      lightTitle:"रोशनी और हवा",lightDesc:"रोज़मर्रा के आराम के लिए अच्छा वेंटिलेशन।",locationTitle:"सुविधाजनक लोकेशन",locationDesc:"स्थानीय ज़रूरतों और पास के बाज़ार के करीब।",
      littleExtras:"ज़रूरी सुविधाएँ",amenitiesTitle:"रोज़मर्रा की ज़रूरतें, एक जगह।",amenitiesDesc:"किसी भी सुविधा पर टैप करके उसकी जानकारी देखें।",
      water:"24×7 पानी",electricity:"बिजली",twoWheeler:"दो-पहिया पार्किंग",safeArea:"सुरक्षित इलाका",cctv:"CCTV निगरानी",ventilation:"अच्छा वेंटिलेशन",convenient:"सुविधाजनक लोकेशन",market:"पास में बाज़ार",tapDetails:"जानकारी के लिए टैप करें ↗",
      takeLook:"एक नज़र डालें",galleryTitle:"घर की कुछ झलकियाँ।",galleryDesc:"images फ़ोल्डर में फोटो और वीडियो डालने पर वे यहाँ दिखाई देंगे।",
      movingView:"वीडियो झलक",videoTitle:"वीडियो में घर देखें।",videoHint:"video1.mp4, video2.mp4… जोड़ें",findUs:"हम तक पहुँचें",whereTitle:"खगड़िया में सुविधाजनक पता।",
      whereDesc:"ईस्ट कबिन रोड, हाजीपुर रोड, वार्ड नंबर 21, खगड़िया, बिहार — दुर्गा मंदिर के ठीक सामने।",
      fullAddress:"पूरा पता",landmark:"पहचान: दुर्गा मंदिर के सामने",openMaps:"Google Maps में खोलें",
      nextStep:"अगला कदम",contactTitle:"क्या यह आपका अगला घर हो सकता है?",contactDesc:"घर, उपलब्धता या विज़िट के बारे में पूछने के लिए संपर्क करें।",
      callNow:"अभी कॉल करें",whatsapp:"WhatsApp पर पूछें",footerText:"आपके अपने घर जैसी जगह · खगड़िया, बिहार",backTop:"ऊपर जाएँ ↑",
      navHome:"होम",navAmenities:"सुविधाएँ",navGallery:"गैलरी",navLocation:"लोकेशन",navContact:"संपर्क",amenityDetails:"सुविधा की जानकारी",gotIt:"ठीक है",
      photoLabels:["घर का बाहरी हिस्सा","रहने की जगह","बेडरूम","रसोई","बाथरूम","प्रवेश द्वार"],
      videoLabels:["घर का वॉकथ्रू","घर की वीडियो टूर","घर के आसपास"],
      amenityTitles:{water:"24×7 पानी की सुविधा",electricity:"बिजली",parking:"दो-पहिया पार्किंग",security:"सुरक्षित इलाका",cctv:"CCTV निगरानी",ventilation:"अच्छा वेंटिलेशन",location:"सुविधाजनक लोकेशन",market:"पास में बाज़ार"},
      amenityDescriptions:{
        water:"पानी की उपलब्धता घर की सुविधा के रूप में दी गई है। मौजूदा सप्लाई व्यवस्था और अन्य जानकारी की पुष्टि के लिए संपर्क करें।",
        electricity:"घर में बिजली की सुविधा उपलब्ध है। मीटर, बिल और अन्य व्यवस्था के बारे में पूछताछ के समय जानकारी लें।",
        parking:"दो-पहिया वाहन की पार्किंग उपलब्ध है। विज़िट से पहले पार्किंग की व्यवस्था की पुष्टि के लिए संपर्क करें।",
        security:"घर एक ऐसे रिहायशी इलाके में है जिसे सुरक्षित बताया गया है। अपनी ज़रूरत के अनुसार जगह देखने की सलाह दी जाती है।",
        cctv:"CCTV निगरानी घर की सुविधाओं में शामिल है। कवरेज और कॉमन एरिया के बारे में पूछताछ के समय जानकारी लें।",
        ventilation:"घर में रोज़मर्रा के आराम के लिए वेंटिलेशन है। विज़िट के दौरान हवा और प्राकृतिक रोशनी देख सकते हैं।",
        location:"घर ईस्ट कबिन रोड, हाजीपुर रोड, वार्ड नंबर 21, खगड़िया, बिहार में दुर्गा मंदिर के ठीक सामने है।",
        market:"आसपास स्थानीय बाज़ार और रोज़मर्रा की ज़रूरी चीज़ें मिलती हैं। आसपास के क्षेत्र की जानकारी के लिए संपर्क करें।"
      },
      photoPlaceholder:"फोटो जोड़ें",videoPlaceholder:"वीडियो जोड़ें",emptyMedia:"आपके घर की फोटो यहाँ दिखाई देंगी"
    }
  };

  let currentLang = "en";
  const amenityIcons = {water:"≈",electricity:"ϟ",parking:"⌑",security:"◈",cctv:"◎",ventilation:"✧",location:"⌖",market:"⌂"};

  function setLanguage(lang) {
    currentLang = translations[lang] ? lang : "en";
    document.documentElement.lang = currentLang;
    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      const value = translations[currentLang][key];
      if (typeof value === "string") el.innerHTML = value;
    });
    $$(".lang-btn").forEach(btn => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    renderGallery();
    renderVideos();
  }

  function findMedia(exts, stem, index) {
    const candidates = exts.map(ext => `images/${stem}${index}.${ext}`);
    // Media naming is intentionally conventional; a failed file request is handled by the image/video error events.
    return candidates[0];
  }

  function renderGallery() {
    const gallery = $("#photoGallery");
    if (!gallery) return;
    const labels = translations[currentLang].photoLabels;
    gallery.innerHTML = "";
    for (let i = 1; i <= 6; i++) {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "photo-tile";
      tile.setAttribute("aria-label", labels[i-1]);
      const img = document.createElement("img");
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = labels[i-1];
      img.src = findMedia(["jpg","jpeg","png","webp"], "image", i);
      img.onerror = () => {
        tile.innerHTML = `<span class="media-placeholder"><span class="placeholder-symbol">▧</span><b>${escapeHtml(labels[i-1])}</b><small>images/image${i}.jpg</small></span>`;
      };
      const caption = document.createElement("span");
      caption.className = "photo-caption";
      caption.textContent = labels[i-1];
      tile.append(img, caption);
      tile.addEventListener("click", () => {
        if (img.complete && img.naturalWidth > 0) {
          $("#lightboxImage").src = img.src;
          $("#lightboxCaption").textContent = labels[i-1];
          openAnimatedDialog($("#lightboxDialog"));
        }
      });
      gallery.append(tile);
    }
  }

  function renderVideos() {
    const gallery = $("#videoGallery");
    if (!gallery) return;
    const labels = translations[currentLang].videoLabels;
    gallery.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "video-tile video-tile-button";
      tile.setAttribute("aria-label", `${labels[i-1]} — play video`);
      const preview = document.createElement("video");
      preview.muted = true;
      preview.preload = "metadata";
      preview.playsInline = true;
      preview.setAttribute("aria-hidden", "true");
      preview.src = `images/video${i}.mp4`;
      preview.addEventListener("loadedmetadata", () => {
        try { preview.currentTime = Math.min(0.1, preview.duration || 0.1); } catch (_) {}
      }, { once: true });
      const play = document.createElement("span");
      play.className = "video-play-button";
      play.setAttribute("aria-hidden", "true");
      play.textContent = "▶";
      const caption = document.createElement("span");
      caption.className = "video-tile-caption";
      caption.textContent = labels[i-1];
      preview.onerror = () => {
        tile.innerHTML = `<span class="media-placeholder video-empty"><span class="placeholder-symbol">▷</span><b>${escapeHtml(labels[i-1])}</b><small>images/video${i}.mp4</small></span>`;
        tile.disabled = true;
        tile.classList.add("video-unavailable");
      };
      tile.append(preview, play, caption);
      tile.addEventListener("click", () => {
        const player = $("#videoDialogPlayer");
        player.src = `images/video${i}.mp4`;
        player.load();
        $("#videoDialogCaption").textContent = labels[i-1];
        openAnimatedDialog($("#videoDialog"));
        const attemptPlay = player.play();
        if (attemptPlay && typeof attemptPlay.catch === "function") attemptPlay.catch(() => {});
      });
      gallery.append(tile);
    }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function openAnimatedDialog(dialog) {
    if (!dialog) return;
    dialog.classList.remove("is-closing");
    if (!dialog.open) dialog.showModal();
  }

  function closeAnimatedDialog(dialog) {
    if (!dialog || !dialog.open || dialog.classList.contains("is-closing")) return;
    dialog.classList.add("is-closing");
    const finish = () => {
      dialog.removeEventListener("animationend", finish);
      if (dialog.open) dialog.close();
      dialog.classList.remove("is-closing");
    };
    dialog.addEventListener("animationend", finish);
    window.setTimeout(finish, 240);
  }

  function openAmenity(key) {
    const t = translations[currentLang];
    $("#dialogIcon").textContent = amenityIcons[key] || "✧";
    $("#dialogTitle").textContent = t.amenityTitles[key] || "Amenity";
    $("#dialogText").textContent = t.amenityDescriptions[key] || "";
    openAnimatedDialog($("#amenityDialog"));
  }

  $$(".lang-btn").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));
  $$(".amenity-card").forEach(btn => btn.addEventListener("click", () => openAmenity(btn.dataset.amenity)));
  $("#dialogClose").addEventListener("click", () => closeAnimatedDialog($("#amenityDialog")));
  $("#dialogDone").addEventListener("click", () => closeAnimatedDialog($("#amenityDialog")));
  $("#lightboxClose").addEventListener("click", () => closeAnimatedDialog($("#lightboxDialog")));
  $("#videoDialogClose").addEventListener("click", () => closeAnimatedDialog($("#videoDialog")));

  // Clicking the dimmed area closes dialogs with the same soft exit motion.
  ["#amenityDialog", "#lightboxDialog", "#videoDialog"].forEach(selector => {
    const dialog = $(selector);
    dialog.addEventListener("click", event => {
      if (event.target === dialog) closeAnimatedDialog(dialog);
    });
    dialog.addEventListener("cancel", event => {
      event.preventDefault();
      closeAnimatedDialog(dialog);
    });
  });
  $("#videoDialog").addEventListener("close", () => {
    const player = $("#videoDialogPlayer");
    player.pause();
    player.removeAttribute("src");
    player.load();
  });

  // Low-cost reveal observer; reduced-motion users see all content immediately.
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08, rootMargin: "0px 0px -24px 0px"});
    $$(".section-heading, .detail-feature, .side-card, .strip-item, .amenity-card, .photo-tile, .video-tile, .location-copy, .map-frame, .contact-panel").forEach(el => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  const navItems = $$(".nav-item");
  const sectionTargets = ["home","amenities","gallery","location","contact"].map(id => document.getElementById(id)).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(item => item.classList.toggle("active", item.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, {rootMargin:"-35% 0px -55% 0px", threshold:0});
    sectionTargets.forEach(section => navObserver.observe(section));
  }

  setLanguage("en");
})();