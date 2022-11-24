const htmlTec = 
    `<div class="tec-div">
        <a class="links-tec" href="https://developer.mozilla.org/es/docs/Glossary/HTML5">
            <p>HTML 5</p>
            <img src="./icons/logos_tecnologias/html5-svgrepo-com.svg" alt="html" id="img-html">
            <div class="percent-tec">
                <p class="percent-p">
                    80%
                </p>
            </div>
        </a>
    </div>`;

const cssTec = 
    `<div class="tec-div">
        <a class="links-tec" href="https://developer.mozilla.org/es/docs/Web/CSS">
            <p>CSS 3</p>
            <img src="./icons/logos_tecnologias/css3-svgrepo-com.svg" alt="css" id="img-css">
            <div class="percent-tec">
                <p class="percent-p">
                    80%
                </p>
            </div>
        </a>
    </div>`;

const sassTec = 
    `<div class="tec-div">
        <a class="links-tec" href="https://sass-lang.com/">
            <p>SASS</p>
            <img src="./icons/logos_tecnologias/sass-color.png" alt="sass" id="img-sass">
            <div class="percent-tec">
                <p class="percent-p">
                    75%
                </p>
            </div>
        </a>
    </div>`;

const jsTec = 
    `<div class="tec-div">
        <a class="links-tec" href="https://developer.mozilla.org/es/docs/Web/JavaScript">
            <P>Javascript</P>
            <img src="./icons/logos_tecnologias/javascript-svgrepo-com.svg" alt="js" id="img-js">
            <div class="percent-tec">
                <p class="percent-p">
                    60%
                </p>
            </div>
        </a>
    </div>`;

const gitTec = 
    `<div class="tec-div">
        <a class="links-tec" href="https://git-scm.com/">
            <P id="git-p">Git</P>
            <img src="./icons/logos_tecnologias/git-svgrepo-com.svg" alt="GIT" id="img-git">
            <div class="percent-tec">
                <p class="percent-p">
                    70%
                </p>
            </div>
        </a>
    </div>`;

const reactTec = 
    `<div class="tec-div">
        <a class="links-tec" href="https://reactjs.org/">
            <p>React JS</p>
            <img src="./icons/logos_tecnologias/react-svgrepo-com.svg" alt="react" id="img-react">
            <div class="percent-tec">
                <p class="percent-p">
                    40%
                </p>
            </div>
        </a>
    </div>`;

const tailwindTec = 
    `<div class="tec-div">
        <a class="links-tec" href="https://tailwindcss.com/">
            <p>Tailwind</p>
            <img src="./icons/logos_tecnologias/tailwindcss-color.svg" alt="tailwind" id="img-tailwind">
            <div class="percent-tec">
                <p class="percent-p">
                    40%
                </p>
            </div>
        </a>
    </div>`;

const mysqlTec = 
    `<div class="tec-div">
        <a class="links-tec" href="https://www.mysql.com/">
            <p>MySQL</p>
            <img src="./icons/logos_tecnologias/mysql.svg" alt="tailwind" id="img-mysql">
            <div class="percent-tec">
                <p class="percent-p">
                    20%
                </p>
            </div>
        </a>
    </div>`;

export function About(element) {
    const aboutContent = document.createElement('section')
    aboutContent.classList.add('sec-about');
    aboutContent.id = "sec-about-id";
    aboutContent.innerHTML = 
        `<article class="article" id="about">
            <div>
                <h5 class="card-title title-other">Acerca de mí</h5>
                <p class="card-text">
                    Me llamo Omar Zavala Ugarte y me inicie en el mundo del desarrollo web en octubre del año 2021 como autodidacta.
                </p>
            </div>
            <div class="content-about-and-tec">
                <div class="about-box" id="abot-me">
                    <h5 class="title-inner-about">¿Quién soy?</h5>
                    <p class="p-about">
                        Soy chileno y me inicie en el mundo 
                        de desarrollo web como un estudiante autodidacta 
                        y a la fecha lo sigo siendo.
                        <br>
                        <br>
                        Soy una persona apasionada por el desarrollo web, me gusta
                        aprender nuevas tecnologías y desarrollar proyectos.
                        Actualmente una de mis más grandes metas es algún día poder
                        convertirme en un desarrollador senior y liderar grandes
                        proyectos.
                    </p>

                    <h5 class="title-inner-about" id="mi-cv">Mi Curriculum</h5>
                    
                    <a class="btn-pdf-link btn-pdf"href="./pdf.html">
                        <img src="./icons/curriculum-resume-svgrepo-com.svg" alt="CV" class="cv-img">
                        Ve mi Curriculum
                    </a>
                </div>

                <div class="content-tec">
                    <div class="about-box about-box-1">
                        <h5 class="title-inner-about">Tecnologias que manejo</h5>

                        ${htmlTec}
                    
                        ${cssTec}

                        ${sassTec}

                        ${jsTec}

                        ${gitTec}
                    </div>

                    <div class="about-box about-box-2">
                        <h5 class="title-inner-about">Tecnologias que estoy aprendiendo</h5>

                        ${reactTec}

                        ${tailwindTec}

                        ${mysqlTec}
                    </div>
                    
                </div>
            </div>
        </article>`;

    element.appendChild(aboutContent);
}