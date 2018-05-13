import React, { Fragment } from 'react';
import styled from 'styled-components';
import ImageContainer from 'src/components/commons/imageContainer';
import PostgreSQLImg from 'src/images/postgresql.png';
import MySQLImg from 'src/images/mysql.png';
import MongoDBImg from 'src/images/mongodb.png';

const CenterH1 = styled.h1`
    text-align: center;
`;
const ImageContainerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const frontend = () => (
    <Fragment>
        <CenterH1>Databases</CenterH1>
        <ImageContainerWrapper>
            <ImageContainer src={PostgreSQLImg} text="PostgreSQL" />
            <ImageContainer src={MySQLImg} text="MySQL" />
            <ImageContainer src={MongoDBImg} text="MongoDB" />
        </ImageContainerWrapper>
    </Fragment>
);

export default frontend;
