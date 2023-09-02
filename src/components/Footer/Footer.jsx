
const Footer = () => {
  return (
    <div>
        <div className="flex justify-around">
            <div className="grid grid-cols-4 -gap-5 sm:grid-cols-4 mt-10 sm:mt-10 mb-5">
                <div>Home</div>
                <div>About</div>
                <div>Blog Post</div>
                <div>Contact</div>
                </div>
        </div>
        <div className="social-icon">
            <div className="tweeter"></div>
            <div className="linkdin"></div>
            <div className="whatsapp"></div>
        </div>
    </div>
  )
}

export default Footer