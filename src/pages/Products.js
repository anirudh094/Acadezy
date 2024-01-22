import React, { useEffect, useState } from "react";
import {txtDB } from "./firebaseconfig";
import {collection, getDocs } from "firebase/firestore";

function Products() {

  const [data,setData] = useState([])

  const getData = async () =>{
    const valRef = collection(txtDB,'courses')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
    setData(allData)
    console.log(dataDb)
  }

  useEffect(()=>{
      getData()
  })

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Courses</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map(value => 
            <a href={value.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={value.imageSrc}
                  alt={value.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{value.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {value.price}
              </p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;