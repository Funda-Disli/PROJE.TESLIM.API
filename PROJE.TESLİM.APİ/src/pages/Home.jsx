import HomeCarousel from "../components/HomeCarousel";

function Home({ data }) {
   return (
    <div className='w-full h-screen'>
      <img src="https://www.bursa.com.tr/uploads/2021/02/bursa-si-luet2-1_2.jpg" 
      alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    <div className='bg-black absolute top-0 left-0 w-full h-screen text-black' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-black'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-5'>
          <p>Bursa Büyükşehir Belediyesi</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Bursa'nın Tarihi Yaşayarak Gezmeye Var Mısın ?
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl text-black'>
          Bursa'ya merhaba! Osmanlı'nın doğduğu topraklarda tarihi bir yolculuğa hazır mısınız? Burada Osmanlı'nın izlerini sürerken, nesiller boyu geçen lezzetleri tatma fırsatı bulabilirsiniz. Tarihi mekanlardan damak zevkine, Bursa sizi geçmişe ve lezzetlere davet ediyor. Hadi, bu rüya şehirde tarihi keşfedin ve eşsiz lezzetlerle tanışın!
          </p>
          <button className='bg-white text-black '>İçeriği Keşfedin!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
