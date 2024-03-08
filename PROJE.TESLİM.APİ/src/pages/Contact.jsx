import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Contact() {
  return (
    <>
    <div className='container bg-light mt-3 rounded'>
      <h1 className='text-center py-3 text-info text-opacity-75'>İletişim</h1>
    </div>
    <div className='container my-3 bg-light rounded'>
    <img className='img-fluid p-3 w-100' src="https://st4.depositphotos.com/1008648/22243/i/450/depositphotos_222438234-stock-photo-businessman-blurred-background-using-thin.jpg" alt="" />
    
    

    <h3 className='my-5 text-center'>İletişim Formu</h3>
    <div>
    <Form className='my-3 p-3'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Row>
        <Col>
        <Form.Label className='fw-medium'>İsim-Soyisim</Form.Label>
          <Form.Control placeholder="İsim Soyisim " />
        </Col>
        <Col>
        <Form.Label className='fw-medium'>E-mail</Form.Label>
          <Form.Control placeholder="E-mail Ekleyin" />
        </Col>
      </Row>
        <Form.Label className='fw-medium mt-3'>Konu Başlığı </Form.Label>
        <Form.Control type="email" placeholder="Konu Başlığı Ekleyin" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='fw-medium'>Açıklama Ekleyin </Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Button type="submit">Gönder</Button>
    </Form>
    <ul>
        
        <li><iframe
                  frameBorder="0" style={{border:0, borderRadius:10, width:500, height:300}}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCATKrqYuD0JSQA5_BvSIyh3hEXRM1oV9Y&q=Bursa+Buyuksehir+Belediyesi"
                  allowFullscreen>
            </iframe></li>
        <li>Bursa Büyükşehir Belediyesi Akıllı Şehircilik ve İnovasyon Dairesi Başkanlığı</li>
        <li>Telefon: 444 16 00</li>
        <li>E-Posta: acikyesil@bursa.bel.tr</li>
    </ul>
    </div>
    </div>
    </>
  )
}

export default Contact;