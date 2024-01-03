/* eslint-disable no-unused-vars */
import Categories from '../../components/categories';

function About(props) {
    return (
        <div className='bg-gradient-to-r from-black to-white text-white min-h-screen'>
            <Categories />
            <div className='w-1/3 grid gap-6 py-8 place-items-center'>
                <h1 className='text-4xl font-bold mb-4 text-green-500'>Healthify</h1>
                
                <p className='text-justify text-lg mb-4'>Welcome to Healthy Bites - your ultimate source for dietary and nutrition suggestions!</p>
                <p className='text-justify text-lg mb-4'>In the journey to a healthier lifestyle, making informed dietary choices is key. That where Healthy Bites comes in to guide you through the world of nutrition.</p>
                <p className='text-justify text-lg mb-4'>Our mission is to provide you with reliable, science-backed information to help you make healthier food choices. We believe that a well-balanced diet is crucial for overall well-being.</p>
                <p className='text-justify text-lg mb-4'>What sets Healthy Bites apart is our commitment to simplicity. We understand that nutrition can be overwhelming, so we offer easy-to-follow suggestions and tips to make your journey enjoyable.</p>
                <p className='text-justify text-lg mb-4'>At Healthy Bites, we believe that everyone deserves access to nutritious and delicious meals. Our curated suggestions cater to various dietary needs, ensuring there something for everyone.</p>
                <p className='text-justify text-lg mb-4'>Embark on a journey to a healthier you with Healthy Bites. Explore our suggestions, discover new flavors, and embrace a nutritious lifestyle.</p>
            </div>
        </div>
    );
}

export default About;
