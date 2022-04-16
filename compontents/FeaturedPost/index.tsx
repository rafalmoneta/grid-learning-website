import styled from "styled-components";
import GridRow from "../../elements/GridRow";
import Image from "next/image";

const FeaturedPostStyles = styled(GridRow)``;

const Post = styled.div`
  grid-column: col-2-start / col-8-end;
  background-color: red;
  display: flex;
  flex-direction: column;

  @media (min-width: 819px) {
    grid-column: col-2-start / col-12-end;
    flex-direction: row;
  }

  @media (min-width: 1220px) {
    grid-column: col-2-start / col-13-end;
  }
`;

const PostImage = styled.div`
  position: relative;
  background-color: yellow;
  flex: 1.5;
`;

const PostContent = styled.div`
  background-color: white;
  flex: 1;
  color: black;
  padding: 2rem 1rem;
  @media (min-width: 819px) {
    padding: 4rem 2rem;
  }
`;

const PostTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const PostDescription = styled.p``;

const PostReadMoreLink = styled.a`
  text-decoration: none;
`;

export default function FeaturedPost() {
  return (
    <FeaturedPostStyles>
      <Post>
        <PostImage>
          <Image
            src="/post.jpg"
            layout="fill"
            objectFit="cover"
            alt="post image"
          />
        </PostImage>
        <PostContent>
          <PostTitle>
            How I created my site with Next.js - Stack Overview
          </PostTitle>
          <PostDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            mi consectetur, fringilla risus placerat, convallis eros. Vestibulum
            tincidunt finibus est a volutpat.
          </PostDescription>
          <PostReadMoreLink>{"Read more ->"}</PostReadMoreLink>
        </PostContent>
      </Post>
    </FeaturedPostStyles>
  );
}
