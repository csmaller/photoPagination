import React, { useState, useEffect } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import ImageCard from './components/ImageCard';

function App(){
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPages,setTotalPages] = useState(10);
  const images = process.env.REACT_APP_IMAGES.split(",");
  const [allImages, setAllImages] = useState(images);

  const PAGE_LIMIT = 18;
  const NEIGHBORS = 1;

  const grabCurrentImages=()=>{
    const offset = (currentPage - 1) * PAGE_LIMIT;
    const currentImages = allImages.slice(offset, offset + PAGE_LIMIT);
    return currentImages;
  };

  const [currentImages,setCurrentImages]  = useState(grabCurrentImages);

  const onPageChanged = data => {
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentImages = allImages.slice(offset, offset + pageLimit);
    setCurrentImages(currentImages);
    setCurrentPage(currentPage);
    setTotalPages(totalPages);
    window.scrollTo(0,160);
  }

   const totalImages = images.length;
   if (totalImages === 0) return null;

   const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

   return (
     <div className="container mb-5">
       <div className="row d-flex flex-row py-5">

         <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
           <div className="d-flex flex-row align-items-center">

             <h4 className={headerClass}>
               <strong className="text-secondary">{totalImages}</strong> Images
             </h4>

             { currentPage && (
               <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                 Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
               </span>
             ) }

           </div>

           <div className="d-flex flex-row py-4 align-items-center">
             <Pagination totalRecords={totalImages} pageLimit={PAGE_LIMIT} pageNeighbors={NEIGHBORS} onPageChanged={onPageChanged} currentPage={currentPage} />
           </div>
         </div>

         { currentImages.map((image,index )=> <ImageCard key={index} image={image} />) }

       </div>
       <div className="row">
       <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
         <div className="d-flex flex-row align-items-center">

           <h4 className={headerClass}>
             <strong className="text-secondary">{totalImages}</strong> Images
           </h4>

           { currentPage && (
             <span className="current-page d-inline-block h-100 pl-4 text-secondary">
               Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
             </span>
           ) }

         </div>

         <div className="d-flex flex-row py-4 align-items-center">
           <Pagination totalRecords={totalImages} pageLimit={PAGE_LIMIT} pageNeighbors={NEIGHBORS} onPageChanged={onPageChanged} currentPage={currentPage} />
         </div>
       </div>
       </div>
     </div>
   );


}

export default App;
