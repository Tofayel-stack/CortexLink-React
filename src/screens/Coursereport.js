import React from 'react'
import styled from 'styled-components';

// import Graph from './Graph'

function Coursereport() {
    return (
        <>
            <Wrapper>
                <section className="course__reports__section px-12">
                    <h1 className="course__reports__heading font-semibold text-2xl">Course Reports</h1>

                    <div className="">
                        <div className="">
                            {/* <Graph/> */}
                        </div>
                    </div>
                </section>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
.course__reports__section{
    background:#F1F3F9;
    
    .course__reports__heading{
        color:#1F155E;
    }
}
`

export default Coursereport
