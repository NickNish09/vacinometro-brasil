import { Layout } from "antd";

const { Footer } = Layout;

const HomeFooter = () => (
  <Footer className="footer">
    <p className="text-reference">
      Fonte:{" "}
      <a href="https://covid19br.wcota.me/" target="_blank" rel="noreferrer">
        https://covid19br.wcota.me/
      </a>
    </p>
    <br />
    <p className="text-github">
      <a
        href="https://github.com/NickNish09/vacinometro-brasil"
        target="_blank"
        rel="noreferrer"
      >
        devnicknish © github
      </a>
    </p>
  </Footer>
);

export default HomeFooter;
