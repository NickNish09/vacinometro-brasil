import { useState } from "react";
import { SVGMap } from "react-svg-map";
import { Row, Col, Typography, Layout } from "antd";
import { GetStaticProps } from "next";
import { MedicineBoxOutlined } from "@ant-design/icons";
import Brazil from "../lib/custom-brazil.regions";
import { DEFAULT_REVALIDATE_TIME } from "../utils/constants";
import { District } from "../interfaces";
import findDistrictById from "../utils/findDistrictById";
import { getCases } from "../services/api/cases";
import {
  formatedDate,
  formatedNumber,
  getPercentageBy100k,
} from "../utils/formaters";
import TitleSelect from "../components/TitleSelect";
import HomeFooter from "../components/HomeFooter";

const { Content } = Layout;
const { Title } = Typography;

export type Props = {
  data: District[];
  updatedAt: string;
};

const HomePage = ({ data, updatedAt }: Props) => {
  const [districtName, setDistrictName] = useState<string>("Brasil");
  const [districtId, setDistrictId] = useState<string>("total");

  const getEventAttribute = (event: Event, attribute: string) =>
    (event.target as HTMLElement).getAttribute(attribute);

  const setDistrict = (name: string, id: string) => {
    setDistrictName(name);
    setDistrictId(id);
  };

  const setDistrictByEvent = (e: Event) => {
    const name = getEventAttribute(e, "name") || "Brasil";
    const id = getEventAttribute(e, "id") || "total";
    setDistrict(`${name} (${id.toUpperCase()})`, id);
  };

  const districtData = findDistrictById(data, districtId);

  if (districtData)
    return (
      <Layout className="layout-container">
        <Content className="container">
          <Row>
            <Col sm={24} md={12} xs={24}>
              <div className="map-container">
                <SVGMap
                  map={Brazil}
                  onLocationFocus={setDistrictByEvent}
                  // onLocationBlur={() => setDistrict("Brasil", "total")}
                  isLocationSelected={(location) =>
                    districtId === location.id.toUpperCase()
                  }
                />
              </div>
            </Col>
            <Col sm={24} md={12} xs={24}>
              <div className="data-container">
                <TitleSelect
                  setDistrict={setDistrict}
                  districtId={districtId}
                  districtName={districtName}
                />
                <Title level={3} className="vaccinated-text">
                  <MedicineBoxOutlined /> Vacinados:{" "}
                  {formatedNumber(districtData.vaccinated)}
                </Title>
                <p className="text-white">
                  {getPercentageBy100k(
                    districtData.vaccinated_per_100k_inhabitants,
                  )}
                  % da população
                </p>
                <p className="text-white text-last-updated">
                  Última atualização: {formatedDate(updatedAt)}
                </p>
              </div>
            </Col>
          </Row>
        </Content>
        <HomeFooter />
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
