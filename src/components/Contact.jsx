import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = e.target.elements[0].value; 

    // Replace with your actual SheetDB endpoint
    const sheetDBUrl = 'https://sheetdb.io/api/v1/0i5i0g41onau5'; 

    // Prepare the data to send
    const data = {
      data: [{ gmail: emailInput }] 
    };

    try {
      const response = await fetch(sheetDBUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Thank you for submitting your message!");  
        e.target.reset(); 
      } else {
        toast.error("Failed to submit your message. Please try again.");  
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");  
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="input-box">
        <h2 className="section-title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input type="email" placeholder="example@gmail.com" required />
            <i className="fa-solid fa-envelope" />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
      <ToastContainer />  
    </section>
  );
};

export default ContactSection;
