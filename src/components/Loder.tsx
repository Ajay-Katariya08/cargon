
const PlaceHolder = () => {
  return (
    <div id="preloader">
    <div id="ctn-preloader" className="ctn-preloader">
       <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
             <span data-text-preloader="C" className="letters-loading">C</span>
             <span data-text-preloader="A" className="letters-loading">A</span>
             <span data-text-preloader="R" className="letters-loading">R</span>
             <span data-text-preloader="G" className="letters-loading">G</span>
             <span data-text-preloader="O" className="letters-loading">O</span>
             <span data-text-preloader="N" className="letters-loading">N</span>
          </div>
       </div>
       <div className="loader">
          <div className="row">
             <div className="col-3 loader-section section-left">
                <div className="bg"></div>
             </div>
             <div className="col-3 loader-section section-left">
                <div className="bg"></div>
             </div>
             <div className="col-3 loader-section section-right">
                <div className="bg"></div>
             </div>
             <div className="col-3 loader-section section-right">
                <div className="bg"></div>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}

export default PlaceHolder
