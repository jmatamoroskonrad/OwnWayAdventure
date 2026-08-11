import heroImageMobile from './../assets/hero/hero-bg-responsive.jpeg'
import heroImageDesktop from './../assets/hero/hero-bg.jpeg'

import { ResponsiveImage } from '../components/ResponsiveImage';

export default function HeroPage () {
    return(
        <div className='flex items-center'>
            <ResponsiveImage mobileSrc={heroImageMobile} desktopSrc={heroImageDesktop} alt=''/>
        </div>
    );
}
