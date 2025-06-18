import { RegisterForm } from "../../components/Form/Form.jsx"
import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext } from 'react';
import {
  ResponsiveContext,
} from 'grommet';
// import {
//   passwordRulesStrong,
// } from '../../utils/FormValidation.js';

import { addBird } from "../../services/birds.js"

function BirdsRegister() {

  const { type } = useParams();

  const [FormValues, setFormValues] = React.useState({
    name: "",
    size: "",
    weight: "",
    lifespan: "",
    habitat: "",
    diet: "",
    diurnal: type === "diurnal"
  });
//   const [passwordRules, setPasswordRules] = React.useState(passwordRulesStrong);
  const size = useContext(ResponsiveContext);
  const navigate = useNavigate();

  const handleChange = (values) => {
    setFormValues(values);
  };

  // eslint-disable-next-line no-unused-vars
  const onSubmit = ({ value, touched }) => {
    addBird(value)
    navigate('/birds')
  };

  return (
    <RegisterForm 
      FormValues={FormValues}
    //   passwordRule={passwordRules}
      size={size}
      handleChange={handleChange}
      onSubmit={onSubmit}
      type={`Add Bird`}
    />
  );
}

export default BirdsRegister;