import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Garments.css'
import superriderlower2 from '../image/superriderlower/superriderlower2.png'
import superriderlower3 from '../image/superriderlower/superriderlower3.png'
import joggerlower1 from '../image/joggerlower/joggerlower1.png'
import joggerlower2 from '../image/joggerlower/joggerlower2.png'
import trendslower1 from '../image/trendslower/trendslower1.png'
import femalejoggerlower1 from '../image/femalejoggerlower/femalejoggerlower1.png'
import femalejoggerlower2 from '../image/femalejoggerlower/femalejoggerlower2.png'
import femalejoggerlower3 from '../image/femalejoggerlower/femalejoggerlower3.png'
import femalesuperriderlower from '../image/femalesuperriderlower/femalesuperriderlower.png'
import femaletrendlower1 from '../image/femaletrendlower/femaletrendlower1.png'
import bra1 from '../image/femalebra/bra1.jpg'
import bra2 from '../image/femalebra/bra2.jpg'
import bra3 from '../image/femalebra/bra3.jpg'
import bra4 from '../image/femalebra/bra4.jpg'
import bra5 from '../image/femalebra/bra5.jpg'
import bra6 from '../image/femalebra/bra6.jpg'
import bra9 from '../image/femalebra/bra9.jpg'
import bra10 from '../image/femalebra/bra10.jpg'

const slides = [
  {
    title: 'Super Rider Lower',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: superriderlower2, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Super Rider Lower',
    subtitle: 'Good fabric',
    image:
      { src: superriderlower3, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Jogger Lower',
    subtitle: 'Reliable fit for everyday movement',
    desc: 'A practical innerwear choice with soft touch and durable construction.',
    image:
      { src: joggerlower1, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Jogger Lower',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: joggerlower2, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Trends Lower',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: trendslower1, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Female Jogger Lower',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: femalejoggerlower1, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Female Jogger Lower',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: femalejoggerlower2, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Female Jogger Lower',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: femalejoggerlower3, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Female Super Rider Lower',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: femalesuperriderlower, hoverTitle: 'Super Rider Lower' },  },
  {
    title: 'Female Trend Lower',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: femaletrendlower1, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Alina Bra',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: bra1, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Alina Bra',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: bra2, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Alina Bra',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: bra3, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Alina Bra',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: bra4, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Alina Bra',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: bra5, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Alina Bra',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: bra6, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Alina Bra',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: bra9, hoverTitle: 'Super Rider Lower' },
  },
  {
    title: 'Alina Bra',
    subtitle: 'Soft support with decent fabric',
    image:
      { src: bra10, hoverTitle: 'Super Rider Lower' },
  },
]

function Garments() {
  const [activeSlide, setActiveSlide] = useState(0)
  const tagRef = useRef(null)
  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
  const paraRef = useRef(null)

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const getSlideRole = (index) => {
    const total = slides.length
    const prevIndex = (activeSlide - 1 + total) % total
    const nextIndex = (activeSlide + 1) % total

    if (index === activeSlide) return 'active'
    if (index === prevIndex) return 'prev'
    if (index === nextIndex) return 'next'
    return 'hidden'
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      goNext()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (!tagRef.current || !titleRef.current || !subTitleRef.current || !paraRef.current) {
      return
    }

    gsap.fromTo(
      [tagRef.current, titleRef.current, subTitleRef.current, paraRef.current],
      { x: 80, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all',
      },
    )
  }, [activeSlide])

  return (
    <section className="garments-page">
      <div className="container-fluid page-shell py-5">
        <div className="garments-intro">
          <span className="intro-pill">Paras Dresses</span>
          <h1>Garments Collection</h1>
          <p>
            Professional undergarments slider with animated content transitions.
          </p>
        </div>

        <div className="garments-slider mt-4">
          <div className="slide-track">
            {slides.map((slide, index) => (
              <article
                key={`${slide.title}-${index}`}
                className={`slide-item ${getSlideRole(index)}`}
              >
                <img src={slide.image.src} alt={slide.title} />
              </article>
            ))}
          </div>

          <div className="slide-content">
            <div className="content-stack">
              <p className="slide-tag" ref={tagRef}>
                Featured Undergarments
              </p>
              <h2 ref={titleRef}>{slides[activeSlide].title}</h2>
              <h3 ref={subTitleRef}>{slides[activeSlide].subtitle}</h3>
              <p ref={paraRef}>{slides[activeSlide].desc}</p>
            </div>
            <div className="slider-controls">
              <button type="button" onClick={goPrev} aria-label="Previous slide">
                <i className="bi bi-arrow-left" />
              </button>
              <button type="button" onClick={goNext} aria-label="Next slide">
                <i className="bi bi-arrow-right" />
              </button>
            </div>
            <div className="dots">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.title}-${index}`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={index === activeSlide ? 'active' : ''}
                  aria-label={`Go to ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Garments
