import { useState } from "react";
import { SVGMap } from "react-svg-map";
import { Row, Col, Typography, Layout } from "antd";
import Brazil from "../lib/custom-brazil.regions";

const { Footer, Content } = Layout;
const { Title } = Typography;

const HomePage = () => {
  const [district, setDistrict] = useState<string | null>("Brasil");
  const districtName = (e: Event) =>
    (e.target as HTMLElement).getAttribute("name");

  return (
    <Layout>
      <Content className="container">
        <Row>
          <Col sm={24} md={12}>
            <div className="map-container">
              <SVGMap
                map={Brazil}
                onLocationClick={(e) => setDistrict(districtName(e))}
              />
            </div>
          </Col>
          <Col sm={24} md={12}>
            <Title>Vacinômetro - {district}</Title>
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default HomePage;
