import { Avatar } from "@mui/material"

function SideBar() {

  const recentSection= (topics)=>{
    return(
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p style={{display:"inline-block"}} className="">{topics}</p>
    </div>)
  }

  return (
      <div className="sidebar_container">
        <div  className="sidebar_top">
          <div className="sidebar_profile">
            <img className="sidebar_cover" src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png" alt=""/>
            <Avatar className="sidebar_avatar" src="https://media-exp1.licdn.com/dms/image/C5603AQHVDLfhEkC-_w/profile-displayphoto-shrink_100_100/0/1640449087702?e=1656547200&v=beta&t=gTon9Tt-pFLJZuvAtXrsJRb4VzErLA6Ve-mPhGyODwQ"/>
            <p>Abiral Lamsal</p>
            <p>abilamsal5@gmial.com</p>
          </div>
          <div className="sidebar_stats">
            <div className="sidebar_stat">
              <p>Who viewed you</p>
              <p className="sidebar_statNumber">1000</p>
            </div>
            <div className="sidebar_stat">
              <p>Views on post</p>
              <p className="sidebar_statNumber">1000</p>
            </div>
        </div>
        </div>

        <div className="sidebar_bottom">
          <p>Recent</p>
          {recentSection("reactJS")}
          {recentSection("Python")}
          {recentSection("SoftwareEngeneering")}
          {recentSection("JavaScript")}
        </div>
      </div>
  )
}

export default SideBar