import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Sidebar() {
    return (
        <Wrappaer>
            <aside className="sidebar__wrapper">
                <div className="h-24">
                    <img className="w-full" src="../../assets/logo.png" alt="logo" />
                </div>

                <div className="pl-6">
                    <ul>
                        <NavLink to="/">
                            <div className="flex flex-row items-center space-x-3 home__menu__wrapper pl-4 py-3 my-2">
                                <i className="fas fa-home home__icon"></i>
                                <span className="text-white home__menu__text">Home</span>
                            </div>
                        </NavLink>

                        <NavLink to="/teachers">
                            <div className="flex flex-row items-center space-x-3 home__menu__wrapper pl-4 py-3 my-2">
                                <i className="fas fa-chalkboard-teacher home__icon"></i>
                                <span className="text-white home__menu__text">Teachers</span>
                            </div>
                        </NavLink>

                        <NavLink to="/students">
                            <div className="flex flex-row items-center space-x-3 home__menu__wrapper pl-4 py-3 my-2">
                                <i className="fas fa-book-reader home__icon"></i>
                                <span className="text-white home__menu__text">Students</span>
                            </div>
                        </NavLink>

                        <NavLink to="/course-reports">
                            <div className="flex flex-row items-center space-x-3 home__menu__wrapper pl-4 py-3 my-2">
                                <i className="far fa-file-alt home__icon"></i>
                                <span className="text-white home__menu__text">My Course</span>
                            </div>
                        </NavLink>

                        <NavLink to="/homework">
                            <div className="flex flex-row items-center space-x-3 home__menu__wrapper pl-4 py-3 my-2">
                                <i className="fas fa-book home__icon"></i>
                                <span className="text-white home__menu__text">Homework</span>
                            </div>
                        </NavLink>

                        <NavLink to="/messages">
                            <div className="flex flex-row items-center space-x-3 home__menu__wrapper pl-4 py-3 my-2">
                                <i className="far fa-envelope home__icon"></i>
                                <span className="text-white home__menu__text">Messages</span>
                            </div>
                        </NavLink>


                    </ul>
                </div>
            </aside>
        </Wrappaer>
    );
}

const Wrappaer = styled.div`
.sidebar__wrapper{
    background-color:#1F155E;
    height:100vh;
    .home__menu__wrapper{
        border-top-left-radius:50px;
        border-bottom-left-radius:50px;
        transition:0.3s;
        .home__icon{
        color:white;
        }
    }

    .home__menu__wrapper:hover{
        background:#ffffff;
        .home__icon{
        color:#1F155E;
        }
        .home__menu__text{
            color:#1F155E;
        }
    }
}

`
export default Sidebar;