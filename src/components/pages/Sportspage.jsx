import React, { useState } from 'react';
import { Search, ShoppingBag, Eye, Heart, Star, Filter } from 'lucide-react';

export default function SportsPage({ 
  products, 
  onAddToCart, 
  onToggleWishlist, 
  wishlist, 
  onQuickView, 
  selectedCategory, 
  setSelectedCategory,
  searchQuery,
  setSearchQuery
}) {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [maxPrice, setMaxPrice] = useState(50000);

  const categories = ['All', 'Cricket', 'Football', 'Fitness', 'Tennis', 'Badminton'];
  const brands = ['All', 'ProGear', 'Apex', 'Titan', 'Aero', 'Volt'];

  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || item.brand === selectedBrand;
    const matchesPrice = item.price <= maxPrice;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sports & Athletic Equipment
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Explore professional grade bats, balls, fitness gear, and accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <span className="font-bold text-lg text-white flex items-center gap-2">
                <Filter className="w-5 h-5 text-orange-400" /> Filters
              </span>
              <button 
                onClick={() => { setSelectedCategory('All'); setSelectedBrand('All'); setMaxPrice(50000); setSearchQuery(''); }}
                className="text-xs text-orange-400 hover:underline"
              >
                Reset All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-300 mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition ${
                      selectedCategory === cat 
                        ? 'bg-orange-500 text-slate-950 font-bold' 
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-slate-300">Max Price</h3>
                <span className="text-xs text-orange-400 font-bold">Rs. {maxPrice.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="1000" 
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-orange-500 bg-slate-800 h-2 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-sm font-semibold text-slate-300 mb-3">Brand</h3>
              <div className="grid grid-cols-2 gap-2">
                {brands.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`px-3 py-2 rounded-lg text-xs text-center border transition ${
                      selectedBrand === b 
                        ? 'border-orange-500 bg-orange-500/10 text-orange-400 font-bold' 
                        : 'border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-slate-400">
                Showing <span className="font-bold text-white">{filteredProducts.length}</span> sports items
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center">
                <p className="text-slate-400 text-lg font-medium">No items matched your filters.</p>
                <button 
                  onClick={() => { setSelectedCategory('All'); setSelectedBrand('All'); setMaxPrice(50000); setSearchQuery(''); }}
                  className="mt-4 px-5 py-2 bg-orange-500 text-slate-950 rounded-full font-bold text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const isWishlisted = wishlist.some(item => item.id === product.id);
                  return (
                    <div 
                      key={product.id}
                      className="group bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 flex flex-col justify-between"
                    >
                      <div>
                        {/* Image Container */}
                        <div className="relative aspect-square bg-slate-950 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {product.category}
                          </span>

                          {/* Quick Actions overlay */}
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                            <button 
                              onClick={() => onQuickView(product)}
                              className="p-3 bg-slate-900/90 text-white rounded-full hover:bg-orange-500 hover:text-slate-950 transition transform hover:scale-110"
                              title="Quick View"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                            <button 
                              onClick={() => onToggleWishlist(product)}
                              className={`p-3 rounded-full transition transform hover:scale-110 ${
                                isWishlisted 
                                  ? 'bg-rose-500 text-white' 
                                  : 'bg-slate-900/90 text-white hover:bg-rose-500'
                              }`}
                              title="Wishlist"
                            >
                              <Heart className="w-5 h-5 fill-current" />
                            </button>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="p-5">
                          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                            <span>{product.brand}</span>
                            <div className="flex items-center space-x-1 text-amber-400">
                              <Star className="w-3.5 h-3.5 fill-current" />
                              <span className="font-bold text-slate-200">{product.rating}</span>
                            </div>
                          </div>
                          <h3 className="font-bold text-white text-base line-clamp-1 group-hover:text-orange-400 transition">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      {/* Price & Add to Cart */}
                      <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-2">
                        <div>
                          <span className="text-xs text-slate-400 block">Price</span>
                          <span className="text-lg font-black text-orange-400">
                            Rs. {product.price.toLocaleString()}
                          </span>
                        </div>
                        <button 
                          onClick={() => onAddToCart(product)}
                          className="flex items-center space-x-2 bg-slate-800 hover:bg-orange-500 hover:text-slate-950 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}