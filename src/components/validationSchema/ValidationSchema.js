import * as Yup from "yup";

export const feedbackSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    institution: Yup.string().required('Institution is required'),
});

export const subscribeSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});