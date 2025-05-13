export default function UserNotLoggedInDash(){
    return( 
        <div className="user-not-logged-in-dash">
            <div style={{ width:'65%', height:'auto%' ,display:"flex", flexDirection: "column" }}>
                <div style={{ width:'100%', height:'auto', borderWidth: '0 5px 0 0', borderStyle: 'solid', margin:"0", padding: '0', 
                    borderImage: 'linear-gradient(to bottom, transparent 5%, #b22222 50%, transparent 95%) 1' }}>
                    <p style={{ width:"100%", height:"auto" , fontWeight:'bold', fontSize: '28px' , boxSizing: "border-box" , padding: '15px' }}>
                        Welcome to your personal user board. Here you can see your stats and keep track of your achievements.
                        The problems you conquer and the courses you nail as you go through a fascinating journey around the universe itself.
                    </p>
                </div>
                <div style={{ width:'100%', height:'auto', borderWidth: '0 5px 0 0', borderStyle: 'solid', margin:"0", padding: '0', 
                    borderImage: 'linear-gradient(to bottom, transparent 5%, #b22222 50%, transparent 95%) 1' }}>
                    <p style={{ fontWeight: "bold", fontSize: '40px', boxSizing: 'box-sizing', padding:'15px', height: 'auto', width: '100%' }}>
                        You're currently not logged in,<br/>consider to do so in order to access your performance tracker!
                    </p>
                </div>
            </div>
            <ul style={{ listStyleType:"disc", fontSize:'28px', display: "flex", width:'35%',
                height:'100%', flexDirection: "column" , justifyContent:"flex-start", boxSizing:"border-box" , padding:'15px', gap:'20px'}}>
                    <li>Track your performance on problems</li>
                    <li>See your progress through courses</li>
                    <li>Get your stats in problems, based on difficulty level</li>
                    <li>Hit new milestones everyday</li>
                    <li>Come back everyday to get your login strike</li>
                    <li>Have all your profile statistics available anytime</li>
            </ul>
        </div>
    );

}