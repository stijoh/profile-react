const Header = () => {
    return (
        <div className="box-header">
            <img
                src="profile-img.png"
                className="img-circle element-animation"
                alt="Stian's profile"
            />
            <h1>Stian Johansen</h1>
            <p>
                Hi, I'm 39, father of 2 and a fullstack developer. My passions
                are coding, 3d printing, food and Linux. Check out my GitHub,
                LinkedIn or some of my latest projects below.
                <br />
                <br />
            </p>
            <a className="btn" href="https://github.com/stijoh">
                Check out my github!
            </a>
        </div>
    );
};

export default Header;
