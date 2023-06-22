import React from 'react';

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>        
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-emerald-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-rose-600 text-white'
          >
            Back to homepage
          </Link>
        </div>
      </div>
        </div>
    );
};

export default Error;