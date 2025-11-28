import React from "react";
import Pill from "./Pill";

function PaperCard({ title, figure, summary, isOpen, onToggle, paperLink, skills, borderGradient = ["#00f260", "#0575e6"] }) {
  return (
    <div 
      className="rounded-xl break-inside-avoid mb-3"
      style={{
        padding: "4px",
        background: `linear-gradient(135deg, ${borderGradient[0]}, ${borderGradient[1]})`,
      }}
    >
      {/* 1. Add `relative` to make this a positioning container */}
      {/* Add `pb-20` to create space at the bottom for the absolute button */}
      <div
        className="bg-white rounded-[calc(0.75rem-3px)] p-4 pb-20 overflow-hidden relative"
        style={{
          transition: "max-height 0.3s ease-in-out", // Note: We transition max-height now
        }}
      >
        <img src={figure} alt={title} className="rounded-lg mb-3" />
        <h2 className="text-lg font-bold mb-2" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }} dangerouslySetInnerHTML={{ __html: title }}>
          
        </h2>

        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {skills.map(skill => (
              <Pill style={{ padding: "0.5px 12px" }}
                key={skill.text}
                text={skill.text}
                bgc={skill.bgc}
                tc={skill.tc}
              />
            ))}
          </div>
        )}
        
        <div
          className={`mt-3 text-sm text-gray-700 transition-max-height duration-300 ease-in-out research-body-text`}
          style={{
            maxHeight: isOpen ? "500px" : "0px",
            overflow: "hidden",
            fontSize: '17px',
            fontFamily: 'Nunito, sans-serif', fontWeight: 600
          }}
          dangerouslySetInnerHTML={{ __html: summary }} // this is probably fine
        >
          
        </div>

        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex gap-4"
          style={{ minWidth: 'max-content' }} // ensures the container expands to fit buttons
        >
          {/* Learn More button */}
          <button
            onClick={onToggle}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-5 rounded-full flex items-center gap-2 transition-colors duration-200"
            style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}
          >
            <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>
              {isOpen ? '−' : '+'}
            </span>
            {isOpen ? 'Show Less' : 'Learn More!'}
          </button>

          {/* View Paper link styled as button */}
          {paperLink ? (
            <a
              href={paperLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-full transition-colors duration-200 flex items-center justify-center"
              style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}
            >
              View Paper
            </a>
          ) : (
            <span
              className="bg-gray-400 text-white font-medium py-2 px-5 rounded-full flex items-center justify-center"
              style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}
            >
              Coming Soon!
            </span>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default PaperCard;