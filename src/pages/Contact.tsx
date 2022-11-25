import NavLinks from "./NavLinks";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <div id="container">
        <p className="email">
          Email:{" "}
          <a href="mailto:chunzhi23@dimigo.hs.kr">chunzhi23@dimigo.hs.kr</a>
        </p>
        <p className="website">
          Website:{" "}
          <a href="https://wenna.tistory.com">https://wenna.tistory.com</a>
        </p>
      </div>
      <NavLinks />
    </>
  );
}
