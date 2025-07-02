"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Product, ProductVariant } from '../types/product';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { useIsMobile } from '@/hooks/use-mobile';
import ProductVariantSelector from './ProductVariantSelector';
import Image from 'next/image';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [quantity, setQuantity] = useState(1);
  const isMobile = useIsMobile();
  
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  const currentProduct = {
    name: selectedVariant?.name || product.name,
    price: selectedVariant?.price || product.price,
    imageSrc: selectedVariant?.imageSrc || product.imageSrc,
    description: selectedVariant?.description || product.description
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !contentRef.current?.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    gsap.set(modalRef.current, { autoAlpha: 0 });
    gsap.set(contentRef.current, { y: 50 });
    
    const tl = gsap.timeline();
    tl.to(modalRef.current, { autoAlpha: 1, duration: 0.3 })
      .to(contentRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleAddToCart = () => {
    if (selectedVariant) {
      const variantProduct = {
        ...product,
        id: product.id + "-" + selectedVariant.id,
        name: selectedVariant.name,
        price: selectedVariant.price || product.price,
        imageSrc: selectedVariant.imageSrc || product.imageSrc,
        description: selectedVariant.description || product.description
      };
      addToCart(variantProduct, quantity);
    } else {
      addToCart(product, quantity);
    }
    onClose();
  };

  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div 
      ref={modalRef} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
    >
      <div 
        ref={contentRef}
        className="glass-morphism w-full max-w-3xl rounded-lg overflow-hidden relative opacity-0 max-h-[90vh]"
        style={{ maxHeight: isMobile ? '95vh' : '85vh' }}
      >
        <button 
          onClick={onClose}
          className="absolute right-3 top-3 z-10 bg-luxury-black/70 p-1.5 rounded-full text-gray-300 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        
        <div className="flex flex-col md:flex-row max-h-[90vh] overflow-hidden">
          <div className="md:w-5/12 h-[200px] md:h-auto">
            <div className="h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/40 via-transparent to-transparent z-0"></div>
              <Image 
                src={currentProduct.imageSrc} 
                alt={currentProduct.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          
          <div className="md:w-7/12 p-4 md:p-6 flex flex-col overflow-y-auto" style={{ maxHeight: isMobile ? 'calc(95vh - 200px)' : '85vh' }}>
            <div>
              <div className="flex flex-wrap items-center mb-2 gap-1">
                {product.categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-luxury-gray text-gray-300 px-2 py-0.5 rounded mr-1 mb-1"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold font-cormorant gold-gradient mb-1">
                {currentProduct.name}
              </h2>
              
              <p className="text-gray-300 text-xs md:text-sm mb-3">{product.tagline}</p>
              
              <p className="text-gray-400 text-xs md:text-sm mb-4">{currentProduct.description}</p>

              {product.variants && product.variants.length > 0 && (
                <ProductVariantSelector 
                  variants={product.variants}
                  selectedVariant={selectedVariant}
                  baseProduct={{
                    name: product.name,
                    price: product.price,
                    imageSrc: product.imageSrc,
                    description: product.description
                  }}
                  onSelectVariant={setSelectedVariant}
                />
              )}
              
              <div className="border-t border-luxury-gray my-3 pt-3">
                <h4 className="text-gold text-xs font-medium mb-2">FRAGRANCE NOTES</h4>
                
                <div className="grid grid-cols-3 gap-1 md:gap-2 mb-3">
                  <div>
                    <span className="text-xs text-gray-400">Top</span>
                    <ul className="text-xs md:text-sm text-gray-300">
                      {product.fragranceNotes.top.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Middle</span>
                    <ul className="text-xs md:text-sm text-gray-300">
                      {product.fragranceNotes.middle.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Base</span>
                    <ul className="text-xs md:text-sm text-gray-300">
                      {product.fragranceNotes.base.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4">
                  <div>
                    <span className="text-xs text-gray-400">Longevity</span>
                    <p className="text-xs md:text-sm text-gray-300">{product.longevity}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-400">Sillage</span>
                    <p className="text-xs md:text-sm text-gray-300">{product.sillage}</p>
                  </div>
                </div>
              </div>

              {product.experience && (
                <div className="border-t border-luxury-gray my-3 pt-3">
                  <h4 className="text-gold text-xs font-medium mb-2">THE EXPERIENCE</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.experience.map((exp, index) => (
                      <div key={index} className="text-xs text-gray-300 flex items-center gap-1">
                        <span className="text-gold">•</span> {exp}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(product.whyChoose || product.emotionalJourney) && (
                <div className="border-t border-luxury-gray my-3 pt-3">
                  <h4 className="text-gold text-xs font-medium mb-2">
                    {product.whyChoose ? "WHY CHOOSE THIS FRAGRANCE" : "EMOTIONAL JOURNEY"}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-300 italic">
                    {product.whyChoose ? product.whyChoose[0] : product.emotionalJourney}
                  </p>
                </div>
              )}

              {/* Price and Add to Cart Section */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl md:text-2xl text-gold font-cormorant font-semibold">
                  RS{currentProduct.price}
                </span>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="bg-luxury-gray h-7 w-7 md:h-8 md:w-8 flex items-center justify-center rounded-l"
                  >
                    -
                  </button>
                  <span className="bg-luxury-dark h-7 w-8 md:h-8 md:w-10 flex items-center justify-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={incrementQuantity}
                    className="bg-luxury-gray h-7 w-7 md:h-8 md:w-8 flex items-center justify-center rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className={cn(
                  "btn-gold rounded w-full py-2 md:py-3",
                  "transform transition hover:scale-[1.02] active:scale-[0.98]"
                )}
              >
                Add to Cart
              </button>

              {/* Product Reviews Section */}
              {product.reviews && product.reviews.length > 0 && (
                <div className="border-t border-luxury-gray my-3 pt-3">
                  <h4 className="text-gold text-xs font-medium mb-2">CUSTOMER REVIEWS</h4>
                  <div className="space-y-3 max-h-40 overflow-y-auto pr-1">
                    {product.reviews.map((review:string[], idx) => {
                      // Assign a random rating of 4 or 5 for demo purposes
                      const rating = (idx % 3 === 0 ? 4 : 5);
                      return (
                        <div key={idx} className="bg-luxury-dark/60 rounded p-2">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-gold font-semibold text-xs">{review.name}</span>
                            <span className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-3.5 h-3.5 ${i < rating ? 'text-gold' : 'text-luxury-gray'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                                </svg>
                              ))}
                            </span>
                          </div>
                          <p className="text-xs text-gray-300">{review.review}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;