function HomePage() {
  return (
    <div className="row">
      <h1 className="mb-3">Welcome</h1>
      <h2 className="mb-3">This is Reactive Robots app</h2>
      <h3 className="mb-3">created for React Assignment</h3>
      <h3>
        Creators:
        <a
          href="https://www.linkedin.com/in/mariam-tsotsolashvili-09b5221a0/"
          className="mx-3 text-decoration-none text-info"
          target="_blank"
          rel="noreferrer">
          Mariam Tsotsolashvili
        </a>
        and&nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/mushni-chankseliani-031820192/"
          className="text-decoration-none text-info"
          target="_blank"
          rel="noreferrer">
          Mushni Chankseliani
        </a>
      </h3>
    </div>
  );
}

export default HomePage;
