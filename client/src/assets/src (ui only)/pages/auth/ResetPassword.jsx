
import { assets } from '../../assets/assets';
import Spinner from '../../components/Spinner';
const ResetPassword = () => {
    const email = '';
    const newPassword = '';
    const isEmailSent = false;
    // const otp = 0;
    const isOtpSubmited = false;
    // const user = ({ _id: "user-1", name: "Admin User", email: "admin@example.com", role: "admin", profile: { name: "Admin User" } }), loading = false;
    // const inputRefs = React.useRef([]);
    // console.log(otp, user, inputRefs);
    const loading = false;
    if (loading)
        return <Spinner />;
    return (<div className='flex items-center justify-center min-h-screen bg-linear-to-br from-blue-200 to-purple-400'>
      {/* <img onClick={() => navigate('/')} src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' /> */}

      {/* Email form  */}
      {!isEmailSent &&
            <form className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
          <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password</h1>
          <p className='text-center mb-6 text-indigo-300'>Enter your registered email address.</p>

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
            <img src={assets.mail_icon} className='w-3 h-3'/>
            <input type="email" placeholder='Enter email' className='bg-transparent outline-none text-white' defaultValue={email} required/>
          </div>
          <button type="button" disabled={loading} className="w-full py-2.5 rounded-full bg-linear-to-r from-indigo-500 to-indigo-900 text-white font-medium mt-3 disabled:opacity-50">
            {loading ? 'Sending…' : 'Submit'}
          </button>
        </form>}

      {/* OTP input form  */}
      {!isOtpSubmited && isEmailSent &&
            <form className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
          <h1 className='text-white text-2xl font-semibold text-center mb-4'>Reset Password OTP</h1>
          <p className='text-center mb-6 text-indigo-300'>Enter the 6-digit code sent to your email id.</p>
          <div className='flex justify-between mb-8'>
            {Array(6).fill(0).map((_, index) => {
                    return <input type="text" maxLength='1' key={index} required className='w-12 h-12 bg-[#333A5C] text-white text-xl text-center rounded-md'/>;
                })}
          </div>
          <button className='w-full py-2.5 rounded-full bg-linear-to-r from-indigo-500 to-indigo-900 text-white font-medium'>Submit</button>
        </form>}

      {/* New password form */}
      {isOtpSubmited && isEmailSent &&
            <form className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
          <h1 className='text-white text-2xl font-semibold text-center mb-4'>New Password</h1>
          <p className='text-center mb-6 text-indigo-300'>Enter your new password.</p>

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
            <img src={assets.lock_icon} className='w-3 h-3'/>
            <input type="password" placeholder='Enter Password' className='bg-transparent outline-none text-white' defaultValue={newPassword} required/>
          </div>
          <button type="button" disabled={loading} className="w-full py-2.5 rounded-full bg-linear-to-r from-indigo-500 to-indigo-900 text-white font-medium mt-3 disabled:opacity-50">
            {loading ? 'Resetting…' : 'Reset Password'}
          </button>
        </form>}
    </div>);
};
export default ResetPassword;
