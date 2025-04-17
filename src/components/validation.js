import * as YUP from 'yup'

const validation = YUP.object().shape({
    fullName : YUP
        .string()
        .min(5, "The minimum number of characters must be 5.")
        .max(15, "The maximum number of characters must be 5.")
        .required("Field is required !"),
    lookingForAJob : YUP
        .boolean()
        .required("Field is required !"),
    lookingForAJobDescription : YUP
        .string()
        .min(15, "The minimum number of characters must be 15.")
        .required("Field is required !"),

    contacts: YUP.object().shape({
        github : YUP
            .string()
            .min(5, "The minimum number of characters must be 5.")
            .required("Field is required !"),
        vk : YUP
            .string()
            .min(5, "The minimum number of characters must be 5.")
            .required("Field is required !"),
        facebook : YUP
            .string()
            .min(5, "The minimum number of characters must be 5.")
            .required("Field is required !"),
        instagram : YUP
            .string()
            .min(5, "The minimum number of characters must be 5.")
            .required("Field is required !"),
        twitter : YUP
            .string()
            .min(5, "The minimum number of characters must be 5.")
            .required("Field is required !"),
        website : YUP
            .string()
            .min(5, "The minimum number of characters must be 5.")
            .required("Field is required !"),
        youtube : YUP
            .string()
            .min(5, "The minimum number of characters must be 5.")
            .required("Field is required !"),
        mainLink : YUP
            .string()
            .min(5, "The minimum number of characters must be 5.")
            .required("Field is required !"),
    })
})

export default validation