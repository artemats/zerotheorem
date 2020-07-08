import React, { Fragment } from 'react';
import './faq.scss';
import Accordion from "../../components/accordion/Accordion";

const accordionData = [
    {
        title: 'If your forecast are so accurate why give them away?',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front whole given.</p>',
        collapsed: false
    },
    {
        title: 'What is the accuracy of the stack compared to the baseline forecast?',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front whole given.</p>',
        collapsed: true
    },
    {
        title: 'How can I use the stack for my own needs?',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front whole given.</p>',
        collapsed: true
    },
    {
        title: 'How is Zero Theorem related ti forecast outputs?',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front whole given.</p>',
        collapsed: true
    },
    {
        title: 'Who is behind Zero Theorem? Who is QoheN Leth?',
        description: '<p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much.</p><p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front whole given.</p>',
        collapsed: true
    }
];

const Faq = () => {

    return(
        <Fragment>
            <section className="section hero inner-page faq">
                <div className="abstract __7" />
                <div className="abstract-circle __3" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-1">
                            <div className="hero-title">
                                <h1 className="title-2 title-border">FAQ</h1>
                            </div>
                            <Accordion data={accordionData} />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )

};

export default Faq;