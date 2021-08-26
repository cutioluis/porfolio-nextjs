import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import BlogSearch from "../components/Blog/BlogSearch/BlogSearch";
import BlogList from "../components/Blog/BlogList/BlogList";
import BlogItem from "../components/Blog/BlogList/BlogItem/BlogItem";

const blog = () => {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://dev.to/api/articles?username=cutioluis"
    );
    setArticles(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Layout>
        <BlogSearch/>
        <BlogList>
          <BlogItem articles={articles} />
        </BlogList>
      </Layout>
    </div>
  );
};

export default blog;
