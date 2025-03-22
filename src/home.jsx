import Foter from "./component/Foter/Foter"
import Founder from "./component/Founder/Founder"
import Heder from "./component/Heder/Heder"
import Offer from "./component/Offer/Offer"
import Popularones from "./component/Popularones/Popularones"
import Products from "./component/Products/Products"
import Realestate from "./component/Realestate/Realestate"
import Reclam from "./component/Reclam/Reclam"
import Reclam_a from "./component/Reclam_a/Reclam_a"
import Reclam_b from "./component/Reclam_b/Recalm_b"
import Rest from "./component/Rest/Rest"


const Home = ()=>{
    return(
        <div>
              <Heder />
              <Popularones />
              <Reclam/>
              <Realestate />
              <Reclam_a/>
              <Rest />
              <Reclam_b/>
              <Founder />
              <Products />
              <Offer />
              <Foter />
        </div>
    )
}

export default Home