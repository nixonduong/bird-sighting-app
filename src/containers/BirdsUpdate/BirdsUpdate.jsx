import { RegisterForm } from "../../components/Form/Form.jsx"
import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  ResponsiveContext,
} from 'grommet';
// import {
//   passwordRulesStrong,
// } from '../../utils/FormValidation.js';
import { fetchBird, updateBird, deleteBird } from "../../services/birds.js";

function BirdsUpdate() {

  const [FormValues, setFormValues] = React.useState({
    birdId: "",
    name: "",
    size: "",
    weight: "",
    lifespan: "",
    habitat: "",
    diet: "",
    diurnal: ""
  });
  // const [passwordRules, setPasswordRules] = React.useState(passwordRulesStrong);
  const size = useContext(ResponsiveContext);
  const navigate = useNavigate();

  const { birdId } = useParams();

  useEffect(() => {
    fetchBird(birdId).then(d => setFormValues(d));
  }, [birdId]);

  const handleChange = (values) => {
    setFormValues(values);
  };

  const handleDelete = () => {
    deleteBird(birdId)
    navigate('/birds')
  }

  // eslint-disable-next-line no-unused-vars
  const onSubmit = ({ value, touched }) => {
    updateBird(value)
    navigate('/birds')
  };

  return (
    <RegisterForm 
      FormValues={FormValues}
      // passwordRule={passwordRules}
      size={size}
      handleChange={handleChange}
      onSubmit={onSubmit}
      handleDelete={handleDelete}
      type={"Update Bird"}
    />
  );
}

export default BirdsUpdate;