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
    title: 'Our Experience with Schools and Colleges',
    icon: 'bi bi-buildings',
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80',
    ],
    text:
      'Since 1979, Paras Dresses has provided uniforms to 16 schools and 6 colleges. These partnerships are built on trust, timely delivery, and consistency in quality. We understand academic calendars and institutional requirements, which allows us to support management teams and families without last-minute stress.',
  },
  
  {
    title: 'Our Commitment to Affordable Pricing',
    icon: 'bi bi-cash-coin',
    images: [
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80',
    ],
    text:
      'Reasonable pricing is a core promise at Paras Dresses. We believe quality uniforms should stay accessible for every household. Because our manufacturing process is managed internally, we can reduce unnecessary cost layers and provide excellent value without compromising durability or finishing standards.',
  },
  {
    title: 'Why Customers Trust Paras Dresses',
    icon: 'bi bi-shield-check',
    images: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
    ],
    text:
      'Paras Dresses is led by Trilok Jain, who brings more than 56 years of garment business experience. Customers trust us because we communicate clearly, suggest what is practical, and stand behind our product quality. Many families who once purchased uniforms for themselves now return with their children.',
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
            <div className="hero-badges">
              <span>
                <i className="bi bi-calendar-event" /> Established 1979
              </span>
              <span>
                <i className="bi bi-person-badge" /> Trilok Jain, 56+ years
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
