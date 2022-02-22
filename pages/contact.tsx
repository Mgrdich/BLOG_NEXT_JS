import {NextPage} from "next";
import ContactForm from "../components/pages-component/contact-page/ContactForm";
import Head from 'next/head';

const Contact:NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact me</title>
                <meta name="description" content="Contact me for more data"/>
            </Head>
            <ContactForm/>
        </>
    );
};

export default Contact;