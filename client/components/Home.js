import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div
        id='home-carousel'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#home-carousel'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#home-carousel'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#home-carousel'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active' data-bs-interval='5000'>
            <img
              src={
                'https://images.pexels.com/photos/3586778/pexels-photo-3586778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              className='d-block w-100'
              alt='bakery picture'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Come visit us!</h5>
              <p>
                Since 2022, Taurus Bakery has been one of America&apos;s
                most-cherished bakeshops and has set the standard for
                tried-and-true desserts and baked goods. Come visit us in
                person, or order from our online store to experience the taste
                behind delicious success.
              </p>
            </div>
          </div>
          <div className='carousel-item' data-bs-interval='4000'>
            <img
              src={
                'https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              className='d-block w-100'
              alt='frequent visitor club discount'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Join our frequent buyer club!</h5>
              <p>Get birthday discounts and other special discounts!</p>
            </div>
          </div>
          <div className='carousel-item' data-bs-interval='4000'>
            <img
              src={
                'https://images.pexels.com/photos/8511792/pexels-photo-8511792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              className='d-block w-100'
              alt='kids baking classes'
            />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Take a baking class!</h5>
              <p>Weekend baking classes for both kids and adults.</p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#home-carousel'
          data-bs-slide='prev'
        >
          <span v='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#home-carousel'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      <div className='container-fluid my-5'>
        <h3>Featured Items</h3>
        <div className='featured-items d-flex justify-content-center row col-md-8'>
          <Link
            className='btn btn-light btn-outline-secondary shadow mx-2 my-2'
            to='/products/category/bread'
          >
            Breads{' '}
            <img
              className='productImg img-thumbnail'
              src={
                'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </Link>
          <Link
            className='btn btn-light btn-outline-secondary mx-1 my-2'
            to='/products/category/cupcakes'
          >
            Cupcakes{' '}
            <img
              className='productImg img-thumbnail'
              src={
                'https://images.pexels.com/photos/635409/pexels-photo-635409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </Link>
          <Link
            className='btn btn-light btn-outline-secondary mx-1 my-2'
            to='/products/category/cookies'
          >
            Cookies{' '}
            <img
              className='productImg img-thumbnail'
              src={
                'https://images.pexels.com/photos/1740891/pexels-photo-1740891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </Link>
          <Link
            className='btn btn-light btn-outline-secondary mx-1 my-2'
            to='/products/category/pies'
          >
            Pies{' '}
            <img
              className='productImg img-thumbnail'
              src={
                'https://images.pexels.com/photos/3602269/pexels-photo-3602269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </Link>
          <Link
            className='btn btn-light btn-outline-secondary mx-1 my-2'
            to='/products/category/pastries'
          >
            Pastries{' '}
            <img
              className='productImg img-thumbnail'
              src={
                'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </Link>
          <Link
            className='btn btn-light btn-outline-secondary mx-1 my-2'
            to='/products/category/muffins'
          >
            Muffins{' '}
            <img
              className='productImg img-thumbnail'
              src={
                'https://images.pexels.com/photos/4051588/pexels-photo-4051588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </Link>
          <Link
            className='btn btn-light btn-outline-secondary mx-1 my-2'
            to='/products/category/cakes'
          >
            Cakes{' '}
            <img
              className='productImg img-thumbnail'
              src={
                'https://images.pexels.com/photos/5859948/pexels-photo-5859948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
