import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../utile/Helper";

const Error = styled.h1`
  ${media.desktop`color: #F00;`}
  ${media.tablet`color: #0F0;`}
  ${media.phone`color: #00F;`}
`;

export default function ErrorComponent() {
  return (
    <div>
      <Error>
エラーページです
      </Error>
      <Link to="/">
戻る
      </Link>
    </div>
  );
}
