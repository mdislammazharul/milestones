import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
                <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">Email is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("name")} />
                <input placeholder="Phone Number" defaultValue="" {...register("name")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;