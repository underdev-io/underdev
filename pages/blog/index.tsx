import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { Header } from "../../components/Header";
import ReactPaginate from "react-paginate";
import { getSortedPostsData } from "../../lib/posts";

const Content = styled.main`
  padding: 15px;
`;

const FeaturedTitle = styled.h2`
  padding: 15px;
  padding-bottom: 10px;
  background: #00e9c5;
  display: inline-block;
  text-transform: uppercase;
  font-family: "Gordita Bold";
  color: #222;
  margin: 0;
  line-height: 1;
`;

const PostList = styled.ul`
  list-style-type: none;
`;

const PostListItem = styled.li`
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    display: block;
    transition: all 0.15s;

    &:hover {
      opacity: 0.5;
    }
  }

  h2 {
    font-family: "Gordita Bold";
    text-decoration: none;
    font-size: 22px;
    color: #222;
  }

  small {
    display: block;
    font-family: "Gordita Regular";
    text-transform: uppercase;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0.5px;
    margin-top: 5px;
  }

  p {
    margin-top: 5px;
    font-family: "Gordita Regular";
    color: #222;
    font-size: 16px;
    letter-spacing: 0.25px;
  }
`;

const Pagination = styled.div`
  margin-top: 20px;

  ul {
    list-style-type: none;
    display: flex;
    column-gap: 15px;
  }

  li {
    font-family: "Gordita Regular";
    font-size: 16px;
    &.disabled a {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &.active a {
      font-weight: bold;
    }
    a {
      cursor: pointer;
    }
  }
`;

const Blog: NextPage = (props: any) => {
  const posts = [
    {
      url: "/",
      title: "Hello world!",
      date: "2021-10-13",
      author: "Luiz Almeida",
      excerpt: "Lorem ipsum dolor sit amet.",
    },
  ];

  const getDate = (value: string) => "13 de outubro";

  const handlePageChange = () => {};

  return (
    <>
      <Head>
        <title>Underdev</title>
        <meta name="description" content="Underdev." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#222222" />
      </Head>
      <Header />
      <Content>
        <FeaturedTitle>Últimos Posts</FeaturedTitle>
        <PostList>
          {props.posts.map(
            ({ id, date, author, excerpt, title }: any, index: number) => (
              <PostListItem key={index}>
                <Link href={`/blog/${id}`}>
                  <a>
                    <h2>{title}</h2>
                    <small>
                      {getDate(date)} / Escrito por {author}
                    </small>
                    <p>{excerpt}</p>
                  </a>
                </Link>
              </PostListItem>
            )
          )}
        </PostList>
        <Pagination>
          <ReactPaginate
            previousLabel={"< anterior"}
            nextLabel={"próximo >"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={10}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </Pagination>
      </Content>
    </>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      posts: allPostsData,
    },
  };
}

export default Blog;
