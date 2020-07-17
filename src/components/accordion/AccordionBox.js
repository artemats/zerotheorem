import React from 'react';
import PropTypes from 'prop-types';
import SlideToggle from 'react-slide-toggle';

const AccordionBox = ({ data: { title, description, collapsed } }) => {

    return(
        <SlideToggle
            duration={500}
            collapsed={collapsed}
            render={({ toggle, setCollapsibleElement, range }) => (
                <div className={`accordion-box ${range ? 'is-active' : ''}`}>
                    <div className="accordion-box-header" onClick={toggle}>
                        <div className="accordion-btn" />
                        <div className="accordion-title yellow regular">
                            <p>{title}</p>
                        </div>
                    </div>
                    <div className="accordion-box-body" ref={setCollapsibleElement}>
                        <div className="accordion-description" dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>
            )} />
    )

};

export default AccordionBox;

AccordionBox.propTypes = {
    data: PropTypes.object.isRequired
};