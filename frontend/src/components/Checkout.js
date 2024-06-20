import React,{useState,useEffect,useRef} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { PoweroffOutlined } from '@ant-design/icons';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import '../assests/css/Checkout.css';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import '../assests/css/DashboardContent.css';
import '../assests/css/Signup.css';

const { Header,Footer } = Layout;
const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [loadings] = useState([]);
  const handleSumbit = () => {
    navigate("/");
  };
  const navigate = useNavigate();
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handlePrivacyPolicyClick = () => {
    // Handle Privacy Policy button click, e.g., navigate to the Privacy Policy page
    navigate("/privacy-policy"); // You should replace "/privacy-policy" with your actual Privacy Policy page URL
  };

  const handleTermsConditionsClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/terms-conditions"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  const handlehomeClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/dash"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  const handleContactClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/contact"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  const handleFAQClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/contact"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  
  return (
    <>
    
    <React.Fragment>
       <Header
        style={{
          padding: 0,
          background: '#007bff',
        }}
      >
        <center>
        <Button
              type="link"
              onClick={handlehomeClick}
              style={{ color: 'white' }}
            >
              <b>PerfumePalette Studio</b>
            </Button></center>
        <Button
          className='logout1'
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={handleSumbit}
        >
          Click me!
        </Button>
      </Header>
      <CssBaseline />
      <Container component="main" maxWidth="lg" className="container">
        <div className="scrollable-container"> {/* Add this div for scrolling */}
          <Paper variant="outlined" className="paper">
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }} className="stepper">
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className="step-label">{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className="button-container">
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                  className='button1'
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 10 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
   
                </div>
              </React.Fragment>
            )}
          </Paper>
        </div>
        
      </Container>
      <Footer className="fixed-footer1">
              <Button
              type="link"
              onClick={handlePrivacyPolicyClick}
              style={{ color: 'white' }}
            >
              Privacy Policy
            </Button>
            <Button
              type="link"
              onClick={handleTermsConditionsClick}
              style={{ color: 'white' }}
            >
              Terms and Conditions
            </Button>
            <Button
              type="link"
              onClick={handleContactClick}
              style={{ color: 'white' }}
            >
              Contact Us
            </Button>
            <Button
              type="link"
              onClick={handleFAQClick}
              style={{ color: 'white' }}
            >
              FAQ
            </Button>
            </Footer>
    </React.Fragment>
    </>
  );
}
