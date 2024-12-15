import React from 'react'

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-2">
        <div className="card bg-base-100 w-72 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border"> 
          <figure>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1733930797~exp=1733934397~hmac=32c9090060c02c556881017c4beb61572ba1da1e202b845f2207b93e4e332209&w=740"
              alt="Book"
              className="w-full h-auto" 
            />
          </figure>
          <div className="card-body p-4"> 
            <h2 className="card-title text-base"> 
              {item.name}
              <div className="badge badge-secondary text-xs">{item.category}</div>
            </h2>
            <p className="text-sm">{item.title}</p> 
            <div className="card-actions justify-between">
              <div className="badge badge-outline text-sm">${item.price}</div> 
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 text-sm"> 
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
