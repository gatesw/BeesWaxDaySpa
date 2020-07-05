import React from 'react';
import waxing1 from '../../assets/img/waxing1.jpg';

function AboutWaxing() {
    return (
        <section id="massage-intro">
            <div className="container section-padding">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                <h2>Waxing</h2>
                <div className="row">
                <div className="col-md-8 col-sm-12">
                <h2 className="lead" style={{color: '#b57007'}}>Prepare for your waxing experience</h2>
                <p>
                    <b>1. Hair growth</b> <br/>
                    
                    let your hair grow out a little Make sure your hair is at least a quarter of an inch long before you go to your waxing appointment. If the wax can't grab onto the hairs, it won't work.
                </p>
                <p>
                    <b>2. Clothing choice</b> <br/>
                    
                    Wear loose fitting clothing to your appointment. You might feel tender after your waxing and tight fitting clothing will on add   discomfort. 
                </p>
                <p>
                    <b>3. Shower</b> <br/>
                    
                    If you feel self-conscious about that, then simply shower before you go. Not only does this help keep you fresh and smelling nice, but the warm water will make it easier for hairs to come out, making the experience less painful.
                </p>
                <p>
                    <b>4. Exfoliate</b> <br/>
                    
                    Gently exfoliate your skin a day or two before waxing, but skip harsh scrubs the day of your waxing appointment. Exfoliation helps wax grab hair and not skin, but it can also leave skin more sensitive to pain, so lighter is better. A rough washcloth is perfect for gentle exfoliation, but don't scrub too hard.
                </p>
                <p>
                    <b>5. Take an over the counter pain reliever</b> <br/>
                    
                    If you're stressed about the pain, take something like Tylenol or Advil a half hour before your appointment. It really makes a difference. 
                </p>
                <p>
                    <b>6. Avoid Moisturizer</b> <br/>
                    
                    Do not  moisturize  too soon before an appointment. Putting lotion or anything similar in that area can create a barrier for their wax, making it harder for it to grab onto the hairs. The waxing process won't go as smoothly. Moisturize the night before, but not the day of. 
                </p>
                <p>
                    <b>7. Trim If You Really Want</b> <br/>
                    If you've gone a few weeks without a wax, you might feel self-conscious about the amount of hair. You shouldn't, because waxers are used to it, but you might want to trim up a bit. This will make the waxing easier and faster. Don't shave - that could mess up the whole appointment - but if the hairs are very long, grab some small scissors and trim them a bit. Just please be careful.
                </p>
                <p>
                    <b>8. Exercise</b> <br/>
                    Take a break from exercise for 24 hours after waxing. Just waxed skin is sensitive and more open to infection from outside sources such as sweat. Exercise may also cause chafing to tender skin area. 
                </p>
                </div>
                <div className="col-md-4 col-sm-12">
                <img className="img-fluid img-thumbnail" src={waxing1} alt="Beeswax Spa - Massages"/>
                    </div>
                </div>
                <hr/>
                </div>
            </div>
            </div>
        </section>
    ); 
  }
  
  export default AboutWaxing;