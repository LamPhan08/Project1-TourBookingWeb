import React, {useRef} from "react";

import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const peopleRef = useRef(0)

    const searchHandler = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const people = peopleRef.current.value

        if(location === '' || distance === '' || people === '') {
            return alert("Please input all information!");
        }

    }

    return <Col lg = '12'>
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form__group form__group-fast mt-3">
                    <span>
                        <i className="ri-map-pin-line"></i>
                    </span>

                    <div>
                        <h6>Location</h6>
                        <input type="text" 
                        placeholder="Where are you going?"
                        ref={locationRef}/>
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast mt-3">
                    <span>
                        <i class="ri-calendar-check-fill"></i>
                    </span>

                    <div>
                        <h6>Departure Date</h6>
                        <input type="date" 
                        placeholder="Distance"
                        ref={distanceRef}/>
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-last mt-3">
                    <span>
                        <i class="ri-money-dollar-box-line"></i>
                    </span>

                    <div>
                        <h6>Price</h6>
                        <select>
                            <option value="0">Select price</option>
                            <option>Under $50</option>

                        </select>
                    </div>
                </FormGroup>

                <span className="search__icon" 
                type = 'submit'
                onClick={searchHandler}>
                    <i className="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
};

export default SearchBar;