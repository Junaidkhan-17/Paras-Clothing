import './SiteFooter.css'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container py-4">
        <div className="row g-3 align-items-center">
          <div className="col-md-8">
            <h6 className="mb-1">
              <i className="bi bi-stars me-2" />
              Paras Dresses - Designer & Planner
            </h6>
            <p className="mb-0">
              <i className="bi bi-geo-alt-fill me-2" />
              North Bazar Road, Gokulpeth, Nagpur - 440010
            </p>
            <p className="mb-0 mt-1">
              <i className="bi bi-telephone-fill me-2" />
              Ph: 2540657
            </p>
          </div>
          <div className="col-md-4 text-md-end">
            <p className="mb-0">Serving schools, colleges, and families since 1979.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
