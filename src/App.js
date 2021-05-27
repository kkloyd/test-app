import { Alert, Space, Table, Modal } from "antd";
import { useState } from "react";
import { useQuery } from "react-query";
import { GET } from "./api";
import "./App.css";
import SearchInput from "./components/SearchInput";
const { Column } = Table;

const initialInfoModal = {
  visible: false,
  record: {
    assignedExtensions: [],
    cover: "",
    createdDate: "",
    id: null,
    keywords: [],
    name: "",
    pack: {},
  },
};

function App() {
  const [tableData, setTableData] = useState(null);
  const [infoModal, setInfoModal] = useState(initialInfoModal);

  const { isLoading, error, data } = useQuery("responseData", () =>
    GET(`/illustration?count=100&page=1`).then((res) => {
      if (res.status === 200) {
        setTableData(res.data.result.illustrationData);
      }
    })
  );

  if (error) return <Alert message="Request Error" type="error" />;

  const handleModalClose = () => {
    setInfoModal(initialInfoModal);
  };

  return (
    <Space direction="vertical" className="App">
      <SearchInput className="mb-10" />
      <Table
        loading={isLoading}
        dataSource={tableData}
        rowKey="id"
        onRow={(record, index) => {
          return {
            onClick: (e) => {
              setInfoModal({ visible: true, record });
            },
          };
        }}
      >
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Keywords" dataIndex="keywords" key="keywords" 
          render={keywords => <span>{keywords.join(", ")}</span>}
        />
        <Column title="Created Date" dataIndex="createdDate" key="createdDate" />
      </Table>

      {<Modal
        title="Information"
        destroyOnClose={true}
        visible={infoModal.visible}
        footer={null}
        onCancel={handleModalClose}
      >
        <p>Name: {infoModal.record.name}</p>
        <p>Keywords: {infoModal.record.keywords.join(", ")}</p>
        <p>Created Date: {infoModal.record.createdDate}</p>
        <p>Pack: {infoModal.record.pack.name}</p>
        <img src={infoModal.record.cover} alt="" loading="lazy" width="100%"/>
      </Modal>}
    </Space>
  );
}

/*
assignedExtensions: ["png"]
cover: "https://storytale-public.b-cdn.net/2021_04/1619677976-cover_hero-02.png"
createdDate: "2021-04-29 09:32:57"
id: 595
keywords: ["123"]
name: "hero-02"
pack: {id: 70, name: "New New"}
*/

export default App;
