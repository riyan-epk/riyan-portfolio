import me from '../assets/me.jpg'

export default function Intro() {
  return (
    <header className="cv-header">
      <div className="intro-left">
        <img src={me} alt="Profile" className="profile-pic" />
        <div>
          <h1>Riyan Mursaleen</h1>
          <h3>Web Designer, Director</h3>
        </div>
      </div>

      <div className="intro-right">
        <a href="#" className="download-pdf">
          Download PDF
        </a>
        <p>(313) - 867-5309</p>
      </div>
    </header>
  )
}
