import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        document.title = 'TinyCarsParadise | Blogs';
    }, [])
    return (
        <div className='m-11'>
            <div className="card w-full bg-base-100 shadow-xl m-6">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>Access token contains all the information the server needs to know if the user can access the resource that is requesting or not. On the other-hand,
                        a refresh token just helps to re-validate a user without having to re-enter login credentials multiple times.
                    </p>
                    <p>One can exchange a valid refresh token for a new access token.</p>
                    <p>we can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side.</p>

                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl m-6">
                <div className="card-body">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <p>Comparison between SQL and NoSQL databases: </p>
                    <ul>
                        <li>SQL is a relational database management system and NoSQL distributed database management system.</li>
                        <li>SQL is vertically scalable but NoSQL is horizontally scalable.</li>
                        <li>SQL has Fixed or predefined schema but NoSQL has dynamic schema</li>
                        <li>SQL is good for complex queries but NoSQL is not good for complex queries.</li>
                    </ul>

                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl m-6">
                <div className="card-body">
                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                    <p>Express is a minimal and flexible Node.js web application framework that provides a set of features for web and mobile applications. </p>
                    <p>
                        Nest JS is a framework that helps build Node as well as JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications.</p>
                    <p>Both NestJS and Express are great choices for building APIs. NestJS provides a more structured and opinionated approach, which can make it easier to build complex APIs with proper separation of concerns. Express, on the other hand, is more lightweight and flexible, which makes it a popular choice for simple or small-scale APIs</p>

                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl m-6">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <p>MongoDB allows us to perform a variety of aggregation operations. MongoDB aggregate is one kind of database system which allow us to process data records in a variety of ways, such as grouping data, sorting data into a specific order, or restructuring returned documents, as well as filtering data as one might with a query.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;