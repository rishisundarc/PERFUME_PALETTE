import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import Proportion from './Proportion';
import { getflavour } from './services/Api';
import {useDispatch} from 'react-redux';
const { Meta } = Card;
const SelectFlavours = () => {
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [showProportion, setShowProportion] = useState(false);
  const [feedbackData, setFeedbackData] = useState([]);
  const falvourids = useDispatch();
  const fetchFlavors = async () => {
    try {
      const response = await getflavour(); // Replace with your API endpoint
      setFeedbackData(response.data);
    } catch (error) {
      console.error('Error fetching flavors:', error);
    }
  };

  useEffect(() => {
    fetchFlavors();
  }, []);

  const handleFlavorClick = (flavor) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter((item) => item !== flavor));
    } else {
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  const handleNextButtonClick = () => {
    setShowProportion(true);
  };

  return (
    <div>
      {!showProportion && (
        <div>
          <h3>Select Flavors:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {feedbackData.map((feedback) => (
              <Card
                key={feedback.id}
                hoverable
                style={{
                  width: 200,
                  margin: '10px',
                  backgroundColor: selectedFlavors.includes(feedback.name) ? '#1890ff' : 'white',
                }}
                className={selectedFlavors.includes(feedback.id) ? 'selected-card' : ''}
                onClick={() => handleFlavorClick(feedback.name)}
              >
                <Meta
                  title={feedback.name}
                  description={`Description: ${feedback.description}`}
                />
                <p>Price: {feedback.price}</p>
              </Card>
            ))}
          </div>
          {selectedFlavors.length > 0 && (
            <div>
              <p>You selected:</p>
              <ul>
                {selectedFlavors.map((flavor) => (
                  <li key={flavor}>{flavor}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <Button type="primary" onClick={handleNextButtonClick}>
              Next
            </Button>
          </div>
        </div>
      )}
      {showProportion && <Proportion selectedFlavors={selectedFlavors} />}
    </div>
  );
};

export default SelectFlavours;
