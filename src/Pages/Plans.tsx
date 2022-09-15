import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { failedUser, getUser } from '../redux/slices/userSlice';
import bg04 from '../assets/images/coding-bg04.png';
import Plan from '../components/Plan';

const Plans = () => {
  const dispatch = useAppDispatch();
  const [plans, setPlans] = useState<Plan[]>();

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('tokenCMC');

      if (token) {
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
      }

      await axios
        .get('https://cmc-remake.herokuapp.com/api/auth/user')
        .then(({ data }) => {
          dispatch(getUser(data));
          getPlans();
        })
        .catch(({ response }) =>
          dispatch(failedUser(response.data.errors[0].msg))
        );
    };
    verifyUser();
  }, [dispatch]);

  const getPlans = async () => {
    await axios
      .get('https://cmc-remake.herokuapp.com/api/subs/plans')
      .then(({ data }) => {
        setPlans(data.data);
        // console.log(plans);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='h-[100vh] w-[100vw] text-[#fff]'>
      <img
        src={bg04}
        alt='bg04'
        className='h-[100vh] w-[100vw] object-cover fixed top-0 -z-10'
      />
      <div className='h-[100vh] w-[100vw] overflow-y-scroll scrollbar-none md:flex md:items-center md:justify-around lg:px-20 md:flex-row-reverse'>
        {plans?.map((plan) => (
          <Plan key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
