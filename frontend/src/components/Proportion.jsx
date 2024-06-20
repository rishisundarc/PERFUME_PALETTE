import React, { useState, useEffect,useRef } from 'react';
import '../assests/css/Checkout.css';
import { CSSTransition } from 'react-transition-group';
import '../assests/css/proportion.css'; // Import your CSS file for animations
import { InputNumber, Button } from 'antd';
import Output from './output';
import Lottie from 'lottie-web';
import animationprivacy from '../assests/css/lotties/process.json';
const Proportion = ({ selectedFlavors }) => {
  const [mlValues, setMlValues] = useState({});
  const [mixingInProgress, setMixingInProgress] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [showOutput, setShowOutput] = useState(false); // State to control output display

  // Use a state variable to control which page is displayed
  const [displayProportionPage, setDisplayProportionPage] = useState(true);
  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: contain.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationprivacy,
    });
    return () => {
      anim.destroy();
    };
  }, []);
  const contain = useRef(null);
  useEffect(() => {
    // Automatically hide the mixing animation after 3 seconds
    if (mixingInProgress) {
      const timeoutId = setTimeout(() => {
        setMixingInProgress(false);
        setAnimationCompleted(true);
      }, 3000);

      // Clear the timeout if the component unmounts or if mixing completes
      return () => clearTimeout(timeoutId);
    }
  }, [mixingInProgress]);

  const handleMlInputChange = (flavor, value) => {
    const updatedMlValues = { ...mlValues };
    updatedMlValues[flavor] = value;
    setMlValues(updatedMlValues);
  };

  const handleMixingClick = () => {
    setMixingInProgress(true);
  };

  const handleOutputButtonClick = () => {
    // When the user clicks the output button, show the output
    setShowOutput(true);
    // Hide the Proportion page
    setDisplayProportionPage(false);
  };
  const renderContext = () => {
    return <Output mlValues={mlValues} />;
  };
  
  return (
    <div>
      
      
      {displayProportionPage && (
        <div>
           <div className='animation-containerprivacy'>
        <div ref={contain} className='animcon'></div>
      </div>
        <div className='full'>
          <h2>Proportion Page</h2>
          <div>
            {selectedFlavors && selectedFlavors.length > 0 ? (
              <div>
                <p>You selected the following flavors:</p>
                <ul>
                  {selectedFlavors.map((flavor, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      <span>{flavor} :</span>
                      <InputNumber
                        addonAfter="ml"
                        defaultValue={1}
                        style={{ marginLeft: '10px' }}
                        onChange={(value) => handleMlInputChange(flavor, value)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No flavors selected.</p>
            )}

            {Object.keys(mlValues).length > 0 && (
              <div>
                <p>Mixing proportions:</p>
                <ul>
                  {Object.keys(mlValues).map((flavor) => (
                    <li key={flavor}>
                      {flavor}: {mlValues[flavor]} mL
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!mixingInProgress && !animationCompleted && (
              <Button type="primary" onClick={handleMixingClick}>
                MIXING
              </Button>
            )}

            {animationCompleted && !showOutput && (
              <Button type="primary" onClick={handleOutputButtonClick}>
                Show Output
              </Button>
            )}
          </div>
          
          <CSSTransition
            in={mixingInProgress}
            timeout={3000}
            classNames="fade"
            unmountOnExit
            onExited={() => setAnimationCompleted(true)}
          >
            <div className="mixing-animation">
              {/* Add your mixing animation content here */}
              Mixing in progress...
            </div>
          </CSSTransition>
        </div>
        </div>
      )}

      {/* Use conditional rendering to display the Output page */}
      {!displayProportionPage && showOutput && (
        <CSSTransition
          in={showOutput}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div>
            {renderContext()}
            {/* You can display the mixing results or any other content */}
          </div>
        </CSSTransition>
      )}
      </div>
      
    
  );
};

export default Proportion;
