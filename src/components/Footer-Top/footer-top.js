import './footer-top.css';

const FooterTop = () =>{
    return(
        <section className='footer'>
            <div className='footer_desc'>
                <ul className='footer-ul'>
                    <li className='footer_li'>Coffee house</li>
                    <li className='footer_li'>Our coffee</li>
                    <li className='footer_li'>For your pleasure</li>
                </ul>
            </div>
            <section className='beans_triple'>
                <span className='beans_triple_span'></span>
                <img src={require("../About-Our/about_vector.png")} alt="about_vector.png"/>
                <span className='beans_triple_span'></span>
            </section>
        </section>
    )
}

export default FooterTop;