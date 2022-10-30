const Header = () => {
  return (
    <header className="container">
      <div className="header-container">
        {/* header links */}
        <h1>Chris Emeka</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
          <a href="#books">Books</a>
        </div>
      </div>
      {/* profile image and social links */}
      <div className="profile">
        <img src="" id="profile_img" alt="" />
        <div className="profile-links">
          <a target="_blank" href={"https://twitter.com/ChrisPurposec60"}>
            <i className="fab fa-twitter" id="twitter">
              Twitter link
            </i>
          </a>
          <a
            target="_blank"
            href={
              "https://app.slack.com/client/T042F7V19Q8/browse-people/rimeto_profile/U048HMMF5GU"
            }
          >
            <i className="fab fa-slack" id="slack">
              Slack Profile
            </i>
          </a>
        </div>
      </div>
      {/* project links */}
      <div className="links">
        <a href="https://training.zuri.team/" id="btn_zuri">
          Zuri Team
        </a>
        <a href="http://books.zuri.team" id="books" title="Books">
          Zuri Books
          <p>Get the right knowledge for Design and Coding</p>
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<kris-Emmy>"
          id="book_python"
        >
          Python Books
          <p>
            Get the best resources in python language in this books. It contains
            all you need to know and more. Happy purchase!
          </p>
        </a>
        <a href="https://background.zuri.team" id="pitch">
          Background Check
          <p>
            We offer quality background checks on coders, assertain their status
            and help in individual development
          </p>
        </a>
        <a href="https://books.zuri.team/design-rules" id="book_design">
          Book Design
          <p>Get one book design free from our Zuri team</p>
        </a>
      </div>
    </header>
    
  );
};

export default Header;
