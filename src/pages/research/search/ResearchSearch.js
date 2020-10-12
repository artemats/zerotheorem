import React from 'react';

const ResearchSearch = () => {
  return(
      <div className="research-search">
          <div className="search">
              <form>
                  <div className="input-container">
                      <input type="text" className="input"  placeholder="Search" />
                      <button className="search-btn" />
                  </div>
              </form>
          </div>
      </div>
  )
};

export default ResearchSearch;