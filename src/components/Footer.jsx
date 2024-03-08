import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const MapComponent = () => (
  <div className="mb-0 mt-0" style={{ margin: '0', padding: '0' }}>
  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Nbvu5UOKCKtG0uTv8a7BJw6jTGb_0ls&ehbc=2E312F&noprof=1" 
      width="100%"
      height="500px"
      title="Google Maps"
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  </div>
);

const Footer = () => {
  return (
    <div>
     <MapComponent />
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercare pt-2'>Çözümler</h6>
          <ul>

            <li className='py-1'>Rota Bilgisi</li>
            <li className='py-1'>Gastronomi</li>
            <li className='py-1'>Navigasyon Desteği</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Destek</h6>
          <ul>
            <li className='py-1'>Kullanım Şartları</li>
            <li className='py-1'>Hızlı İletişim</li>
            <li className='py-1'>Medyada Biz</li>
            </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Bursa Büyükşehir Belediye</h6>
          <ul>
            <li className='py-1'>Hakkında</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Yayın</li>
          </ul>
        </div>
       
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Bültenlerimize Abone Olun!</p>
          <p className='py-4'>
          Bursa'nın Tarihi hakkında güncel bilgileri kaçırmamak ve özel içeriklere erişim sağlamak için bültenlerimize abone olun. Haydi, tarihi keşfe çıkmak için şimdi abone olun! 
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
            <button className='p-2 mb-4 rounded-md'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>Bursa'nın Zengin Tarihine Anında Erişim İçin Hizmetimiz Aktif! | Tüm hakkı saklıdır.</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
      </div>
      </div>
      
  );
};

export default Footer;