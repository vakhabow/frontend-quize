import React from 'react';
import { Link } from 'react-router-dom';
import './testDescription.css';

const Description = ({testName, description, id}) => {
    return (
        <div className='description_wrap'>
            <div className="test_info">
            <div className="test_text">{testName}</div>
            <div className="test_description">{description}</div>
            <div className='link_buttons'>
            <Link to={`/test/${id}`} className='start'>Начать тест</Link>
            <Link to={`/tests`} className='start'>К тестам</Link>
            </div>
          </div>
        </div>
    );
};

export default Description;