export function VideoDemo() {
  return (
    <section className="video-demo">
      <div className="container">
        <h2 className="section-title">See FundFlow in Action</h2>
        <p className="section-subtitle">Watch a complete walkthrough of FundFlow&apos;s key features</p>
        
        <div className="video-container">
          <iframe 
            style={{border:0}} 
            width="800" 
            height="450" 
            src="https://www.tella.tv/video/cmdnqbskc001z0bjm0ip1enxw/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0" 
            allowFullScreen 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  )
}