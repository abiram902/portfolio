import React from 'react';
import styles from './Projects.module.css';
import ProjectTile from './ProjectTile';
import image from '../../assets/shareBnb.PNG';
import expensetracker from '../../assets/expenseTracker.PNG';
import amazon from '../../assets/amazonClone.PNG';

function Projects() {
    return (
        <section id={styles["projects"]}>
            <h1>My projects</h1>
            <div class={styles["tiles"]}>
                <ProjectTile image={image} 
                desc='a room booking app with redux as a app level state management and with two type of user management and form, date, validation functionality'
                title={'shareBnb'} link="https://abiram902.github.io/guestRoomBookingApp/"/>
                <ProjectTile image={expensetracker} title={'expense tracker'} 
                link="https://abiram902.github.io/guestRoomBookingApp/"
                desc="simple expense tracker with crd operations and fitering option"/>
                <ProjectTile image={amazon}
                link='https://clone-43bd8.web.app/'
                title='Amazon-clone'
                desc='Amazon clone using context api. this the project i learned react from' />
                
            </div>
        
  
</section>
    )
}

export default Projects
