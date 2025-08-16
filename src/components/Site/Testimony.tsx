function Testimony() {
  return (
    <>
      <div className="section-title">
        <div className="eclipse"></div>Testimony?
      </div>

      <div className="pry-card" style={{ marginBottom: "20px" }}>
        <p style={{ marginBottom: "25px", fontSize: "15px" }}>
          You Have a Testimony to share or want to read what others are saving
          about me?
        </p>
        <a href="/v1/#guestbook" style={{ color: "white" }}>
          <button style={{ width: "100%" }}>Use Guestbook</button>
        </a>
      </div>
    </>
  );
}

export default Testimony;
