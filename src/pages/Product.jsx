import './Product.css'
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


const pricingHighlights = [
  { label: 'Jeans Lower', value: 'Rs 395 to 700', icon: 'bi bi-tag-fill' },
  { label: 'Ladies Lower', value: 'Rs 399 to 700', icon: 'bi bi-tag-fill' },
  { label: 'T-Shirt', value: 'Rs 250 to 500', icon: 'bi bi-tag-fill' },
]

const productSections = [
  {
    title: 'Gents Lower Collection',
    subtitle: 'Price Range: Rs 395 to 700',
    icon: 'bi bi-person-standing',
    hoverSubtitle: 'Smart fit jeans lower',
    hoverPrice: 'Rs 395 - Rs 700',
    images: [
      { src: superriderlower2, hoverTitle: 'Super Rider Lower' },
      { src: superriderlower3, hoverTitle: 'Super Rider Lower' },
      { src: joggerlower1, hoverTitle: 'Jogger Lower' },
      { src: joggerlower2, hoverTitle: 'Jogger Lower' },
      { src: trendslower1, hoverTitle: 'Trends Lower' },
    ],
  },
  {
    title: 'Ladies Lower Collection',
    subtitle: 'Price Range: Rs 399 to 700',
    icon: 'bi bi-person-hearts',
    hoverSubtitle: 'Comfortable ladies lower',
    hoverPrice: 'Rs 399 - Rs 700',
    images: [
      { src: femalejoggerlower1, hoverTitle: 'Jogger Lower' },
      { src: femalejoggerlower2, hoverTitle: 'Jogger Lower' },
      { src: femalejoggerlower3, hoverTitle: 'Jogger Lower' },
      { src: femalesuperriderlower, hoverTitle: 'Rider Lower' },
      { src: femaletrendlower1, hoverTitle: 'Trends Lower' },
    ],
  },
  {
    title: 'Ladies Undergarments',
    subtitle: 'Brands: Bra Soft Skin, Alina Body Cool',
    icon: 'bi bi-heart-fill',
    hoverSubtitle: 'Bra Soft Skin | Alina Body Cool',
    hoverPrice: 'Best store price',
    images: [
      { src: bra1, hoverTitle: 'Alina Undergarments' },
      { src: bra2, hoverTitle: 'Alina Undergarments' },
      { src: bra3, hoverTitle: 'Alina Undergarments' },
      { src: bra4, hoverTitle: 'Alina Undergarments' },
      { src: bra5, hoverTitle: 'Alina Undergarments' },
      { src: bra6, hoverTitle: 'Alina Undergarments' },
      { src: bra9, hoverTitle: 'Alina Undergarments' },
      { src: bra10, hoverTitle: 'Alina Undergarments' },
    ],
  },
]

const brandLogos = [
  { name: 'Bra Soft Skin', domain: 'bra-soft-skin.example' },
  { name: 'Alina Body Cool', domain: 'alina-body-cool.example' },
  { name: 'Super Rider', domain: 'super-rider.example' },
  { name: 'Joggers', domain: 'joggers.example' },
  { name: 'Trend-S', domain: 'trend-s.example' },
  { name: 'DMR', domain: 'dmr.example' },
  { name: 'Macho', domain: 'machoinnerwear.com' },
  { name: 'Dikcy', domain: 'dixcy.co.in' },
  { name: 'VIP', domain: 'vipclothing.in' },
  { name: 'Lux', domain: 'luxinnerwear.com' },
  { name: 'Jockey', domain: 'jockey.in' },
  { name: 'Rupa', domain: 'rupa.co.in' },
  { name: 'Franchie', domain: 'franchie.example' },
  { name: 'Lux Nitro', domain: 'luxinnerwear.com' },
  { name: 'James Harper', domain: 'james-harper.example' },
  { name: 'Neva Kollin', domain: 'nevakollin.example' },
  { name: 'Neva Mod', domain: 'nevamod.example' },
]

const googleIconFor = (domain) =>
  `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(domain)}`

const initialsFor = (name) => {
  const words = name.split(' ').filter(Boolean)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return `${words[0][0]}${words[1][0]}`.toUpperCase()
}

function Product() {
  return (
    <section className="product-page">
      <div className="container-fluid page-shell py-5">
        <div className="product-hero">
          <h1>Our Product Collections</h1>
          <p>
            Explore our latest range of lowers, innerwear, and T-shirts with
            affordable pricing and trusted quality.
          </p>
          <div className="highlight-row">
            {pricingHighlights.map((item) => (
              <span key={item.label} className="highlight-pill">
                <i className={item.icon} /> {item.label}: {item.value}
              </span>
            ))}
          </div>
        </div>

        {productSections.map((section) => (
          <section className="catalog-section" key={section.title}>
            <div className="product-section-header">
              <h2>
                <i className={section.icon} /> {section.title}
              </h2>
              <p>{section.subtitle}</p>
            </div>
            <div className="horizontal-gallery">
              {section.images.map((img, idx) => (
                <article className="image-card" key={`${section.title}-${idx}`}>
                  <img
                    src={typeof img === 'string' ? img : img.src}
                    alt={`${section.title} ${idx + 1}`}
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <h5>
                      {typeof img === 'string'
                        ? section.title
                        : (img.hoverTitle ?? section.title)}
                    </h5>
                    <p>{section.hoverSubtitle}</p>
                    <span>{section.hoverPrice}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="brand-section">
          <div className="product-section-header">
            <h2>
              <i className="bi bi-grid-3x3-gap-fill" /> Brand Company Logos
            </h2>
            <p>Available brands in store</p>
          </div>
          <div className="logo-grid">
            {brandLogos.map((brand) => (
              <article className="logo-card" key={brand.name}>
                <span className="logo-mark">
                  <img
                    src={googleIconFor(brand.domain)}
                    alt={`${brand.name} logo`}
                    className="logo-image"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                      const fallback = event.currentTarget
                        .nextElementSibling
                      if (fallback) fallback.style.display = 'inline-flex'
                    }}
                  />
                  <span className="logo-fallback">{initialsFor(brand.name)}</span>
                </span>
                <h6>{brand.name}</h6>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Product
