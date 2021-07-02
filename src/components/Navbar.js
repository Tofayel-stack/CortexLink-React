import styled from 'styled-components';
import React from 'react';

function Navbar() {
    return (
        <Wrapper>
            <header className="header py-3">
                {/* <div className="flex flex-row-reverse"> */}

                <div className="flex flex-row-reverse items-center">
                    <div className="flex flex-row items-center pr-9 space-x-4">
                        <i className="header__icons bg-white p-3 rounded-full fas fa-user cursor-pointer"></i>
                        <div className="">
                            <h3 className="font-semibold text-gray-600 cursor-pointer">Username</h3>
                            <span className="text-gray-400 text-sm cursor-pointer">Designation</span>
                        </div>
                        <i className="header__icons fas fa-angle-down cursor-pointer"></i>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 bg-red-600 p-1 rounded-full relative -right-8 -top-2 text-sm"></span>
                        <i className="bg-white p-3 mr-5 rounded-full header__icons fas fa-bell cursor-pointer"></i>
                    </div>
                    <div className="relative flex pr-20 items-center">
                        <i className="header__icons fas fa-search relative -right-7 cursor-pointer"></i>
                        <input className="px-4 py-2 pl-9 rounded-full" type="text" placeholder="Searchg here...." />
                    </div>
                </div>
                {/* </div> */}
            </header>
        </Wrapper>
    );
}

const Wrapper = styled.div`
.header{
    background:#F1F3F9;
    width:100%;
        .header__icons{
        color:#1F155E;
        }
}
`

export default Navbar;