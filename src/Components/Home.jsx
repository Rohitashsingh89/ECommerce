import React from 'react'

const Home = () => {
    return (
        <>
            <main id="main">

                <div className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Sample Inner Page</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Sample Inner Page</li>
                            </ol>
                        </div>

                    </div>
                </div>

                <section className="sample-page">
                    <div className="container" data-aos="fade-up">

                        <p>
                            You can duplicate this sample page and create any number of inner pages you like!
                        </p>

                    </div>
                </section>

            </main>
        </>
    )
}

export default Home