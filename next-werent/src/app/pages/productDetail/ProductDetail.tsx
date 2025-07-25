'use client';

import React, { useState } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetail: React.FC = () => {
  // Sample product data
  const product: Product = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "/testimage.webp",
    description: "Experience premium sound quality with our latest wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort padding. Perfect for music lovers and professionals alike."
  };

  // Sample reviews data
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing sound quality! The noise cancellation works perfectly.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Sarah Smith",
      rating: 4,
      comment: "Great headphones, very comfortable for long listening sessions.",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 5,
      comment: "Best purchase I've made this year. Highly recommended!",
      date: "2024-01-08"
    }
  ]);

  // Form state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  
  // Confirmation modal state
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState<number | null>(null);
  const [isConfirmModalAnimating, setIsConfirmModalAnimating] = useState(false);

  // Handle opening sidebar with animation
  const openSidebar = () => {
    setIsDrawerOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  // Handle closing sidebar with animation
  const closeSidebar = () => {
    setIsAnimating(false);
    setTimeout(() => setIsDrawerOpen(false), 300);
  };

  // Handle form submission
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (reviewForm.name.trim() && reviewForm.comment.trim()) {
      const newReview: Review = {
        id: reviews.length + 1,
        name: reviewForm.name,
        rating: reviewForm.rating,
        comment: reviewForm.comment,
        date: new Date().toISOString().split('T')[0]
      };
      
      setReviews([newReview, ...reviews]);
      setReviewForm({ name: '', rating: 5, comment: '' });
      closeSidebar();
    }
  };

  // Open confirmation modal
  const openConfirmModal = (id: number) => {
    setReviewToDelete(id);
    setIsConfirmModalOpen(true);
    setTimeout(() => setIsConfirmModalAnimating(true), 10);
  };

  // Close confirmation modal
  const closeConfirmModal = () => {
    setIsConfirmModalAnimating(false);
    setTimeout(() => {
      setIsConfirmModalOpen(false);
      setReviewToDelete(null);
    }, 300);
  };

  // Handle delete review with confirmation
  const handleDeleteReview = () => {
    if (reviewToDelete !== null) {
      setReviews(reviews.filter(review => review.id !== reviewToDelete));
      closeConfirmModal();
    }
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`max-w-6xl mx-auto px-4 py-8 transition-all duration-300 ease-in-out ${
        isDrawerOpen ? 'mr-80' : ''
      }`}>
        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-sm"
              />
            </div>
            
            {/* Product Info */}
            <div className="space-y-4 flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-2xl font-semibold text-green-600">${product.price}</p>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
            <button
              onClick={openSidebar}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Write a Review
            </button>
          </div>

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => openConfirmModal(review.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Form Sidebar */}
       {isDrawerOpen && (
         <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
           isAnimating ? 'translate-x-0' : 'translate-x-full'
         }`}>
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Write a Review</h3>
                <button
                   onClick={closeSidebar}
                   className="text-gray-500 hover:text-gray-700 text-2xl"
                 >
                   ×
                 </button>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <select
                    value={reviewForm.rating}
                    onChange={(e) => setReviewForm({ ...reviewForm, rating: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                  >
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <option key={rating} value={rating}>
                        {rating} Star{rating !== 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                    placeholder="Share your experience with this product..."
                    required
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Submit Review
                  </button>
                  <button
                     type="button"
                     onClick={closeSidebar}
                     className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors"
                   >
                     Cancel
                   </button>
                </div>
              </form>
              </div>
            </div>
       )}

      {/* Confirmation Modal */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Invisible click area (no blackout) */}
          <div 
            className="absolute inset-0"
            onClick={closeConfirmModal}
          ></div>
          
          {/* Modal */}
          <div className={`bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 relative z-10 transform transition-all duration-300 ${isConfirmModalAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Review</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to delete this review? This action cannot be undone and the review will be permanently removed from our servers.
              </p>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={closeConfirmModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteReview}
                  className="px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;