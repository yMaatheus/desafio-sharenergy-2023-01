import Joi from 'joi';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../services/user';
import { setToken } from '../../utils/localStorage.util';

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const updateUserName = (event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value);
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const submitLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const schema = Joi.object({
      userName: Joi.string().min(3).required(),
      password: Joi.string().min(6).required()
    });

    const { error } = schema.validate({ userName, password });
    
    if (error) {
      console.log(error);
      return;
    }

    const { data: { token } } = await login({ userName, password });

    setToken(token);
    setTimeout(()=>{ navigate('/') }, 1000);
  }
  
  return (
    <form action=''>
      <fieldset>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          name="userName"
          id='userName'
          onChange={ updateUserName }
        />
        
        <label htmlFor="password">Password</label>
        <input
         type="password"
         name="password"
         id='password'
         onChange={ updatePassword }
        />
      </fieldset>

      <button onClick={ submitLogin }>Login</button>
    </form>
  );
}

export default Login;