import AboutEvent from '@/components/AboutEvent';
import BecYou from '@/components/BecYou';
import Categories from '@/components/Categories';
import Header from '@/components/header/Header';
import PhotoSlider from '@/components/PhotoSlider';
import Image from 'next/image';

const Home: React.FC = () => {

  return ( 
    <>
      <Header/>
      <main className=' relative'>
        <span className='absolute min-[320px]:scale-[0.5] min-[320px]:left-[-106%] min-[320px]:top-[-8%] min-[400px]:scale-[0.6] min-[400px]:left-[-75%] min-[400px]:top-[-10%] min-[530px]:scale-[0.7] min-[530px]:left-[-50%] min-[770px]:scale-[0.8] min-[770px]:left-[-20%] min-[770px]:top-[-7%] lines1 bg-lines1Home bg-no-repeat min-[1024px]:scale-[1] min-[1024px]:top-[-2%] min-[1024px]:left-[-3%] h-[1500px] w-[1000px] left-[0%] top-[-3%] min-[1400px]:top-[-2%] min-[1650px]:top-[1%]  min-[1650px]:left-[4%] min-[1650px]:scale-[1.2]  min-[2050px]:top-[4%]  min-[2050px]:left-[4%] min-[2050px]:scale-[1.4] transform'></span>
        <AboutEvent/>
        <Categories/>
        <BecYou/>
        <PhotoSlider/>
      </main>
    </>
      
  );
};

export default Home;