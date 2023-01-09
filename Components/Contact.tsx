import React, { MouseEvent, useState } from 'react';
import axios from 'axios';
import { TiWarning } from 'react-icons/ti';
import { AiFillCheckCircle } from 'react-icons/ai';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>('');

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      setError(true);
      setErrorMsg('Please fill all fields');
    }

    const payload = {
      name,
      email,
      message,
    };
    try {
      const res = await axios.post('/api/sendEmail', payload);
      if (res.status === 200) {
        setSuccess(true);
        setSuccessMsg(res.data.msg);
      } else if (res.status === 400) {
        setError(true);
        setErrorMsg(res.data.errormsg);
      }
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id='contact' className='mt-[174px]'>
      <div className='text-4xl md:text-5xl text-center flex flex-col gap-4 mb-8 font-semibold md:text-left'>
        <p className='dark-text'>
          Have a <span className='text-[#68DCC7]'>question?</span>
        </p>
      </div>
      <div className='md:flex md:justify-between md:flex-row-reverse md:items-center gap-8'>
        <div className='drop-shadow-4xl bg-[#222831] p-8 rounded-2xl md:w-[501px]'>
          <p className='text-center text-2xl font-bold mb-4 text-[#14DAB6]'>
            Contact Form
          </p>
          <div>
            {error && (
              <div className='p-2 border border-[#FF6883] rounded-full mb-8'>
                <div className='flex justify-center space-x-2 items-center'>
                  <TiWarning className='text-[#FF6883] text-2xl' />
                  <p>{errorMsg}</p>
                </div>
              </div>
            )}
            {success && (
              <div className='p-3 border border-[#14DAB6] rounded-xl mb-8'>
                <div className='flex justify-center space-x-2 items-center'>
                  <AiFillCheckCircle className='text-[#14DAB6] text-4xl' />
                  <p className='text-center'>{successMsg}</p>
                </div>
              </div>
            )}

            <form className='flex flex-col gap-3'>
              <label htmlFor='name' className='capitalize'>
                Enter your name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='bginside outline-none bg-[#222831]  rounded-2xl pl-2 h-12'
              />
              <label htmlFor='mail' className='capitalize'>
                Enter your email
              </label>
              <input
                type='email'
                name='mail'
                id='mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='bginside outline-none bg-[#222831]  rounded-2xl pl-2 h-12'
              />
              <label htmlFor='message' className='capitalize'>
                enter your message
              </label>
              <textarea
                name='message'
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='bginside outline-none bg-[#222831]  rounded-2xl pl-2 h-24'
              />
              <button
                onClick={handleSubmit}
                className='p-4 my-4 mx-auto rounded-xl bg-[#222831] drop-shadow-4xl cursor-pointer'>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='hidden md:block'>
          <svg
            width='300'
            height='300'
            viewBox='0 0 360 360'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M300 0H60C44.087 0 28.8258 6.3215 17.5736 17.5738C6.32141 28.8262 0 44.0876 0 60.0008L0 240.003C0 255.917 6.32141 271.178 17.5736 282.43C28.8258 293.683 44.087 300.004 60 300.004H103.5L170.265 356.45C172.973 358.742 176.407 360 179.955 360C183.503 360 186.937 358.742 189.645 356.45L256.5 300.004H300C315.913 300.004 331.174 293.683 342.426 282.43C353.679 271.178 360 255.917 360 240.003V60.0008C360 44.0876 353.679 28.8262 342.426 17.5738C331.174 6.3215 315.913 0 300 0V0ZM105 75.0011H180C183.978 75.0011 187.794 76.5814 190.607 79.3945C193.42 82.2076 195 86.023 195 90.0013C195 93.9796 193.42 97.7949 190.607 100.608C187.794 103.421 183.978 105.001 180 105.001H105C101.022 105.001 97.2064 103.421 94.3934 100.608C91.5804 97.7949 90 93.9796 90 90.0013C90 86.023 91.5804 82.2076 94.3934 79.3945C97.2064 76.5814 101.022 75.0011 105 75.0011ZM255 225.003H105C101.022 225.003 97.2064 223.423 94.3934 220.61C91.5804 217.797 90 213.981 90 210.003C90 206.025 91.5804 202.209 94.3934 199.396C97.2064 196.583 101.022 195.003 105 195.003H255C258.978 195.003 262.794 196.583 265.607 199.396C268.42 202.209 270 206.025 270 210.003C270 213.981 268.42 217.797 265.607 220.61C262.794 223.423 258.978 225.003 255 225.003ZM255 165.002H105C101.022 165.002 97.2064 163.422 94.3934 160.609C91.5804 157.796 90 153.98 90 150.002C90 146.024 91.5804 142.208 94.3934 139.395C97.2064 136.582 101.022 135.002 105 135.002H255C258.978 135.002 262.794 136.582 265.607 139.395C268.42 142.208 270 146.024 270 150.002C270 153.98 268.42 157.796 265.607 160.609C262.794 163.422 258.978 165.002 255 165.002Z'
              fill='#69D8BD'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Contact;
