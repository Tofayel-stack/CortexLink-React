import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import courseData from '../data/cortexlink.json';
import MyCourseItem from '../components/MyCourseItem'
import Footer from '../components/Footer';

function MyCourse() {

    const [data,setData] = useState(courseData.myCourse)

    const filterCourse = (category) => {
        const filtering = courseData.myCourse.filter( (courseItem) => {
            return courseItem.category === category
        })

        setData(filtering)
    }
    return (
        <>
            <Wrapper>
                <section className="my__courses__section px-12 pb-12">
                    <div className="flex pt-12">
                        <h1 className="my__courses__heading font-semibold text-2xl flex flex-grow">My Courses</h1>
                        <Button className="new__course__button" startIcon={<AddIcon />}>New Course</Button>
                    </div>

                    <div className="">
                        <Button className="my__courses__catergory__tabs" onClick={() => { setData(courseData.myCourse)}}>All Lesson</Button>
                        <Button className="my__courses__catergory__tabs" onClick={() => { filterCourse("Fraction")}}>Fraction</Button>
                        <Button className="my__courses__catergory__tabs" onClick={() => { filterCourse("Counting")}}>Counting</Button>
                        <Button className="my__courses__catergory__tabs" onClick={() => { filterCourse("Algebra")}}>Algebra</Button>
                        <Button className="my__courses__catergory__tabs" onClick={() => { filterCourse("Arithmetic")}}>Arithmetic</Button>
                        <Button className="my__courses__catergory__tabs" onClick={ () => {filterCourse("Trigonometic")}}>Trigonometic</Button>
                    </div>



                    {/* my course  */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10 pt-12">
                        {data.map((courseitem, index) => {
                            return (
                                    <MyCourseItem
                                        key={index}
                                        {...courseitem}
                                    />
                            )
                        })}
                    </div>

                    <Footer />
                </section>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.section`
.my__courses__section{
    background:#F1F3F9;

    .my__courses__heading{
        color:#1F155E;
    }

    .new__course__button{
        background:#193ABA;
        color:white;
        text-transform: capitalize !important;
        border-radius:50px !important;
        padding:12px 24px;
        font-weight: bold;
        font-size:15px;
    }

    .my__courses__catergory__tabs{
        padding:10px 28px;
        background:#F1F3F9;
        color:#1F155E;
        font-size:15px; 
        text-transform: capitalize !important;
        font-weight:500;
        border:2px solid #ddd;
        margin:0px 5px;
;
    }
    .my__courses__catergory__tabs:focus{
        background:#ffffff;
        color:#193ABA;
        border-bottom:2px solid #193ABA;
    }
}
`

export default MyCourse;