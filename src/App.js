import React from 'react';
import "./assets/index.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coursereport from './screens/Coursereport';
import MyCourse from './screens/MyCourse';
import Home from './screens/Home';
import CourseDetails from './screens/CourseDetails';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <main className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-6">
                    <div className="col-span-1">
                        <Sidebar />
                    </div>

                    <div className="col-span-5">
                        <Navbar/>
                        <Switch>
                            <Route exact path="/">
                                {<Home />}
                            </Route>
                            <Route exact path="/course-reports">
                                {<Coursereport />}
                            </Route>
                            <Route exact path="/mycourses">
                                {<MyCourse />}
                            </Route>
                            <Route exact path="/coursedetails/:id" children={<CourseDetails/>}></Route>
                        </Switch>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App