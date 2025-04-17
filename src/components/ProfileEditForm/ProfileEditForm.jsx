import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { SocialAPI } from '../../api/api'
import validation from '../validation'

export default function ProfileEditForm({ profile, setPopUp }) {
    const data = ["fullName", "lookingForAJob", "lookingForAJobDescription", "contacts.github",
        "contacts.vk", "contacts.facebook", "contacts.instagram", "contacts.twitter", "contacts.website",
        "contacts.youtube", "contacts.mainLink"
    ]

    const editProfile = (data) => {
        SocialAPI.editProfile(data)
    }

    return (
        <Formik
            initialValues={{
                userId: profile?.userId,
                fullName: profile?.fullName || "",
                aboutMe: profile?.aboutMe || "",
                lookingForAJob: profile?.lookingForAJob ?? false,
                lookingForAJobDescription: profile?.lookingForAJobDescription || "",
                contacts: {
                    github: profile?.contacts?.github || "",
                    vk: profile?.contacts?.vk || "",
                    facebook: profile?.contacts?.facebook || "",
                    instagram: profile?.contacts?.instagram || "",
                    twitter: profile?.contacts?.twitter || "",
                    website: profile?.contacts?.website || "",
                    youtube: profile?.contacts?.youtube || "",
                    mainLink: profile?.contacts?.mainLink || "",
                },
            }}

            onSubmit={(values) => { editProfile(values); setPopUp(false) }}
            validationSchema={validation}
        >
            <Form className='flex flex-col gap-4 w-full'>
                {
                    data.map((d) => {
                        return (
                            <label key={d}>
                                <Field name={d} className="input" placeholder={d} />
                                <span className='text-red-600'>
                                    <ErrorMessage name={d} />
                                </span>
                            </label>
                        )
                    })
                }
                <button type="submit" className='btn !w-[150px] font-medium bg-primary-blue m-auto'>Save</button>
            </Form>
        </Formik>
    )
}
