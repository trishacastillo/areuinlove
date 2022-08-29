import { Link } from "react-router-dom";
const Home = () => {
    return (  
        <div>
            <h2>Confused, If you are in love?</h2>
            <p>“You know you’re in love when you don’t want to fall asleep because reality is finally better than your dreams.” 
                <b>- Dr. Suess</b>
            </p>
            <div className="article-content">
                <p>You might not understand how it feels if you've never been in love. Even if you've been in love before, you might be perplexed. Feelings are fluid and elusive, and not an exact science, so they can be difficult to pin down. They call it "falling," 
                but it doesn't have to hurt. It can be, but it can also be extraordinary and all-encompassing. Terrifying? Yes. Amazing? Yes, as well. If you're still not convinced, here are 25 sure signs you're falling for him.</p>
            
                <p>1. Everything is so easy</p>
                <p>2. You miss him/her at the smallest absence</p>
                <p>3. You want to do things for him/her</p>
                <p>4. You want to experience things again – with him</p>
                <p>5. You’re comfortable being weird around him</p>
                <p>6. You’re sure he won’t hurt you</p>
                <p>7. His lack of texting doesn’t make you feel insecure</p>
                <p>8. He’s your go-to guy</p>
                <p>9. You don’t need to make an effort</p>
                <p>10. He makes you feel safe</p>
                <p>11. You associate everything with him</p>
                <p>12. You stopped missing your ex</p>
                <p>13. You don’t hate things you used to anymore</p>
                <p>14. You can’t get enough of his silly stories</p>
                <p>15. You share his emotions</p>
                <p>16. You talk about him way too much</p>
                <p>17. You make plans for the future</p>
                <p>18. Even if everything else sucks, you have him and it’s enough</p>
                <p>19. You took him home to mom and dad</p>
                <p>20. Every mundane task and errand is suddenly romantic</p>
                <p>21. You go all the way back in his social media</p>
                <p>22. You want to share everything you like with him</p>
                <p>23. You let your guard down around him</p>
                <p>24. It’s ok if you temporarily dislike him – you still love him</p>
                <p>25. You don’t need to go out, if you can stay in with him</p>        
        
            </div>
            <h2>No idea? Take a test
                <Link to="/take-a-test"><button className="btn-TakeATest">Love Test</button></Link> 
            </h2>
        </div>
    );
}
 
export default Home;