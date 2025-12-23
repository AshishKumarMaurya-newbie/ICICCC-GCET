document.addEventListener("DOMContentLoaded", function () {
  
  // --- 1. DATA CONFIGURATION ---
  const conferenceData = {
    chiefPatrons: [
      { name: "Shri. Suneel Galgotia", title: "Chairman Galgotias Educational Institutions", img: "img/suneel-galgotia.webp" },
      { name: "Dr. Dhruv Galgotia", title: "CEO Galgotias Educational Institutions", img: "img/dhruv-galgotia.webp" }
    ],
    patrons: [
      { name: "Prof. S.N. Singh", title: "Director ABV – IITM Gwalior, Advisor IEEE UP Section", img: "img/prof sn singh.jpg" },
      { name: "Prof.(Dr.) Vikram Bali", title: "Director, Galgotias College of Engineering and Technology, Greater Noida", img: "img/vikram-bali.webp" }
    ],
    coPatrons: [
      { name: "Prof. Brijesh Kumar", title: "Professor & Director (Planning),Dept. of IT Indira Gandhi Delhi Technical University for Women, Delhi ", img: "img/Brijesh kumar.jpg" },
      { name: "Prof. Vivek Kumar Singh", title: "Senior Advisor/Program Director in Science and Technology NITI Aayog Government of India, Delhi", img: "img/vivek singh.jpg" },
      { name: "Prof. Brijesh Singh", title: "Dean Academics, Galgotias College of Engineering and Technology, Greater Noida", img: "img/brijesh-singh.webp" }
    ],
    generalChairs: [
      { name: "Prof. Yogesh Chauhan", title: "IIT Kanpur, Chair IEEE UP Section", img: "img/Prof. Yogesh Chauhan.jpeg" },
      { name: "Prof.(Dr.) Avadhesh Kumar", title: "Pro-Vice Chancellor, Galgotias University, Greater Noida Vice Chair IEEE UP Section", img: "img/avadesh-kumar.webp" }
    ],
    conferenceChairs: [
      { name: "Prof.(Dr.) Vikram Bali", title: "Director, Galgotias College of Engineering and Technology, Greater Noida", img: "img/vikram-bali.webp" },
      { name: "Dr. Vandna Rani Verma", title: "Associate Professor Dept. of AI, Galgotias College of Engineering and Technology, Greater Noida", img: "img/vandana rani.jpg" }
    ],
    organizingSecretaries: [
      { name: "Prof. Brijesh Singh", title: "Dean Academics, Galgotias College of Engineering and Technology, Greater Noida", img: "img/brijesh-singh.webp" },
      { name: "Dr. Yashveer Singh", title: "HOD Dept. of AI, Galgotias College of Engineering and Technology, Greater Noida", img: "img/yash-veer-singh.webp" },
      { name: "Dr. Sanjay Kumar", title: "HOD Dept. of DS, Galgotias College of Engineering and Technology, Greater Noida", img: "img/sanjay kumar.jpg" },
      { name: "Dr. Sunil Kumar", title: "HOD Dept. of AIML, Galgotias College of Engineering and Technology, Greater Noida", img: "img/sunil-kumar.webp" }
    ],
    techProgramChairs: [
      { name: "Dr. Sachin Kumar", title: "Professor Dept. of DS, Galgotias College of Engineering and Technology, Greater Noida", img: "img/sachin-kumar.webp" }
    ],
    publicationChairs: [
      { name: "Dr. Aasha Rani Mishra", title: "Associate Professor Dept. of AIML, Galgotias College of Engineering and Technology, Greater Noida", img: "img/aasha rani mishra.jpg" }
    ],
    publicityChairs: [
      { name: "Prof. (Dr.) Pallavi Goel", title: "Professor Dept. of CSE, Galgotias College of Engineering and Technology, Greater Noida", img: "img/pallavi-goel.webp" }
    ],
    financeChairs: [
      { name: "Dr. Mahima Shanker Pandey", title: "Galgotias College of Engineering and Technology, Greater Noida", img: "img/Dr.-Mahima-Shanker-Pandey------------.jpg" }
    ],
    trackChairs: [
      { category: "1. Data Communication & Networks", name: "Dr. Ritesh Kumar", title: "Assistant Professor Dept. of AIML, Galgotias College of Engineering and Technology, Greater Noida", img: "img/ritesh kumar.jpg" },
      { category: "2. Artificial Intelligence & Expert Systems", name: "Dr. Anil Kumar", title: "Associate Professor Dept. of AIML, Galgotias College of Engineering and Technology, Greater Noida", img: "img/anil kumar.png" },
      { category: "3. Data Analytics & Internet of Things", name: "Dr. Priyanka Tyagi", title: "Assistant Professor Dept. of DS, Galgotias College of Engineering and Technology, Greater Noida", img: "img/priyanka-tyagi.webp" },
      { category: "4. Data Analytics & Internet of Things", name: "Dr. M.Ganesh", title: "Galgotias College of Engineering and Technology, Greater Noida", img: "img/dr m ganesh.png" }
    ],
    publicationCommittee: [
      { name: "Dr. Nisha Pal", title: "Assistant Professor Dept. of DS, Galgotias College of Engineering and Technology, Greater Noida", img: "img/Nisha-Pal.jpg" },
      { name: "Anushka Gupta", title: "Assistant Professor Dept. of DS, Galgotias College of Engineering and Technology, Greater Noida", img: "img/anushka gupta.jpg" }
    ],
    publicityCommittee: [
      { name: "Kajol Mittal", title: "Assistant Professor Dept. of AI, Galgotias College of Engineering and Technology, Greater Noida", img: "img/kajol-mittal.webp" },
      { name: "Swati Rehal", title: "Assistant Professor Dept. of CSE, Galgotias College of Engineering and Technology, Greater Noida", img: "img/swati-rehal.webp" },
      { name: "Ramandeep Kaur", title: "Assistant Professor Dept. of CSE, Galgotias College of Engineering and Technology, Greater Noida", img: "img/ramandeep kaur.jpg" }
    ],
    financeCommittee: [
      { name: "Arti Tiwari", title: "Assistant Professor Dept. of AI, Galgotias College of Engineering and Technology, Greater Noida", img: "img/arti tiwari.jpg" },
      { name: "Anuj Kumar Dwivedi", title: "Assistant Professor Dept. of AI, Galgotias College of Engineering and Technology, Greater Noida", img: "img/Mr-Anuj-Kumar-Dwivedi_CSE.jpg" }
    ],
    websiteCommittee: [
      { name: "Sheela Singh", title: "Assistant Professor Dept. of DS, Galgotias College of Engineering and Technology, Greater Noida", img: "img/sheela singh.jpg" },
      { name: "Raghuraj Singh", title: "Assistant Professor Dept. of DS, Galgotias College of Engineering and Technology, Greater Noida", img: "img/Raghuraj-Singh.jpg" },
      { name: "TS Arti", title: "Assistant Professor Dept. of AI, Galgotias College of Engineering and Technology, Greater Noida", img: "img/ts-arthi.webp" }
    ],
    techAdvisory: [
      { name: "Prof. Ravi Shankar Singh", title: "Department of Computer Science and Engineering. Indian Institute of Technology, IIT BHU, Varanasi", img: "img/ravi shankar singh.jpg" },
      { name: "Prof. Divakar Yadav", title: "IGNOU, Delhi", img: "img/divakar yadav.jpg" },
      { name: "Dr. Anand Sharma", title: "MNNIT, Allahabad", img: "img/anand sharma.jpg" },
      { name: "Dr Rajiv Kumar Singh", title: "IET, Lucknow", img: "img/Rajiv Photo300dpi.jpg" },
      { name: "Dr. Anshul Verma", title: "BHU, Varanasi", img: "img/anshul verma.jpg" },
      { name: "Dr Abhinesh Kausik", title: "IIIT, Lucknow", img: "img/Dr.-Abhinesh-Kaushik.jpg.webp" },
      { name: "Dr. Vishal Krishna Singh", title: "University of Essex", img: "img/Dr. Vishal Krishna.jpg" },
      { name: "Prof. Mario Di Renzo", title: "University of Bari, Italy", img: "img/prof mario.jpg" },
      { name: "Prof. Lars", title: "Hildeschium university Germany", img: "img/Prof. Lars, Hildeschium.jpg" },
      { name: "Dr. Harsh Durga Tiwari", title: "Changwon National University, Korea", img: "img/harsh durga tiwari.jpg" },
      { name: "Dr. Smita Sharma", title: "Chair WIE IEEE UP Section, NIELIT", img: "img/smita sharma.jpg" },
      { name: "Dr. Suman Avdhesh Yadav", title: "ViceChair WIE IEEE UP Section, IILM", img: "img/suman avadhesh yadav.webp" },
      { name: "Dr. V.B. Singh", title: "JNU, Delhi", img: "img/VB singh.jpg" },
      { name: "Dr. Nonita Sharma", title: "IGDTUW, Delhi", img: "img/nonita sharma.jpg" },
      { name: "Dr. Rashmi Singh", title: "Amity University, Noida", img: "img/Rashmi Singh.webp" },
      { name: "Dr. Nisha Sharma", title: "State Missour U.S.A", img: "img/nisha sharma.jpg" },
      { name: "Dr. Woinshet Ayatu", title: "Wachamo University,Ethiopia", img: "img/Dr. Woinshet Ayatu.jpg" },
      { name: "Dr. Dharmendra Pratap Singh", title: "UDSMM, ULCO, France", img: "img/Dharmendra Singh.jpg" },
      { name: "Dr. Mihai Crenganis", title: "Lucian Blaga University of Sibiu", img: "img/mihai_crengains.jpeg" },
      { name: "Dr. Biswaranjan Senapati", title: "University of Arkansas Littleroc", img: "img/Biswaranjan Senapati.jpeg" },
      { name: "Prof.(Dr.) Praveen kumar", title: "Astana IT University, Kazakhstan", img: "img/praveen_kumar.jpeg" },
      { name: "Dr. Prasannalakshmi Balaji", title: "King Khalid University", img: "img/prasannalakshmi_balaji.jpeg" },
      { name: "Dr Kailash Kumar Maheshwari", title: "Saudi Electronics University Saudi Arabia", img: "img/kailash kumar.png" },
      { name: "Pro Abdellatif Dahmouni", title: "Chouaib Doukkail University, Morocco", img: "img/Abdellatif.png" },
      { name: "Dr. Ajay Kumar", title: "IILM University, Greater Noida, India", img: "img/ajay_kumar.webp" },
      { name: "Dr. Mahesh Kaluti", title: "P.E.S. College of Engineering, Mandya", img: "img/mahesh.webp" },
      { name: "Dr. Akande Noha Oluwatobi", title: "Baze University, Abuja", img: "img/Akande_Noah_oluwatobi.jpg" },
      { name: "Dr. Hemant Palivela", title: "Damac Properties Dubai, UAE", img: "img/Hemat P.webp" },
      { name: "Dr. Deepak Kumar Jain", title: "Dalian University of Technology, china", img: "img/deepak_kumar_jain.jpg" },
      { name: "Prof. Claudio Barradas", title: "Instituto Politecnico de Santarem, Portugal", img: "img/luis claudio.jpg" },
      { name: "Prof. Ali El Alami", title: "University Moulay Ismail, Meknes", img: "img/Ali_El_Emami.jpg" },
      { name: "Dr. Honey Durgaprasad Tiwari", title: "INKOR technologies Pvt. Ltd., India", img: "img/Honey_durga_prasad.webp" }
    ]
  };

  // --- 2. RENDER ENGINE ---
  const renderCards = (containerId, data) => {
    const container = document.getElementById(containerId);
    if (!container || !data) return; // Guard clause prevents errors on pages where ID is missing

    container.innerHTML = data.map(person => `
      <div class="speaker-card">
        ${person.category ? `<div style="font-size:0.85rem; font-weight:bold; margin-bottom:10px; color:#bb5229;">${person.category}</div>` : ''}
        <img src="${person.img}" alt="${person.name}" loading="lazy">
        <div class="speaker-info">
          <div class="speaker-name">${person.name}</div>
          <div class="speaker-title">${person.title}</div>
        </div>
      </div>
    `).join('');
  };

  // --- 3. EXECUTE RENDERS ---
  renderCards('chief-patrons-list', conferenceData.chiefPatrons);
  renderCards('patrons-list', conferenceData.patrons);
  renderCards('co-patrons-list', conferenceData.coPatrons);
  renderCards('general-chairs-list', conferenceData.generalChairs);
  renderCards('conf-chairs-list', conferenceData.conferenceChairs);
  renderCards('org-sec-list', conferenceData.organizingSecretaries);
  renderCards('tech-prog-chair-list', conferenceData.techProgramChairs);
  renderCards('pub-chair-list', conferenceData.publicationChairs);
  renderCards('publicity-chair-list', conferenceData.publicityChairs);
  renderCards('finance-chair-list', conferenceData.financeChairs);
  renderCards('track-chairs-list', conferenceData.trackChairs);
  renderCards('pub-comm-list', conferenceData.publicationCommittee);
  renderCards('publicity-comm-list', conferenceData.publicityCommittee);
  renderCards('finance-comm-list', conferenceData.financeCommittee);
  renderCards('web-comm-list', conferenceData.websiteCommittee);
  renderCards('tech-advisory-list', conferenceData.techAdvisory);

  // --- 4. UI INTERACTIONS ---
  // --- 4. UI INTERACTIONS ---
  // Mobile Menu Logic
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  const menuIcon = document.getElementById('menu-icon');

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
      // Switch icon between Hamburger and X
      if (menuIcon) {
        menuIcon.innerHTML = navLinksContainer.classList.contains('active') ? '&times;' : '&#9776;';
      }
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinksContainer) navLinksContainer.classList.remove('active');
      if (menuIcon) menuIcon.innerHTML = '&#9776;';
    });
  });

  // Scroll to Top when Logo is clicked
  const logo = document.querySelector('.site-logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      // Only prevent default if it's the logo linking to '#'
      // If it links to index.html, let it behave normally or handle specific logic
      if(logo.getAttribute('href') === '#' || logo.parentElement.tagName !== 'A') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
});