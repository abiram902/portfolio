import React from 'react';
import styles from './Projects.module.css';
import ProjectTile from './ProjectTile';
import image from '../../assets/shareBnb.PNG';
function Projects() {
    return (
        <section id={styles["projects"]}>
            <h1>My projects</h1>
            <div class={styles["tiles"]}>
                <ProjectTile image={image} title={'shareBnb'}/>
                
            </div>
        
  
</section>
    )
}

export default Projects
