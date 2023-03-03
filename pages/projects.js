import styles from "../styles/Projects.module.css"
import Image from "next/image"

export default function Projects() {
    return (
        <div>
            <h1>My Projects</h1>

            <div>
            <h2>Language Quiz</h2>
            <a href="https://github.com/emilyjryan/project-one-language-quiz">Github Repo</a>
            <br/>
            <a href="https://emilyjryan.github.io/project-one-language-quiz/">Live Deployment</a>
            <br/>
            <Image src={"/pics/language-game/welcome.png"} alt="welcome" width={400} height={300}/>
           
            <Image src={"/pics/language-game/instructions.png"} alt="instructions" width={400} height={300}/>
           
            <Image src={"/pics/language-game/example-phrase.png"} alt="example phrase" width={400} height={300}/>
           
            </div>
            <div>

            <h2>DiscoverDrug</h2>
            <a href="https://github.com/emilyjryan/project-two">Github Repo</a>
            <br/>
            <a href="https://discover-drug-app-deploy.herokuapp.com/">Live Deployment</a>
            <br/>
            <Image src={"/pics/discover-drug/welcome.png"} alt="welcome" width={400} height={200}/>
          
            <Image src={"/pics/discover-drug/results.png"} alt="search results" width={400} height={220}/>
          
            <Image src={"/pics/discover-drug/details.png"} alt="details" width={400} height={300}/>
          
            <Image src={"/pics/discover-drug/favorites.png"} alt="favorites" width={400} height={250}/>
          
            </div>
            <div>

            <h2>Sustain-ABLE</h2>
            <a href="https://github.com/emilyjryan/sustainABLE-client">Github Repo</a>
            <br/>
            <a href="https://main--vermillion-melba-389997.netlify.app/">Live Deployment</a>
            <br/>
            <Image src={"/pics/sustain-able/welcome.png"} alt="welcome" width={400} height={300}/>
      
            <Image src={"/pics/sustain-able/login.png"} alt="login" width={400} height={300}/>
      
            <Image src={"/pics/sustain-able/profile-and-favs.png"} alt="profile and favorites" width={400} height={380}/>
      
            <Image src={"/pics/sustain-able/create-new.png"} alt="create new habit" width={400} height={380}/>
      
            </div>
            <div>

            <h2>Regulate</h2>
            <a href="https://github.com/emilyjryan/regulate-app">Github Repo</a>
            <br/>
            <a href="https://unique-lollipop-eb6497.netlify.app/">Live Deployment</a>
            <br/>
            <Image src={"/pics/regulate/homepage.png"} alt="homepage" width={400} height={350}/>
       
            <Image src={"/pics/regulate/schedule.png"} alt="schedule" width={400} height={320}/>
       
            <Image src={"/pics/regulate/create-task.png"} alt="create task" width={400} height={320}/>
       
            <Image src={"/pics/regulate/emotions.png"} alt="emotion finder" width={400} height={300}/>
       
            </div>
        


        </div>
    )
}