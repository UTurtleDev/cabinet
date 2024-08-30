// FADE IN ACCUEIL

document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('.service');
    
    const fadeIn = (element, delay) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    };

    sections.forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      fadeIn(section, index * 200);
    });
  })

// FADE IN EXPERTISE

  document.addEventListener('DOMContentLoaded', (event) => {
    const serviceCards = document.querySelectorAll('.expertise-service-card');
    
    const fadeIn = (element, delay) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    };

    serviceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      fadeIn(card, index * 100);
    }); 
  })

  // FADE IN AUDIT

  document.addEventListener('DOMContentLoaded', (event) => {
    const serviceCards = document.querySelectorAll('.audit-service-card');
    
    const fadeIn = (element, delay) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    };

    serviceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      fadeIn(card, index * 100);
    }); 
  })

  // FADE IN RECRUTEMENT

  document.addEventListener('DOMContentLoaded', (event) => {
    const jobCards = document.querySelectorAll('.job-card');
    
    const fadeIn = (element, delay) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    };

    jobCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      fadeIn(card, index * 100);
    })
  })


  // FADE IN RECRUTEMENT

  document.addEventListener('DOMContentLoaded', (event) => {
  // Animation pour faire apparaître les informations de contact
  const contactInfo = document.querySelector('.contact-info');
  contactInfo.style.opacity = '0';
  contactInfo.style.transform = 'translateY(20px)';
  contactInfo.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

  setTimeout(() => {
    contactInfo.style.opacity = '1';
    contactInfo.style.transform = 'translateY(0)';
  }, 300);
  })


// Animation pour faire apparaître les informations de contact
const contactInfo = document.querySelector('.contact-info');
contactInfo.style.opacity = '0';
contactInfo.style.transform = 'translateY(20px)';
contactInfo.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

setTimeout(() => {
  contactInfo.style.opacity = '1';
  contactInfo.style.transform = 'translateY(0)';
}, 300);