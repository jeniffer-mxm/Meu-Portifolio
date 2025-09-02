const personalInfo = {
    name: "Jeniffer Maximo",
    title: "Desenvolvedora Web",
    about: "Sou uma desenvolvedora apaixonada por tecnologia e inovação, com experiência em desenvolvimento web moderno. Especializada em criar soluções digitais impactantes, combinando design futurista com funcionalidade excepcional. Sempre em busca de novos desafios e oportunidades para crescer na área tech.",
    location: "São Paulo, Brasil"
};

const technologies = [
    { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "GitHub", icon: "fab fa-github", color: "#181717" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Inteligência Artificial", icon: "fas fa-brain", color: "#da107b" },
    { name: "Canva", icon: "fas fa-palette", color: "#00C4CC" }
];

const projects = [
    {
        id: 1,
        title: "MaxiWeb",
        description: "Landing page moderna para uma empresa de tecnologia, destacando serviços e contato, com foco em conversão de clientes.",
        image: "img/site-vendas.png",
        link: "https://bit.ly/Maxi-Web",
        technologies: ["html", "JavaScript", "CSS", "GitHub", "Git"]
    },
    {
        id: 2,
        title: "Site advogada",
        description: "Website institucional para apresentação profissional de uma advogada, com informações de atuação, contato e design sóbrio e elegante.",
        image: "img/site-jessica.png",
        link: "https://jeniffer-mxm.github.io/Adv-Dra.JessicaMaximo/",
        technologies: ["html", "JavaScript", "CSS", "GitHub", "Git"]
    },
    {
        id: 3,
        title: "Site Agro",
        description: "Site institucional para empresa do setor agrícola, destacando serviços, valores e identidade visual ligada ao campo.",
        image: "img/agro.png",
        link: "https://jeniffer-mxm.github.io/Site-Agro/",
        technologies: ["html", "JavaScript", "CSS", "GitHub", "Git"]
    },
    {
        id: 4,
        title: "Link-Bio",
        description: "Página de links personalizada no estilo Linktree, com design responsivo e botões para redes sociais, facilitando o acesso aos meus principais canais de contato.",
        image: "img/link-bio.png",
        link: "https://jeniffer-mxm.github.io/link-bio/",
        technologies: ["html", "JavaScript", "CSS", "React", "Node.js", "GitHub", "Git"]
    }
];

const socialLinks = [
    {
        name: "WhatsApp",
        icon: "fab fa-whatsapp",
        url: "https://wa.me/5521996310471"
        
    },
    {
        name: "LinkedIn", 
        icon: "fab fa-linkedin",
        url: "https://linkedin.com/in/jeniffermaximo",
        
    },
    {
        name: "Instagram",
        icon: "fab fa-instagram", 
        url: "https://instagram.com/jeniffermaximo_"
        
    },
    {
        name: "GitHub",
        icon: "fab fa-github",
        url: "https://github.com/jeniffer-mxm"
        
    },
    {
        name: "MaxiWeb",
        icon: "fas fa-globe",
        url: "https://bit.ly/Maxi-Web"
        
    }
];

// ============================
// ELEMENTOS DOM
// ============================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const typingText = document.getElementById('typingText');
const techGrid = document.getElementById('techGrid');
const projectsGrid = document.getElementById('projectsGrid');
const socialLinksContainer = document.getElementById('socialLinks');

// ============================
// FUNÇÕES DE NAVEGAÇÃO
// ============================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================
// NAVEGAÇÃO MOBILE
// ============================

function initMobileNav() {
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Fechar menu mobile ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// ============================
// ANIMAÇÃO DE DIGITAÇÃO
// ============================

function initTypingAnimation() {
    if (!typingText) return;
    
    const text = personalInfo.title;
    let index = 0;
    let currentText = '';
    let isDeleting = false;
    
    function type() {
        if (!isDeleting) {
            currentText = text.slice(0, index + 1);
            index++;
            
            if (index === text.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 2000);
            }
        } else {
            currentText = text.slice(0, index - 1);
            index--;
            
            if (index === 0) {
                isDeleting = false;
            }
        }
        
        typingText.textContent = currentText;
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }
    
    type();
}

// ============================
// POPULAR TECNOLOGIAS
// ============================

function populateTechnologies() {
    if (!techGrid) return;
    
    techGrid.innerHTML = '';
    
    technologies.forEach((tech, index) => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item';
        techItem.style.animationDelay = `${index * 100}ms`;
        
        techItem.innerHTML = `
            <div class="tech-icon">
                <i class="${tech.icon}"></i>
            </div>
            <h3>${tech.name}</h3>
        `;
        
        techGrid.appendChild(techItem);
    });
}

// ============================
// POPULAR PROJETOS
// ============================

function populateProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 200}ms`;
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
                <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                    Ver projeto <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ============================
// POPULAR REDES SOCIAIS
// ============================

function populateSocialLinks() {
    if (!socialLinksContainer) return;
    
    socialLinksContainer.innerHTML = '';
    
    socialLinks.forEach((social, index) => {
        const socialLink = document.createElement('a');
        socialLink.className = 'social-link';
        socialLink.href = social.url;
        socialLink.target = '_blank';
        socialLink.rel = 'noopener noreferrer';
        socialLink.style.animationDelay = `${index * 100}ms`;
        
        socialLink.innerHTML = `
            <div class="social-icon">
                <i class="${social.icon}"></i>
            </div>
            <span>${social.name}</span>
        `;
        
        socialLinksContainer.appendChild(socialLink);
    });
}

// ============================
// SCROLL SUAVE PARA NAVEGAÇÃO
// ============================

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// ============================
// OBSERVER PARA ANIMAÇÕES
// ============================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animar filhos se existirem
                const children = entry.target.querySelectorAll('.tech-item, .project-card, .social-link, .about-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observar seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ============================
// NAVBAR COM SCROLL
// ============================

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================
// PERFORMANCE E OTIMIZAÇÃO
// ============================

// Lazy loading para imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src || image.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        images.forEach(image => imageObserver.observe(image));
    }
}

// Throttle para otimizar eventos de scroll
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================
// INICIALIZAÇÃO
// ============================

// Inicializar tudo quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio Jeniffer Maximo carregado com sucesso!');
    
    // Inicializar todas as funcionalidades
    initMobileNav();
    initTypingAnimation();
    populateTechnologies();
    populateProjects();
    populateSocialLinks();
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScroll();
    initLazyLoading();
    
    console.log('✨ Todas as funcionalidades inicializadas!');
});

// Animações de carregamento da página
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Performance log
    const loadTime = performance.now();
    console.log(`⚡ Página carregada em ${Math.round(loadTime)}ms`);
});

// ============================
// FUNÇÕES UTILITÁRIAS GLOBAIS
// ============================

// Disponibilizar funções globalmente
window.scrollToSection = scrollToSection;

// Debug mode (remover em produção)
if (window.location.hostname === 'localhost') {
    window.portfolioDebug = {
        personalInfo,
        technologies,
        projects, 
        socialLinks,
        scrollToSection,
        populateTechnologies,
        populateProjects,
        populateSocialLinks
    };
    
    console.log('🔧 Modo debug ativo. Use window.portfolioDebug para acessar funções.');
}

// ============================
// SERVICE WORKER (PWA - OPCIONAL)
// ============================

// Registrar service worker se disponível
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ SW registrado com sucesso:', registration.scope);
            })
            .catch(error => {
                console.log('❌ Falha ao registrar SW:', error);
            });
    });
}