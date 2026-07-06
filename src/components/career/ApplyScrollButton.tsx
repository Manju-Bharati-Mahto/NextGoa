"use client";

export default function ApplyScrollButton() {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('apply-form');
    if (el) {
      // Offset by 100px to account for the sticky header
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={handleScroll} 
      className="inline-block bg-[#EF3341] hover:bg-[#D92A36] transition-colors text-white text-[16px] md:text-[18px] font-bold px-8 py-3 md:px-10 md:py-3.5 rounded-full w-fit shadow-md text-center"
    >
      Submit now
    </button>
  );
}
