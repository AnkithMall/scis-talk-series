import { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_REACT_APP_STRAPI_URL;
const FormComponent = (props) => {
  const [formData, setFormData] = useState({
    talkId: props.id,
    name: '',
    email: '',
    feedback: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleCreateRecord = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/feedbacks`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({data:formData}),
        });
        if (response.ok) {
          // The record was created successfully
          console.log('New record created!');
        } else {
          // Handle the error if the record creation fails
          console.error('Failed to create new record');
        }
      
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, handle form submission here
      console.log(formData);
     handleCreateRecord() ;
      
    } else {
      // Form has errors, update the errors state to display error messages
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    
    if (!data.email) {
    //   errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.feedback) {
      errors.feedback = 'Feedback is required';
    }
    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <div className="text-red-500">{errors.name}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="feedback" className="block font-medium">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
            className={`w-full px-3 py-2 border rounded ${errors.feedback ? 'border-red-500' : ''}`}
          />
          {errors.feedback && <div className="text-red-500">{errors.feedback}</div>}
        </div>

        {/* Hidden field */}
        <input type="hidden" id="id" name="id" value={formData.talkId} />

        <button type="submit" className="bg-[#10b981] text-white active:bg-[#047857] hover:bg-[#059668] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        
        >Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
