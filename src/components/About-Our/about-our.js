import './about-our.css';

const AboutOur = () =>{
    return(
        <section className='section_2'>
            <div className='about-our'>
                <img src={require("./about.jpg")} alt="about1" className='about_img'/>
                <div className='beans'>
                    <h3>About our beans</h3>
                    <section className='beans_triple'>
                        <span className='beans_triple_span'></span>
                        <img src={require("./about_vector.png")} alt="about_vector.png"/>
                        <span className='beans_triple_span'></span>
                    </section>
                    <p className='beans_description'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/>
                        <br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                </div>
            </div>
            <div className='bottom_line'></div>
        </section>
    )
}

export default AboutOur;