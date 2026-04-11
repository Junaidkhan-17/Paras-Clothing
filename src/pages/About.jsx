import './About.css'
import paraslogo from '../image/paraslogo.png'
import parasuncle from '../image/parasuncle.png'
import history from '../image/history.jpeg'
import femaletrendlower from '../image/femaletrendlower/femaletrendlower1.png'
import bra6 from '../image/femalebra/bra6.jpg'
import joggerlower from '../image/joggerlower/joggerlower1.png'
import bra10 from '../image/femalebra/bra10.jpg'
import studentdressimage from '../image/studentdressimage.png'

const storySections = [
  {
    title: 'Our History',
    icon: 'bi bi-clock-history',
    images: [
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1400&q=80',
      { src: history, hoverTitle: 'history' },
    ],
    text:
      'Paras Dresses began in 1979 with a clear commitment to provide dependable garments and uniforms for local families. Over decades of service, we have grown from a neighborhood shop into a trusted name for school and college uniform solutions. Our journey has always been driven by consistency, quality, and long-term relationships with the community.',
  },
  {
    title: 'Our Mission',
    icon: 'bi bi-bullseye',
    images: [
      { src: femaletrendlower, hoverTitle: 'trendy lower' },
      { src: bra6, hoverTitle: 'trendy bra' },
    ],
    text:
      'Our mission is to deliver high-quality garments and uniforms at prices that remain fair for families and institutions. We focus on practical comfort, durable fabric, and reliable customer support. Every product we deliver reflects our promise of value, honesty, and service that customers can depend on year after year.',
  },
  {
    title: 'What We Specialize In',
    icon: 'bi bi-award',
    images: [
       { src: joggerlower, hoverTitle: 'trendy jogger' },
      { src: bra10, hoverTitle: 'trendy bra' },
    ],
    text:
      'Paras Dresses specializes in garments, school uniforms, and college uniforms. We pay close attention to sizing, stitching strength, and fabric comfort so students can wear uniforms confidently through busy academic schedules. Alongside uniforms, we support everyday garment needs with the same quality standards.',
  },
  {
    title: 'Our Future Vision',
    icon: 'bi bi-stars',
    images: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1400&q=80',
    ],
    text:
      'Looking ahead, our goal is to keep improving quality, speed, and customer convenience while preserving the values that built our name. Paras Dresses will continue serving schools, colleges, and families with professional discipline, dependable manufacturing, and affordable pricing for many years to come.',
  },
]

function About() {
  return (
    <section className="about-page">
      <div className="container-fluid page-shell py-5">
        <div className="about-hero">
          <div className="about-hero-content">
            <img className="profile" src={parasuncle} alt="Trilok Jain profile" />
            <h1>A Trusted Uniform Partner Since 1979</h1>
            <p>
              Paras Dresses is a legacy garment shop known for quality school
              and college uniforms, in-house manufacturing, and dependable
              service at affordable prices.
            </p>
            <p>We also serve 12 Branded companies undergarments and all type of night wears.</p>
            <p>Our mastery is in goun collection of 8 companies.</p>
            <div className="hero-badges">
              <span>
                <i className="bi bi-calendar-event" /> Established 1979
              </span>
              <span>
                <i className="bi bi-person-badge" /> Trilok Jain, 46+ years
                experience
              </span>
              <span>
                <i className="bi bi-mortarboard" /> 16 Schools + 6 Colleges
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <img src={paraslogo} alt="Paras Dresses logo" className="hero-logo" />
            <img
              src={studentdressimage}
              alt="Garment store interior"
              className="hero-image"
            />
          </div>
        </div>

        <div className="story-grid">
          {storySections.map((section) => (
            <article className="story-card" key={section.title}>
              <div className="story-image-grid">
                {section.images.map((image, index) => (
              <div className="story-image-wrap" key={`${section.title}-${index}`}>
                    <img
                      src={typeof image === 'string' ? image : image.src}
                      alt={`${section.title} ${index + 1}`}
                      className="story-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="story-content">
                <h2>
                  <i className={section.icon} /> {section.title}
                </h2>
                <p>{section.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
