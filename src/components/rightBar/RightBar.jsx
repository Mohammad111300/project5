import './rightBar.scss';
import profile from "../../assets/images/profile.jpg";

function RightBar() {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You!</span>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <span>Mammad</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <span>Mammad</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <p>
                <span>Mammad</span> Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <p>
                <span>Mammad</span> Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <p>
                <span>Mammad</span> Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <p>
                <span>Mammad</span> Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <div className='online'/>
              <span>Mammad</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <div className='online'/>
              <span>Mammad</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <div className='online'/>
              <span>Mammad</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={profile} alt="profile" />
              <div className='online'/>
              <span>Mammad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
