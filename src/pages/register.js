import Layout from '@theme/Layout';
import React from 'react';

export default function MyReactPage() {
    return (
        <Layout>
            <div className="container">
                {/* <h1 >Book a lesson</h1> */}
            <FormApp />
        </div>
        </Layout>
    );
}


const FormApp = () => {
    return (
        <div style={{ height: "1200px" }}>
            <iframe
                allowtransparency="true"
                src="https://my.forms.app/form/65d22fd95751c7afbcfc6a0e"
                width="100%"
                height="100%"
                frameborder="0"

            ></iframe>
        </div>
    );
};
