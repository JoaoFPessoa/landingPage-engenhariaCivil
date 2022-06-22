import { Carousel } from "react-responsive-carousel";
import obra from "../../assets/images/obra.jpg";
import { Container, Picture } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImagesCarousel() {
  return (
    <Container>
      <Carousel autoPlay resetAutoPlay stopOnHover>
        <div>
          <Picture alt="img" src={obra} />
          <p className="legend">Obra feita para XXX</p>
        </div>
        <div>
          <Picture alt="img" src={obra} />
          <p className="legend">Projeto feito para YYY</p>
        </div>
        <div>
          <Picture alt="img" src={obra} />
          <p className="legend">Reparo feito para ZZZ</p>
        </div>
      </Carousel>
    </Container>
  );
}
