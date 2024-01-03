
const Categories = () => {
    return (
        <div className='my-8'>
            <h2 className='text-2xl font-semibold mb-4 text-green-500'>Explore Categories</h2>
            <div className='flex space-x-4'>
                <div className='bg-white p-4 rounded-md shadow-md'>
                    <h3 className='text-xl font-semibold mb-2'>Healthy Recipes</h3>
                    <p className='text-gray-600'>Discover nutritious and delicious recipes for a balanced diet.</p>
                </div>

                <div className='bg-white p-4 rounded-md shadow-md'>
                    <h3 className='text-xl font-semibold mb-2'>Nutrition Tips</h3>
                    <p className='text-gray-600'>Get valuable tips on maintaining a healthy and well-balanced diet.</p>
                </div>

                <div className='bg-white p-4 rounded-md shadow-md'>
                    <h3 className='text-xl font-semibold mb-2'>Fitness</h3>
                    <p className='text-gray-600'>Explore fitness routines and exercises for a healthier lifestyle.</p>
                </div>

            </div>
        </div>
    );
}

export default Categories;
