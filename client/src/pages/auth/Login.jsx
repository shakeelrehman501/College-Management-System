import { assets } from '../../assets/assets';
// import Spinner from '../../components/Spinner';
// const Login = ({ role }) => {
const Login = () => {
    // const user = ({ _id: "user-1", name: "Admin User", email: "admin@example.com", role: "admin", profile: { name: "Admin User" } }), loading = false;
    const state = 'Login';
    const name = '';
    const email = '';
    const password = '';
    // if (loading) {
    //     return <Spinner />;
    // }
    return (<div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-linear-to-br from-blue-200 to-purple-400'>
      {/* <img onClick={() => navigate('/')} src={assets.favicon} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-20 cursor-pointer' /> */}
      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>
          {state === 'Sign Up' ? "Create Account" : "Login"}</h2>
        <p className='text-center text-sm mb-6'>
          {state === 'Sign Up' ? "Create your account" : "Login to your account"}</p>

        <form>
          {state === 'Sign Up' && (<div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] text-white'>
              <img src={assets.person_icon} alt=""/>
              <input defaultValue={name} className='bg-transparent outline-none' type="text" placeholder='full name' required/>
            </div>)}

          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] text-white'>
            <img src={assets.mail_icon} alt=""/>
            <input defaultValue={email} className='bg-transparent outline-none' type="email" placeholder='Enter email' required/>
          </div>
          <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C] text-white'>
            <img src={assets.lock_icon} alt=""/>
            <input defaultValue={password} className='bg-transparent outline-none' type="password" placeholder='Enter password' required/>
          </div>

          <p className='mb-4 text-indigo-500 cursor-pointer hover:text-indigo-300'>Forgot password?</p>

          <button className='w-full py-2.5 rounded-full bg-linear-to-r from-indigo-500 to-indigo-900 text-white font-medium'>{state}</button>
        </form>

        {state === 'Sign Up' ? (<p className='text-gray-400 text-center text-xs mt-4'>Already have an account?
            <span className='text-blue-400 cursor-pointer underline'> Login here</span>
          </p>) : (<p className='text-gray-400 text-center text-xs mt-4'>Don't have an account?
            <span className='text-blue-400 cursor-pointer underline'> Sign Up</span>
          </p>)}
            {/* {user(role)} */}
      </div>
    </div>);
};
export default Login;
