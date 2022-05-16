import "./App.css";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import Contents from "./component/Contents";
import Content from "./component/Content";

function App() {
  const [contents, setContent] = useState({});
  const [titles, setTitles] = useState();
  useEffect(() => {
    fetch("data/data.json")
      .then((data) => {
        let a = data.json();
        // debugger;
        return a;
      })
      .then((res) => {
        // debugger;
        setContent(res);
      });
  }, []);
  useEffect(() => {
    setTitles(Object.keys(contents));
  }, [contents]);
  return (
    <div className="App">
      <Header data={contents} />
      <main>
        <Routes className="d-flex">
          {titles &&
            titles.map((title, i) => {
              return (
                <Route
                  key={i}
                  path={`${title}`}
                  element={
                    <Contents data={Object.keys(contents[`${title}`])} />
                  }
                  className="left-side"
                >
                  {Object.keys(contents[`${title}`]).map((innerTitle, i) => {
                    return (
                      <Route
                        key={i}
                        path={`${innerTitle}`}
                        element={
                          <Content
                            data={contents[`${title}`][`${innerTitle}`]}
                            title={contents[`${title}`]}
                          />
                        }
                      />
                    );
                  })}
                </Route>
              );
            })}
          {/* <Route path="/" element={<Main data={contents} />}></Route> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
