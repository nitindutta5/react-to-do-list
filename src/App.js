import './App.css';
import { useState } from 'react';
import { Input, Button, Container, Row, Col } from 'reactstrap';

function App() {
  const [myList, updateMyList] = useState([]);
  const [input, updateInput] = useState("");
  const [detail, insertDetail] = useState("");
  const [detailList, updateDetailList] = useState([]);
  const [edit, setEdit] = useState(false);
  const updateArray = () => {
    if (input != "")
      updateMyList([...myList,
      {
        "title": input,
        "details": []
      }]);
    updateInput("");
  }

  const deleteItem = (index) => {
    const newList = [...myList];
    newList.splice(index, 1);
    updateMyList(newList);
  }

  const handleDetails = (title) => {
    if (detail != "") {
      for (let item of myList) {
        if (item.title === title) {
          updateDetailList([
            ...detailList,
            item.details.push(detail)
          ]);
        }
      }
      insertDetail("");
    }


  }

  return (
    <div className="App">
      <Container className="p-2">
        <h1>React To Do List</h1>
        <Row>
          <Col md="6" className="mx-auto">
            <Input type="text" placeholder="Enter List Items" value={input} onChange={e => updateInput(e.target.value)} />
            <Button className="btn-primary  mt-2" onClick={updateArray}>Add Tasks</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          {
            myList.map((i, index) =>
              <Col md="6" key={index}>
                <Col md="12" className="ListBox">
                  <h4 className="text-left">{i.title}</h4>
                  <span className="delete"
                    onClick={() => deleteItem(index)}>X</span>
                  <Row>
                    {
                      i.details.map((detail, key) =>
                        <Col md="12" key={key} className="d-flex justify-content-center mb-2"  >
                          <Input type="text" value={detail} readOnly={edit ? false : true}></Input>
                          <Button className="btn-sm" onClick={e => (setEdit(!edit))} >Edit</Button>
                        </Col>)
                    }
                    <Col md="12"
                      className="d-flex justify-content-center">
                      <Input type="text"
                        placeholder="Enter details"
                        value={detail}
                        onChange={e => insertDetail(e.target.value)} />
                      <Button className="btn-sm" onClick={e => (handleDetails(i.title))} >Add</Button></Col>
                  </Row>
                </Col>
              </Col>
            )
          }
        </Row>
      </Container>
    </div >
  );
}

export default App;
