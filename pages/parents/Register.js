import React, { useState, useEffect, use } from 'react';
import Header from '../../components/Header';
import styles from './Register.module.css';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';

function Register() {
  const router = useRouter();
  const [showchildname, setShowchildname] = useState('');
  const [showchildage, setShowchildage] = useState('');
  const [showchildgender, setShowchildgender] = useState('');
  const [showchildaddress, setShowchildaddress] = useState('');
  const [showdateofbirth, setShowdateofbirth] = useState('');
  const [showparentname, setShowparentname] = useState('');
  const [showchildFee, setShowchildFee] = useState('');
  const [showaadharcard, setShowaadharcard] = useState('');
  const [showchoiceofacademy, setShowchoiceofacademy] = useState('');
  const[showsubscription, setShowsubscription] = useState('');
  const [showformalcoaching, setShowformalcoaching] = useState('');
  const [showmajorinjuries, setShowmajorinjuries] = useState('');
  const [showallergies, setShowallergies] = useState('');
  const [showprevailingailments, setShowprevailingailments] = useState('');
  const [showbloodpressure, setShowbloodpressure] = useState('');
  const [showallergicrhinitis, setShowallergicrhinitis] = useState('');
  const [showbreathingdifficulty, setShowbreathingdifficulty] = useState('');
  const [showacademy, setShowacademy] = useState('');
  const [showduration, setShowduration] = useState('');
  const [showpositionplayed, setShowpositionplayed] = useState('');
  const [showsportsplayed, setShowsportsplayed] = useState('');
  const [showpassportphoto, setShowpassportphoto] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isFormalCoachingSelected, setIsFormalCoachingSelected] = useState(false);
  const [majorInjuries, setMajorInjuries] = useState('');
  const [allergies, setAllergies] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [parentContactNumber, setParentContactNumber] = useState('');
  const [isParentContactValid, setIsParentContactValid] = useState(true);
  const [discountAmount, setDiscountAmount] = useState("");
  const[showchildbloodgroup, setShowchildbloodgroup] = useState('');
  const[showbatchs, setShowbatchs] = useState('');
  const [error, setError] = useState(''); // State for displaying error message
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
   
 



  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      return age - 1;
    }

    return age;
  };

  const isValidParentContactNumber = (contactNumber) => {
    // Remove any non-digit characters from the contact number
    const cleanedContactNumber = contactNumber.replace(/\D/g, '');

    // Check if the cleaned contact number has exactly 10 digits
    return cleanedContactNumber.length === 10;
  };

  const handleParentContactChange = (event) => {
    const value = event.target.value;
    setParentContactNumber(value);

    // Check if the entered parent contact number is valid
    setIsParentContactValid(isValidParentContactNumber(value));
  };

  // Define the fee structure based on the academy and subscription
  const feeStructure = {
    'FSA Mahadevpura': {
      monthly: 3500,
      yearly: 35000,
      quarterly: 13000,
      halfYearly: 20000,
    },
    'FSA Chaithanya Samarpan': {
      monthly: 2000,
      yearly: 20000,
      quarterly: 7000,
      halfYearly: 11000,
    },
  };

  useEffect(() => {
    // Check if both academy and subscription are selected
    if (showchoiceofacademy && showsubscription) {
      // Calculate the fee based on the selected academy and subscription
      const calculatedFee = feeStructure[showchoiceofacademy][showsubscription];
      setShowchildFee(calculatedFee);

      // Check if the user is eligible for a discount
      let discountAmount = 0; // Initialize the discount amount

      // Check for yearly package discount
      if (showsubscription === 'yearly') {
        // Provide a 15% discount for yearly package
        discountAmount = calculatedFee * 0.10;
      }

      setDiscountAmount(discountAmount); // Set the discount amount

    } else {
      setShowchildFee(''); // Reset the fee if either academy or working days are not selected
      setDiscountAmount(0); // Reset the discount amount
    }
  }, [showchoiceofacademy, showsubscription]);


  const handleDateOfBirthChange = (event) => {
    const selectedDate = event.target.value;
    setShowdateofbirth(selectedDate);

    if (selectedDate) {
      const age = calculateAge(selectedDate);
      setShowchildage(age);
    } else {
      setShowchildage('');
    }
  };

  const handleFormalCoachingChange = (e) => {
    const selectedValue = e.target.value;
    setShowformalcoaching(selectedValue);

    // If "Yes" is selected, show the text input field; otherwise, hide it
    setIsFormalCoachingSelected(selectedValue === 'yes');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if the user has agreed to terms
    if (!agreeToTerms) {
      alert('Please agree to the Terms and Conditions.');
      return;
    }

    const formData = {
      Child_Name: showchildname,
      Age: parseInt(showchildage),
      Gender: showchildgender,
      Child_Address: showchildaddress,
      Date_Of_Birth: showdateofbirth,
      Blood_group: showchildbloodgroup,
      Parent_Name: showparentname,
      Parent_Contact: parentContactNumber,
      Passport_Photo: showpassportphoto,
      Adhar_Card: showaadharcard,
      Choice_Of_Academy: showchoiceofacademy,
      Batchs: showbatchs,
      Subscription: showsubscription,
      Fees_Structure: parseInt(showchildFee),
      Sports_played_by_the_child_currently: showsportsplayed,
      Any_Formal_Coaching_taken_for_the_football: showformalcoaching,
      Academy: showacademy,
      Duration: showduration,
      Position_played: showpositionplayed,
      Any_major_injuries_fractures_in_the_past: majorInjuries,
      Fracture: majorInjuries,
      Any_Allergies: allergies,
      Allergies: allergies,
      Prevailing_ailments_medical_conditions: showprevailingailments,
      Blood_Pressure: showbloodpressure,
      Allergic_rhinitis: showallergicrhinitis,
      Breathing_difficulty: showbreathingdifficulty,

    };

    try {
      const response = await fetch('http://3.25.111.235/Register_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Registration successful');
        // Set registrationSuccess to true upon successful registration
        setRegistrationSuccess(true);
  
        // Clear form fields or perform any other actions you need
  
        // Navigate to the next page upon successful registration
        router.push('/parents/Payments'); // Replace '/next-page' with your actual next page URL
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    if (registrationSuccess) {
      // After 2 seconds, redirect to the next page
      const redirectTimeout = setTimeout(() => {
        router.push('/parents/Payments');
      }, 100); // 2000 milliseconds (2 seconds)

      // Cleanup the timeout if the component unmounts
      return () => clearTimeout(redirectTimeout);
    }
  }, [registrationSuccess, router]);

  return (
    <div>
      <div className={styles.headercontainer}>
        <Header />
        <div className={styles.new}>
        <h1>Register Your Child</h1>

        </div>
      </div>
      <div className={styles.formContainer}>
        <h2>Personal Details </h2>
        <form>
          <label>
            Child Name:
            <input
              type="text"
              name="childname"
              value={showchildname}
              onChange={(e) => setShowchildname(e.target.value)}
              style={{ fontSize: '16px', width: '640px' }}
            />
          </label>
          <br />
          <label>
            Date of Birth:
            <input
              type="date"
              name="dateofbirth"
              placeholder="YYYY-MM-DD"
              value={showdateofbirth}
              onChange={handleDateOfBirthChange}
              style={{ fontSize: '25px', width: '650px' }}
            />
          </label>
          <div className={styles.ageContainer}>
            <div className={styles.inputContainer}>
              <label>
                Age:
                <br />
                <input
                  type="text"
                  name="age"
                  value={showchildage}
                  onChange={(e) => setShowchildage(e.target.value)}
                  style={{ fontSize: '16px', width: '250px' }}
                />
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label>
                Gender:
                <br />
                <select
                  value={showchildgender}
                  onChange={(e) => setShowchildgender(e.target.value)}
                  style={{ fontSize: '16px', width: '270px' }}
                >
                  <option value="">Select any one</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </div>
          </div>
          <br />
          <div className={styles.inputContainer}>
              <label>
                Blood Group:
                <br />
                <select
                  value={showchildbloodgroup}
                  onChange={(e) => setShowchildbloodgroup(e.target.value)}
                  style={{ fontSize: '16px', width: '650px' }}
                >
                  <option value="">Select any one</option>
                  <option value="A positive">A positive</option>
                  <option value="A negative">A negative</option>
                  <option value="B positive">B positive</option>
                  <option value="B negative">B negative</option>
                  <option value="O positive">O positive</option>
                  <option value="O negative">O negative</option>
                  <option value="AB positive">AB positive</option>
                  <option value="AB negative">AB negative</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </label>
            </div>
          <label>
            Child Address:
            <br />
            <textarea
              rows="4"
              value={showchildaddress}
              onChange={(e) => setShowchildaddress(e.target.value)}
              style={{ fontSize: '16px', width: '620px' }}
            ></textarea>
          </label>
          <br />
          <div className={styles.ageContainer}>
            <div className={styles.inputContainer}>
              <label>
                Parent Name:
                <br />
                <input
                  type="text"
                  name="parentname"
                  value={showparentname}
                  onChange={(e) => setShowparentname(e.target.value)}
                  style={{ fontSize: '16px', width: '300px' }}
                />
              </label>
            </div>
            <div className={styles.inputContainer}>
              <label>
                Parent Contact Number:
                <input
                  type="text"
                  name="parentContactNumber"
                  value={parentContactNumber}
                  onChange={handleParentContactChange}
                />
              </label>
              {!isParentContactValid && (
                <p style={{ color: 'red' }}>
                  Parent contact number must be exactly 10 digits long.
                </p>
              )}
            </div>
          </div>
          <br />
          <label>
            Passport Photo:
            <input
              type="file"
              accept="image/*"
              name="passportphoto"
              onChange={(e) => setShowpassportphoto(e.target.value)}
            />
          </label>
          <br />
          <label>
            Aadhar Card(optional):
            <input
              type="file"
              accept="image/*"
              name="aadharcard"
              onChange={(e) => setShowaadharcard(e.target.value)}
            />
          </label>
          <br />
          <div className={styles.ageContainer}>
  <div className={styles.inputContainer}>
    <label>
      Choice of Academy:
      <select
        value={showchoiceofacademy}
        onChange={(e) => setShowchoiceofacademy(e.target.value)}
        style={{ fontSize: '16px', width: '270px' }}
      >
        <option value="">Select an Academy</option>
        <option value="FSA Mahadevpura">FSA Mahadevpura</option>
        <option value="FSA Chaithanya Samarpan">
          FSA Chaithanya Samarpan
        </option>
        {/* Add more academy options as needed */}
      </select>
    </label>
  </div>
  <div className={styles.inputContainer}>
    <label>
      Batchs:
      <select
        value={showbatchs}
        onChange={(e) => setShowbatchs(e.target.value)}
        style={{ fontSize: '16px', width: '270px' }}
      >
        <option value="">Select any one</option>
        <option value="weekday">Weekday</option>
        <option value="weekend">Weekend</option>
        <option value="Both">Both</option>
      </select>
    </label>
  </div>
</div>

          <br />
          <div className={styles.ageContainer}>
            <div className={styles.inputContainer}>
              <label>
                Subscription:
                <br/>
                <select
                  value={showsubscription}
                  onChange={(e) => setShowsubscription(e.target.value)}
                  style={{ fontSize: '16px', width: '270px' }}
                >
                  <option value="">Select any one</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="halfYearly">Half Yearly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </label>
            </div>
            {showchoiceofacademy && showsubscription && (
            <div className={styles.inputContainer}>
              <label>
                Fees Structure:
                <input
                  type="text"
                  name="childFee"
                  value={showchildFee}
                  onChange={(e) => setShowchildFee(e.target.value)}
                  style={{ fontSize: '16px', width: '270px' }}
                />
              </label>
              {discountAmount > 0 && (
      <p style={{ color: 'green' }}>
        Congratulations! You have received a 10% discount. Your discounted fee is: {showchildFee - discountAmount}
      </p>
    )}
  </div>
)}
          </div>
          <br />


          <div>
            <h2>Sports Exposure</h2>
            <label>
              Sports played by the child currently:
              <input
                type="text"
                name="sportsplayed"
                onChange={(e) => setShowsportsplayed(e.target.value)}
                style={{ fontSize: '16px', width: '630px' }}
              />
            </label>
            <br />
            <label>
              Any Formal Coaching taken for football:
              <select
                value={showformalcoaching}
                onChange={handleFormalCoachingChange}
                style={{ fontSize: '16px', width: '648px' }}
              >
                <option value="">Select any one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            {/* Conditional rendering of the following options based on formal coaching selection */}
            {isFormalCoachingSelected && (
              <div>
                <label>
                  If yes, please specify:
                </label>
                <div className={styles.ageContainer}>
                  <div className={styles.inputContainer}>
                    <label>
                      Academy
                      <input
                        type="text"
                        name="academy"
                        onChange={(e) => setShowacademy(e.target.value)}
                        style={{ fontSize: '16px', width: '210px' }}
                      />
                    </label>
                  </div>
                  <div className={styles.inputContainer}></div>
                  <label>
                    Duration
                    <select
                      value={showduration}
                      onChange={(e) => setShowduration(e.target.value)}
                      style={{ fontSize: '16px', width: '300px' }}
                    >
                      <option value="">Select any one</option>
                      <option value="month">1 month</option>
                      <option value="3 months">3 months</option>
                      <option value="6 months">6 months</option>
                      <option value="1 year">1 year</option>
                    </select>
                  </label>
                </div>
                <br />
                <label>
                  Position played:
                  <select
                    value={showpositionplayed}
                    onChange={(e) => setShowpositionplayed(e.target.value)}
                  >
                    <option value="">Select any one</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Striker">Striker</option>
                    <option value="Defender">Defender</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                  </select>
                </label>
                <br />
              </div>
            )}
          </div>
          <div>
            <h2>Medical History</h2>
            <label>
              Any major injuries/fractures in the past:
              <br />
              <select
                value={showmajorinjuries}
                onChange={(e) => setShowmajorinjuries(e.target.value)}
                
              >
                <option value="">Select any one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <br />
            {/* Conditional rendering of the "If yes, please specify" input */}
            {showmajorinjuries === "yes" && (
              <label>
                If yes, please specify:
                <input
                  type="text"
                  name="majorinjuries"
                  value={majorInjuries}
                  onChange={(e) => setMajorInjuries(e.target.value)}
                  
                />
              </label>
            )}
            <br />
            <label>
              Any Allergies:
              <select
                value={showallergies}
                onChange={(e) => setShowallergies(e.target.value)}
                
              >
                <option value="">Select any one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <br />
            {/* Conditional rendering of the "If yes, please specify" input */}
            {showallergies === "yes" && (
              <label>
                If yes, please specify:
                <input
                  type="text"
                  name="allergies"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                  
                />
              </label>
            )}
            <br />
            <div className={styles.ageContainer}>
              <div className={styles.inputContainer}>
                <label>
                  Prevailing ailments:
                  <select
                    value={showprevailingailments}
                    onChange={(e) => setShowprevailingailments(e.target.value)}
                    style={{ fontSize: '16px', width: '300px' }}
                  >
                    <option value="">Select any one</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>
              <div className={styles.inputContainer}>
                <label>
                  Blood Pressure:
                  <select
                    value={showbloodpressure}
                    onChange={(e) => setShowbloodpressure(e.target.value)}
                    style={{ fontSize: '16px', width: '300px' }}
                  >
                    <option value="">Select any one</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>
            </div>
            <br />
            <div className={styles.inputContainer}>
                        <div className={styles.ageContainer}>
                        <label>
                            Allergic rhinitis:
                            <br />
                            <select
                            value={showallergicrhinitis}
                            onChange={(e) => setShowallergicrhinitis(e.target.value)}
                            style={{ fontSize: '16px', width: '300px' }}
                            >
                            <option value="">Select any one</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            Breathing difficulty:
                            <br />
                            <select
                            value={showbreathingdifficulty}
                            onChange={(e) => setShowbreathingdifficulty(e.target.value)}
                            style={{ fontSize: '16px', width: '300px' }}
                            >
                            <option value="">Select any one</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            </select>
                        </label>
                        </div>
                        </div>
                        </div>
          <label>
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
            />
            I agree to the Terms and Conditions
          </label>
          <br />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
          {registrationSuccess && (
            <p style={{ color: 'green' }}>Registration successful!</p>
          )}
        </form>
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        

          {/* Display the error message */}
          {error && <p className={styles.error}>{error}</p>}
      </div>
      <div className={styles.footer}>
      <Footer />
      </div>
      </div>
    
  );
}

export default Register;