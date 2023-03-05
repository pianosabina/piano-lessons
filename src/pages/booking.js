import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
    return (
        <Layout>
            <div className="container">
                {/* <h1 >Book a lesson</h1> */}
            <Calendly />
        </div>
        </Layout>
    );
}


const Calendly = () => {
    return (
        <div style={{ height: "800px" }}>
            <iframe
                allowtransparency="true"
                // style="background: #FFFFFF;"
                src="https://calendly.com/pianowithsabina?background_color=0a0d1e&text_color=ffffff&primary_color=ffffff"
                width="100%"
                height="100%"
                frameborder="0"

            ></iframe>
        </div>
    );
};
