import { useEffect, useState } from 'react'
import IMG, { WHATSAPP } from './images'
import './App.css'

const NAV = [
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#precios', label: 'Tándem' },
  { href: '#curso', label: 'Curso' },
  { href: '#zona', label: 'Avión y zona' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

const FAQS = [
  {
    q: '¿Qué días se realizan los saltos?',
    a: 'Viernes desde las 11:00. Sábados y domingo desde las 9:00. Quienes saltan el viernes a las 11:00 deben llegar en punto. El sábado o domingo a las 9:00, llegada a las 8:30. En el resto de horarios, con 1 hora de anticipación.',
  },
  {
    q: '¿Desde qué edad se puede saltar?',
    a: 'Debes tener al menos 18 años. Si eres menor, necesitas autorización notarial de ambos padres o del tutor legal.',
  },
  {
    q: '¿Qué ocurre si hay mal tiempo?',
    a: 'Si el salto se suspende por clima, se reagenda cuando haya cupos disponibles, en coordinación contigo. La seguridad siempre es primero.',
  },
  {
    q: '¿Existe un límite de peso?',
    a: 'El límite de peso es de 100 kg. El IMC y la morfología también se evalúan el día del salto.',
  },
  {
    q: '¿Qué vestimenta debo usar?',
    a: 'Ropa cómoda y deportiva: buzo, shorts, polera y zapatillas. Evita tacones, jeans ajustados, camisas, polos y zapatillas con cierres metálicos.',
  },
  {
    q: '¿Cómo llego a la zona de saltos?',
    a: 'Aeródromo Los Cuatro Diablos, Melipilla, a unos 60 km de Santiago. En auto: Waze o Google Maps → “Skydive Andes Melipilla”. En bus: Ruta 78 desde Terminal San Borja, bajar en restaurante Barbarela, cruzar la pasarela y caminar hasta la zona.',
  },
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page">
      <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <a href="#inicio" className="nav__brand" onClick={closeMenu}>
          <img src={IMG.logo} alt="Skydive Andes" />
        </a>
        <nav className="nav__links" aria-label="Principal">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--gold nav__cta" href={WHATSAPP} target="_blank" rel="noreferrer">
          Agenda tu tándem
        </a>
        <button
          className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-nav">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--gold" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Agenda tu tándem
          </a>
        </div>
      )}

      <main>
        <section id="inicio" className="hero">
          <img className="hero__img" src={IMG.hero} alt="Salto tándem sobre Chile" />
          <div className="hero__shade" />
          <div className="hero__content">
            <p className="eyebrow">18 años formando paracaidistas en Chile</p>
            <h1>
              El sueño de volar. <em>Hecho realidad.</em>
            </h1>
            <p className="hero__lead">
              Salto tándem a 4.000 metros. Un minuto de caída libre a más de 200 km/h, con el
              Pacífico y la Cordillera de los Andes al mismo tiempo.
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold" href={WHATSAPP} target="_blank" rel="noreferrer">
                Agenda acá
              </a>
              <a className="btn btn--ghost" href="#experiencia">
                Ver la experiencia
              </a>
            </div>
          </div>
          <p className="hero__tag">#LaFábricaDeFelicidad</p>
        </section>

        <section className="stats">
          <div className="wrap stats__grid">
            <article>
              <strong>4.000 m</strong>
              <span>Altura de salto</span>
            </article>
            <article>
              <strong>200 km/h</strong>
              <span>Caída libre</span>
            </article>
            <article>
              <strong>60 s</strong>
              <span>En el aire</span>
            </article>
            <article>
              <strong>18+</strong>
              <span>Años en Chile</span>
            </article>
          </div>
        </section>

        <section id="experiencia" className="story">
          <div className="wrap story__grid">
            <div>
              <p className="eyebrow">Sobre nosotros</p>
              <h2>Pioneros del paracaidismo en Chile</h2>
              <p>
                Skydive Andes no solo ha sido pionero en el desarrollo del paracaidismo en el país:
                durante más de 18 años ha liderado la formación de paracaidistas y ha hecho posible
                que miles de personas vivan su primer salto en tándem con seguridad, emoción y
                felicidad.
              </p>
              <p>
                Julio Muñoz, fundador y alma de la empresa, creció rodeado de paracaídas. Antes,
                los aficionados chilenos debían viajar a Estados Unidos o Europa para saltar bajo
                estándares profesionales. Eso cambió para siempre.
              </p>
              <p className="quote">
                No prometemos cumplir el sueño de volar… lo hacemos realidad.
              </p>
            </div>
            <div className="story__photos">
              <img src={IMG.tandem} alt="Caída libre en tándem" />
              <img src={IMG.smile} alt="Pasajero después del salto" />
            </div>
          </div>
        </section>

        <section className="experience">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">El salto tándem</p>
              <h2>Vive tu primer salto con la mejor vista de Chile</h2>
              <p>
                Irás conectado a un instructor profesional. Él se encarga de todo: desde la puerta
                del Cessna Caravan 208B hasta el aterrizaje. Tú solo disfrutas.
              </p>
            </div>
            <div className="steps">
              <article>
                <img src={IMG.planeDoor} alt="Preparación antes de saltar" />
                <span>01</span>
                <h3>Preparación</h3>
                <p>
                  Briefing de seguridad: cómo entrar al avión, la posición en la puerta, la caída
                  libre y el aterrizaje.
                </p>
              </article>
              <article>
                <img src={IMG.planeInterior} alt="Interior del Cessna Caravan" />
                <span>02</span>
                <h3>Equipamiento</h3>
                <p>
                  Arnés de tándem conectado al instructor y gafas para ver el paisaje sin
                  inconvenientes.
                </p>
              </article>
              <article>
                <img src={IMG.tandemAlt} alt="Salida del avión" />
                <span>03</span>
                <h3>Vuelo</h3>
                <p>
                  20 minutos de ascenso. A 4.000 metros se abren las puertas… y empieza la
                  aventura.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="precios" className="pricing">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Agenda tu tándem</p>
              <h2>Elige el día. El cielo pone el resto.</h2>
            </div>
            <div className="price-grid">
              <article className="price-card">
                <p>Jueves</p>
                <h3>$190.000</h3>
                <ul>
                  <li>Salto tándem con instructor</li>
                  <li>Cessna Caravan 208B</li>
                  <li>Caída libre de 1 minuto</li>
                </ul>
                <a className="btn btn--gold" href={WHATSAPP} target="_blank" rel="noreferrer">
                  Agendar
                </a>
              </article>
              <article className="price-card">
                <p>Viernes</p>
                <h3>$190.000</h3>
                <ul>
                  <li>Salto tándem con instructor</li>
                  <li>Cessna Caravan 208B</li>
                  <li>Caída libre de 1 minuto</li>
                </ul>
                <a className="btn btn--gold" href={WHATSAPP} target="_blank" rel="noreferrer">
                  Agendar
                </a>
              </article>
              <article className="price-card price-card--featured">
                <p>Sábado</p>
                <h3>
                  <s>$260.000</s> $230.000
                </h3>
                <ul>
                  <li>Salto tándem con instructor</li>
                  <li>Cessna Caravan 208B</li>
                  <li>Caída libre de 1 minuto</li>
                </ul>
                <a className="btn btn--dark" href={WHATSAPP} target="_blank" rel="noreferrer">
                  Agendar
                </a>
              </article>
              <article className="price-card">
                <p>Domingo</p>
                <h3>
                  <s>$240.000</s> $220.000
                </h3>
                <ul>
                  <li>Salto tándem con instructor</li>
                  <li>Cessna Caravan 208B</li>
                  <li>Caída libre de 1 minuto</li>
                </ul>
                <a className="btn btn--gold" href={WHATSAPP} target="_blank" rel="noreferrer">
                  Agendar
                </a>
              </article>
            </div>
            <p className="note">Peso máximo 100 kg. Menores de 18 con autorización notarial. Cámaras personales no permitidas.</p>
          </div>
        </section>

        <section className="cameras">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Cámaras</p>
              <h2>Lleva el salto a casa</h2>
              <p>Contrata tu cámara el día del salto, en la Drop Zone.</p>
            </div>
            <div className="camera-grid">
              <article className="camera-card">
                <video src={IMG.handyVideo} poster={IMG.handy} muted loop playsInline controls />
                <div>
                  <p>Handy · video selfie</p>
                  <h3>$65.000</h3>
                  <p>Cámara en la muñeca del instructor. Tomas de tu caída libre y el aterrizaje.</p>
                  <ul>
                    <li>Video handycam</li>
                    <li>Tomas desde el instructor</li>
                  </ul>
                  <span>Compra en zona</span>
                </div>
              </article>
              <article className="camera-card">
                <video src={IMG.proVideo} poster={IMG.pro} muted loop playsInline controls />
                <div>
                  <p>PRO · fotos y video</p>
                  <h3>$85.000</h3>
                  <p>Camarógrafo profesional en todo el salto, con entrevista previa.</p>
                  <ul>
                    <li>25 a 30 fotografías</li>
                    <li>Video de 2 a 3 minutos</li>
                  </ul>
                  <span>Compra en zona</span>
                </div>
              </article>
              <article className="camera-card">
                <video src={IMG.vipVideo} poster={IMG.vip} muted loop playsInline controls />
                <div>
                  <p>VIP · las dos cámaras</p>
                  <h3>$100.000</h3>
                  <p>Selfie del instructor más camarógrafo profesional. La experiencia completa.</p>
                  <ul>
                    <li>25 a 30 fotografías</li>
                    <li>Video + handycam</li>
                  </ul>
                  <span>Compra en zona</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="curso" className="course">
          <img className="course__bg" src={IMG.course} alt="" />
          <div className="course__shade" />
          <div className="wrap course__content">
            <p className="eyebrow">Aprende a volar</p>
            <h2>Curso de paracaidismo</h2>
            <p>
              10 horas de teoría presencial y 8 saltos progresivos: los 2 primeros en tándem y los
              6 siguientes con tu propio paracaídas, junto a un instructor certificado.
            </p>
            <ul>
              <li>Teoría sábado y domingo, 8:30 a 18:30</li>
              <li>Equipo completo: paracaídas, altímetro, casco, antiparras, buzo</li>
              <li>Gestión de licencia USPA al aprobar</li>
            </ul>
            <div className="course__price">
              <span>Inversión</span>
              <strong>$1.800.000</strong>
            </div>
            <a className="btn btn--gold" href={WHATSAPP} target="_blank" rel="noreferrer">
              Consultar el curso
            </a>
          </div>
        </section>

        <section id="zona" className="zone">
          <div className="wrap">
            <div className="zone__intro">
              <div>
                <p className="eyebrow">Avión y zona</p>
                <h2>Cessna Caravan 208B. El único en Chile para 18 paracaidistas.</h2>
                <p>
                  Avión propio, especialmente acondicionado. Luz de salida, punto de salto y
                  operación certificada por la USPA — United States Parachute Association.
                </p>
              </div>
              <img className="zone__badge" src={IMG.dropzone} alt="International Affiliate Drop Zone USPA" />
            </div>
            <div className="zone__photos">
              <img src={IMG.plane} alt="Cessna Caravan 208B de Skydive Andes" />
              <img src={IMG.zona1} alt="Zona de saltos en Melipilla" />
              <img src={IMG.zona2} alt="Instalaciones de Skydive Andes" />
            </div>
            <div className="amenities">
              <h3>Nuestra zona en el Aeródromo Los 4 Diablos</h3>
              <p>
                Las mejores instalaciones del país para vivir el día con familia, amigos o equipos
                de trabajo.
              </p>
              <ul>
                <li>Piscina</li>
                <li>Áreas verdes</li>
                <li>Terrazas</li>
                <li>Restaurante</li>
                <li>Tienda</li>
                <li>Quinchos</li>
                <li>Rampa de skate</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="arrive">
          <div className="wrap arrive__grid">
            <img src={IMG.arrive} alt="Llegada al aeródromo Los Cuatro Diablos" />
            <div>
              <p className="eyebrow">Cómo llegar</p>
              <h2>Melipilla, a una hora de Santiago</h2>
              <p>
                Busca <strong>Skydive Andes Melipilla</strong> o <strong>Aeródromo Los Cuatro Diablos</strong> en
                Waze o Google Maps.
              </p>
              <p>
                En bus: Ruta 78 desde Terminal San Borja (Estación Central), dirección Melipilla.
                Baja en restaurante Barbarela, cruza la pasarela y camina hasta la zona.
              </p>
              <a
                className="btn btn--ghost"
                href="https://www.google.com/maps/search/Skydive+Andes+Melipilla"
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Maps
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="wrap faq__grid">
            <div>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2>Antes de saltar</h2>
              <img src={IMG.faq} alt="Instructor y pasajero listos para el salto" />
            </div>
            <div className="faq__list">
              {FAQS.map((item, index) => {
                const open = openFaq === index
                return (
                  <article key={item.q} className={open ? 'is-open' : ''}>
                    <button type="button" onClick={() => setOpenFaq(open ? -1 : index)}>
                      {item.q}
                      <span aria-hidden="true">{open ? '–' : '+'}</span>
                    </button>
                    {open && <p>{item.a}</p>}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="contact">
          <img src={IMG.contact} alt="Equipo de Skydive Andes" />
          <div className="contact__card">
            <p className="eyebrow">Contacto</p>
            <h2>Te esperamos en la fábrica de felicidad</h2>
            <ul>
              <li>Aeródromo Los 4 Diablos, Melipilla</li>
              <li>
                WhatsApp{' '}
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  +56 9 7229 9633
                </a>
              </li>
              <li>Lunes a domingo, 9:00 a 18:00 · +56 2 2914 0683</li>
              <li>
                <a href="mailto:contacto@skydiveandes.com">contacto@skydiveandes.com</a>
              </li>
            </ul>
            <a className="btn btn--gold" href={WHATSAPP} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__grid">
          <div>
            <img src={IMG.logo} alt="Skydive Andes" />
            <p>Paracaidismo en Chile. #LaFábricaDeFelicidad</p>
          </div>
          <nav>
            <a href="#experiencia">Experiencia</a>
            <a href="#precios">Tándem</a>
            <a href="#curso">Curso</a>
            <a href="#zona">Avión y zona</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer__social">
            <a href="https://www.instagram.com/skydiveandes" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/skydiveandes" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.tiktok.com/@skydiveandes" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="https://www.linkedin.com/company/skydiveandes/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <p className="footer__legal">Skydive Andes © 2026. Todos los derechos reservados.</p>
      </footer>

      <a className="whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        WhatsApp
      </a>
    </div>
  )
}

export default App
