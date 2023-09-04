import './Ads.css'

function Ads ({expandAd,toggleAd}){
    return(
        <div>
            {
          expandAd['Ad_1'] ?
            window.innerWidth>600 ?
            <div className="bottom-ad1">
              <button onClick={()=>toggleAd('Ad_1')}> X </button>
              <a href="https://www.exoclick.com/signup/?login=bugallof">
                <img src="https://www.exoclick.com/banners/468x60.gif" alt='Ads' border="0"/>
              </a>
            </div>
            :
            <div className="bottom-ad1-mobile">
            <button onClick={()=>toggleAd('Ad_1')}> X </button>
            <a href="https://www.exoclick.com/signup/?login=bugallof"><img src="https://www.exoclick.com/banners/80x30.gif" alt='Ads' border="0"/></a>
          </div>
        :
        window.innerWidth>600 ?
        <div className="bottom-ad1-hide">
              <button onClick={()=>toggleAd('Ad_1')}> X </button>
              <a href="https://www.exoclick.com/signup/?login=bugallof">
                <img src="https://www.exoclick.com/banners/468x60.gif" alt='Ads' border="0"/>
              </a>
        </div>
        :
        <div className="bottom-ad1-mobile-hide">
        <button onClick={()=>toggleAd('Ad_1')}> X </button>
        <a href="https://www.exoclick.com/signup/?login=bugallof">
          <img src="https://www.exoclick.com/banners/80x30.gif" alt='Ads' border="0"/>
        </a>
  </div>
        }
        </div>
    )
}

export default Ads
