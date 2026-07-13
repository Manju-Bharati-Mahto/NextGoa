"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function CareerListings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Dynamic filter options returned from the database
  const [availableFilters, setAvailableFilters] = useState<{
    positions: string[];
    locations: string[];
    types: string[];
  }>({
    positions: [],
    locations: [],
    types: [],
  });

  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [offset, setOffset] = useState(0);

  // Listen to search events from the CareerHeroSearch component
  useEffect(() => {
    const handleSearchEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSearchQuery(customEvent.detail || "");
    };

    window.addEventListener("career-search", handleSearchEvent);
    return () => window.removeEventListener("career-search", handleSearchEvent);
  }, []);

  // Fetch jobs dynamically whenever search query or filters change
  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        setError(null);
        
        // Build dynamic query parameters
        const params = new URLSearchParams();
        params.append("limit", "10");
        params.append("offset", "0");
        if (searchQuery) params.append("search", searchQuery);
        if (selectedPositions.length > 0) params.append("positions", selectedPositions.join(","));
        if (selectedLocations.length > 0) params.append("locations", selectedLocations.join(","));
        if (selectedTypes.length > 0) params.append("types", selectedTypes.join(","));

        const res = await fetch(`/api/vacancies?${params.toString()}`);
        const result = await res.json();
        
        if (result.success) {
          setJobs(result.data);
          setHasMore(result.hasMore);
          setOffset(result.data.length);
          
          // Populate the dynamic filter sidebar using the active database options
          if (result.availableFilters) {
            setAvailableFilters(result.availableFilters);
          }
        } else {
          setError(result.message || "Failed to load vacancies");
        }
      } catch (err: any) {
        console.error("Error fetching vacancies:", err);
        setError("Failed to fetch vacancies");
      } finally {
        setLoading(false);
      }
    }
    
    fetchJobs();
  }, [searchQuery, selectedPositions, selectedLocations, selectedTypes]);

  // Fetch 15 more jobs preserving all current search and filter parameters
  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      
      const params = new URLSearchParams();
      params.append("limit", "15");
      params.append("offset", offset.toString());
      if (searchQuery) params.append("search", searchQuery);
      if (selectedPositions.length > 0) params.append("positions", selectedPositions.join(","));
      if (selectedLocations.length > 0) params.append("locations", selectedLocations.join(","));
      if (selectedTypes.length > 0) params.append("types", selectedTypes.join(","));

      const res = await fetch(`/api/vacancies?${params.toString()}`);
      const result = await res.json();
      
      if (result.success && Array.isArray(result.data)) {
        setJobs((prev) => [...prev, ...result.data]);
        setHasMore(result.hasMore);
        setOffset((prev) => prev + result.data.length);
      } else {
        alert(result.message || "Failed to load more vacancies");
      }
    } catch (err) {
      console.error("Error loading more vacancies:", err);
      alert("Failed to load more vacancies");
    } finally {
      setLoadingMore(false);
    }
  };

  const toggleFilter = (
    current: string[],
    setFilter: (val: string[]) => void,
    value: string
  ) => {
    if (value === "All") {
      setFilter([]);
      return;
    }
    
    if (current.includes(value)) {
      setFilter(current.filter((v) => v !== value));
    } else {
      setFilter([...current, value]);
    }
  };

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const renderFilterSections = () => (
    <>
      {/* Job Position Filter */}
      <div className="mb-8">
        <h4 className="text-sm font-bold text-[#111111] mb-3">Job Position</h4>
        <hr className="border-gray-200 mb-4" />
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded flex items-center justify-center border ${selectedPositions.length === 0 ? 'bg-[#0CAADD] border-[#0CAADD]' : 'bg-white border-gray-300 group-hover:border-gray-400'}`}>
              {selectedPositions.length === 0 && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              )}
            </div>
            <span className="text-[13px] text-[#111111]" onClick={() => setSelectedPositions([])}>All</span>
          </label>
          
          {availableFilters.positions.length === 0 ? (
            <span className="text-[13px] text-gray-400 italic pl-1">No positions available</span>
          ) : (
            availableFilters.positions.map((pos) => {
              const isChecked = selectedPositions.includes(pos);
              return (
                <label key={pos} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleFilter(selectedPositions, setSelectedPositions, pos); }}>
                  <div className={`w-[18px] h-[18px] rounded flex items-center justify-center border ${isChecked ? 'bg-[#0CAADD] border-[#0CAADD]' : 'bg-white border-gray-300 group-hover:border-gray-400'}`}>
                    {isChecked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    )}
                  </div>
                  <span className="text-[13px] text-[#111111]">{pos}</span>
                </label>
              );
            })
          )}
        </div>
      </div>

      {/* Location Filter */}
      <div className="mb-8">
        <h4 className="text-sm font-bold text-[#111111] mb-3">Location</h4>
        <hr className="border-gray-200 mb-4" />
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded flex items-center justify-center border ${selectedLocations.length === 0 ? 'bg-[#0CAADD] border-[#0CAADD]' : 'bg-white border-gray-300 group-hover:border-gray-400'}`}>
              {selectedLocations.length === 0 && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              )}
            </div>
            <span className="text-[13px] text-[#111111]" onClick={() => setSelectedLocations([])}>All</span>
          </label>

          {availableFilters.locations.length === 0 ? (
            <span className="text-[13px] text-gray-400 italic pl-1">No locations available</span>
          ) : (
            availableFilters.locations.map((loc) => {
              const isChecked = selectedLocations.includes(loc);
              return (
                <label key={loc} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleFilter(selectedLocations, setSelectedLocations, loc); }}>
                  <div className={`w-[18px] h-[18px] rounded flex items-center justify-center border ${isChecked ? 'bg-[#0CAADD] border-[#0CAADD]' : 'bg-white border-gray-300 group-hover:border-gray-400'}`}>
                    {isChecked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    )}
                  </div>
                  <span className="text-[13px] text-[#111111]">{loc}</span>
                </label>
              );
            })
          )}
        </div>
      </div>

      {/* Job Type Filter */}
      <div>
        <h4 className="text-sm font-bold text-[#111111] mb-3">Job Type</h4>
        <hr className="border-gray-200 mb-4" />
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded flex items-center justify-center border ${selectedTypes.length === 0 ? 'bg-[#0CAADD] border-[#0CAADD]' : 'bg-white border-gray-300 group-hover:border-gray-400'}`}>
              {selectedTypes.length === 0 && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              )}
            </div>
            <span className="text-[13px] text-[#111111]" onClick={() => setSelectedTypes([])}>All</span>
          </label>

          {availableFilters.types.length === 0 ? (
            <span className="text-[13px] text-gray-400 italic pl-1">No types available</span>
          ) : (
            availableFilters.types.map((type) => {
              const isChecked = selectedTypes.includes(type);
              return (
                <label key={type} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleFilter(selectedTypes, setSelectedTypes, type); }}>
                  <div className={`w-[18px] h-[18px] rounded flex items-center justify-center border ${isChecked ? 'bg-[#0CAADD] border-[#0CAADD]' : 'bg-white border-gray-300 group-hover:border-gray-400'}`}>
                    {isChecked && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    )}
                  </div>
                  <span className="text-[13px] text-[#111111]">{type}</span>
                </label>
              );
            })
          )}
        </div>
      </div>
    </>
  );

  return (
    <section id="career-listings" className="w-full bg-[#FAFAFA] lg: relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6 lg:gap-10">
        
        {/* Left Sidebar: Filter Graphic + Filter Options */}
        <div className="hidden lg:flex flex-col gap-6">
          {/* Filter Graphic */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm">
            <Image 
              src="/career-filter.svg" 
              alt="Champions are made by choices, not chances." 
              width={356}
              height={238}
              className="w-full h-auto"
            />
          </div>

          {/* Filter Form Card (Desktop) */}
          <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0CAADD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
                <line x1="10" y1="18" x2="14" y2="18"></line>
              </svg>
              <h3 className="text-xl font-bold text-[#111111]">Filters</h3>
            </div>
            
            {renderFilterSections()}
          </div>
        </div>

        {/* Right Content: Job Cards */}
        <div className="flex flex-col gap-6 lg:gap-8 h-fit">
          {/* Mobile Filter Button */}
          <button 
            className="flex lg:hidden items-center justify-center gap-3 w-full bg-white border border-gray-300 rounded-xl py-3.5 shadow-sm"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#100C30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
              <line x1="10" y1="18" x2="14" y2="18"></line>
            </svg>
            <span className="text-[17px] font-medium text-[#111111]">Filters</span>
          </button>

          {loading ? (
            <div className="col-span-1 md:col-span-2 py-24 text-center bg-white rounded-3xl border border-gray-200 flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 border-4 border-t-[#EF3341] border-gray-200 rounded-full animate-spin"></div>
              <p className="text-gray-500 font-medium">Fetching job openings...</p>
            </div>
          ) : error ? (
            <div className="col-span-1 md:col-span-2 py-12 text-center text-red-500 bg-white rounded-3xl border border-gray-200 font-medium">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-[2rem] border border-gray-200 p-6 shadow-sm flex flex-col">
                    <h3 className="text-[22px] font-bold text-[#111111] leading-snug mb-4">
                      {job.title}
                    </h3>
                    <hr className="border-gray-300 mb-5" />
                    
                    <div className="w-full bg-[#FAD931] text-[#111111] text-[15px] font-bold px-5 py-2.5 rounded-xl mb-5 text-left">
                      {job.position} Position
                    </div>

                    <p className="text-[#333333] text-[15px] leading-[1.6] mb-8 line-clamp-3 text-ellipsis overflow-hidden">
                      {job.card_description}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-4 w-full">
                      <Link href={`/careers/${job.slug}`} className="flex-1 bg-[#EF3341] hover:bg-[#D92A36] transition-colors text-white text-[16px] font-bold py-3 rounded-full text-center block">
                        Details
                      </Link>
                      <button className="flex-1 bg-transparent border border-[#111111] text-[#111111] hover:bg-gray-50 transition-colors text-[16px] font-medium py-3 rounded-full">
                        {job.type}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 py-12 text-center text-gray-500 bg-white rounded-3xl border border-gray-200">
                  No jobs found matching the selected filters.
                </div>
              )}
            </div>
          )}
          
          {/* View More Button */}
          {!loading && !error && hasMore && (
            <div className="flex justify-center mt-6">
              <button 
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="bg-transparent border-2 border-[#111111] hover:bg-[#111111] hover:text-white disabled:hover:bg-transparent disabled:hover:text-[#111111] disabled:opacity-50 transition-colors text-[#111111] font-bold text-[15px] px-10 py-3 rounded-full flex items-center justify-center gap-2 min-w-[220px]"
              >
                {loadingMore ? (
                  <>
                    <div className="w-4 h-4 border-2 border-t-transparent border-[#111111] rounded-full animate-spin"></div>
                    Loading...
                  </>
                ) : (
                  "View More Positions"
                )}
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-end bg-black/50 lg:hidden animate-fade">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setIsMobileFilterOpen(false)} />
          
          <div className="relative w-full bg-white rounded-t-3xl p-6 pt-8 max-h-[85vh] flex flex-col shadow-2xl animate-slide-up">
            <div className="flex-1 overflow-y-auto pb-4">
              {renderFilterSections()}
            </div>
            <div className="pt-2 mt-auto">
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-[#0CAADD] hover:bg-[#0A94C2] transition-colors text-white text-[19px] font-bold py-3.5 rounded-full shadow-md"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
