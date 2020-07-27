import React, { useEffect } from 'react';
import WithApiService from '../hoc/WithApiService';
import PropTypes from 'prop-types';
import './accordion.scss';
import AccordionBox from "./AccordionBox";

const Accordion = ({ data, api }) => {

    useEffect(() => {

        api.getBlockchain()
            .then(data => console.log(data));

    });

    return(
        <div className="accordion">
            {
                data.map((box, key) => {
                    return <AccordionBox data={box} key={key} />;
                })
            }
        </div>
    )

};

export default WithApiService()(Accordion);

Accordion.propTypes = {
    data: PropTypes.array.isRequired
};