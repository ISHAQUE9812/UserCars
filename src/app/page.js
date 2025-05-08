"use client";
import { useEffect, useState } from "react";


export default function Home() {
  const [user, setUser] = useState([]);
  const fechingData = async () => {
    const res = await fetch(`https://dummyjson.com/users`)
    const data = await res.json();
    setUser(data.users);
  }
  useEffect(() => {
    fechingData()
  })
  return (
    <div className="min-h-screen w-full p-10 bg-gray-100">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {user.map((item, index) => (
      <div
        className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center"
        key={index}
      >
        <img
          src={item.image}
          alt="user"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h1 className="text-gray-700 font-semibold">Name: {item.firstName}</h1>
        <p className="text-gray-500">Email: {item.email}</p>
        <p className="text-gray-400">Age: {item.age}</p>
        <h4 className="text-gray-800 font-medium">
          Country: {item.address.city}
        </h4>
      </div>
    ))}
  </div>
</div>

  );
}
