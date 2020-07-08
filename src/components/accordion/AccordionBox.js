import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AccordionBox = ({ data: { title, description, collapsed } }) => {

    const [opened, setOpened] = useState(collapsed);

    const onToggleCollapse = () => {
        setOpened(!opened);
        console.log(opened);
    };

    return(
        <div className={`accordion-box ${opened ? '' : 'is-active'}`}>
            <div className="accordion-box-header" onClick={() => onToggleCollapse()}>
                <div className="accordion-btn" />
                <div className="accordion-title yellow regular">
                    <p>{title}</p>
                </div>
            </div>
            <div className="accordion-box-body">
                <div className="accordion-description" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    )

};

export default AccordionBox;

AccordionBox.propTypes = {
    data: PropTypes.object.isRequired
};