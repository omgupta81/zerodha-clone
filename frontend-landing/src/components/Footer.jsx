export default function Footer() {
  return (
    <footer
      className="bg-light py-4 mt-auto border-top"
      style={{ borderColor: "#e0e0e0" }}
    >
      <div className="container text-center">
        <p className="mb-1 text-muted">
          © {new Date().getFullYear()} Zerodha Clone. All rights reserved.
        </p>
        <small className="text-muted d-block">
          Built for learning purposes only.
        </small>
      </div>
    </footer>
  );
}
