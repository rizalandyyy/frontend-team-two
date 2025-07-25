'use client';

import React, { useState } from 'react';
import { Review } from '@/types';
import ReviewCard from './ReviewCard';
import Button from '../ui/Button';
import { toast, Toaster } from 'react-hot-toast';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews: initialReviews }) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form data when closing modal
    setFormData({
      name: '',
      rating: 5,
      comment: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value, 10) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new review object
    const newReview: Review = {
      id: reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1,
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      date: new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
    };
    
    // Add new review to the list
    setReviews(prev => [newReview, ...prev]);
    
    // Show success toast
    toast.success('Thank you for sharing your experience!');
    
    // Close modal and reset form
    handleCloseModal();
  };

  const handleDeleteClick = (id: number) => {
    setReviewToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setReviewToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (reviewToDelete !== null) {
      // Remove the review from the list
      setReviews(prev => prev.filter(review => review.id !== reviewToDelete));
      
      // Show success toast
      toast.success('Feedback removed successfully!');
      
      // Close modal and reset reviewToDelete
      setIsDeleteModalOpen(false);
      setReviewToDelete(null);
    }
  };

  return (
    <div className="mt-8">
      <Toaster position="top-center" />
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Client Testimonials</h2>
        <Button onClick={handleOpenModal} variant="primary">Share Your Experience</Button>
      </div>

      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} onDelete={handleDeleteClick} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic">No testimonials yet. Be the first to share your experience with this exquisite piece!</p>
      )}

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <select 
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} Star{rating !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Feedback</label>
                <textarea 
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tell us about your experience with this garment..."
                  required
                />
              </div>
              <div className="flex space-x-3 pt-2">
                <Button type="submit" variant="primary" className="flex-1">Submit Feedback</Button>
                <Button type="button" variant="secondary" className="flex-1" onClick={handleCloseModal}>Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Remove Feedback</h3>
            <p className="mb-6">Are you sure you want to remove this testimonial? This action cannot be reversed.</p>
            <div className="flex space-x-3">
              <Button type="button" variant="danger" className="flex-1" onClick={handleConfirmDelete}>Remove</Button>
              <Button type="button" variant="secondary" className="flex-1" onClick={handleCancelDelete}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewList;