import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import GnomeCard from "./gnomeCard/gnomeCard";
import { container } from "./list.module.scss";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./pagination.css";

const GnomsList = ({gnomes}) => {
  const [postsPerPage] = useState(12);
  const [loading, setLoading] = useState(false)
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    gnomes !== undefined && setLoading(!loading)
    getAllPopulation();
  }, [offset, gnomes, loading]);


  const getPostData = (data) => {
    return data.map((gnome) => (
      <Col
        key={gnome.id}
        style={{
          display: "flex",
          jusifyContent: "center",
          alignItems: "center",
        }}
        md={4}
        sm={12}
        xs={12}
      >
        <div>
          <GnomeCard gnome={gnome} />
        </div>
      </Col>
    ));
  };

  const getAllPopulation = () => {
    const slice = gnomes && gnomes.slice(offset - 1, offset - 1 + postsPerPage);
    const postData = slice && getPostData(slice);
    setAllPosts(postData);
    setPageCount(Math.ceil(gnomes && gnomes.length / postsPerPage));
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div className={container}>
      <span>Brastlewark</span>
      <h2>Gnome population</h2>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"-"}
        breakClassName={"break-me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      <Grid>
        <Row>{posts}</Row>
      </Grid>
    </div>
  );
};

export default GnomsList;
