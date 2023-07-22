import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api"
import { saveLink } from "../../services/storeLinks"

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", { long_url: link })
      setData(response.data);
      setShowModal(true);
      saveLink("@shortLink", response.data);
      setLink("");

    } catch {
      alert("Oops... Something went wrong!");
      setLink("");
    }
  }

  return (
    <div className="container-home">

      <div className="logo">
        <h1>Link Shortner</h1>
        <span>Paste the URL to be shortended</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="http://www/youtube.com"
            value={link}
            onChange={(e) => {
              setLink(e.target.value)
            }}
          />
        </div>

        <button onClick={handleShortLink}>Generate Link</button>
      </div>

      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}

    </div>
  )
}
