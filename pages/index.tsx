import { useState } from "react";
import { SVGMap } from "react-svg-map";
import { Row, Col, Typography, Layout } from "antd";
import { GetStaticProps } from "next";
import Brazil from "../lib/custom-brazil.regions";
import { DEFAULT_REVALIDATE_TIME } from "../utils/constants";
import { District } from "../interfaces";
import findDistrictById from "../utils/findDistrictById";
import { getCases } from "../services/api/cases";

const { Footer, Content } = Layout;
const { Title } = Typography;

export type Props = {
  data: District[];
  updatedAt: string;
};

const HomePage = ({ data, updatedAt }: Props) => {
  const [districtName, setDistrictName] = useState<string | null>("Brasil");
  const [districtId, setDistrictId] = useState<string>("total");

  const getEventAttribute = (event: Event, attribute: string) =>
    (event.target as HTMLElement).getAttribute(attribute);

  const setDistrict = (name: string, id: string) => {
    setDistrictName(name);
    setDistrictId(id);
  };

  const setDistrictByEvent = (e: Event) => {
    setDistrict(
      getEventAttribute(e, "name") || "Brasil",
      getEventAttribute(e, "id") || "total",
    );
  };

  const districtData = findDistrictById(data, districtId);

  function formatedNumber(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  if (districtData)
    return (
      <Layout className="layout-container">
        <Content className="container">
          <Row>
            <Col sm={24} md={12} xs={24}>
              <div className="map-container">
                <SVGMap map={Brazil} onLocationClick={setDistrictByEvent} />
              </div>
            </Col>
            <Col sm={24} md={12} xs={24}>
              <div className="data-container">
                <Title>{districtName}</Title>
                <Title level={3}>
                  Vacinados: {formatedNumber(districtData.vaccinated)}
                </Title>
                <p>Última atualização: {updatedAt}</p>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer>
          Fonte:{" "}
          <a
            href="https://covid19br.wcota.me/"
            target="_blank"
            rel="noreferrer"
          >
            https://covid19br.wcota.me/
          </a>{" "}
        </Footer>
      </Layout>
    );

  return (
    <Layout>
      <Content className="container">Sem informações</Content>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getCases();

  return {
    props: {
      data,
      updatedAt: new Date().toString(),
    },
    revalidate: DEFAULT_REVALIDATE_TIME,
  };
};

export default HomePage;
