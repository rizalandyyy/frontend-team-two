import React from 'react';
import { Review } from '@/types';
import Card from '../ui/Card';
import { FaTrash } from 'react-icons/fa';

interface ReviewCardProps {
  review: Review;
  onDelete: (id: number) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onDelete }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <Card className="mb-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-semibold text-gray-800">{review.name}</h4>
          <div className="flex text-lg">{renderStars(review.rating)}</div>
        </div>
        <div className="flex items-center">
          <div className="text-sm text-gray-500 mr-3">{review.date}</div>
          <button 
            onClick={() => onDelete(review.id)} 
            className="text-red-500 hover:text-red-700 transition-colors"
            aria-label="Remove testimonial"
          >
            <FaTrash size={14} />
          </button>
        </div>
      </div>
      <p className="text-gray-700 mt-2">{review.comment}</p>
    </Card>
  );
};

export default ReviewCard;