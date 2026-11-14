
import Spinner from '../../components/Spinner';
const OTP_LENGTH = 6;
export default function EmailVerify() {
    const user = ({ _id: "user-1", name: "Admin User", email: "admin@example.com", role: "admin", profile: { name: "Admin User" } }),  loading = false;
     
    const submitted = false;
    const otpValues = Array(OTP_LENGTH).fill('');
    if (loading)
        return <Spinner />;
    return (<div className='flex items-center justify-center min-h-screen bg-linear-to-br from-blue-200 to-purple-400'>
      <img src='/cms_logo.png' alt='logo' className='absolute left-5 sm:left-20 top-5 w-18 sm:w-24 cursor-pointer'/>

      <form className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 className='text-white text-2xl font-semibold text-center mb-4'>Verify Email</h1>
        <p className='text-center mb-6 text-indigo-300'>Enter the {OTP_LENGTH}-digit code sent to your email.</p>

        <div className='flex justify-between mb-8'>
          {otpValues.map((val, idx) => (<input key={idx} type='text' inputMode='numeric' pattern='\d*' maxLength={1} className='w-12 h-12 bg-[#333A5C] text-white text-xl text-center rounded-md' defaultValue={val}/>))}
        </div>

        <button type='button' disabled={loading || submitted} className='w-full py-3 rounded-full bg-linear-to-r from-indigo-500 to-indigo-900 text-white font-medium disabled:opacity-50'>
          {loading ? 'Verifying...' : 'Verify Email'}
          
        </button>
      </form>
    </div>);
}
