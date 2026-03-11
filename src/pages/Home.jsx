import { Link } from 'react-router-dom'
import './Home.css'
import collageuniform from '../image/collageuniform.jpg'
import schooluniform from '../image/schooluniform.jpeg'

const schoolPartners = [
  'Yashoda Group of Schools',
  'Hadas Highschool',
  'BKVV',
  'Paranjape School',
  'Saraswati Vidhyalaya',
  'CP and Berar Highschool',
  'Bishop Cotton Highschool',
  'RKVM',
  'Blue Bell Convent',
  'Dolphin School',
  'Tejaswini Vidya Mandir',
  'Vidya Sadhna',
  'Star Kindergarten',
]

const collegePartners = [
  'Dharampeth Junior College',
  'Ram Nagar Bharat Vidyalay Junior College',
  'Dharampeth Science College',
]

function Home() {
  return (
    <section className="home-page">
      <div className="container-fluid home-shell py-5">
        <div className="home-hero shadow-lg">
          <div className="hero-header">
            <span>
              <i className="bi bi-person-badge-fill me-2" />
              TRILOK JAIN
            </span>
            <span>
              <i className="bi bi-telephone-fill me-2" />
              9422147424
            </span>
          </div>
          <div className="home-hero-content">
            <div className="hero-left">
              <p className="hero-kicker">SINCE 1979</p>
              <h1>PARAS DRESSES</h1>
              <h2>All Types of Uniforms, Designer & Planner</h2>
              <p className="hero-text">
                School and college uniforms, garments, and innerwear with
                reliable quality, own manufacturing, and reasonable prices.
              </p>
              <div className="hero-actions">
                <Link to="/product" className="btn hero-btn hero-btn-primary">
                  <i className="bi bi-bag-check me-2" />
                  Explore Products
                </Link>
                <Link to="/about" className="btn hero-btn hero-btn-outline">
                  <i className="bi bi-building me-2" />
                  About Our Shop
                </Link>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-badge">Designer & Planner</div>
              <div className="stats-grid">
                <article>
                  <h3>56+</h3>
                  <p>Years Legacy</p>
                </article>
                <article>
                  <h3>16</h3>
                  <p>Schools Served</p>
                </article>
                <article>
                  <h3>6</h3>
                  <p>Colleges Served</p>
                </article>
                <article>
                  <h3>100%</h3>
                  <p>In-house Uniform Manufacturing</p>
                </article>
              </div>
            </div>
          </div>
          <div className="hero-footer">
            <i className="bi bi-geo-alt-fill me-2" />
            North Bazar Road, Gokulpeth, Nagpur - 440010 | Ph: 2540657
          </div>
        </div>

        <div className="uniform-gallery mt-4">
          <article className="gallery-card gallery-card-lg">
            <img
              src={schooluniform}
              alt="School uniform collection"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h4>School Uniform Collection</h4>
              <p>Tailored fits for all age groups.</p>
            </div>
          </article>
          <article className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
              alt="Garment section"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h4>Daily Garments</h4>
            </div>
          </article>
          <article className="gallery-card">
            <img
              src={collageuniform}
              alt="College uniform section"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h4>College Uniforms</h4>
            </div>
          </article>
          
        </div>

        <div className="row g-4 mt-2">
          <div className="col-lg-4">
            <article className="feature-box">
              <i className="bi bi-patch-check-fill" />
              <h5>Trusted Since 1979</h5>
              <p>
                56+ years of service in garments, school and college uniform
                planning, stitching, and delivery.
              </p>
            </article>
          </div>
          <div className="col-lg-4">
            <article className="feature-box">
              <i className="bi bi-scissors" />
              <h5>Own Manufacturing</h5>
              <p>
                In-house uniform production helps maintain fit quality, quick
                turnaround, and price control for bulk orders.
              </p>
            </article>
          </div>
          <div className="col-lg-4">
            <article className="feature-box">
              <i className="bi bi-cash-coin" />
              <h5>Reasonable Pricing</h5>
              <p>
                Daily-wear and uniform essentials priced for families, students,
                and institutions without compromise.
              </p>
            </article>
          </div>
        </div>

        <section className="partners-showcase mt-4">
          <div className="partners-header">
            <h3>
              <i className="bi bi-buildings me-2" />
              Schools and Colleges Uniform Partners
            </h3>
            <p>
              We have proudly designed and supplied uniforms for trusted schools
              and colleges across Nagpur over the years.
            </p>
            <p>
              Our long-term partnerships are built on fabric quality, consistent
              fitting, and timely bulk delivery.
            </p>
          </div>

          <div className="partners-grid">
            <article className="partners-card">
              <h4>
                <i className="bi bi-mortarboard-fill me-2" />
                Schools
              </h4>
              <ol>
                {schoolPartners.map((school) => (
                  <li key={school}>{school}</li>
                ))}
              </ol>
            </article>

            <article className="partners-card">
              <h4>
                <i className="bi bi-bank2 me-2" />
                Colleges
              </h4>
              <ol>
                {collegePartners.map((college) => (
                  <li key={college}>{college}</li>
                ))}
              </ol>
            </article>
          </div>
        </section>

        <div className="cta-strip mt-4">
          <div>
            <h4 className="mb-1">Need uniforms or garments in bulk?</h4>
            <p className="mb-0">Visit Product page to explore featured categories.</p>
          </div>
          <Link to="/product" className="btn btn-primary cta-btn">
            View Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
