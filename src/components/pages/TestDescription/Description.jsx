import React from 'react';
import { Link } from 'react-router-dom';

const Description = ({testName, description, id}) => {
    return (
        <div>
            <div className="test_info">
            <div className="test_name">{testName}</div>
            <div className="test_description">{description}</div>
            <button><Link to={`/test/${id}`}>Начать тест</Link></button>
          </div>
        </div>
    );
};

export default Description;