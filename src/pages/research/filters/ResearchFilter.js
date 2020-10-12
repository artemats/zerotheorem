import React from 'react';
import ResearchSearch from "../search/ResearchSearch";
import ResearchTags from "../tags/ResearchTags";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";

const ResearchFilter = () => {
    return(
        <div className="row">
            <div className="col-lg-4 order-lg-2">
                <ErrorBoundry>
                    <ResearchSearch />
                </ErrorBoundry>
            </div>
            <div className="col-lg-8 order-lg-1">
                <ErrorBoundry>
                    <ResearchTags />
                </ErrorBoundry>
            </div>
        </div>
    )
};

export default ResearchFilter;