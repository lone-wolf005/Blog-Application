import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block transform transition-transform duration-300 hover:scale-105">
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="w-full flex justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-48 object-cover md:h-64 lg:h-80"
          />
        </div>
        <h2 className="text-xl font-bold text-center md:text-2xl lg:text-3xl">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
