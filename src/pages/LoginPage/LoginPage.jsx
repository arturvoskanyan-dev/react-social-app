import { Field, Formik, Form } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setLoginThunk } from '../../store/action/authAction';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
    const dispatch = useDispatch();

    const login = ({ email, password }, resetForm) => {
        dispatch(setLoginThunk(email, password))
        resetForm()
    }

    return (
        <section className='py-30 fixed top-0 left-0 right-0 bottom-0 z-50 bg-white'>
            <section className='flex justify-evenly items-center max-xl:flex-col max-xl:text-center'>
                <section className='max-w-xl'>
                    <h1 className='text-primary-blue text-logo-size font-bold'>Facebook</h1>
                    <p className='text-info-size'>Facebook helps you stay connected and stay in touch with your friends.</p>
                </section>
                <section className='p-5 w-form-size bg-white shadow-lg rounded-xl'>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        onSubmit={(value, {resetForm}) => login(value, resetForm)}
                    >
                        <Form>
                            <div className='flex flex-wrap gap-4'>
                                <Field
                                    name="email"
                                    placeholder="email"
                                    className='input'
                                />
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className='input'
                                />
                            </div>
                            <div className='m-4 flex flex-wrap justify-center gap-4'>
                                <button type='submit' className='btn w-primary-size bg-primary-blue'>Login</button>
                                <NavLink to="/users">
                                    <button
                                        className='btn bg-primary-green'
                                    >log in without an account</button>
                                </NavLink>
                            </div>
                        </Form>
                    </Formik>
                </section>
            </section>
        </section>
    )
}
