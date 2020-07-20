import React, { useEffect } from 'react';
import './faq.css';

const FAQ = () =>{
    useEffect(()=>{
        document.title = "FAQ | covid19trackerz";
    })
    return(
        <div className="container-fluid">
            <div className="faq-box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="faq"><h1>FAQs:</h1></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-6 col-sm-12">
                        <div className="quest">
                            <div className="que">
                                Is this an Ofiicial Website?
                            </div>
                            <div className="ans">
                                Absolutely not. This is not an official website.
                            </div>
                        </div>

                        <div className="quest">
                            <div className="que">
                                What are my sources? How is the data gathered for this project?
                            </div>
                            <div className="ans">
                                I am using some of the standard and trusted APIs to update the records on the website.
                                These APIs use bulletins and official handles to update their records. Also I got assitance from few github projects.
                            </div>
                        </div>

                        <div className="quest">
                            <div className="que">
                                Who am I?
                            </div>
                            <div className="ans">
                                My name is Abhay. I'm First Year college student from Bengal College of Engineering and Technology, Durgapur. I fyou wish to know more about me visit my portfolio by clicking <a href="https://abhay-web-folio.netlify.app/index.html">HERE</a>.
                            </div>
                        </div>

                        <div className="quest">
                            <div className="que">
                                Is your project Open-Sourced?
                            </div>
                            <div className="ans">
                                Yes, it is available on GitHub. You can use it by clicking on github icon on home.
                            </div>
                        </div>

                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
};

export default FAQ;