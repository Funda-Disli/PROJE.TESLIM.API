import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Cards({ Tarih }) {
  return (

      <Col className="my-2">
        <Card className="h-100 border-0 shadow">
          <Card.Img
            src={Tarih.image}
            alt="..."
            position="top"
            className=""
            style={{ height: 250 }}
          />
          <Card.Body>
            <Card.Title>{Tarih.ADI}</Card.Title>
            <p className="text-body-tertiary">{Tarih.ALT_KATEGORİ}-{Tarih.UST_KATEGORİ}</p>
            <Card.Text>
              <p>Açıklama: <h6>{Tarih.AÇIKLAMA}</h6></p>
                              

                  
            </Card.Text>
            <div className="w-100">
              <iframe
                  frameBorder="0" style={{border:0, borderRadius:10}}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCATKrqYuD0JSQA5_BvSIyh3hEXRM1oV9Y&q=${Tarih.ADI}`}
                  allowFullscreen>
            </iframe> </div>
          </Card.Body>
        </Card>
      </Col>

  );
}

export default Cards;
