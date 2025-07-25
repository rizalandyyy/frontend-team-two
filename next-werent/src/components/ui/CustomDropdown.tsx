'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useId } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
  label?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  defaultValue,
  onChange,
  className = '',
  label
}) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    defaultValue ? options.find(option => option.value === defaultValue) : options[0]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className="flex items-center">
        {label && (
          <label htmlFor={id} className="text-gray-700 mr-3 font-medium whitespace-nowrap">
            {label}
          </label>
        )}
        <div
          id={id}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${id}-options`}
          aria-label={label || "Dropdown"}
          tabIndex={0}
          className="flex items-center justify-between w-full min-w-[200px] px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:border-green-500 hover:ring-2 hover:ring-green-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
        >
          <span className="text-gray-800 font-medium">{selectedOption?.label}</span>
          <ChevronDownIcon
            className={`w-5 h-5 text-green-600 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </div>
      </div>

      {isOpen && (
        <div 
          id={`${id}-options`}
          role="listbox"
          className="absolute z-10 mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden animate-fadeIn"
          style={{ width: 'max-content', minWidth: '200px' }}
        >
          <div className="py-2">
            {options.map((option) => (
              <div
                key={option.value}
                role="option"
                aria-selected={option.value === selectedOption?.value}
                className={`px-4 py-2 cursor-pointer transition-all duration-150 ${option.value === selectedOption?.value 
                  ? 'bg-green-50 text-green-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => handleOptionClick(option)}
              >
                <div className="flex items-center">
                  {option.value === selectedOption?.value && (
                    <span className="mr-2 text-green-600">✓</span>
                  )}
                  <span>
                    {option.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default CustomDropdown;