// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // SETTINGS MODAL
  const settingsBtn = document.querySelector('a[href="#settings"]');
  const settingsModal = document.getElementById("settings-modal");
  const closeSettings = document.getElementById("close-settings");

  // Open settings modal
  if (settingsBtn && settingsModal && closeSettings) {
    settingsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      settingsModal.style.display = "flex";
    });

    // Close settings modal
    closeSettings.addEventListener("click", () => {
      settingsModal.style.display = "none";
    });

    // Close when clicking outside modal content
    window.addEventListener("click", (e) => {
      if (e.target === settingsModal) {
        settingsModal.style.display = "none";
      }
    });
  }

  // LANGUAGE SWITCHER
  const langSelect = document.getElementById("lang");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      applyLanguage(lang);
    });
  }

  // Dummy translations
  const translations = {
    en: {
      welcomeTitle: "Welcome to C+ Café",
      welcomeSubtitle: "Savor every sip. Delight in every bite.",
      viewMenuBtn: "View Our Menu",
      customerService: "Customer Service",
      customerServiceText: "Need help? Reach out to our 24/7 team!",
      menu: "Our Menu",
      menuText: "Coming soon: Latte, Espresso, Mochi Ice Cream, and more!",
      intro: "About C+ Café",
      introText: "More than coffee — it’s an experience crafted for you.",
    },
    vi: {
      welcomeTitle: "Chào mừng đến với C+ Café",
      welcomeSubtitle: "Thưởng thức từng ngụm. Hài lòng từng miếng.",
      viewMenuBtn: "Xem Thực Đơn",
      customerService: "Dịch Vụ Khách Hàng",
      customerServiceText: "Cần hỗ trợ? Liên hệ đội ngũ 24/7 của chúng tôi!",
      menu: "Thực Đơn",
      menuText: "Sắp ra mắt: Latte, Espresso, Kem Mochi, và nhiều hơn nữa!",
      intro: "Giới thiệu về C+ Café",
      introText: "Không chỉ là cà phê — đó là một trải nghiệm dành riêng cho bạn.",
    },
  };

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    document.getElementById("welcome-title").textContent = t.welcomeTitle;
    document.getElementById("welcome-subtitle").textContent = t.welcomeSubtitle;
    document.getElementById("view-menu-btn").textContent = t.viewMenuBtn;

    document.querySelector("#customer-service h2").textContent = t.customerService;
    document.querySelector("#customer-service p").textContent = t.customerServiceText;

    document.querySelector("#menu h2").textContent = t.menu;
    document.querySelector("#menu p").textContent = t.menuText;

    document.querySelector("#introduction h2").textContent = t.intro;
    document.querySelector("#introduction p").textContent = t.introText;
  }

  
});

const modal = document.getElementById('settings-modal');
const closeBtn = document.getElementById('close-settings');
const checkbox = document.getElementById('darkModeCheckbox');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function setTheme(mode) {
  document.body.classList.toggle('dark-mode', mode === 'dark');
  localStorage.setItem('theme', mode);
  checkbox.checked = (mode === 'dark');
}

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
setTheme(savedTheme);

// Toggle dark mode on checkbox change
checkbox.addEventListener('change', () => {
  setTheme(checkbox.checked ? 'dark' : 'light');
});

// Close modal when clicking close icon
closeBtn.addEventListener('click', closeModal);

// Close modal on outside click
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
